import * as THREE from 'three'
import { useRef } from 'react'
import { RigidBody } from '@react-three/rapier'

export function CreateX()
{

    const xMaterial = new THREE.MeshStandardMaterial({color: 0x00ffff})

    const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)
    const oGeometry = new THREE.TorusGeometry(0.5, 0.25, 32, 32)

    return <>
            <RigidBody
                ref={newMesh}
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

export default function Game()
{

    const newMesh = useRef()
    console.log(newMesh)

    const geometry = new THREE.BoxGeometry(3, 2, 3)
    const material = new THREE.MeshBasicMaterial({ wireframe: true})
    material.visible = true

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
        
    }

    const action = (e) => 
    {
        createX()
        let position = e.eventObject.position
        console.log(position)
        e.stopPropagation()
        
        return <>
            <CreateX />
        </>
    }

    return <>
        <mesh
            ref={topLeft} 
            geometry={geometry}
            material={material}
            position={[-3.25, 1, -3.25]}
            onClick={() => {
                <CreateX />
            }}
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