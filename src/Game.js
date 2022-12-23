import * as THREE from 'three'
import useGame from './stores/useGame.js'
import { useState } from 'react'
import { RigidBody } from '@react-three/rapier'
import { RoundCuboidCollider } from '@react-three/rapier'


export default function Game()
{
    const state = useGame()
    const boardStatus = useGame(state => state.getBoardStatus)
    const changeTurn = useGame(state => state.changeTurn)
    const setBoard = useGame(state => state.setBoard)

    const geometry = new THREE.BoxGeometry(3, 2, 3)
    const material = new THREE.MeshBasicMaterial({ wireframe: true})
    material.visible = false

    function Oshape(props)
    {
        
        const oGeometry = new THREE.TorusGeometry(0.5, 0.25, 32, 32)
        const oMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})

        return <>
            <RigidBody
                colliders={false}
                position={props.position}
                rotation-x={Math.random()}
                rotation-y={Math.random()}
                rotation-z={Math.random()}
            >
                <RoundCuboidCollider args={[0.5, 0.425, 0.0125, 0.25]}/>
                <mesh
                    castShadow 
                    geometry={oGeometry}
                    material={oMaterial}
                />
            </RigidBody>
        </>
    }

    function Xshape(props)
    {
        const xMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})
        const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)

        return <>
            <RigidBody 
                colliders="cuboid"
                position={props.position}
                rotation-x={Math.random()}
                rotation-y={Math.random()}
                rotation-z={Math.random()}
            >
                <group castShadow>
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={Math.PI * 0.25}
                    />
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={-Math.PI * 0.25}
                    />
                </group>
            </RigidBody>  
        </>
    }


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
                changeTurn()
            }
           
        } else {
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
                changeTurn()
            }
        }
        console.log(boardStatus())
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