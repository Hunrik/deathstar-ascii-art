import * as THREE from 'three'
// import './STLLoader'
import './OBJLoader'
import './MTLLoader'
import './OBJMTLLoader'
// import './TGALoader'
import './AsciiEffect'
// import './ColladaLoader'
import AbstractApplication from 'views/AbstractApplication'

class Main extends AbstractApplication {
  constructor () {
    super()
    this.init()
  }
  async init () {
    const deathstar = await this.OBJMTLLoader('assets/models/Death_Star.obj', 'assets/models/Death_Star.mtl')
    const texture = await this.loadTexture('assets/textures/Death_Star_D.gif')
    const mat1 = deathstar.children[0].children[0].material
    const mat2 = deathstar.children[0].children[1].material
    mat1.opacity = 0.1
    mat2.map = texture
    mat2.emissive = new THREE.Color(0xFFFFFF)
    mat2.emissiveIntensity = 0.2
    deathstar.rotation.x = -0.8122628038674867
    deathstar.rotation.y = -0.8145858626991419
    deathstar.rotation.z = 0.3710879261288657
    const scale = 10
    deathstar.position.x = 0.5 * scale
    deathstar.position.y = -1 * scale
    deathstar.position.z = 1.9 * scale
    deathstar.scale.set(scale, scale, scale)
    this._scene.add(deathstar)
    this.deathstar = deathstar

    // / Reference cube
    // const cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
    // const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000})
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // this._scene.add(cube)

    this.effect = new THREE.AsciiEffect(this._renderer, undefined, {resolution: 0.150, invert: true})
    this.effect.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.effect.domElement)

    this._controls = new THREE.OrbitControls(this._camera, this.effect.domElement)
    this._controls.enableZoom = false
    const ambientLight = new THREE.AmbientLight(0xF4F4F4)
    this._scene.add(ambientLight)
    // this.init2()
    this.animate()
  }
  animate () {
    requestAnimationFrame(this.animate.bind(this))
    // console.log(this.effect)
    this._controls.update()
    // this._renderer.render(this._scene, this._camera)
    this.effect.render(this._scene, this._camera)

    // this.camera2.position.copy(this._camera.position)
    // this.camera2.position.sub(this._controls.target) // added by @libe
    // this.camera2.position.setLength(200)
    // this.camera2.lookAt(this.scene2.position)
    // this.renderer2.render(this.scene2, this.camera2)
    // this.deathstar.rotation.y += 0.1
    // console.log(camPos)
    // this.deathstar.rotation.y += 0.01
    // console.log(this._camera.position)
  }
  STLLoader (model) {
    return new Promise((resolve) => {
      const loader = new THREE.STLLoader()
      loader.load(model, resolve)
    })
  }
  loadObj (model) {
    return new Promise((resolve) => {
      const loader = new THREE.OBJLoader()
      loader.load(model, resolve)
    })
  }
  colladaLoader (model) {
    return new Promise((resolve) => {
      const loader = new THREE.ColladaLoader()
      loader.load(model, resolve)
    })
  }
  loadTexture (texture) {
    return new Promise((resolve) => {
      const loader = new THREE.TextureLoader()
      loader.load(texture, resolve)
    })
  }
  mtlLoader (url) {
    return new Promise(resolve => {
      const mtlLoader = new THREE.MTLLoader()
      mtlLoader.load(url, resolve)
    })
  }
  OBJMTLLoader (obj, mtl) {
    return new Promise(resolve => {
      const loader = new THREE.OBJMTLLoader()
      loader.load(obj, mtl, resolve)
    })
  }
  init2 () {
    const CANVAS_WIDTH = 200
    const CANVAS_HEIGHT = 200
    const container2 = document.getElementById('inset')
    this.renderer2 = new THREE.WebGLRenderer()
    this.renderer2.setClearColor(0xf0f0f0, 1)
    this.renderer2.setSize(CANVAS_WIDTH, CANVAS_HEIGHT)
    container2.appendChild(this.renderer2.domElement)

    // scene
    this.scene2 = new THREE.Scene()

    // camera
    this.camera2 = new THREE.PerspectiveCamera(50, CANVAS_WIDTH / CANVAS_HEIGHT, 1, 1000)
    this.camera2.up = this._camera.up // important!

    // axes
    const axes2 = new THREE.AxisHelper(100)
    this.scene2.add(axes2)
  }
}

export default Main
