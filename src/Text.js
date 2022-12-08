import { Text3D, Center } from "@react-three/drei"
import { useRef } from "react"

export default function Text()
{
    const text = useRef()
    console.log(text)

    return <>
        <Center>
            <Text3D
                ref={text}
                font="./Gugi_Regular.json"
                scale={[6, 6, 1]}
                rotation-y = {-Math.PI}
                position={[0, 10, 1]}
                size={ 0.75 }
                height={ 2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.05 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                TIC TAC TOE
                <meshNormalMaterial />
            </Text3D>
        </Center>   
    </>
}