import { Text3D, Center } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import useGame from "./stores/useGame"

export default function Text()
{
    const text = useRef()
    const getWinner = useGame(state => state.getWinner)
    console.log(getWinner())
    // console.log(text)

    return <>
        {/* <Center> */}
            {/* <RigidBody
                type="fixed"
                position={[0, 0, 24]}
            > */}
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
            {/* </RigidBody> */}
            
        {/* </Center>    */}
    </>
}