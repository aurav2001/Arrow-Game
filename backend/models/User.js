const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  currentLevel: {
    type: Number,
    default: 1
  },
  completedLevels: [
    {
      levelId: {
        type: Number,
        required: true
      },
      timeSpent: {
        type: Number, // in seconds
        required: true
      },
      stars: {
        type: Number,
        default: 3
      },
      completedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const MongooseUser = mongoose.model('User', UserSchema);

// JSON DB Fallback implementation
const DB_FILE = path.join(__dirname, '..', 'db.json');

let memoryDB = { users: [] };
let isReadOnlyFS = false;

function readDB() {
  if (isReadOnlyFS) {
    return memoryDB;
  }
  if (!fs.existsSync(DB_FILE)) {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
    } catch (e) {
      isReadOnlyFS = true;
      return memoryDB;
    }
  }
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {
    isReadOnlyFS = true;
    return memoryDB;
  }
}

function writeDB(data) {
  if (isReadOnlyFS) {
    memoryDB = data;
    return;
  }
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
  } catch (e) {
    isReadOnlyFS = true;
    memoryDB = data;
  }
}

class LocalUser {
  constructor(data) {
    this._id = data._id || crypto.randomUUID();
    this.username = data.username;
    this.email = data.email || '';
    this.password = data.password;
    this.currentLevel = data.currentLevel || 1;
    this.completedLevels = data.completedLevels || [];
    this.createdAt = data.createdAt || new Date().toISOString();
  }

  get id() {
    return this._id;
  }

  async save() {
    const db = readDB();
    const index = db.users.findIndex(u => u._id === this._id);
    const serialized = {
      _id: this._id,
      username: this.username,
      email: this.email,
      password: this.password,
      currentLevel: this.currentLevel,
      completedLevels: this.completedLevels,
      createdAt: this.createdAt
    };
    if (index !== -1) {
      db.users[index] = serialized;
    } else {
      db.users.push(serialized);
    }
    writeDB(db);
    return this;
  }
}

const LocalUserModel = {
  findOne(queryObj) {
    const db = readDB();
    const username = queryObj.username;
    const email = queryObj.email;
    
    // Check if queryObj specifies username OR email OR $or query
    let searchVal = null;
    let isOrQuery = false;
    
    if (queryObj.$or) {
      isOrQuery = true;
    }

    const userObj = db.users.find(u => {
      if (isOrQuery) {
        return queryObj.$or.some(q => {
          if (q.username && u.username.toLowerCase() === q.username.toLowerCase()) return true;
          if (q.email && u.email && u.email.toLowerCase() === q.email.toLowerCase()) return true;
          return false;
        });
      }
      if (username && u.username.toLowerCase() === username.toLowerCase()) return true;
      if (email && u.email && u.email.toLowerCase() === email.toLowerCase()) return true;
      return false;
    });

    const result = userObj ? new LocalUser(userObj) : null;

    const query = {
      _result: result,
      select(fields) {
        return this;
      },
      then(resolve, reject) {
        resolve(this._result);
      }
    };
    return query;
  },

  findById(id) {
    const db = readDB();
    const userObj = db.users.find(u => u._id === id);
    const result = userObj ? new LocalUser(userObj) : null;

    const query = {
      _result: result,
      select(fields) {
        return this;
      },
      then(resolve, reject) {
        resolve(this._result);
      }
    };
    return query;
  },

  find() {
    const db = readDB();
    const users = db.users.map(u => new LocalUser(u));
    const query = {
      _users: users,
      select(fields) {
        return this;
      },
      limit(n) {
        this._users = this._users.slice(0, n);
        return this;
      },
      then(resolve, reject) {
        resolve(this._users);
      }
    };
    return query;
  }
};

class UserWrapper {
  constructor(data) {
    if (mongoose.connection.readyState === 1) {
      return new MongooseUser(data);
    } else {
      return new LocalUser(data);
    }
  }

  static findOne(query) {
    if (mongoose.connection.readyState === 1) {
      return MongooseUser.findOne(query);
    } else {
      return LocalUserModel.findOne(query);
    }
  }

  static findById(id) {
    if (mongoose.connection.readyState === 1) {
      return MongooseUser.findById(id);
    } else {
      return LocalUserModel.findById(id);
    }
  }

  static find(query) {
    if (mongoose.connection.readyState === 1) {
      return MongooseUser.find(query);
    } else {
      return LocalUserModel.find(query);
    }
  }
}

module.exports = UserWrapper;
