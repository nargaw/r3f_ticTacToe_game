import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

export default function Game()
{
    const geometry = new THREE.BoxGeometry(3, 2, 3)
    const material = new THREE.MeshBasicMaterial({ wireframe: true})
    // material.visible = false
    const newMaterial = new THREE.MeshNormalMaterial()
    const xMaterial = new THREE.MeshStandardMaterial({color: 0x00ffff})
    const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)
    

    const topLeft = useRef()
    const topMid = useRef()
    const topRight = useRef()
    const midLeft = useRef()
    const midMid = useRef()
    const midRight = useRef()
    const bottomLeft = useRef()
    const bottomMid = useRef()
    const bottomRight = useRef()

    function Xshape(props)
    {
        const xMaterial = new THREE.MeshStandardMaterial({color: 0x00ffff})
        const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)

        const x = useRef()
        // useFrame(() => {
        //     // x.current.rotation.x = x.current.rotation.y += 0.01
        // })
        console.log(x)

        return <>
            <RigidBody 
                // {...props}
                colliders="cuboid"
                position={props.position}
                rotation-x={Math.random()}
                rotation-y={Math.random()}
                rotation-z={Math.random()}
            >
                <group  ref={x}>
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={Math.PI * 0.25}
                    >
                        <meshNormalMaterial />
                    </mesh>
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={-Math.PI * 0.25}
                    >
                        <meshNormalMaterial />
                    </mesh>
                </group>
            </RigidBody>  
        </>
    }

    const [xShapes, setXShapes ] = useState([])
    

    const action = (e) => 
    {
        const position = e.eventObject.position
        console.log(e.eventObject)
        let newPosition={...position}
        // console.log(newPosition)
        newPosition.y += 3
        // console.log(newPosition.y)
        const xCount = xShapes.length
        setXShapes(
            [
                ...xShapes,
                <Xshape 
                    key={xCount}
                    position={[position.x, position.y + 2, position.z]}
                />
            ]
        )
        // console.log('creating x')  
        e.stopPropagation()
    }

    return <>
        {[...xShapes]}
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