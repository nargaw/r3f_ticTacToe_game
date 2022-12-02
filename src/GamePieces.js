import { BallCollider, CuboidCollider, InstancedRigidBodies, RigidBody } from '@react-three/rapier'
import { useRef, useMemo } from 'react'
import *  as THREE from 'three'

export default function GamePieces()
{

    const torusGeometry = new THREE.TorusGeometry(1, 0.5, 32, 32)
    const material = new THREE.MeshStandardMaterial({color: 0x7fc8f8})

    const torusCount = 50
    const torusRefs = useRef()

    const torusTransforms = useMemo(() => 
    {
        const positions = []
        const rotations = []
        const scales = []

        for (let i = 0; i < torusCount; i++)
        {
            positions.push([
                (Math.random() - 0.5) * 8,
                5,
                (Math.random() - 0.5) * 8
            ])
            rotations.push([0, 0, 0])
            scales.push([1, 1, 1])
        }

        return { positions, rotations, scales}
    }, [])

    return <>
        <RigidBody
            type="fixed"
            restitution={0.25}
            friction={0}
            colliders={false}
            position={[0, 15, 0]}
        > 
            <mesh
                geometry={torusGeometry}
                material={material}
                
            />
            <CuboidCollider args={[0.5, 1.5, 0.5]}/>
            <CuboidCollider args={[1.5, 0.5, 0.5]}/>
            <BallCollider args={[0.75]} position={[0.75, 0.75, 0]}/>
            <BallCollider args={[0.75]} position={[-0.75, 0.75, 0]}/>
            <BallCollider args={[0.75]} position={[0.75, -0.75, 0]}/>
            <BallCollider args={[0.75]} position={[-0.75, -0.75, 0]}/>
        </RigidBody>
        <InstancedRigidBodies
            positions={torusTransforms.positions}
            rotations={torusTransforms.rotations}
            scales={torusTransforms.scales}
            colliders={false}
        >
            <CuboidCollider args={[0.5, 1.5, 0.5]}/>
            <CuboidCollider args={[1.5, 0.5, 0.5]}/>
            <BallCollider args={[0.75]} position={[0.75, 0.75, 0]}/>
            <BallCollider args={[0.75]} position={[-0.75, 0.75, 0]}/>
            <BallCollider args={[0.75]} position={[0.75, -0.75, 0]}/>
            <BallCollider args={[0.75]} position={[-0.75, -0.75, 0]}/>
            <instancedMesh
                ref={torusRefs}
                args={[torusGeometry, material, torusCount]}
                castShadow
            >
                
            </instancedMesh>
            
        </InstancedRigidBodies>
    </>
}