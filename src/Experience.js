import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'

export default function Experience()
{
    return <>
        <OrbitControls makeDefault />

        <mesh>
            <cylinderGeometry
                args={[5, 5, 0.25, 6]}
            />
            <meshNormalMaterial />
        </mesh>
        <mesh
            position={[9., 0, 0]}
        >
            <cylinderGeometry
                args={[5, 5, 0.25, 6]}
            />
            <meshNormalMaterial />
        </mesh>
    </>
}