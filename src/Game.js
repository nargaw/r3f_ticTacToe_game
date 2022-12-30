import * as THREE from 'three'
import useGame from './stores/useGame.js'
import { useState } from 'react'
import Xshape from './Xshape.js'
import Oshape from './Oshape.js'


export default function Game()
{
    const state = useGame()
    const boardStatus = useGame(state => state.getBoardStatus)
    const changeTurn = useGame(state => state.changeTurn)
    const setBoard = useGame(state => state.setBoard)
    const checkWinner = useGame(state => state.checkWinner)
    const getWinner = useGame(state => state.getWinner)
    const flipBoard = useGame(state => state.flipBoard)

    const geometry = new THREE.BoxGeometry(3, 2, 3)
    const material = new THREE.MeshBasicMaterial({ wireframe: true})
    material.visible = false

    const [xShapes, setXShapes ] = useState([])
    const [oShapes, setOShapes] = useState([])
    
    const action = (e) => 
    {
        const x = e.eventObject.position.x
        const z = e.eventObject.position.z
        const position = e.eventObject.position
        const xCount = xShapes.length
        const oCount = oShapes.length
        if(state.current === 'x')
        {
            if(getWinner() === '' && flipBoard === false){
                setBoard(x, z)
                if(boardStatus() === 'open'){
                    setXShapes(
                        [
                            ...xShapes,
                            <Xshape 
                                key={xCount}
                                position={[position.x, position.y + 2, position.z]}
                            />
                        ]
                    )
                    checkWinner()
                    // console.log('winner is: ' + getWinner())
                    changeTurn()
                }
            }
           
        } else {
            if(getWinner() === '' && flipBoard === false){
                setBoard(x, z)
                if(boardStatus() === 'open'){
                    setOShapes(
                        [
                            ...oShapes,
                            <Oshape 
                                key={oCount}
                                position={[position.x, position.y + 2, position.z]}
                            />
                        ]
                    )
                    checkWinner()
                    // console.log('winner is: ' + getWinner())
                    changeTurn()
                }
            
            }
        }
        // console.log(boardStatus())
        e.stopPropagation()
    }

    return <>
        {[...xShapes]}
        {[...oShapes]}
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[-3.25, 1, -3.25]}  
        />
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[0, 1, -3.25]}
        />
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[3.25, 1, -3.25]}
        />
        <mesh
            onClick={action} 
            geometry={geometry}
            material={material}
            position={[-3.25, 1, 0]}
        />
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[0, 1, 0]}
        />
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[3.25, 1, 0]}
        />
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[-3.25, 1, 3.25]}
        />
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[0, 1, 3.25]}
        />
        <mesh
            onClick={action}
            geometry={geometry}
            material={material}
            position={[3.25, 1, 3.25]}
        />
    </>
}