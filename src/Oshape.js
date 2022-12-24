import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { RoundCuboidCollider } from '@react-three/rapier'

export default function Oshape(props)
    {
        
        const oGeometry = new THREE.TorusGeometry(0.5, 0.25, 32, 32)
        const oMaterial = new THREE.MeshStandardMaterial({color: 0xff0000})

        return <>
            <RigidBody
                colliders={false}
                position={props.position}
                rotation-x={Math.random()}
                rotation-y={Math.random()}
                rotation-z={Math.random()}
            >
                <RoundCuboidCollider args={[0.5, 0.425, 0.0125, 0.25]}/>
                <mesh
                    castShadow 
                    geometry={oGeometry}
                    material={oMaterial}
                />
            </RigidBody>
        </>
    }