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

        boardStatus: 'locked',

        getBoardStatus: () => 
        {
            return get().boardStatus
        },


        //check board position to see if it is occupied before creating shape
        checkBoard: (x, z) => {
            // for(let i = 0; i <=2; i++){
            //     for(let j = 0; j <=2; j++){
                    
            //     }
            // }
            // console.log(get().board[0][0])
            // return get().board
        },

        //check the board to see if the position is already occupied
        //if position is not occupied set current turn to unoccupied board position
        setBoard: (x, z) => {
            switch (true){
                case (x === 0 && z < 0):
                    if(get().board[0][1] === ''){
                        get().board[0][1] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    }    
                    break
                case (x > 0 && z < 0):
                    if(get().board[0][2] === ''){
                        get().board[0][2] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break
                case (x < 0 && z < 0):
                    if(get().board[0][0] === ''){
                        get().board[0][0] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break
                case (x === 0 && z === 0):
                    if(get().board[1][1] === ''){
                        get().board[1][1] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break
                case (x > 0 && z === 0):
                    if(get().board[1][2] === ''){
                        get().board[1][2] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break
                case (x < 0 && z === 0):
                    if(get().board[1][0] === ''){
                        get().board[1][0] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break   
                case (x === 0 && z > 0):
                    if(get().board[2][1] === ''){
                        get().board[2][1] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break
                case (x > 0 && z > 0):
                    if(get().board[2][2] === ''){
                        get().board[2][2] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break
                case (x < 0 && z > 0):
                    if(get().board[2][0] === ''){
                        get().board[2][0] = get().current
                        set((state) => ({boardStatus: 'open'}))
                    }else {
                        set((state) => ({boardStatus: 'locked'}))
                    } 
                    break
                default:
                    set().boardStatus = 'locked'
            } 
        }
    }
})