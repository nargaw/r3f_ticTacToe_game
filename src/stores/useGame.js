import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware'

export default create(subscribeWithSelector((set) =>
{
    return {
        //turns
        current: 'x',

        xTurn: () =>
        {
            set((state) => 
            {
                if(state.current === 'o')
                    return {current: 'x'}
                return {}
            })
        },

        oTurn: () => 
        {
            set((state) => 
            {
                if(state.current === 'x')
                    return {current: 'o'}
                return {}
            })
        },

        //board status
        board: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''] 
        ]
    }
}))