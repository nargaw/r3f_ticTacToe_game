import create from "zustand/react";

export default create(() =>
{
    return {
        //turns
        current: 'x',


        //board status
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''] 
        ]
    }
})