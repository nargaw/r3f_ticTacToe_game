import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

export default function Environment()
{

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: 'red'})

    return <>
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