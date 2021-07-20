var NUMBERS = {
    "0": [{ hour: 90, min: 180 }, { hour: 180, min: 270 }, { hour: 0, min: 180 }, { hour: 0, min: 180 }, { hour: 0, min: 90 }, { hour: 0, min: 270 }],
    "1": [{ hour: 235, min: 235 }, { hour: 235, min: 180 }, { hour: 235, min: 235 }, { hour: 0, min: 180 }, { hour: 235, min: 235 }, { hour: 0, min: 0 }],
    "2": [{ hour: 90, min: 90 }, { hour: 180, min: 270 }, { hour: 180, min: 90 }, { hour: 0, min: 270 }, { hour: 0, min: 90 }, { hour: 270, min: 270 }],
    "3": [{ hour: 90, min: 90 }, { hour: 270, min: 180 }, { hour: 90, min: 90 }, { hour: 0, min: 180 }, { hour: 90, min: 90 }, { hour: 0, min: 270 }],
    "4": [{ hour: 180, min: 180 }, { hour: 180, min: 180 }, { hour: 0, min: 90 }, { hour: 0, min: 180 }, { hour: 225, min: 225 }, { hour: 0, min: 0 }],
    "5": [{ hour: 90, min: 180 }, { hour: 270, min: 270 }, { hour: 0, min: 90 }, { hour: 180, min: 270 }, { hour: 90, min: 90 }, { hour: 0, min: 270 }],
    "6": [{ hour: 180, min: 90 }, { hour: 270, min: 270 }, { hour: 0, min: 180 }, { hour: 270, min: 180 }, { hour: 0, min: 90 }, { hour: 0, min: 270 }],
    "7": [{ hour: 90, min: 90 }, { hour: 270, min: 180 }, { hour: 230, min: 230 }, { hour: 0, min: 180 }, { hour: 230, min: 230 }, { hour: 0, min: 0 }],
    "8": [{ hour: 90, min: 180 }, { hour: 270, min: 180 }, { hour: 75, min: 105 }, { hour: 255, min: 285 }, { hour: 90, min: 0 }, { hour: 0, min: 270 }],
    "9": [{ hour: 180, min: 90 }, { hour: 180, min: 270 }, { hour: 0, min: 90 }, { hour: 0, min: 180 }, { hour: 90, min: 90 }, { hour: 0, min: 270 }]
};
var ANIMATIONS = [
    /* / / /  single*/
    [
        [{ hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }],
        [{ hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }],
        [{ hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }],
        [{ hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }, { hour: 45, min: 45 }]
    ],
    /* < < < */
    [
        [{ hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }],
        [{ hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }],
        [{ hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }],
        [{ hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }]
    ],
    /* > > > */
    [
        [{ hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }],
        [{ hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }],
        [{ hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }],
        [{ hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }]
    ],
    /* V V V */
    [
        [{ hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }],
        [{ hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }],
        [{ hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }],
        [{ hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }, { hour: 45, min: 315 }]
    ],
    /* /\ /\ /\ */
    /* \/ \/ \/ */
    /* /\ /\ /\ */
    [
        [{ hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }],
        [{ hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }],
        [{ hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }],
        [{ hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }]
    ],
    /* \/ \/ \/ */
    /* /\ /\ /\ */
    /* \/ \/ \/ */
    [
        [{ hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }],
        [{ hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }],
        [{ hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }],
        [{ hour: 315, min: 135 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 225, min: 45 }]
    ],
    /* >< >< */
    [
        [{ hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }],
        [{ hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }],
        [{ hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }],
        [{ hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }]
    ],
    /* <> <> */
    [
        [{ hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }],
        [{ hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }],
        [{ hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }],
        [{ hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }, { hour: 45, min: 135 }, { hour: 225, min: 315 }],
    ],
    /* \ \ \ single */
    [
        [{ hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }],
        [{ hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }],
        [{ hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }],
        [{ hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }, { hour: 135, min: 135 }]
    ],
    /* ^ ^ ^ */
    [
        [{ hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }],
        [{ hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }],
        [{ hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }],
        [{ hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }]
    ],
    /* / / / both */
    [
        [{ hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }],
        [{ hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }],
        [{ hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }],
        [{ hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }, { hour: 225, min: 45 }]
    ],
    /* \ \ \ both */
    [
        [{ hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }],
        [{ hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }],
        [{ hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }],
        [{ hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }, { hour: 315, min: 135 }]
    ],
    /*   */
    [
        [{ hour: 0, min: 90 }, { hour: 45, min: 135 }, { hour: 45, min: 135 }, { hour: 90, min: 180 }, { hour: 90, min: 180 }, { hour: 135, min: 225 }],
        [{ hour: 90, min: 180 }, { hour: 135, min: 225 }, { hour: 135, min: 225 }, { hour: 180, min: 270 }, { hour: 180, min: 270 }, { hour: 225, min: 315 }],
        [{ hour: 180, min: 270 }, { hour: 225, min: 315 }, { hour: 225, min: 315 }, { hour: 270, min: 0 }, { hour: 270, min: 0 }, { hour: 315, min: 45 }],
        [{ hour: 270, min: 0 }, { hour: 315, min: 45 }, { hour: 315, min: 45 }, { hour: 0, min: 90 }, { hour: 0, min: 90 }, { hour: 45, min: 135 }]
    ]
]
