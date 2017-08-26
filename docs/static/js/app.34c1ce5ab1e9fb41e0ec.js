webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_css_style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_js_main__ = __webpack_require__(7);
// import Main from 'js/mainWagner'
// import Main from 'js/mainVR'
new __WEBPACK_IMPORTED_MODULE_1_js_main__["a" /* default */]();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "body {\n    width: 100%;\n    height: 100%;\n    background-color: #000;\n    color: #fff;\n    margin: 0px;\n    padding: 0;\n    overflow: hidden;\n}\n\n/* Position the button VR on the bottom of the page. */\n#ui {\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    font-family: 'Karla', sans-serif;\n    z-index: 1;\n}\n\na#magic-window {\n    display: block;\n    color: white;\n    margin-top: 1em;\n}\n#inset  {\n    width: 200px;\n    height: 200px;\n    background-color: #fff; /* or transparent; will show through only if renderer alpha: true */\n    border: 1px solid black; /* or none; */\n    margin: 20px;\n    padding: 0px;\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    z-index: 100;\n}", ""]);

// exports


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OBJLoader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__OBJLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__OBJLoader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MTLLoader__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MTLLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__MTLLoader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OBJMTLLoader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__OBJMTLLoader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__OBJMTLLoader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AsciiEffect__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AsciiEffect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__AsciiEffect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_views_AbstractApplication__ = __webpack_require__(12);
function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{return Promise.resolve(value).then(function(value){step("next",value);},function(err){step("throw",err);});}}return step("next");});};}// import './STLLoader'
// import './TGALoader'
// import './ColladaLoader'
class Main extends __WEBPACK_IMPORTED_MODULE_5_views_AbstractApplication__["a" /* default */]{constructor(){super();this.init();}init(){var _this=this;return _asyncToGenerator(function*(){const deathstar=yield _this.OBJMTLLoader('assets/models/Death_Star.obj','assets/models/Death_Star.mtl');const texture=yield _this.loadTexture('assets/textures/Death_Star_D.gif');const mat1=deathstar.children[0].children[0].material;const mat2=deathstar.children[0].children[1].material;mat1.opacity=0.1;mat2.map=texture;mat2.emissive=new __WEBPACK_IMPORTED_MODULE_0_three__["Color"](0xFFFFFF);mat2.emissiveIntensity=0.2;deathstar.rotation.x=-0.8122628038674867;deathstar.rotation.y=-0.8145858626991419;deathstar.rotation.z=0.3710879261288657;const scale=10;deathstar.position.x=0.5*scale;deathstar.position.y=-1*scale;deathstar.position.z=1.9*scale;deathstar.scale.set(scale,scale,scale);_this._scene.add(deathstar);_this.deathstar=deathstar;// / Reference cube
// const cubeGeometry = new THREE.CubeGeometry(4, 4, 4)
// const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000})
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
// this._scene.add(cube)
_this.effect=new __WEBPACK_IMPORTED_MODULE_0_three__["AsciiEffect"](_this._renderer,undefined,{resolution:0.150,invert:true});_this.effect.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(_this.effect.domElement);_this._controls=new __WEBPACK_IMPORTED_MODULE_0_three__["OrbitControls"](_this._camera,_this.effect.domElement);_this._controls.enableZoom=false;const ambientLight=new __WEBPACK_IMPORTED_MODULE_0_three__["AmbientLight"](0xF4F4F4);_this._scene.add(ambientLight);// this.init2()
_this.animate();})();}animate(){requestAnimationFrame(this.animate.bind(this));// console.log(this.effect)
this._controls.update();// this._renderer.render(this._scene, this._camera)
this.effect.render(this._scene,this._camera);// this.camera2.position.copy(this._camera.position)
// this.camera2.position.sub(this._controls.target) // added by @libe
// this.camera2.position.setLength(200)
// this.camera2.lookAt(this.scene2.position)
// this.renderer2.render(this.scene2, this.camera2)
// this.deathstar.rotation.y += 0.1
// console.log(camPos)
// this.deathstar.rotation.y += 0.01
// console.log(this._camera.position)
}STLLoader(model){return new Promise(resolve=>{const loader=new __WEBPACK_IMPORTED_MODULE_0_three__["STLLoader"]();loader.load(model,resolve);});}loadObj(model){return new Promise(resolve=>{const loader=new __WEBPACK_IMPORTED_MODULE_0_three__["OBJLoader"]();loader.load(model,resolve);});}colladaLoader(model){return new Promise(resolve=>{const loader=new __WEBPACK_IMPORTED_MODULE_0_three__["ColladaLoader"]();loader.load(model,resolve);});}loadTexture(texture){return new Promise(resolve=>{const loader=new __WEBPACK_IMPORTED_MODULE_0_three__["TextureLoader"]();loader.load(texture,resolve);});}mtlLoader(url){return new Promise(resolve=>{const mtlLoader=new __WEBPACK_IMPORTED_MODULE_0_three__["MTLLoader"]();mtlLoader.load(url,resolve);});}OBJMTLLoader(obj,mtl){return new Promise(resolve=>{const loader=new __WEBPACK_IMPORTED_MODULE_0_three__["OBJMTLLoader"]();loader.load(obj,mtl,resolve);});}init2(){const CANVAS_WIDTH=200;const CANVAS_HEIGHT=200;const container2=document.getElementById('inset');this.renderer2=new __WEBPACK_IMPORTED_MODULE_0_three__["WebGLRenderer"]();this.renderer2.setClearColor(0xf0f0f0,1);this.renderer2.setSize(CANVAS_WIDTH,CANVAS_HEIGHT);container2.appendChild(this.renderer2.domElement);// scene
this.scene2=new __WEBPACK_IMPORTED_MODULE_0_three__["Scene"]();// camera
this.camera2=new __WEBPACK_IMPORTED_MODULE_0_three__["PerspectiveCamera"](50,CANVAS_WIDTH/CANVAS_HEIGHT,1,1000);this.camera2.up=this._camera.up;// important!
// axes
const axes2=new __WEBPACK_IMPORTED_MODULE_0_three__["AxisHelper"](100);this.scene2.add(axes2);}}/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(THREE) {/**
 * @author mrdoob / http://mrdoob.com/
 */THREE.OBJLoader=function(manager){this.manager=manager!==undefined?manager:THREE.DefaultLoadingManager;this.materials=null;this.regexp={// v float float float
vertex_pattern:/^v\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,// vn float float float
normal_pattern:/^vn\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,// vt float float
uv_pattern:/^vt\s+([\d\.\+\-eE]+)\s+([\d\.\+\-eE]+)/,// f vertex vertex vertex
face_vertex:/^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,// f vertex/uv vertex/uv vertex/uv
face_vertex_uv:/^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
face_vertex_uv_normal:/^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,// f vertex//normal vertex//normal vertex//normal
face_vertex_normal:/^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,// o object_name | g group_name
object_pattern:/^[og]\s*(.+)?/,// s boolean
smoothing_pattern:/^s\s+(\d+|on|off)/,// mtllib file_reference
material_library_pattern:/^mtllib /,// usemtl material_name
material_use_pattern:/^usemtl /};};THREE.OBJLoader.prototype={constructor:THREE.OBJLoader,load:function(url,onLoad,onProgress,onError){var scope=this;var loader=new THREE.FileLoader(scope.manager);loader.setPath(this.path);loader.load(url,function(text){onLoad(scope.parse(text));},onProgress,onError);},setPath:function(value){this.path=value;},setMaterials:function(materials){this.materials=materials;},_createParserState:function(){var state={objects:[],object:{},vertices:[],normals:[],uvs:[],materialLibraries:[],startObject:function(name,fromDeclaration){// If the current object (initial from reset) is not from a g/o declaration in the parsed
// file. We need to use it for the first parsed g/o to keep things in sync.
if(this.object&&this.object.fromDeclaration===false){this.object.name=name;this.object.fromDeclaration=fromDeclaration!==false;return;}var previousMaterial=this.object&&typeof this.object.currentMaterial==='function'?this.object.currentMaterial():undefined;if(this.object&&typeof this.object._finalize==='function'){this.object._finalize(true);}this.object={name:name||'',fromDeclaration:fromDeclaration!==false,geometry:{vertices:[],normals:[],uvs:[]},materials:[],smooth:true,startMaterial:function(name,libraries){var previous=this._finalize(false);// New usemtl declaration overwrites an inherited material, except if faces were declared
// after the material, then it must be preserved for proper MultiMaterial continuation.
if(previous&&(previous.inherited||previous.groupCount<=0)){this.materials.splice(previous.index,1);}var material={index:this.materials.length,name:name||'',mtllib:Array.isArray(libraries)&&libraries.length>0?libraries[libraries.length-1]:'',smooth:previous!==undefined?previous.smooth:this.smooth,groupStart:previous!==undefined?previous.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:false,clone:function(index){var cloned={index:typeof index==='number'?index:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:false};cloned.clone=this.clone.bind(cloned);return cloned;}};this.materials.push(material);return material;},currentMaterial:function(){if(this.materials.length>0){return this.materials[this.materials.length-1];}return undefined;},_finalize:function(end){var lastMultiMaterial=this.currentMaterial();if(lastMultiMaterial&&lastMultiMaterial.groupEnd===-1){lastMultiMaterial.groupEnd=this.geometry.vertices.length/3;lastMultiMaterial.groupCount=lastMultiMaterial.groupEnd-lastMultiMaterial.groupStart;lastMultiMaterial.inherited=false;}// Ignore objects tail materials if no face declarations followed them before a new o/g started.
if(end&&this.materials.length>1){for(var mi=this.materials.length-1;mi>=0;mi--){if(this.materials[mi].groupCount<=0){this.materials.splice(mi,1);}}}// Guarantee at least one empty material, this makes the creation later more straight forward.
if(end&&this.materials.length===0){this.materials.push({name:'',smooth:this.smooth});}return lastMultiMaterial;}// Inherit previous objects material.
// Spec tells us that a declared material must be set to all objects until a new material is declared.
// If a usemtl declaration is encountered while this new object is being parsed, it will
// overwrite the inherited material. Exception being that there was already face declarations
// to the inherited material, then it will be preserved for proper MultiMaterial continuation.
};if(previousMaterial&&previousMaterial.name&&typeof previousMaterial.clone==='function'){var declared=previousMaterial.clone(0);declared.inherited=true;this.object.materials.push(declared);}this.objects.push(this.object);},finalize:function(){if(this.object&&typeof this.object._finalize==='function'){this.object._finalize(true);}},parseVertexIndex:function(value,len){var index=parseInt(value,10);return(index>=0?index-1:index+len/3)*3;},parseNormalIndex:function(value,len){var index=parseInt(value,10);return(index>=0?index-1:index+len/3)*3;},parseUVIndex:function(value,len){var index=parseInt(value,10);return(index>=0?index-1:index+len/2)*2;},addVertex:function(a,b,c){var src=this.vertices;var dst=this.object.geometry.vertices;dst.push(src[a+0]);dst.push(src[a+1]);dst.push(src[a+2]);dst.push(src[b+0]);dst.push(src[b+1]);dst.push(src[b+2]);dst.push(src[c+0]);dst.push(src[c+1]);dst.push(src[c+2]);},addVertexLine:function(a){var src=this.vertices;var dst=this.object.geometry.vertices;dst.push(src[a+0]);dst.push(src[a+1]);dst.push(src[a+2]);},addNormal:function(a,b,c){var src=this.normals;var dst=this.object.geometry.normals;dst.push(src[a+0]);dst.push(src[a+1]);dst.push(src[a+2]);dst.push(src[b+0]);dst.push(src[b+1]);dst.push(src[b+2]);dst.push(src[c+0]);dst.push(src[c+1]);dst.push(src[c+2]);},addUV:function(a,b,c){var src=this.uvs;var dst=this.object.geometry.uvs;dst.push(src[a+0]);dst.push(src[a+1]);dst.push(src[b+0]);dst.push(src[b+1]);dst.push(src[c+0]);dst.push(src[c+1]);},addUVLine:function(a){var src=this.uvs;var dst=this.object.geometry.uvs;dst.push(src[a+0]);dst.push(src[a+1]);},addFace:function(a,b,c,d,ua,ub,uc,ud,na,nb,nc,nd){var vLen=this.vertices.length;var ia=this.parseVertexIndex(a,vLen);var ib=this.parseVertexIndex(b,vLen);var ic=this.parseVertexIndex(c,vLen);var id;if(d===undefined){this.addVertex(ia,ib,ic);}else{id=this.parseVertexIndex(d,vLen);this.addVertex(ia,ib,id);this.addVertex(ib,ic,id);}if(ua!==undefined){var uvLen=this.uvs.length;ia=this.parseUVIndex(ua,uvLen);ib=this.parseUVIndex(ub,uvLen);ic=this.parseUVIndex(uc,uvLen);if(d===undefined){this.addUV(ia,ib,ic);}else{id=this.parseUVIndex(ud,uvLen);this.addUV(ia,ib,id);this.addUV(ib,ic,id);}}if(na!==undefined){// Normals are many times the same. If so, skip function call and parseInt.
var nLen=this.normals.length;ia=this.parseNormalIndex(na,nLen);ib=na===nb?ia:this.parseNormalIndex(nb,nLen);ic=na===nc?ia:this.parseNormalIndex(nc,nLen);if(d===undefined){this.addNormal(ia,ib,ic);}else{id=this.parseNormalIndex(nd,nLen);this.addNormal(ia,ib,id);this.addNormal(ib,ic,id);}}},addLineGeometry:function(vertices,uvs){this.object.geometry.type='Line';var vLen=this.vertices.length;var uvLen=this.uvs.length;for(var vi=0,l=vertices.length;vi<l;vi++){this.addVertexLine(this.parseVertexIndex(vertices[vi],vLen));}for(var uvi=0,l=uvs.length;uvi<l;uvi++){this.addUVLine(this.parseUVIndex(uvs[uvi],uvLen));}}};state.startObject('',false);return state;},parse:function(text){console.time('OBJLoader');var state=this._createParserState();if(text.indexOf('\r\n')!==-1){// This is faster than String.split with regex that splits on both
text=text.replace(/\r\n/g,'\n');}if(text.indexOf('\\\n')!==-1){// join lines separated by a line continuation character (\)
text=text.replace(/\\\n/g,'');}var lines=text.split('\n');var line='',lineFirstChar='',lineSecondChar='';var lineLength=0;var result=[];// Faster to just trim left side of the line. Use if available.
var trimLeft=typeof''.trimLeft==='function';for(var i=0,l=lines.length;i<l;i++){line=lines[i];line=trimLeft?line.trimLeft():line.trim();lineLength=line.length;if(lineLength===0)continue;lineFirstChar=line.charAt(0);// @todo invoke passed in handler if any
if(lineFirstChar==='#')continue;if(lineFirstChar==='v'){lineSecondChar=line.charAt(1);if(lineSecondChar===' '&&(result=this.regexp.vertex_pattern.exec(line))!==null){// 0                  1      2      3
// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
state.vertices.push(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3]));}else if(lineSecondChar==='n'&&(result=this.regexp.normal_pattern.exec(line))!==null){// 0                   1      2      3
// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
state.normals.push(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3]));}else if(lineSecondChar==='t'&&(result=this.regexp.uv_pattern.exec(line))!==null){// 0               1      2
// ["vt 0.1 0.2", "0.1", "0.2"]
state.uvs.push(parseFloat(result[1]),parseFloat(result[2]));}else{throw new Error("Unexpected vertex/normal/uv line: '"+line+"'");}}else if(lineFirstChar==='f'){if((result=this.regexp.face_vertex_uv_normal.exec(line))!==null){// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
// 0                        1    2    3    4    5    6    7    8    9   10         11         12
// ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]
state.addFace(result[1],result[4],result[7],result[10],result[2],result[5],result[8],result[11],result[3],result[6],result[9],result[12]);}else if((result=this.regexp.face_vertex_uv.exec(line))!==null){// f vertex/uv vertex/uv vertex/uv
// 0                  1    2    3    4    5    6   7          8
// ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]
state.addFace(result[1],result[3],result[5],result[7],result[2],result[4],result[6],result[8]);}else if((result=this.regexp.face_vertex_normal.exec(line))!==null){// f vertex//normal vertex//normal vertex//normal
// 0                     1    2    3    4    5    6   7          8
// ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]
state.addFace(result[1],result[3],result[5],result[7],undefined,undefined,undefined,undefined,result[2],result[4],result[6],result[8]);}else if((result=this.regexp.face_vertex.exec(line))!==null){// f vertex vertex vertex
// 0            1    2    3   4
// ["f 1 2 3", "1", "2", "3", undefined]
state.addFace(result[1],result[2],result[3],result[4]);}else{throw new Error("Unexpected face line: '"+line+"'");}}else if(lineFirstChar==='l'){var lineParts=line.substring(1).trim().split(' ');var lineVertices=[],lineUVs=[];if(line.indexOf('/')===-1){lineVertices=lineParts;}else{for(var li=0,llen=lineParts.length;li<llen;li++){var parts=lineParts[li].split('/');if(parts[0]!=='')lineVertices.push(parts[0]);if(parts[1]!=='')lineUVs.push(parts[1]);}}state.addLineGeometry(lineVertices,lineUVs);}else if((result=this.regexp.object_pattern.exec(line))!==null){// o object_name
// or
// g group_name
// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
// var name = result[ 0 ].substr( 1 ).trim();
var name=(' '+result[0].substr(1).trim()).substr(1);state.startObject(name);}else if(this.regexp.material_use_pattern.test(line)){// material
state.object.startMaterial(line.substring(7).trim(),state.materialLibraries);}else if(this.regexp.material_library_pattern.test(line)){// mtl file
state.materialLibraries.push(line.substring(7).trim());}else if((result=this.regexp.smoothing_pattern.exec(line))!==null){// smooth shading
// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
// but does not define a usemtl for each face set.
// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
// This requires some care to not create extra material on each smooth value for "normal" obj files.
// where explicit usemtl defines geometry groups.
// Example asset: examples/models/obj/cerberus/Cerberus.obj
var value=result[1].trim().toLowerCase();/*
				 * http://paulbourke.net/dataformats/obj/
				 * or
				 * http://www.cs.utah.edu/~boulos/cs3505/obj_spec.pdf
				 *
				 * From chapter "Grouping" Syntax explanation "s group_number":
				 * "group_number is the smoothing group number. To turn off smoothing groups, use a value of 0 or off.
				 * Polygonal elements use group numbers to put elements in different smoothing groups. For free-form
				 * surfaces, smoothing groups are either turned on or off; there is no difference between values greater
				 * than 0."
				 */state.object.smooth=value!=='0'&&value!=='off';var material=state.object.currentMaterial();if(material){material.smooth=state.object.smooth;}}else{// Handle null terminated files without exception
if(line==='\0')continue;throw new Error("Unexpected line: '"+line+"'");}}state.finalize();var container=new THREE.Group();container.materialLibraries=[].concat(state.materialLibraries);for(var i=0,l=state.objects.length;i<l;i++){var object=state.objects[i];var geometry=object.geometry;var materials=object.materials;var isLine=geometry.type==='Line';// Skip o/g line declarations that did not follow with any faces
if(geometry.vertices.length===0)continue;var buffergeometry=new THREE.BufferGeometry();buffergeometry.addAttribute('position',new THREE.BufferAttribute(new Float32Array(geometry.vertices),3));if(geometry.normals.length>0){buffergeometry.addAttribute('normal',new THREE.BufferAttribute(new Float32Array(geometry.normals),3));}else{buffergeometry.computeVertexNormals();}if(geometry.uvs.length>0){buffergeometry.addAttribute('uv',new THREE.BufferAttribute(new Float32Array(geometry.uvs),2));}// Create materials
var createdMaterials=[];for(var mi=0,miLen=materials.length;mi<miLen;mi++){var sourceMaterial=materials[mi];var material;if(this.materials!==null){material=this.materials.create(sourceMaterial.name);// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
if(isLine&&material&&!(material instanceof THREE.LineBasicMaterial)){var materialLine=new THREE.LineBasicMaterial();materialLine.copy(material);material=materialLine;}}if(!material){material=!isLine?new THREE.MeshPhongMaterial():new THREE.LineBasicMaterial();material.name=sourceMaterial.name;}material.shading=sourceMaterial.smooth?THREE.SmoothShading:THREE.FlatShading;createdMaterials.push(material);}// Create mesh
var mesh;if(createdMaterials.length>1){for(var mi=0,miLen=materials.length;mi<miLen;mi++){var sourceMaterial=materials[mi];buffergeometry.addGroup(sourceMaterial.groupStart,sourceMaterial.groupCount,mi);}mesh=!isLine?new THREE.Mesh(buffergeometry,createdMaterials):new THREE.LineSegments(buffergeometry,createdMaterials);}else{mesh=!isLine?new THREE.Mesh(buffergeometry,createdMaterials[0]):new THREE.LineSegments(buffergeometry,createdMaterials[0]);}mesh.name=object.name;container.add(mesh);}console.timeEnd('OBJLoader');return container;}};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(THREE) {/**
 * Loads a Wavefront .mtl file specifying materials
 *
 * @author angelxuanchang
 */THREE.MTLLoader=function(baseUrl,options,crossOrigin){this.baseUrl=baseUrl;this.options=options;this.crossOrigin=crossOrigin;};THREE.MTLLoader.prototype={constructor:THREE.MTLLoader,load:function(url,onLoad,onProgress,onError){var scope=this;var loader=new THREE.FileLoader();loader.setPath(this.path);loader.load(url,function(text){onLoad(scope.parse(text));},onProgress,onError);},/**
	 * Parses loaded MTL file
	 * @param text - Content of MTL file
	 * @return {THREE.MTLLoader.MaterialCreator}
	 */parse:function(text){var lines=text.split('\n');var info={};var delimiter_pattern=/\s+/;var materialsInfo={};for(var i=0;i<lines.length;i++){var line=lines[i];line=line.trim();if(line.length===0||line.charAt(0)==='#'){// Blank line or comment ignore
continue;}var pos=line.indexOf(' ');var key=pos>=0?line.substring(0,pos):line;key=key.toLowerCase();var value=pos>=0?line.substring(pos+1):'';value=value.trim();if(key==='newmtl'){// New material
info={name:value};materialsInfo[value]=info;}else if(info){if(key==='ka'||key==='kd'||key==='ks'){var ss=value.split(delimiter_pattern,3);info[key]=[parseFloat(ss[0]),parseFloat(ss[1]),parseFloat(ss[2])];}else{info[key]=value;}}}var materialCreator=new THREE.MTLLoader.MaterialCreator(this.baseUrl,this.options);materialCreator.setMaterials(materialsInfo);return materialCreator;}/**
 * Create a new THREE-MTLLoader.MaterialCreator
 * @param baseUrl - Url relative to which textures are loaded
 * @param options - Set of options on how to construct the materials
 *                  side: Which side to apply the material
 *                        THREE.FrontSide (default), THREE.BackSide, THREE.DoubleSide
 *                  wrap: What type of wrapping to apply for textures
 *                        THREE.RepeatWrapping (default), THREE.ClampToEdgeWrapping, THREE.MirroredRepeatWrapping
 *                  normalizeRGB: RGBs need to be normalized to 0-1 from 0-255
 *                                Default: false, assumed to be already normalized
 *                  ignoreZeroRGBs: Ignore values of RGBs (Ka,Kd,Ks) that are all 0's
 *                                  Default: false
 *                  invertTransparency: If transparency need to be inverted (inversion is needed if d = 0 is fully opaque)
 *                                      Default: false (d = 1 is fully opaque)
 * @constructor
 */};THREE.MTLLoader.MaterialCreator=function(baseUrl,options){this.baseUrl=baseUrl;this.options=options;this.materialsInfo={};this.materials={};this.materialsArray=[];this.nameLookup={};this.side=this.options&&this.options.side?this.options.side:THREE.FrontSide;this.wrap=this.options&&this.options.wrap?this.options.wrap:THREE.RepeatWrapping;};THREE.MTLLoader.MaterialCreator.prototype={constructor:THREE.MTLLoader.MaterialCreator,setMaterials:function(materialsInfo){this.materialsInfo=this.convert(materialsInfo);this.materials={};this.materialsArray=[];this.nameLookup={};},convert:function(materialsInfo){if(!this.options)return materialsInfo;var converted={};for(var mn in materialsInfo){// Convert materials info into normalized form based on options
var mat=materialsInfo[mn];var covmat={};converted[mn]=covmat;for(var prop in mat){var save=true;var value=mat[prop];var lprop=prop.toLowerCase();switch(lprop){case'kd':case'ka':case'ks':// Diffuse color (color under white light) using RGB values
if(this.options&&this.options.normalizeRGB){value=[value[0]/255,value[1]/255,value[2]/255];}if(this.options&&this.options.ignoreZeroRGBs){if(value[0]===0&&value[1]===0&&value[1]===0){// ignore
save=false;}}break;case'd':// According to MTL format (http://paulbourke.net/dataformats/mtl/):
//   d is dissolve for current material
//   factor of 1.0 is fully opaque, a factor of 0 is fully dissolved (completely transparent)
if(this.options&&this.options.invertTransparency){value=1-value;}break;default:break;}if(save){covmat[lprop]=value;}}}return converted;},preload:function(){for(var mn in this.materialsInfo){this.create(mn);}},getIndex:function(materialName){return this.nameLookup[materialName];},getAsArray:function(){var index=0;for(var mn in this.materialsInfo){this.materialsArray[index]=this.create(mn);this.nameLookup[mn]=index;index++;}return this.materialsArray;},create:function(materialName){if(this.materials[materialName]===undefined){this.createMaterial_(materialName);}return this.materials[materialName];},createMaterial_:function(materialName){// Create material
var mat=this.materialsInfo[materialName];var params={name:materialName,side:this.side};for(var prop in mat){var value=mat[prop];switch(prop.toLowerCase()){// Ns is material specular exponent
case'kd':// Diffuse color (color under white light) using RGB values
params['diffuse']=new THREE.Color().fromArray(value);break;case'ka':// Ambient color (color under shadow) using RGB values
params['ambient']=new THREE.Color().fromArray(value);break;case'ks':// Specular color (color when light is reflected from shiny surface) using RGB values
params['specular']=new THREE.Color().fromArray(value);break;case'map_kd':// Diffuse texture map
params['map']=this.loadTexture(this.baseUrl+value);params['map'].wrapS=this.wrap;params['map'].wrapT=this.wrap;break;case'ns':// The specular exponent (defines the focus of the specular highlight)
// A high exponent results in a tight, concentrated highlight. Ns values normally range from 0 to 1000.
params['shininess']=value;break;case'd':// According to MTL format (http://paulbourke.net/dataformats/mtl/):
//   d is dissolve for current material
//   factor of 1.0 is fully opaque, a factor of 0 is fully dissolved (completely transparent)
if(value<1){params['transparent']=true;params['opacity']=value;}break;default:break;}}if(params['diffuse']){if(!params['ambient'])params['ambient']=params['diffuse'];params['color']=params['diffuse'];}this.materials[materialName]=new THREE.MeshPhongMaterial(params);return this.materials[materialName];},loadTexture:function(url,mapping,onLoad,onError){var texture;var loader=THREE.Loader.Handlers.get(url);if(loader!==null){texture=loader.load(url,onLoad);}else{texture=new THREE.Texture();loader=new THREE.ImageLoader();loader.crossOrigin=this.crossOrigin;loader.load(url,function(image){texture.image=THREE.MTLLoader.ensurePowerOfTwo_(image);texture.needsUpdate=true;if(onLoad)onLoad(texture);});}texture.mapping=mapping;return texture;}};THREE.MTLLoader.ensurePowerOfTwo_=function(image){if(!THREE.Math.isPowerOfTwo(image.width)||!THREE.Math.isPowerOfTwo(image.height)){var canvas=document.createElement('canvas');canvas.width=THREE.MTLLoader.nextHighestPowerOfTwo_(image.width);canvas.height=THREE.MTLLoader.nextHighestPowerOfTwo_(image.height);var ctx=canvas.getContext('2d');ctx.drawImage(image,0,0,image.width,image.height,0,0,canvas.width,canvas.height);return canvas;}return image;};THREE.MTLLoader.nextHighestPowerOfTwo_=function(x){--x;for(var i=1;i<32;i<<=1){x=x|x>>i;}return x+1;};// THREE.EventDispatcher.prototype.apply(THREE.MTLLoader.prototype)
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(THREE) {/**
 * Loads a Wavefront .obj file with materials
 *
 * @author mrdoob / http://mrdoob.com/
 * @author angelxuanchang
 */THREE.OBJMTLLoader=function(manager){this.manager=manager!==undefined?manager:THREE.DefaultLoadingManager;};THREE.OBJMTLLoader.prototype={constructor:THREE.OBJMTLLoader,load:function(url,mtlurl,onLoad,onProgress,onError){var scope=this;var mtlLoader=new THREE.MTLLoader(url.substr(0,url.lastIndexOf('/')+1));mtlLoader.load(mtlurl,function(materials){var materialsCreator=materials;materialsCreator.preload();var loader=new THREE.FileLoader(scope.manager);loader.setPath(this.path);// loader.setCrossOrigin(this.crossOrigin)
loader.load(url,function(text){var object=scope.parse(text);object.traverse(function(object){if(object instanceof THREE.Mesh){if(object.material.name){var material=materialsCreator.create(object.material.name);if(material)object.material=material;}}});onLoad(object);},onProgress,onError);},onProgress,onError);},/**
	 * Parses loaded .obj file
	 * @param data - content of .obj file
	 * @param mtllibCallback - callback to handle mtllib declaration (optional)
	 * @return {THREE.Object3D} - Object3D (with default material)
	 */parse:function(data,mtllibCallback){function vector(x,y,z){return new THREE.Vector3(x,y,z);}function uv(u,v){return new THREE.Vector2(u,v);}function face3(a,b,c,normals){return new THREE.Face3(a,b,c,normals);}var face_offset=0;function meshN(meshName,materialName){if(vertices.length>0){geometry.vertices=vertices;geometry.mergeVertices();geometry.computeFaceNormals();geometry.computeBoundingSphere();object.add(mesh);geometry=new THREE.Geometry();mesh=new THREE.Mesh(geometry,material);}if(meshName!==undefined)mesh.name=meshName;if(materialName!==undefined){material=new THREE.MeshLambertMaterial();material.name=materialName;mesh.material=material;}}var group=new THREE.Group();var object=group;var geometry=new THREE.Geometry();var material=new THREE.MeshLambertMaterial();var mesh=new THREE.Mesh(geometry,material);var vertices=[];var normals=[];var uvs=[];function add_face(a,b,c,normals_inds){if(normals_inds===undefined){geometry.faces.push(face3(parseInt(a)-(face_offset+1),parseInt(b)-(face_offset+1),parseInt(c)-(face_offset+1)));}else{geometry.faces.push(face3(parseInt(a)-(face_offset+1),parseInt(b)-(face_offset+1),parseInt(c)-(face_offset+1),[normals[parseInt(normals_inds[0])-1].clone(),normals[parseInt(normals_inds[1])-1].clone(),normals[parseInt(normals_inds[2])-1].clone()]));}}function add_uvs(a,b,c){geometry.faceVertexUvs[0].push([uvs[parseInt(a)-1].clone(),uvs[parseInt(b)-1].clone(),uvs[parseInt(c)-1].clone()]);}function handle_face_line(faces,uvs,normals_inds){if(faces[3]===undefined){add_face(faces[0],faces[1],faces[2],normals_inds);if(!(uvs===undefined)&&uvs.length>0){add_uvs(uvs[0],uvs[1],uvs[2]);}}else{if(!(normals_inds===undefined)&&normals_inds.length>0){add_face(faces[0],faces[1],faces[3],[normals_inds[0],normals_inds[1],normals_inds[3]]);add_face(faces[1],faces[2],faces[3],[normals_inds[1],normals_inds[2],normals_inds[3]]);}else{add_face(faces[0],faces[1],faces[3]);add_face(faces[1],faces[2],faces[3]);}if(!(uvs===undefined)&&uvs.length>0){add_uvs(uvs[0],uvs[1],uvs[3]);add_uvs(uvs[1],uvs[2],uvs[3]);}}}// v float float float
var vertex_pattern=/v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;// vn float float float
var normal_pattern=/vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;// vt float float
var uv_pattern=/vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;// f vertex vertex vertex ...
var face_pattern1=/f( +\d+)( +\d+)( +\d+)( +\d+)?/;// f vertex/uv vertex/uv vertex/uv ...
var face_pattern2=/f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/;// f vertex/uv/normal vertex/uv/normal vertex/uv/normal ...
var face_pattern3=/f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/;// f vertex//normal vertex//normal vertex//normal ...
var face_pattern4=/f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/;//
var lines=data.split('\n');for(var i=0;i<lines.length;i++){var line=lines[i];line=line.trim();var result;if(line.length===0||line.charAt(0)==='#'){continue;}else if((result=vertex_pattern.exec(line))!==null){// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
vertices.push(vector(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3])));}else if((result=normal_pattern.exec(line))!==null){// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]
normals.push(vector(parseFloat(result[1]),parseFloat(result[2]),parseFloat(result[3])));}else if((result=uv_pattern.exec(line))!==null){// ["vt 0.1 0.2", "0.1", "0.2"]
uvs.push(uv(parseFloat(result[1]),parseFloat(result[2])));}else if((result=face_pattern1.exec(line))!==null){// ["f 1 2 3", "1", "2", "3", undefined]
handle_face_line([result[1],result[2],result[3],result[4]]);}else if((result=face_pattern2.exec(line))!==null){// ["f 1/1 2/2 3/3", " 1/1", "1", "1", " 2/2", "2", "2", " 3/3", "3", "3", undefined, undefined, undefined]
handle_face_line([result[2],result[5],result[8],result[11]],// faces
[result[3],result[6],result[9],result[12]]// uv
);}else if((result=face_pattern3.exec(line))!==null){// ["f 1/1/1 2/2/2 3/3/3", " 1/1/1", "1", "1", "1", " 2/2/2", "2", "2", "2", " 3/3/3", "3", "3", "3", undefined, undefined, undefined, undefined]
handle_face_line([result[2],result[6],result[10],result[14]],// faces
[result[3],result[7],result[11],result[15]],// uv
[result[4],result[8],result[12],result[16]]// normal
);}else if((result=face_pattern4.exec(line))!==null){// ["f 1//1 2//2 3//3", " 1//1", "1", "1", " 2//2", "2", "2", " 3//3", "3", "3", undefined, undefined, undefined]
handle_face_line([result[2],result[5],result[8],result[11]],// faces
[],// uv
[result[3],result[6],result[9],result[12]]// normal
);}else if(/^o /.test(line)){// object
meshN();face_offset=face_offset+vertices.length;vertices=[];object=new THREE.Object3D();object.name=line.substring(2).trim();group.add(object);}else if(/^g /.test(line)){// group
meshN(line.substring(2).trim(),undefined);}else if(/^usemtl /.test(line)){// material
meshN(undefined,line.substring(7).trim());}else if(/^mtllib /.test(line)){// mtl file
if(mtllibCallback){var mtlfile=line.substring(7);mtlfile=mtlfile.trim();mtllibCallback(mtlfile);}}else if(/^s /.test(line)){// Smooth shading
}else{console.log('THREE.OBJMTLLoader: Unhandled line '+line);}}// Add last object
meshN(undefined,undefined);return group;}// THREE.EventDispatcher.prototype.apply(THREE.OBJMTLLoader.prototype)
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(THREE) {/*
 * @author zz85 / https://github.com/zz85
 *
 * Ascii generation is based on http://www.nihilogic.dk/labs/jsascii/
 * Maybe more about this later with a blog post at http://lab4games.net/zz85/blog
 *
 * 16 April 2012 - @blurspline
 */THREE.AsciiEffect=function(renderer,charSet,options){// its fun to create one your own!
charSet=charSet===undefined?' .:-=+*#%@':charSet;// ' .,:;=|iI+hHOE#`$';
// darker bolder character set from https://github.com/saw/Canvas-ASCII-Art/
// ' .\'`^",:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$'.split('');
if(!options)options={};// Some ASCII settings
var bResolution=!options['resolution']?0.15:options['resolution'];// Higher for more details
var iScale=!options['scale']?1:options['scale'];var bColor=!options['color']?false:options['color'];// nice but slows down rendering!
var bAlpha=!options['alpha']?false:options['alpha'];// Transparency
var bBlock=!options['block']?false:options['block'];// blocked characters. like good O dos
var bInvert=!options['invert']?false:options['invert'];// black is white, white is black
var strResolution='low';var width,height;var domElement=document.createElement('div');domElement.style.cursor='default';var oAscii=document.createElement('table');domElement.appendChild(oAscii);var iWidth,iHeight;var oImg;this.setSize=function(w,h){width=w;height=h;renderer.setSize(w,h);initAsciiSize();};this.render=function(scene,camera){renderer.render(scene,camera);asciifyImage(renderer,oAscii);};this.domElement=domElement;// Throw in ascii library from http://www.nihilogic.dk/labs/jsascii/jsascii.js
/*
     * jsAscii 0.1
     * Copyright (c) 2008 Jacob Seidelin, jseidelin@nihilogic.dk, http://blog.nihilogic.dk/
     * MIT License [http://www.nihilogic.dk/licenses/mit-license.txt]
     */function initAsciiSize(){iWidth=Math.round(width*fResolution);iHeight=Math.round(height*fResolution);oCanvas.width=iWidth;oCanvas.height=iHeight;// oCanvas.style.display = "none";
// oCanvas.style.width = iWidth;
// oCanvas.style.height = iHeight;
oImg=renderer.domElement;if(oImg.style.backgroundColor){oAscii.rows[0].cells[0].style.backgroundColor=oImg.style.backgroundColor;oAscii.rows[0].cells[0].style.color=oImg.style.color;}oAscii.cellSpacing=0;oAscii.cellPadding=0;var oStyle=oAscii.style;oStyle.display='inline';oStyle.width=Math.round(iWidth/fResolution*iScale)+'px';oStyle.height=Math.round(iHeight/fResolution*iScale)+'px';oStyle.whiteSpace='pre';oStyle.margin='0px';oStyle.padding='0px';oStyle.letterSpacing=fLetterSpacing+'px';oStyle.fontFamily=strFont;oStyle.fontSize=fFontSize+'px';oStyle.lineHeight=fLineHeight+'px';oStyle.textAlign='left';oStyle.textDecoration='none';}var aDefaultCharList=' .,:;i1tfLCG08@'.split('');var aDefaultColorCharList=' CGO08@'.split('');var strFont='courier new, monospace';var oCanvasImg=renderer.domElement;var oCanvas=document.createElement('canvas');if(!oCanvas.getContext){return;}var oCtx=oCanvas.getContext('2d');if(!oCtx.getImageData){return;}var aCharList=bColor?aDefaultColorCharList:aDefaultCharList;if(charSet)aCharList=charSet;var fResolution=0.5;switch(strResolution){case'low':fResolution=0.25;break;case'medium':fResolution=0.5;break;case'high':fResolution=1;break;}if(bResolution)fResolution=bResolution;// Setup dom
var fFontSize=2/fResolution*iScale;var fLineHeight=2/fResolution*iScale;// adjust letter-spacing for all combinations of scale and resolution to get it to fit the image width.
var fLetterSpacing=0;if(strResolution=='low'){switch(iScale){case 1:fLetterSpacing=-1;break;case 2:case 3:fLetterSpacing=-2.1;break;case 4:fLetterSpacing=-3.1;break;case 5:fLetterSpacing=-4.15;break;}}if(strResolution=='medium'){switch(iScale){case 1:fLetterSpacing=0;break;case 2:fLetterSpacing=-1;break;case 3:fLetterSpacing=-1.04;break;case 4:case 5:fLetterSpacing=-2.1;break;}}if(strResolution=='high'){switch(iScale){case 1:case 2:fLetterSpacing=0;break;case 3:case 4:case 5:fLetterSpacing=-1;break;}}// can't get a span or div to flow like an img element, but a table works?
// convert img element to ascii
function asciifyImage(canvasRenderer,oAscii){oCtx.clearRect(0,0,iWidth,iHeight);oCtx.drawImage(oCanvasImg,0,0,iWidth,iHeight);var oImgData=oCtx.getImageData(0,0,iWidth,iHeight).data;// Coloring loop starts now
var strChars='';// console.time('rendering');
for(var y=0;y<iHeight;y+=2){for(var x=0;x<iWidth;x++){var iOffset=(y*iWidth+x)*4;var iRed=oImgData[iOffset];var iGreen=oImgData[iOffset+1];var iBlue=oImgData[iOffset+2];var iAlpha=oImgData[iOffset+3];var iCharIdx;var fBrightness;fBrightness=(0.3*iRed+0.59*iGreen+0.11*iBlue)/255;// fBrightness = (0.3*iRed + 0.5*iGreen + 0.3*iBlue) / 255;
if(iAlpha==0){// should calculate alpha instead, but quick hack :)
// fBrightness *= (iAlpha / 255);
fBrightness=1;}iCharIdx=Math.floor((1-fBrightness)*(aCharList.length-1));if(bInvert){iCharIdx=aCharList.length-iCharIdx-1;}// good for debugging
// fBrightness = Math.floor(fBrightness * 10);
// strThisChar = fBrightness;
var strThisChar=aCharList[iCharIdx];if(strThisChar===undefined||strThisChar==' '){strThisChar='&nbsp;';}if(bColor){strChars+="<span style='"+'color:rgb('+iRed+','+iGreen+','+iBlue+');'+(bBlock?'background-color:rgb('+iRed+','+iGreen+','+iBlue+');':'')+(bAlpha?'opacity:'+iAlpha/255+';':'')+"'>"+strThisChar+'</span>';}else{strChars+=strThisChar;}}strChars+='<br/>';}oAscii.innerHTML='<tr><td>'+strChars+'</td></tr>';// console.timeEnd('rendering');
// return oAscii;
}// end modified asciifyImage block
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(THREE) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_examples_js_controls_OrbitControls__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three_examples_js_controls_OrbitControls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_three_examples_js_controls_OrbitControls__);
class AbstractApplication{constructor(){this._camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,1,1000);this._camera.position.set(0,0,40);this._camera.lookAt(new THREE.Vector3(0,0,0));this._scene=new THREE.Scene();this._renderer=new THREE.WebGLRenderer();this._renderer.setPixelRatio(window.devicePixelRatio);this._renderer.setSize(window.innerWidth,window.innerHeight);// this._renderer.setClearColor(0x00FF00, 1.0)
this._renderer.shadowMap.enabled=false;// document.body.appendChild(this._renderer.domElement)
// this._controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
// this._controls.enableDamping = true;
// this._controls.dampingFactor = 0.25;
// this._controls.enableZoom = false;
window.addEventListener('resize',this.onWindowResize.bind(this),false);}get renderer(){return this._renderer;}get camera(){return this._camera;}get scene(){return this._scene;}onWindowResize(){this._camera.aspect=window.innerWidth/window.innerHeight;this._camera.updateProjectionMatrix();this._renderer.setSize(window.innerWidth,window.innerHeight);}animate(timestamp){// requestAnimationFrame(this.animate.bind(this))
// // this._controls.update();
// this._renderer.render(this._scene, this._camera)
}}/* harmony default export */ __webpack_exports__["a"] = (AbstractApplication);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ })
],[1]);
//# sourceMappingURL=app.34c1ce5ab1e9fb41e0ec.js.map