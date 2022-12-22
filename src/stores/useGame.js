import create from 'zustand';

export default create((set, get) =>
{
    return {
        //turns
        current: 'o',

        getCurrent: () => {
            return get().current
        },


        changeTurn: () =>
        {
            if(get().current === 'x')
            {
                set((state) => ({
                    current: 'o'
                }));
                
            } else 
            {
                set((state) => ({
                    current: 'x'
                }));
            }
            
        },

        //board status
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''] 
        ],
        
        checkBoard: () => {
            return get().board
        }
    }
})