// import ThreeScene from "../Threejs Scene/ThreeScene";
// import { Canvas } from 'react-three-fiber'

export default function HomeScreen() {
    return (
        <>
            {/* <Canvas>
                <ThreeScene />

            </Canvas> */}
            <img src={require('../img/hero.png')} alt="hero" style={{width:'500px',height:"100%" }}   />
            <h1>Tech Bros</h1>
        </>
    )
}