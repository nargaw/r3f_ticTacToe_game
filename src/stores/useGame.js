import create from 'zustand';

export default create((set, get) =>
{
    return {
        //turns
        current: 'o',

        

        //board status
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''] 
        ],

        boardStatus: 'locked',

        winner: '',

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

        getBoardStatus: () => 
        {
            return get().boardStatus
        },

        getWinner: () =>
        {
            // console.log("winner is: " + get().winner)
            return get().winner
        },

        //check board to determine if there is a winner
        checkWinner: () => {
            let row = []
            let column = []
            let diag = []
            let antidiag = []

            for(let i = 0; i < 3; i++)
            {
                diag.push(get().board[i][i])
                antidiag.push(get().board[(get().board[0].length - 1) - i][i])
                for(let j = 0; j < 3; j++)
                {
                    row.push(get().board[i][j])
                    column.push(get().board[j][i]) 
                }  
            }

            console.log(antidiag)

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