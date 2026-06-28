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
      {
        id: "s1",
        cells: [
          { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }, { x: 5, y: 1 },
          { x: 5, y: 2 }, { x: 5, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 2, y: 3 },
          { x: 2, y: 4 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 }
        ],
        exitDir: "up"
      },
      {
        id: "s2",
        cells: [
          { x: 7, y: 1 }, { x: 8, y: 1 }, { x: 9, y: 1 }, { x: 10, y: 1 },
          { x: 10, y: 2 }, { x: 10, y: 3 }, { x: 9, y: 3 }, { x: 8, y: 3 },
          { x: 8, y: 4 }, { x: 8, y: 5 }, { x: 9, y: 5 }, { x: 10, y: 5 }
        ],
        exitDir: "right"
      },
      {
        id: "s3",
        cells: [
          { x: 1, y: 7 }, { x: 2, y: 7 }, { x: 3, y: 7 }, { x: 3, y: 8 },
          { x: 3, y: 9 }, { x: 2, y: 9 }, { x: 1, y: 9 }, { x: 1, y: 10 },
          { x: 1, y: 11 }, { x: 2, y: 11 }, { x: 3, y: 11 }
        ],
        exitDir: "left"
      },
      {
        id: "s4",
        cells: [
          { x: 5, y: 7 }, { x: 5, y: 8 }, { x: 6, y: 8 }, { x: 7, y: 8 },
          { x: 7, y: 9 }, { x: 7, y: 10 }, { x: 6, y: 10 }, { x: 5, y: 10 },
          { x: 5, y: 11 }, { x: 5, y: 12 }, { x: 6, y: 12 }, { x: 7, y: 12 }
        ],
        exitDir: "down"
      }
    ]
  },
  {
    id: 3,
    name: "The Pinwheel Lock",
    gridSize: 20,
    shapes: [
      {
        id: "p1",
        cells: [{ x: 10, y: 7 }, { x: 10, y: 11 }],
        exitDir: "up"
      },
      {
        id: "p2",
        cells: [{ x: 7, y: 5 }, { x: 12, y: 5 }],
        exitDir: "right"
      },
      {
        id: "p3",
        cells: [{ x: 13, y: 4 }, { x: 13, y: 12 }],
        exitDir: "down"
      },
      {
        id: "p4",
        cells: [{ x: 8, y: 13 }, { x: 14, y: 13 }],
        exitDir: "left"
      },
      {
        id: "p5",
        cells: [{ x: 7, y: 8 }, { x: 7, y: 14 }],
        exitDir: "up"
      },
      {
        id: "g1",
        cells: [{ x: 4, y: 13 }, { x: 6, y: 13 }],
        exitDir: "left"
      },
      {
        id: "w1",
        cells: [{ x: 4, y: 3 }, { x: 4, y: 8 }, { x: 6, y: 8 }],
        exitDir: "up"
      },
      {
        id: "o1",
        cells: [{ x: 3, y: 2 }, { x: 5, y: 2 }],
        exitDir: "right"
      },
      {
        id: "o2",
        cells: [{ x: 2, y: 1 }, { x: 2, y: 4 }],
        exitDir: "down"
      },
      {
        id: "cr1",
        cells: [{ x: 15, y: 13 }, { x: 15, y: 17 }, { x: 18, y: 17 }],
        exitDir: "right"
      },
      {
        id: "cr2",
        cells: [{ x: 17, y: 14 }, { x: 17, y: 16 }],
        exitDir: "up"
      },
      {
        id: "cr3",
        cells: [{ x: 16, y: 18 }, { x: 19, y: 18 }],
        exitDir: "down"
      }
    ]
  },
  {
    id: 4,
    name: "Cybernetic Keyhole",
    gridSize: 20,
    shapes: [
      {
        id: "k1",
        cells: [{ x: 5, y: 10 }, { x: 15, y: 10 }],
        exitDir: "right"
      },
      {
        id: "v1",
        cells: [{ x: 16, y: 8 }, { x: 16, y: 12 }],
        exitDir: "up"
      },
      {
        id: "h1",
        cells: [{ x: 14, y: 7 }, { x: 17, y: 7 }],
        exitDir: "left"
      },
      {
        id: "v2",
        cells: [{ x: 13, y: 5 }, { x: 13, y: 9 }],
        exitDir: "down"
      },
      {
        id: "h2",
        cells: [{ x: 11, y: 11 }, { x: 14, y: 11 }],
        exitDir: "right"
      },
      {
        id: "lk1",
        cells: [{ x: 2, y: 10 }, { x: 4, y: 10 }],
        exitDir: "left"
      },
      {
        id: "lk2",
        cells: [{ x: 3, y: 9 }, { x: 3, y: 12 }],
        exitDir: "down"
      },
      {
        id: "lk3",
        cells: [{ x: 1, y: 11 }, { x: 4, y: 11 }],
        exitDir: "up"
      },
      {
        id: "dec1",
        cells: [{ x: 8, y: 2 }, { x: 8, y: 4 }],
        exitDir: "up"
      },
      {
        id: "dec2",
        cells: [{ x: 7, y: 3 }, { x: 9, y: 3 }],
        exitDir: "left"
      },
      {
        id: "dec3",
        cells: [{ x: 8, y: 16 }, { x: 8, y: 18 }],
        exitDir: "down"
      },
      {
        id: "dec4",
        cells: [{ x: 6, y: 17 }, { x: 10, y: 17 }],
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
        id: "av1",
        cells: [{ x: 5, y: 4 }, { x: 5, y: 15 }],
        exitDir: "up"
      },
      {
        id: "av2",
        cells: [{ x: 9, y: 4 }, { x: 9, y: 15 }],
        exitDir: "down"
      },
      {
        id: "av3",
        cells: [{ x: 13, y: 4 }, { x: 13, y: 15 }],
        exitDir: "up"
      },
      {
        id: "st1",
        cells: [{ x: 4, y: 6 }, { x: 15, y: 6 }],
        exitDir: "left"
      },
      {
        id: "st2",
        cells: [{ x: 4, y: 10 }, { x: 15, y: 10 }],
        exitDir: "right"
      },
      {
        id: "st3",
        cells: [{ x: 4, y: 14 }, { x: 15, y: 14 }],
        exitDir: "left"
      },
      {
        id: "g_top",
        cells: [{ x: 3, y: 2 }, { x: 7, y: 2 }],
        exitDir: "right"
      },
      {
        id: "g_left",
        cells: [{ x: 2, y: 5 }, { x: 2, y: 11 }],
        exitDir: "up"
      },
      {
        id: "g_right",
        cells: [{ x: 16, y: 8 }, { x: 16, y: 13 }],
        exitDir: "down"
      },
      {
        id: "g_bottom",
        cells: [{ x: 8, y: 17 }, { x: 14, y: 17 }],
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
        id: "c1",
        cells: [{ x: 9, y: 9 }, { x: 10, y: 9 }],
        exitDir: "right"
      },
      {
        id: "r1_v",
        cells: [{ x: 12, y: 7 }, { x: 12, y: 12 }],
        exitDir: "down"
      },
      {
        id: "r2_h",
        cells: [{ x: 10, y: 14 }, { x: 15, y: 14 }],
        exitDir: "right"
      },
      {
        id: "r1_h",
        cells: [{ x: 7, y: 6 }, { x: 12, y: 6 }],
        exitDir: "left"
      },
      {
        id: "r3_v",
        cells: [{ x: 6, y: 5 }, { x: 6, y: 10 }],
        exitDir: "up"
      },
      {
        id: "r4_h",
        cells: [{ x: 4, y: 3 }, { x: 8, y: 3 }],
        exitDir: "left"
      }
    ]
  },
  {
    id: 7,
    name: "The Maze Switchback",
    gridSize: 20,
    shapes: [
      {
        id: "h_cap",
        cells: [{ x: 4, y: 1 }, { x: 10, y: 1 }],
        exitDir: "right"
      },
      {
        id: "v_mid",
        cells: [{ x: 7, y: 2 }, { x: 7, y: 13 }],
        exitDir: "up"
      },
      {
        id: "z1",
        cells: [{ x: 2, y: 3 }, { x: 6, y: 3 }, { x: 6, y: 5 }, { x: 5, y: 5 }],
        exitDir: "right"
      },
      {
        id: "z2",
        cells: [{ x: 12, y: 3 }, { x: 8, y: 3 }, { x: 8, y: 5 }, { x: 9, y: 5 }],
        exitDir: "left"
      },
      {
        id: "z3",
        cells: [{ x: 2, y: 11 }, { x: 6, y: 11 }, { x: 6, y: 9 }, { x: 5, y: 9 }],
        exitDir: "right"
      },
      {
        id: "z4",
        cells: [{ x: 12, y: 11 }, { x: 8, y: 11 }, { x: 8, y: 9 }, { x: 9, y: 9 }],
        exitDir: "left"
      }
    ]
  },
  {
    id: 8,
    name: "Double Helix",
    gridSize: 20,
    shapes: [
      {
        id: "h1",
        cells: [{ x: 5, y: 5 }, { x: 8, y: 5 }, { x: 8, y: 9 }, { x: 11, y: 9 }, { x: 11, y: 13 }, { x: 14, y: 13 }],
        exitDir: "right"
      },
      {
        id: "h2",
        cells: [{ x: 6, y: 6 }, { x: 6, y: 10 }, { x: 9, y: 10 }, { x: 9, y: 14 }, { x: 12, y: 14 }, { x: 12, y: 17 }],
        exitDir: "down"
      },
      {
        id: "block_r",
        cells: [{ x: 15, y: 11 }, { x: 15, y: 15 }],
        exitDir: "up"
      },
      {
        id: "block_d",
        cells: [{ x: 10, y: 18 }, { x: 14, y: 18 }],
        exitDir: "left"
      },
      {
        id: "block_l",
        cells: [{ x: 9, y: 16 }, { x: 9, y: 19 }],
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
        id: "p1",
        cells: [{ x: 8, y: 8 }, { x: 8, y: 6 }],
        exitDir: "up"
      },
      {
        id: "p2",
        cells: [{ x: 7, y: 5 }, { x: 12, y: 5 }],
        exitDir: "right"
      },
      {
        id: "p3",
        cells: [{ x: 13, y: 4 }, { x: 13, y: 11 }],
        exitDir: "down"
      },
      {
        id: "p4",
        cells: [{ x: 6, y: 12 }, { x: 14, y: 12 }],
        exitDir: "left"
      },
      {
        id: "p5",
        cells: [{ x: 5, y: 7 }, { x: 5, y: 13 }],
        exitDir: "up"
      },
      {
        id: "key",
        cells: [{ x: 3, y: 12 }, { x: 5, y: 12 }],
        exitDir: "left"
      }
    ]
  },
  {
    id: 10,
    name: "Grand Master Chessboard",
    gridSize: 20,
    shapes: [
      {
        id: "c_up",
        cells: [{ x: 9, y: 9 }, { x: 9, y: 5 }],
        exitDir: "up"
      },
      {
        id: "c_right",
        cells: [{ x: 10, y: 10 }, { x: 15, y: 10 }, { x: 15, y: 15 }],
        exitDir: "right"
      },
      {
        id: "c_down",
        cells: [{ x: 9, y: 11 }, { x: 9, y: 13 }],
        exitDir: "down"
      },
      {
        id: "c_left",
        cells: [{ x: 8, y: 10 }, { x: 6, y: 10 }],
        exitDir: "left"
      },
      {
        id: "tl_1",
        cells: [{ x: 2, y: 2 }, { x: 5, y: 2 }],
        exitDir: "left"
      },
      {
        id: "tl_2",
        cells: [{ x: 4, y: 3 }, { x: 4, y: 6 }],
        exitDir: "up"
      },
      {
        id: "tl_block",
        cells: [{ x: 3, y: 6 }, { x: 10, y: 6 }],
        exitDir: "left"
      },
      {
        id: "tr_1",
        cells: [{ x: 11, y: 5 }, { x: 15, y: 5 }],
        exitDir: "left"
      },
      {
        id: "tr_block",
        cells: [{ x: 14, y: 4 }, { x: 14, y: 11 }],
        exitDir: "up"
      },
      {
        id: "br_1",
        cells: [{ x: 11, y: 15 }, { x: 17, y: 15 }],
        exitDir: "left"
      },
      {
        id: "br_block",
        cells: [{ x: 7, y: 14 }, { x: 12, y: 14 }],
        exitDir: "right"
      }
    ]
  }
];
