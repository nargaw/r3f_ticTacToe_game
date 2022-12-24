import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { useGLTF } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import Lights from './Lights.js'
import Environment from './Environment.js'
import Platform from './Platform.js'
import InstancedObjects from './InstancedObjects.js'
import Text from './Text.js'
import Game from './Game.js'


export default function Experience()
{
    return <>
        <OrbitControls makeDefault />
        <Physics>
            {/* <Debug /> */}
            <Lights />
            <Environment />
            <Platform />
            {/* <InstancedObjects /> */}
            <Text />
            <Game />
        </Physics>
       
        
    </>
}