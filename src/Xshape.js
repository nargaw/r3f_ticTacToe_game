import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

export default function Xshape(props)
{
    const xMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})
    const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)

        return <>
            <RigidBody 
                colliders="cuboid"
                position={props.position}
                rotation-x={Math.random()}
                rotation-y={Math.random()}
                rotation-z={Math.random()}
                restitution = {0.5}
            >
                <group castShadow>
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={Math.PI * 0.25}
                    />
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={-Math.PI * 0.25}
                    />
                </group>
            </RigidBody>  
        </>
}