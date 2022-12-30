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

        flipBoard: false,

        flipStartTime: 0,

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
            let r1, r2, r3 = []
            r1 = row.slice(0, 3).join('')
            r2 = row.slice(3, 6).join('')
            r3 = row.slice(6, 9).join('')

            let c1, c2, c3 = []
            c1 = column.slice(0, 3).join('')
            c2 = column.slice(3, 6).join('')
            c3 = column.slice(6, 9).join('')

            let d, ad = []
            d = diag.slice(0, 3).join('')
            ad = antidiag.slice(0, 3).join('')

            if(r1.match(/xxx/g) || r2.match(/xxx/g) || r3.match(/xxx/g) || c1.match(/xxx/g) || c2.match(/xxx/g) || c3.match(/xxx/g) || d.match(/xxx/g) || ad.match(/xxx/g) ){
                
                set((state) => ({winner: 'x'}))
                set((state) => ({boardStatus: 'locked'}))
                console.log(get().winner)
                // set((state) => ({gameover: true}))
            }

             else if(r1.match(/ooo/g) || r2.match(/ooo/g) || r3.match(/ooo/g) || c1.match(/ooo/g) || c2.match(/ooo/g) || c3.match(/ooo/g) || d.match(/ooo/g) || ad.match(/ooo/g) ){
                
                set((state) => ({winner: 'o'}))
                set((state) => ({boardStatus: 'locked'}))
                console.log(get().winner)
                // set((state) => ({gameover: true}))
            }

            else if(r1.length ===3 && r2.length ===3 && r3.length === 3) {
                set((state) => ({winner: 'tie'}))
                set((state) => ({boardStatus: 'locked'}))
                console.log(get().winner)
            }

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
        },

        restart: () =>
        {
            if(get().winner === 'x')
            {
                set((state) => ({current: 'o'}))
            }
            if(get().winner === 'o')
            {
                set((state) => ({current: 'x'}))
            }
            set((state) => ({winner: ''}))
            set((state) => ({board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''] 
            ]}))
            set((state) => ({flipBoard: true}))
            set((state) => ({flipStartTime: Date.now()}))
            console.log('restarting')
        },

        reset: () => 
        {
            set((state) => ({flipBoard: false}))
        }
    }
})