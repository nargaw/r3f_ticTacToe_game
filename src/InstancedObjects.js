import {RoundCuboidCollider, BallCollider, CuboidCollider, InstancedRigidBodies, RigidBody } from '@react-three/rapier'
import { useRef, useMemo } from 'react'
import *  as THREE from 'three'

export default function InstancedObjects()
{

    const torusGeometry = new THREE.TorusGeometry(2, 1., 32, 32)
    const xGeometry = new THREE.BoxGeometry(8, 2, 2)
    const material = new THREE.MeshStandardMaterial({color: 0x7fc8f8})

    const torusCount = 150
    const torusRefs = useRef()

    const torusTransforms = useMemo(() => 
    {
        const positions = []
        const rotations = []
        const scales = []

        for (let i = 0; i < torusCount; i++)
        {
            positions.push([
                (Math.random() - 0.5) * 4,
                15 * i,
                (Math.random() - 0.5) - 15 
            ])
            rotations.push([0, 0, 0])
            scales.push([1, 1, 1])
        }

        return { positions, rotations, scales}
    }, [])


    return <>
        {[...Array(150)].map((value, index) =>
        <RigidBody
            key={index}
            restitution={0.25}
            friction={0.1}
            colliders="cuboid"
            position={[
                (Math.random() - 0.5) * 4,
                15 * index,
                (Math.random() - 0.5) + 15
            ]}
        >
            <group>
                <mesh 
                    geometry={xGeometry}
                    material={material}
                    rotation-z={-Math.PI * 0.25}
                />
                <mesh
                    geometry={xGeometry}
                    material={material}
                    rotation-z={Math.PI * 0.25}
                />
            </group>
        </RigidBody>  
        
        )}
        
        <InstancedRigidBodies
            positions={torusTransforms.positions}
            rotations={torusTransforms.rotations}
            scales={torusTransforms.scales}
            colliders= {false}
        >
            <RoundCuboidCollider args={[2.0, 1.25, 0.125, 1.25]}/>
            <instancedMesh
                ref={torusRefs}
                args={[torusGeometry, material, torusCount]}
                castShadow
            />   
        </InstancedRigidBodies>
    </>
}