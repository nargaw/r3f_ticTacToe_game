import { Text3D, Center } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef, useEffect } from "react"
import useGame from "./stores/useGame"

export default function Text()
{
    const text = useRef()
    const winner = useRef()
    const getWinner = useGame(state => state.getWinner)
    console.log(getWinner())
    // console.log(text)

    return <>
        
        <Center
            position={[0, 5, -24]}
        >
            <Text3D
                ref={text}
                font="./Offside_Regular.json"
                scale={[6, 6, 1]}
                rotation-y = {Math.PI * 2}
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
                <meshStandardMaterial color={0x7fc8f8}/>
            </Text3D>
        </Center>

        <Center
            position={[0, 5, 24]}
        >
            <Text3D
                ref={text}
                font="./Offside_Regular.json"
                scale={[6, 6, 1]}
                rotation-y = {Math.PI}
                size={ 0.75 }
                height={ 2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.05 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                @nate_dev_
                <meshStandardMaterial color={0x7fc8f8}/>
            </Text3D>
        </Center>

        <Center
            position={[24, 15, 0]}
        >
            <Text3D
                ref={text}
                font="./Offside_Regular.json"
                scale={[4, 4, 1]}
                rotation-y = {-Math.PI * 0.5}
                size={ 0.75 }
                height={ 2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.05 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                Winner is: 
                <meshStandardMaterial color={0x7fc8f8}/>
            </Text3D>
        </Center>

        <Center
                position={[24, 5, 0]}
            >
                <Text3D
                    ref={winner}
                    font="./Offside_Regular.json"
                    scale={[10, 10, 1]}
                    rotation-y = {-Math.PI * 0.5}
                    size={ 0.75 }
                    height={ 2 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.05 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                >
                    
                    {getWinner()}
                    <meshStandardMaterial color={0x7fc8f8}/>
                </Text3D>
        </Center>


        <Center
            position={[-24, 5, 0]}
        >
            <Text3D
                ref={text}
                font="./Offside_Regular.json"
                scale={[15, 15, 1]}
                rotation-y = {Math.PI * 0.5}
                size={ 0.75 }
                height={ 2 }
                curveSegments={ 12 }
                bevelEnabled
                bevelThickness={ 0.05 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                #R3F
                <meshStandardMaterial color={0x7fc8f8}/>
            </Text3D>
        </Center>

        
           
    </>
}