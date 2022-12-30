import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'
import useGame from './stores/useGame'
import { useFrame, addEffect } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'

export default function Platform()
{
    const platformGeometry = new THREE.BoxGeometry(12, 12, 0.5)
    const platformMaterial = new THREE.MeshStandardMaterial({color: 0x5aa9e6})
    const gridGeometry = new THREE.BoxGeometry(0.25, 2, 10)
    const platform  = useRef()
    const flipBoard = useGame(state => state.flipBoard)
    const reset = useGame(state => state.reset)

    useEffect(() =>
    {
        const unsubscribeEffect = addEffect(() =>
        {
            const state = useGame.getState()
            let elapsedTime = 0
            if(state.flipBoard === true)
                elapsedTime = Date.now() - state.flipStartTime
                elapsedTime /= 1000
                const eulerRotation = new THREE.Euler(0, 0, Math.sin(elapsedTime) * 2)
                const quaternionRotation = new THREE.Quaternion()
                quaternionRotation.setFromEuler(eulerRotation)
                platform.current.setNextKinematicRotation(quaternionRotation)
                if(elapsedTime >= 6)
                {
                   reset()
                } 
        })

        return () =>
        {
            unsubscribeEffect()
        }
    }, [])


    return <> 
        <RigidBody
            ref={platform} 
            type="kinematicPosition"
            colliders="cuboid"
            restitution={0.2}
            friction={0}
        >
            <mesh 
                geometry={platformGeometry}
                material={platformMaterial}
                rotation-x={-Math.PI * 0.5}
                castShadow
                receiveShadow
            />
 
            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[-1.5, 1, 0]}
                castShadow
            />
            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[1.5, 1, 0]}
                castShadow
            />
            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[0., 1, -1.5]}
                rotation-y={-Math.PI * 0.5}
                castShadow
            />
            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[0., 1, 1.5]}
                rotation-y={-Math.PI * 0.5}
                castShadow
            />

            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[-1.5, -1, 0]}
                castShadow
            />
            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[1.5, -1, 0]}
                castShadow
            />
            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[0., -1, -1.5]}
                rotation-y={-Math.PI * 0.5}
                castShadow
            />
            <mesh 
                geometry={gridGeometry}
                material={platformMaterial}
                position={[0., -1, 1.5]}
                rotation-y={-Math.PI * 0.5}
                castShadow
            />
            
        </RigidBody>
    </>
}