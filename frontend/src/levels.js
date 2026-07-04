// 20x20 Grid levels for the Tap Away dense maze clone.
// Each shape contains:
// - id: unique ID
// - cells: array of grid coordinates [{ x, y }] occupied by this shape (0-19 range)
// - exitDir: 'up' | 'down' | 'left' | 'right' (direction it slides out)

export const levels = [
  {
    id: 1,
    name: "Dense Maze (image_5)",
    gridSize: 20,
    shapes: [
      // --- Top Left Zone ---
      {
        id: "tl1",
        cells: [
          { x: 0, y: 4 }, { x: 0, y: 3 }, { x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 },
          { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 1 },
          { x: 2, y: 0 }
        ],
        exitDir: "up"
      },
      {
        id: "tl2",
        cells: [
          { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 0 },
          { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 5, y: 2 },
          { x: 5, y: 1 }, { x: 5, y: 0 }
        ],
        exitDir: "up"
      },
      {
        id: "tl3",
        cells: [
          { x: 2, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 4 }, { x: 2, y: 4 },
          { x: 2, y: 5 }, { x: 1, y: 5 }, { x: 1, y: 6 }, { x: 0, y: 6 }
        ],
        exitDir: "left"
      },
      {
        id: "tl4",
        cells: [
          { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 5, y: 2 },
          { x: 5, y: 3 }, { x: 6, y: 3 }
        ],
        exitDir: "right"
      },
      {
        id: "tl5",
        cells: [
          { x: 4, y: 4 }, { x: 4, y: 5 }, { x: 5, y: 5 }, { x: 5, y: 4 },
          { x: 6, y: 4 }
        ],
        exitDir: "right"
      },
      {
        id: "tl6",
        cells: [
          { x: 3, y: 5 }, { x: 3, y: 6 }, { x: 3, y: 7 }, { x: 2, y: 7 },
          { x: 2, y: 8 }, { x: 1, y: 8 }, { x: 1, y: 7 }, { x: 0, y: 7 }
        ],
        exitDir: "left"
      },
      {
        id: "tl7",
        cells: [
          { x: 4, y: 7 }, { x: 4, y: 8 }, { x: 3, y: 8 }, { x: 3, y: 9 },
          { x: 2, y: 9 }, { x: 1, y: 9 }, { x: 1, y: 10 }, { x: 0, y: 10 }
        ],
        exitDir: "left"
      },

      // --- Top Middle / Top Right Zone ---
      {
        id: "tm1",
        cells: [
          { x: 7, y: 3 }, { x: 7, y: 2 }, { x: 7, y: 1 }, { x: 7, y: 0 }
        ],
        exitDir: "up"
      },
      {
        id: "tm2",
        cells: [
          { x: 8, y: 2 }, { x: 8, y: 1 }, { x: 10, y: 1 }, { x: 10, y: 0 },
          { x: 11, y: 0 }
        ],
        exitDir: "right"
      },
      {
        id: "tm3",
        cells: [
          { x: 8, y: 3 }, { x: 9, y: 3 }, { x: 9, y: 2 }, { x: 10, y: 2 },
          { x: 11, y: 2 }, { x: 11, y: 1 }, { x: 12, y: 1 }, { x: 12, y: 0 }
        ],
        exitDir: "up"
      },
      {
        id: "tr1",
        cells: [
          { x: 13, y: 3 }, { x: 13, y: 2 }, { x: 13, y: 1 }, { x: 13, y: 0 }
        ],
        exitDir: "up"
      },
      {
        id: "tr2",
        cells: [
          { x: 14, y: 3 }, { x: 14, y: 2 }, { x: 14, y: 1 }, { x: 14, y: 0 },
          { x: 15, y: 0 }, { x: 15, y: 1 }, { x: 16, y: 1 }, { x: 16, y: 0 },
          { x: 17, y: 0 }
        ],
        exitDir: "right"
      },
      {
        id: "tr3",
        cells: [
          { x: 15, y: 3 }, { x: 15, y: 2 }, { x: 16, y: 2 }, { x: 17, y: 2 },
          { x: 17, y: 1 }, { x: 18, y: 1 }, { x: 18, y: 0 }, { x: 19, y: 0 }
        ],
        exitDir: "right"
      },
      {
        id: "tr4",
        cells: [
          { x: 18, y: 3 }, { x: 19, y: 3 }, { x: 19, y: 2 }, { x: 18, y: 2 },
          { x: 18, y: 1 }, { x: 19, y: 1 }
        ],
        exitDir: "right"
      },
      {
        id: "tr5",
        cells: [
          { x: 14, y: 4 }, { x: 15, y: 4 }, { x: 15, y: 5 }, { x: 14, y: 5 },
          { x: 14, y: 6 }
        ],
        exitDir: "left"
      },
      {
        id: "tr6",
        cells: [
          { x: 17, y: 4 }, { x: 18, y: 4 }, { x: 18, y: 5 }, { x: 17, y: 5 },
          { x: 17, y: 6 }, { x: 19, y: 6 }
        ],
        exitDir: "right"
      },

      // --- Middle Vertical Capsules ---
      {
        id: "c1",
        cells: [
          { x: 8, y: 4 }, { x: 8, y: 5 }, { x: 8, y: 6 }, { x: 8, y: 7 }, { x: 8, y: 8 },
          { x: 9, y: 8 }, { x: 9, y: 7 }, { x: 9, y: 6 }, { x: 9, y: 5 }, { x: 9, y: 4 }
        ],
        exitDir: "up"
      },
      {
        id: "c2",
        cells: [
          { x: 10, y: 4 }, { x: 10, y: 5 }, { x: 10, y: 6 }, { x: 10, y: 7 }, { x: 10, y: 8 },
          { x: 11, y: 8 }, { x: 11, y: 7 }, { x: 11, y: 6 }, { x: 11, y: 5 }, { x: 11, y: 4 }
        ],
        exitDir: "up"
      },

      // --- Middle Horizontal Long Lines ---
      {
        id: "mh1",
        cells: [
          { x: 19, y: 9 }, { x: 18, y: 9 }, { x: 17, y: 9 }, { x: 16, y: 9 }, { x: 15, y: 9 },
          { x: 14, y: 9 }, { x: 13, y: 9 }, { x: 12, y: 9 }, { x: 11, y: 9 }, { x: 10, y: 9 },
          { x: 9, y: 9 }, { x: 8, y: 9 }, { x: 7, y: 9 }, { x: 6, y: 9 }, { x: 5, y: 9 },
          { x: 4, y: 9 }, { x: 3, y: 9 }, { x: 2, y: 9 }, { x: 1, y: 9 }, { x: 0, y: 9 },
          { x: 0, y: 10 }, { x: 0, y: 11 }
        ],
        exitDir: "down"
      },
      {
        id: "mh2",
        cells: [
          { x: 1, y: 10 }, { x: 2, y: 10 }, { x: 3, y: 10 }, { x: 4, y: 10 }, { x: 5, y: 10 },
          { x: 6, y: 10 }, { x: 7, y: 10 }, { x: 8, y: 10 }, { x: 9, y: 10 }, { x: 10, y: 10 },
          { x: 11, y: 10 }, { x: 12, y: 10 }, { x: 13, y: 10 }, { x: 14, y: 10 }, { x: 15, y: 10 },
          { x: 16, y: 10 }, { x: 17, y: 10 }
        ],
        exitDir: "right"
      },
      {
        id: "mh3",
        cells: [
          { x: 19, y: 10 }, { x: 19, y: 11 }, { x: 18, y: 11 }, { x: 17, y: 11 }, { x: 16, y: 11 },
          { x: 15, y: 11 }, { x: 14, y: 11 }, { x: 13, y: 11 }, { x: 12, y: 11 }, { x: 11, y: 11 },
          { x: 10, y: 11 }, { x: 9, y: 11 }, { x: 8, y: 11 }, { x: 7, y: 11 }, { x: 6, y: 11 },
          { x: 5, y: 11 }, { x: 4, y: 11 }, { x: 3, y: 11 }, { x: 2, y: 11 }, { x: 1, y: 11 }
        ],
        exitDir: "left"
      },

      // --- Bottom Left Zone ---
      {
        id: "bl1",
        cells: [
          { x: 0, y: 13 }, { x: 0, y: 14 }, { x: 0, y: 15 }, { x: 1, y: 15 },
          { x: 1, y: 14 }, { x: 2, y: 14 }, { x: 2, y: 13 }, { x: 3, y: 13 }
        ],
        exitDir: "right"
      },
      {
        id: "bl2",
        cells: [
          { x: 4, y: 13 }, { x: 4, y: 14 }, { x: 3, y: 14 }, { x: 3, y: 15 },
          { x: 2, y: 15 }, { x: 2, y: 16 }, { x: 1, y: 16 }, { x: 0, y: 16 }
        ],
        exitDir: "left"
      },
      {
        id: "bl3",
        cells: [
          { x: 0, y: 18 }, { x: 0, y: 17 }, { x: 1, y: 17 }, { x: 2, y: 17 },
          { x: 2, y: 18 }, { x: 1, y: 18 }, { x: 1, y: 19 }, { x: 0, y: 19 }
        ],
        exitDir: "down"
      },
      {
        id: "bl4",
        cells: [
          { x: 3, y: 17 }, { x: 3, y: 18 }, { x: 4, y: 18 }, { x: 4, y: 17 },
          { x: 5, y: 17 }, { x: 5, y: 19 }
        ],
        exitDir: "down"
      },

      // --- Bottom Middle Zone ---
      {
        id: "bm1",
        cells: [
          { x: 7, y: 13 }, { x: 11, y: 13 }, { x: 11, y: 14 }, { x: 8, y: 14 },
          { x: 8, y: 15 }, { x: 10, y: 15 }
        ],
        exitDir: "right"
      },
      {
        id: "bm2",
        cells: [
          { x: 7, y: 16 }, { x: 7, y: 19 }
        ],
        exitDir: "down"
      },
      {
        id: "bm3",
        cells: [
          { x: 9, y: 16 }, { x: 9, y: 19 }
        ],
        exitDir: "down"
      },
      {
        id: "bm4",
        cells: [
          { x: 11, y: 16 }, { x: 11, y: 19 }
        ],
        exitDir: "down"
      },

      // --- Bottom Right Zone ---
      {
        id: "br1",
        cells: [
          { x: 13, y: 13 }, { x: 13, y: 14 }, { x: 14, y: 14 }, { x: 14, y: 13 },
          { x: 15, y: 13 }, { x: 16, y: 13 }, { x: 16, y: 14 }, { x: 15, y: 14 },
          { x: 15, y: 15 }, { x: 17, y: 15 }
        ],
        exitDir: "right"
      },
      {
        id: "br2",
        cells: [
          { x: 13, y: 16 }, { x: 14, y: 16 }, { x: 14, y: 17 }, { x: 13, y: 17 },
          { x: 13, y: 18 }, { x: 15, y: 18 }, { x: 15, y: 17 }, { x: 16, y: 17 },
          { x: 16, y: 16 }, { x: 18, y: 16 }
        ],
        exitDir: "right"
      },
      {
        id: "br3",
        cells: [
          { x: 19, y: 14 }, { x: 19, y: 17 }, { x: 18, y: 17 }, { x: 18, y: 18 },
          { x: 19, y: 18 }, { x: 19, y: 19 }
        ],
        exitDir: "down"
      }
    ]
  },
  {
    id: 2,
    name: "Intricate Labyrinth",
    gridSize: 20,
    shapes: [
      // Chain A
      {
        id: "a1",
        cells: [{ x: 1, y: 10 }, { x: 1, y: 5 }],
        exitDir: "up"
      },
      {
        id: "a2",
        cells: [{ x: 0, y: 11 }, { x: 5, y: 11 }],
        exitDir: "right"
      },
      {
        id: "a3",
        cells: [{ x: 6, y: 12 }, { x: 6, y: 4 }],
        exitDir: "up"
      },
      {
        id: "a4",
        cells: [{ x: 7, y: 3 }, { x: 2, y: 3 }],
        exitDir: "left"
      },
      {
        id: "a5",
        cells: [{ x: 1, y: 0 }, { x: 1, y: 4 }],
        exitDir: "down"
      },
      // Chain B
      {
        id: "b1",
        cells: [{ x: 18, y: 1 }, { x: 18, y: 10 }],
        exitDir: "down"
      },
      {
        id: "b2",
        cells: [{ x: 19, y: 11 }, { x: 14, y: 11 }],
        exitDir: "left"
      },
      {
        id: "b3",
        cells: [{ x: 13, y: 12 }, { x: 13, y: 4 }],
        exitDir: "up"
      },
      {
        id: "b4",
        cells: [{ x: 12, y: 3 }, { x: 17, y: 3 }],
        exitDir: "right"
      },
      {
        id: "b5",
        cells: [{ x: 18, y: 0 }, { x: 18, y: 4 }],
        exitDir: "down"
      },
      // Chain C
      {
        id: "c1",
        cells: [{ x: 2, y: 18 }, { x: 10, y: 18 }],
        exitDir: "right"
      },
      {
        id: "c2",
        cells: [{ x: 11, y: 19 }, { x: 11, y: 14 }],
        exitDir: "up"
      },
      {
        id: "c3",
        cells: [{ x: 12, y: 13 }, { x: 7, y: 13 }],
        exitDir: "left"
      },
      {
        id: "c4",
        cells: [{ x: 6, y: 13 }, { x: 6, y: 17 }],
        exitDir: "down"
      },
      {
        id: "c5",
        cells: [{ x: 10, y: 19 }, { x: 0, y: 19 }],
        exitDir: "left"
      },
      // Chain D
      {
        id: "d1",
        cells: [{ x: 17, y: 18 }, { x: 13, y: 18 }],
        exitDir: "left"
      },
      {
        id: "d2",
        cells: [{ x: 12, y: 19 }, { x: 12, y: 15 }],
        exitDir: "up"
      },
      {
        id: "d3",
        cells: [{ x: 11, y: 14 }, { x: 16, y: 14 }],
        exitDir: "right"
      },
      {
        id: "d4",
        cells: [{ x: 17, y: 13 }, { x: 17, y: 17 }],
        exitDir: "down"
      },
      {
        id: "d5",
        cells: [{ x: 13, y: 19 }, { x: 19, y: 19 }],
        exitDir: "right"
      }
    ]
  },
  {
    id: 3,
    name: "The Pinwheel Lock",
    gridSize: 20,
    shapes: [
      // Inner Pinwheel
      {
        id: "ip1",
        cells: [{ x: 8, y: 8 }, { x: 11, y: 8 }],
        exitDir: "right"
      },
      {
        id: "ip2",
        cells: [{ x: 12, y: 8 }, { x: 12, y: 11 }],
        exitDir: "down"
      },
      {
        id: "ip3",
        cells: [{ x: 12, y: 12 }, { x: 9, y: 12 }],
        exitDir: "left"
      },
      {
        id: "ip4",
        cells: [{ x: 8, y: 12 }, { x: 8, y: 9 }],
        exitDir: "up"
      },
      // Middle Pinwheel
      {
        id: "mp1",
        cells: [{ x: 6, y: 6 }, { x: 13, y: 6 }],
        exitDir: "right"
      },
      {
        id: "mp2",
        cells: [{ x: 14, y: 6 }, { x: 14, y: 13 }],
        exitDir: "down"
      },
      {
        id: "mp3",
        cells: [{ x: 14, y: 14 }, { x: 7, y: 14 }],
        exitDir: "left"
      },
      {
        id: "mp4",
        cells: [{ x: 6, y: 14 }, { x: 6, y: 7 }],
        exitDir: "up"
      },
      // Outer Pinwheel
      {
        id: "op1",
        cells: [{ x: 4, y: 4 }, { x: 13, y: 4 }],
        exitDir: "right"
      },
      {
        id: "op2",
        cells: [{ x: 16, y: 5 }, { x: 16, y: 15 }],
        exitDir: "down"
      },
      {
        id: "op3",
        cells: [{ x: 16, y: 16 }, { x: 5, y: 16 }],
        exitDir: "left"
      },
      {
        id: "op4",
        cells: [{ x: 4, y: 16 }, { x: 4, y: 5 }],
        exitDir: "up"
      },
      // Keys
      {
        id: "k1",
        cells: [{ x: 15, y: 5 }, { x: 15, y: 3 }],
        exitDir: "up"
      },
      {
        id: "k2",
        cells: [{ x: 14, y: 1 }, { x: 16, y: 1 }],
        exitDir: "right"
      },
      {
        id: "k3",
        cells: [{ x: 18, y: 2 }, { x: 18, y: 0 }],
        exitDir: "up"
      }
    ]
  },
  {
    id: 4,
    name: "Cybernetic Keyhole",
    gridSize: 20,
    shapes: [
      {
        id: "key",
        cells: [{ x: 1, y: 10 }, { x: 12, y: 10 }],
        exitDir: "right"
      },
      {
        id: "g1",
        cells: [{ x: 14, y: 7 }, { x: 14, y: 11 }],
        exitDir: "down"
      },
      {
        id: "g2",
        cells: [{ x: 16, y: 13 }, { x: 16, y: 9 }],
        exitDir: "up"
      },
      {
        id: "g3",
        cells: [{ x: 18, y: 7 }, { x: 18, y: 11 }],
        exitDir: "down"
      },
      {
        id: "h1",
        cells: [{ x: 15, y: 12 }, { x: 12, y: 12 }],
        exitDir: "left"
      },
      {
        id: "v1",
        cells: [{ x: 10, y: 11 }, { x: 10, y: 14 }],
        exitDir: "down"
      },
      {
        id: "h2",
        cells: [{ x: 11, y: 15 }, { x: 8, y: 15 }],
        exitDir: "left"
      },
      {
        id: "h3",
        cells: [{ x: 15, y: 8 }, { x: 17, y: 8 }],
        exitDir: "right"
      },
      {
        id: "v2",
        cells: [{ x: 19, y: 9 }, { x: 19, y: 6 }],
        exitDir: "up"
      },
      {
        id: "h4",
        cells: [{ x: 17, y: 12 }, { x: 19, y: 12 }],
        exitDir: "right"
      }
    ]
  },
  {
    id: 5,
    name: "Gridlock Megacity",
    gridSize: 20,
    shapes: [
      {
        id: "hr1",
        cells: [{ x: 3, y: 4 }, { x: 6, y: 4 }],
        exitDir: "right"
      },
      {
        id: "vc1",
        cells: [{ x: 7, y: 3 }, { x: 7, y: 6 }],
        exitDir: "down"
      },
      {
        id: "hr2",
        cells: [{ x: 6, y: 8 }, { x: 10, y: 8 }],
        exitDir: "right"
      },
      {
        id: "vc2",
        cells: [{ x: 11, y: 7 }, { x: 11, y: 10 }],
        exitDir: "down"
      },
      {
        id: "hr3",
        cells: [{ x: 11, y: 12 }, { x: 14, y: 12 }],
        exitDir: "right"
      },
      {
        id: "vc3",
        cells: [{ x: 15, y: 11 }, { x: 15, y: 14 }],
        exitDir: "down"
      },
      {
        id: "vu1",
        cells: [{ x: 14, y: 5 }, { x: 14, y: 3 }],
        exitDir: "up"
      },
      {
        id: "hl1",
        cells: [{ x: 18, y: 6 }, { x: 14, y: 6 }],
        exitDir: "left"
      },
      {
        id: "vu2",
        cells: [{ x: 13, y: 9 }, { x: 13, y: 6 }],
        exitDir: "up"
      },
      {
        id: "hl2",
        cells: [{ x: 17, y: 5 }, { x: 13, y: 5 }],
        exitDir: "left"
      },
      {
        id: "vu3",
        cells: [{ x: 8, y: 7 }, { x: 8, y: 5 }],
        exitDir: "up"
      },
      {
        id: "hl3",
        cells: [{ x: 12, y: 2 }, { x: 8, y: 2 }],
        exitDir: "left"
      }
    ]
  },
  {
    id: 6,
    name: "Spiral Lockout",
    gridSize: 20,
    shapes: [
      {
        id: "sp1",
        cells: [{ x: 3, y: 2 }, { x: 17, y: 2 }],
        exitDir: "right"
      },
      {
        id: "sp2",
        cells: [{ x: 18, y: 2 }, { x: 18, y: 17 }],
        exitDir: "down"
      },
      {
        id: "sp3",
        cells: [{ x: 18, y: 18 }, { x: 2, y: 18 }],
        exitDir: "left"
      },
      {
        id: "sp4",
        cells: [{ x: 1, y: 18 }, { x: 1, y: 4 }],
        exitDir: "up"
      },
      {
        id: "sp5",
        cells: [{ x: 4, y: 4 }, { x: 15, y: 4 }],
        exitDir: "right"
      },
      {
        id: "sp6",
        cells: [{ x: 16, y: 5 }, { x: 16, y: 15 }],
        exitDir: "down"
      },
      {
        id: "sp7",
        cells: [{ x: 15, y: 16 }, { x: 4, y: 16 }],
        exitDir: "left"
      },
      {
        id: "sp8",
        cells: [{ x: 3, y: 16 }, { x: 3, y: 6 }],
        exitDir: "up"
      },
      {
        id: "sp9",
        cells: [{ x: 6, y: 6 }, { x: 13, y: 6 }],
        exitDir: "right"
      },
      {
        id: "sp10",
        cells: [{ x: 14, y: 5 }, { x: 14, y: 13 }],
        exitDir: "down"
      },
      {
        id: "sp11",
        cells: [{ x: 15, y: 14 }, { x: 6, y: 14 }],
        exitDir: "left"
      },
      {
        id: "sp12",
        cells: [{ x: 5, y: 14 }, { x: 5, y: 8 }],
        exitDir: "up"
      }
    ]
  },
  {
    id: 7,
    name: "The Maze Switchback",
    gridSize: 20,
    shapes: [
      {
        id: "sb1",
        cells: [{ x: 1, y: 3 }, { x: 18, y: 3 }],
        exitDir: "right"
      },
      {
        id: "v1",
        cells: [{ x: 19, y: 5 }, { x: 19, y: 2 }],
        exitDir: "up"
      },
      {
        id: "h1",
        cells: [{ x: 19, y: 1 }, { x: 10, y: 1 }],
        exitDir: "left"
      },
      {
        id: "v6",
        cells: [{ x: 5, y: 3 }, { x: 5, y: 0 }],
        exitDir: "up"
      },
      {
        id: "sb2",
        cells: [{ x: 18, y: 6 }, { x: 1, y: 6 }],
        exitDir: "left"
      },
      {
        id: "v2",
        cells: [{ x: 0, y: 5 }, { x: 0, y: 8 }],
        exitDir: "down"
      },
      {
        id: "h2",
        cells: [{ x: 0, y: 10 }, { x: 9, y: 10 }],
        exitDir: "right"
      },
      {
        id: "v7",
        cells: [{ x: 12, y: 10 }, { x: 12, y: 13 }],
        exitDir: "down"
      },
      {
        id: "sb3",
        cells: [{ x: 1, y: 13 }, { x: 18, y: 13 }],
        exitDir: "right"
      },
      {
        id: "v3",
        cells: [{ x: 19, y: 15 }, { x: 19, y: 12 }],
        exitDir: "up"
      },
      {
        id: "h3",
        cells: [{ x: 19, y: 11 }, { x: 10, y: 11 }],
        exitDir: "left"
      },
      {
        id: "v8",
        cells: [{ x: 6, y: 13 }, { x: 6, y: 10 }],
        exitDir: "up"
      }
    ]
  },
  {
    id: 8,
    name: "Double Helix",
    gridSize: 20,
    shapes: [
      {
        id: "a1",
        cells: [{ x: 2, y: 2 }, { x: 5, y: 2 }],
        exitDir: "right"
      },
      {
        id: "b1",
        cells: [{ x: 6, y: 1 }, { x: 6, y: 4 }],
        exitDir: "down"
      },
      {
        id: "a2",
        cells: [{ x: 4, y: 5 }, { x: 7, y: 5 }],
        exitDir: "right"
      },
      {
        id: "b2",
        cells: [{ x: 8, y: 4 }, { x: 8, y: 7 }],
        exitDir: "down"
      },
      {
        id: "a3",
        cells: [{ x: 6, y: 8 }, { x: 9, y: 8 }],
        exitDir: "right"
      },
      {
        id: "b3",
        cells: [{ x: 10, y: 7 }, { x: 10, y: 10 }],
        exitDir: "down"
      },
      {
        id: "a4",
        cells: [{ x: 8, y: 11 }, { x: 11, y: 11 }],
        exitDir: "right"
      },
      {
        id: "b4",
        cells: [{ x: 12, y: 10 }, { x: 12, y: 13 }],
        exitDir: "down"
      },
      {
        id: "a5",
        cells: [{ x: 10, y: 14 }, { x: 13, y: 14 }],
        exitDir: "right"
      },
      {
        id: "b5",
        cells: [{ x: 14, y: 13 }, { x: 14, y: 16 }],
        exitDir: "down"
      }
    ]
  },
  {
    id: 9,
    name: "Quantum Lock",
    gridSize: 20,
    shapes: [
      {
        id: "lock",
        cells: [{ x: 8, y: 10 }, { x: 12, y: 10 }],
        exitDir: "right"
      },
      {
        id: "b2",
        cells: [{ x: 13, y: 10 }, { x: 15, y: 10 }],
        exitDir: "right"
      },
      {
        id: "v1",
        cells: [{ x: 17, y: 11 }, { x: 17, y: 8 }],
        exitDir: "up"
      },
      {
        id: "v2",
        cells: [{ x: 19, y: 9 }, { x: 19, y: 12 }],
        exitDir: "down"
      },
      {
        id: "h1",
        cells: [{ x: 18, y: 6 }, { x: 15, y: 6 }],
        exitDir: "left"
      },
      {
        id: "h2",
        cells: [{ x: 16, y: 14 }, { x: 19, y: 14 }],
        exitDir: "right"
      }
    ]
  },
  {
    id: 10,
    name: "Grand Master Chessboard",
    gridSize: 20,
    shapes: [
      {
        id: "q1_h",
        cells: [{ x: 2, y: 4 }, { x: 6, y: 4 }],
        exitDir: "right"
      },
      {
        id: "q2_v",
        cells: [{ x: 8, y: 2 }, { x: 8, y: 6 }],
        exitDir: "down"
      },
      {
        id: "q3_h",
        cells: [{ x: 13, y: 8 }, { x: 8, y: 8 }],
        exitDir: "left"
      },
      {
        id: "q4_v",
        cells: [{ x: 6, y: 12 }, { x: 6, y: 8 }],
        exitDir: "up"
      },
      {
        id: "kb1",
        cells: [{ x: 7, y: 3 }, { x: 7, y: 5 }],
        exitDir: "down"
      },
      {
        id: "kb2",
        cells: [{ x: 5, y: 6 }, { x: 9, y: 6 }],
        exitDir: "right"
      },
      {
        id: "kb3",
        cells: [{ x: 10, y: 5 }, { x: 10, y: 7 }],
        exitDir: "up"
      },
      {
        id: "kb4",
        cells: [{ x: 12, y: 2 }, { x: 9, y: 2 }],
        exitDir: "left"
      },
      {
        id: "kb5",
        cells: [{ x: 7, y: 2 }, { x: 7, y: 0 }],
        exitDir: "up"
      },
      {
        id: "br_h1",
        cells: [{ x: 12, y: 12 }, { x: 15, y: 12 }],
        exitDir: "right"
      },
      {
        id: "br_v1",
        cells: [{ x: 16, y: 10 }, { x: 16, y: 14 }],
        exitDir: "down"
      },
      {
        id: "br_h2",
        cells: [{ x: 17, y: 15 }, { x: 14, y: 15 }],
        exitDir: "left"
      },
      {
        id: "br_v2",
        cells: [{ x: 13, y: 16 }, { x: 13, y: 13 }],
        exitDir: "up"
      }
    ]
  }
];
