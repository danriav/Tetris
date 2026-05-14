export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30;

export const SHAPES = [
    [],
    [   //Pieza I
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ],
    [   // Pieza O
        [2, 2],
        [2, 2]
    ],
    [   // Pieza T
       [0, 3, 0],
       [3, 3, 3],
       [0, 0, 0]
    ],
    [   // Pieza S
        [0, 4, 4],
        [4, 4, 0],
        [0, 0, 0]
    ],
    [   // Pieza Z
        [5, 5, 0],
        [0, 5, 5],
        [0, 0, 0]
    ],
    [   // Pieza J
        [6, 0, 0],
        [6, 6, 6],
        [0, 0, 0]
    ],
    [   // Pieza L
        [0, 0, 7],
        [7, 7, 7],
        [0, 0, 0]
    ]
];

export const COLORS = [
    'transparent',
    '#00f0f0',
    '#f0f000',
    '#a000f0',
    '#00f000',
    '#f00000',
    '#0000f0',
    '#f0a000'
];