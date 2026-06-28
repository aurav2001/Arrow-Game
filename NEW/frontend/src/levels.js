// Levels configuration for Arrow Maze
// Grid values:
// type: 'path' or 'wall'
// arrow: 'up', 'down', 'left', 'right', or null
// start: { r, c }
// end: { r, c }

export const levels = [
  {
    id: 1,
    name: "Vector Basics",
    rows: 5,
    cols: 5,
    start: { r: 4, c: 0 },
    end: { r: 0, c: 4 },
    grid: [
      [
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null }
      ]
    ]
  },
  {
    id: 2,
    name: "Neon Loop",
    rows: 7,
    cols: 7,
    start: { r: 6, c: 0 },
    end: { r: 0, c: 6 },
    grid: [
      [
        { type: 'path', arrow: null },
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'left' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: null }
      ],
      [
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: 'down' },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'wall', arrow: null },
        { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null },
        { type: 'path', arrow: 'right' },
        { type: 'path', arrow: null },
        { type: 'path', arrow: null }
      ]
    ]
  },
  {
    id: 3,
    name: "Cyber Maze",
    rows: 9,
    cols: 9,
    start: { r: 8, c: 0 },
    end: { r: 0, c: 8 },
    grid: [
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }
      ],
      [
        { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }
      ]
    ]
  },
  {
    id: 4,
    name: "Vector Vortex",
    rows: 9,
    cols: 9,
    start: { r: 8, c: 4 },
    end: { r: 0, c: 4 },
    grid: [
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'wall', arrow: null }, { type: 'path', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }
      ],
      [
        { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }
      ],
      [
        { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: 'left' }
      ],
      [
        { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }
      ],
      [
        { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }
      ]
    ]
  },
  {
    id: 5,
    name: "The Impossible Reel",
    rows: 11,
    cols: 11,
    start: { r: 10, c: 0 },
    end: { r: 0, c: 10 },
    grid: [
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }
      ],
      [
        { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }
      ],
      [
        { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'down' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'left' }, { type: 'path', arrow: null }
      ],
      [
        { type: 'path', arrow: 'up' }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'wall', arrow: null }, { type: 'path', arrow: 'up' }
      ],
      [
        { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }, { type: 'path', arrow: 'right' }, { type: 'path', arrow: null }
      ]
    ]
  }
];
