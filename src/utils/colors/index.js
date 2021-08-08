const mainColors = {
    dark_main : '#112340',
    light_main : '#0BCAD4',

    grey1:'#7D8797',
    grey2:'#EDEEF0',
    grey3:'#B1B7C2',

    orange1 : '#CC632B',

    green1 : '#2BCC61',

    black1: 'rgba(0,0,0,0.5)',

    red1: '#E06379',
};

export const Colors = { 
    primary:mainColors.dark_main,
    secondary:mainColors.light_main,
    button:{
        primary:{
            background:mainColors.dark_main,
            text:'white'
        },
        secondary:{
            background:'white',
            text:mainColors.light_main
        },
        disable:{
            background:mainColors.grey2,
            text:mainColors.grey3
        }
    },
    text:{
        primary:mainColors.dark_main,
        secondary:mainColors.light_main,
        white:'white',
        black:'black',
        orange:mainColors.orange1,
    },
    border:{
        orange : mainColors.orange1,
        green : mainColors.green1,
        grey : mainColors.grey1,
    },
    loadingBackground:mainColors.black1,
    error:mainColors.red1,
    mainColors:mainColors,
};