import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

export default function Xshape(props)
{
    const xMaterial = new THREE.MeshStandardMaterial({color: 0xffff10, metalness: 0, roughness: 0})
    const xGeometry = new THREE.BoxGeometry(2, 0.5, 0.5)

        return <>
            <RigidBody 
                colliders="cuboid"
                position={props.position}
                rotation-x={Math.random()}
                rotation-y={Math.random()}
                rotation-z={Math.random()}
                restitution = {0.5}
                friction = {0.1}
            >
                <group castShadow>
                    <mesh
                        geometry={xGeometry}
                        material={xMaterial}
                        rotation-z={Math.PI * 0.25}
                        >
                        <meshBasicMaterial color={ [ 1.5, 1.5, 4 ] } toneMapped={ false }/>
                    </mesh>
                    <mesh
                        geometry={xGeometry}
                        // material={xMaterial}
                        rotation-z={-Math.PI * 0.25}
                    >
                        <meshBasicMaterial color={ [ 1.5, 1.5, 4 ] } toneMapped={ false }/>
                    </mesh>
                </group>
            </RigidBody>  
        </>
}