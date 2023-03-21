import * as THREE from "tree";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui'

export default function ThreeScene () {

    //Debug
    const gui = new dat.GUI()

    // //Canvas 
    // const canvas = document.qu

    //Scene
    const scene = new THREE.Scene()

    //Objects 

    const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);

    //Materials

    const material = new THREE.MeshBasicMaterial ()
    material.color = new THREE.Color(0xff0000)

    //Mesh
    const sphere = new THREE.Mesh(geometry, material)

    scene.add(sphere)

    //Lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1)
    pointLight.position.x = 2
    pointLight.position.y = 3
    pointLight.position.z = 4
    scene.add(pointLight)

    //Sizes
    // const sizes = {
    //     width: win
    // }


}