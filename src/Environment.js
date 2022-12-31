import { RigidBody } from '@react-three/rapier'
import { Center, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

export default function Environment()
{

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: '#444444', metalness: 0, roughness: 0})

    return <>
        <Center>
            <Sparkles 
                size={6}
                scale={[25, 25, 25]}
                position-y={1}
                speed={2.5}
                count={60}
            />
        </Center>
        <RigidBody
            type="fixed"
            colliders="cuboid"
            restitution={0.2}
            friction={0.2}
        >
            <mesh
                receiveShadow 
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[50, 50, 1]}
                rotation-x = {-Math.PI * 0.5}
                position-y = {-25}
            />
            {/* <mesh
                // receiveShadow 
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[50, 50, 1]}
                rotation-x = {-Math.PI * 0.5}
                position-y = {25}
            /> */}
            <mesh
                receiveShadow 
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[50, 50, 1]}
                rotation-y = {-Math.PI * 0.5}
                position-x = {25}
                position-y = {0}
            />
            <mesh
                receiveShadow 
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[50, 50, 1]}
                rotation-y = {-Math.PI * 0.5}
                position-x = {-25}
                position-y = {0}
            />

            <mesh
                receiveShadow 
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[50, 50, 1]}
                rotation-z = {-Math.PI * 0.5}
                position-z = {-25}
                position-y = {0}
            />
            <mesh
                receiveShadow 
                geometry={boxGeometry}
                material={wallMaterial}
                scale={[50, 50, 1]}
                rotation-z = {-Math.PI * 0.5}
                position-z = {25}
                position-y = {0}
            />
        </RigidBody>
        
    </>
}