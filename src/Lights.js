import { useRef } from "react"

export default function Lights()
{
    const light = useRef()

    return <>
        <directionalLight 
            ref={light}
            castShadow
            position={[15, 20, 1]}
            intensity={1.5}
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 10 }
            shadow-camera-right={ 10 }
            shadow-camera-bottom={ - 10 }
            shadow-camera-left={ - 10 }
        />
        <pointLight
            castShadow 
            color={'#ffffff'}
            position={[10, 20, 0]}
            intensity={0.4}
        />
        
        <ambientLight intensity={0.1} />
    </>
}