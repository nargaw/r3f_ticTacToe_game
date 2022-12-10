import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

export default function CreateX()
{
    const xMaterial = new THREE.MeshStandardMaterial({color: 0x00ffff})
    const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)
    return <>
        <RigidBody
            type="dynamic"
            position={[0, 20, 0]}
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