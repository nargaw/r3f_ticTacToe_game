import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'
import Lights from './Lights.js'
import Level from './Level.js'

export default function Experience()
{
    return <>
        <OrbitControls makeDefault />
        <Lights />
        <Level />
    </>
}