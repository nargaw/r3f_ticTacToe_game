import * as THREE from 'three'
import { useRef } from 'react'
import { RigidBody } from '@react-three/rapier'
import { CreateX } from './CreateX'

export default function Game()
{

    const geometry = new THREE.BoxGeometry(3, 2, 3)
    const material = new THREE.MeshBasicMaterial({ wireframe: true})
    material.visible = true

    const xMaterial = new THREE.MeshStandardMaterial({color: 0x00ffff})

    const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)
    const oGeometry = new THREE.TorusGeometry(0.5, 0.25, 32, 32)

    let array = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    const turns = ['x', 'o']
    let currentTurn = turns[0]

    const topLeft = useRef()
    const topMid = useRef()
    const topRight = useRef()
    const midLeft = useRef()
    const midMid = useRef()
    const midRight = useRef()
    const bottomLeft = useRef()
    const bottomMid = useRef()
    const bottomRight = useRef()

    const createX = () => {
        return <>
            <RigidBody
                type="dynamic"
                position={[0, 15, 0]}
                colliders="cuboid"
            >
                <group>
                    <mesh 
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={-Math.PI * 0.25}
                    />
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={Math.PI * 0.25}
                    />
                </group>
            </RigidBody>   
        </>
    }

    const action = (e) => 
    {
        let position = e.eventObject.position
        console.log(e.eventObject.position)
        e.stopPropagation()

        return <>
            {console.log('here')}
            <CreateX />
            {console.log('here too')}
        </>
    }

    return <>
        <mesh
            onClick={action}
            ref={topLeft} 
            geometry={geometry}
            material={material}
            position={[-3.25, 1, -3.25]}
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