import * as THREE from 'three'

export default function Level()
{

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: 'red'})

    return <>
        <mesh 
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[50, 50, 1]}
            rotation-x = {-Math.PI * 0.5}
            position-y = {-25}
        />
        <mesh 
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[50, 50, 1]}
            rotation-x = {-Math.PI * 0.5}
            position-y = {25}
        />
        <mesh 
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[50, 50, 1]}
            rotation-y = {-Math.PI * 0.5}
            position-x = {25}
        />
        <mesh 
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[50, 50, 1]}
            rotation-y = {-Math.PI * 0.5}
            position-x = {-25}
        />
        <mesh 
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[50, 50, 1]}
            rotation-x = {-Math.PI * 0.5}
            position-y = {-25}
        />
        <mesh 
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[50, 50, 1]}
            rotation-z = {-Math.PI * 0.5}
            position-z = {-25}
        />
        <mesh 
            geometry={boxGeometry}
            material={wallMaterial}
            scale={[50, 50, 1]}
            rotation-z = {-Math.PI * 0.5}
            position-z = {25}
        />
    </>
}