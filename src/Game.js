import * as THREE from 'three'
import useGame from './stores/useGame.js'
import { useEffect, useRef, useState } from 'react'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import { RoundCuboidCollider } from '@react-three/rapier'


export default function Game()
{
    // const currentTurn = useGame((state) => {console.log(state)})
    const state = useGame()
    // console.log(state.getCurrent())
    const currentTurn = state.getCurrent()
    const changeTurn = useGame(state => state.changeTurn)
    const setBoard = useGame(state => state.setBoard)
    // console.log(changeTurn)
    const boardStatus = state.checkBoard()
    // console.log(boardStatus)

    const geometry = new THREE.BoxGeometry(3, 2, 3)
    const material = new THREE.MeshBasicMaterial({ wireframe: true})
    material.visible = false
    // const gameTurn = useGame((state) => {
    //     console.log(state.current)
    //     if(state.current === 'o')
    //     {
    //         console.log(" o\'s Turn")
    //     } else {
    //         console.log(" x\'s Turn")
    //     }
    // })
    
    // console.log(gameTurn)
    const topLeft = useRef()
    const topMid = useRef()
    const topRight = useRef()
    const midLeft = useRef()
    const midMid = useRef()
    const midRight = useRef()
    const bottomLeft = useRef()
    const bottomMid = useRef()
    const bottomRight = useRef()

    function Oshape(props)
    {
        
        const oGeometry = new THREE.TorusGeometry(0.5, 0.25, 32, 32)
        const oMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})

        const o = useRef()

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

        const x = useRef()
        // useFrame(() => {
        //     // x.current.rotation.x = x.current.rotation.y += 0.01
        // })
        

        return <>
            <RigidBody 
                colliders="cuboid"
                position={props.position}
                rotation-x={Math.random()}
                rotation-y={Math.random()}
                rotation-z={Math.random()}
            >
                <group  ref={x} castShadow>
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
        // console.log(e.eventObject.position.x)
        const x = e.eventObject.position.x
        const z = e.eventObject.position.z
        // console.log(x, z)

        const position = e.eventObject.position
        const xCount = xShapes.length
        const oCount = oShapes.length
        if(state.current === 'x')
        {
            setXShapes(
                [
                    ...xShapes,
                    <Xshape 
                        key={xCount}
                        position={[position.x, position.y + 2, position.z]}
                    />
                ]
            )
            setBoard(x, z)
            changeTurn()
            // e.eventObject.position.y = -1000
           
        } else {
            setOShapes(
                [
                    ...oShapes,
                    <Oshape 
                        key={oCount}
                        position={[position.x, position.y + 2, position.z]}
                    />
                ]
            )
            setBoard(x, z)
            changeTurn()
            // e.eventObject.position.y = -1000
        }
        
        e.stopPropagation()
    }

    return <>
        {[...xShapes]}
        {[...oShapes]}
        <mesh
            ref={topLeft} 
            geometry={geometry}
            material={material}
            position={[-3.25, 1, -3.25]}
            onClick={action}
        />
        <mesh
            onClick={action}
            ref={topMid}  
            geometry={geometry}
            material={material}
            position={[0, 1, -3.25]}
        />
        <mesh
            onClick={action}
            ref={topRight} 
            geometry={geometry}
            material={material}
            position={[3.25, 1, -3.25]}
        />
        <mesh
            onClick={action}
            ref={midLeft} 
            geometry={geometry}
            material={material}
            position={[-3.25, 1, 0]}
        />
        <mesh
            onClick={action}
            ref={midMid} 
            geometry={geometry}
            material={material}
            position={[0, 1, 0]}
        />
        <mesh
            onClick={action}
            ref={midRight} 
            geometry={geometry}
            material={material}
            position={[3.25, 1, 0]}
        />
        <mesh
            onClick={action}
            ref={bottomLeft} 
            geometry={geometry}
            material={material}
            position={[-3.25, 1, 3.25]}
        />
        <mesh
            onClick={action}
            ref={bottomMid} 
            geometry={geometry}
            material={material}
            position={[0, 1, 3.25]}
        />
        <mesh
            onClick={action}
            ref={bottomRight} 
            geometry={geometry}
            material={material}
            position={[3.25, 1, 3.25]}
        />
    </>
}