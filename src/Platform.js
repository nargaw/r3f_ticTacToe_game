import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'

export default function Platform()
{
    const platformGeometry = new THREE.BoxGeometry(12, 12, 0.5)
    const platformMaterial = new THREE.MeshStandardMaterial({color: 0x5aa9e6})
    const gridGeometry = new THREE.BoxGeometry(0.25, 2, 10)


    return <> 
        <RigidBody 
            type="fixed"
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
        </RigidBody>
    </>
}