import create from 'zustand';

export default create((set) =>
{
    return {
        //turns
        current: 'x',


        xTurn: () =>
        {
            set(() => 
            {
                current: 'x'
            })
        },

        oTurn: () => 
        {
            set(() => 
            {
                current: 'o'
            })
        },

        //board status
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''] 
        ]
    }
})