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

        winner: 'null',

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
            for(let i = 0; i < 3; i++)
            {
                let rowString = ''
                let columnString = ''
                
                for(let j = 0; j < 3; j++ )
                {
                    rowString += get().board[i][j]
                    columnString += get().board[j][i]
                    let n = rowString.length
                    let m = columnString.length
                    if(n === 3)
                    {
                        for(i=0; i < 3; i++)
                        {
                            console.log(rowString[i])
                        }
                        console.log('r: ' + rowString)
                    }
                    if(m === 3)
                    {
                        console.log('c: ' + columnString)
                    }
                }   
            }
            console.log("checking winner...")
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