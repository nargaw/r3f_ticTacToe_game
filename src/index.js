import './style.css'
import ReactDOM  from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { StrictMode } from 'react'
import { Leva } from 'leva'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Leva collapsed/>
        <Canvas
            camera={ {
                fov: 75,
                near: 0.01,
                far: 200,
                position: [ 0, 10, 20 ]
            } }
        >
            <Experience />
        </Canvas>
    </StrictMode> 
)