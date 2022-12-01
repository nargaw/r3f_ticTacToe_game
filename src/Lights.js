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
        <ambientLight intensity={0.5} />
    </>
}