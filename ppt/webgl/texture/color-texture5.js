/**
 * 初始化顶点数据缓存
 * 物体都是有，点，线面（三角形组成
 * @param {*} gl 
 */
function initVertexBuffer(gl) {
  // 顶点数量
  var vertices = new Float32Array([   // Coordinates
    1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, // v0-v1-v2-v3 front
    1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, // v0-v3-v4-v5 right
    1.0, 1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, // v0-v5-v6-v1 up
    -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, // v1-v6-v7-v2 left
    -1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, // v7-v4-v3-v2 down
    1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0  // v4-v7-v6-v5 back
  ]);

  // 每个面的顶点的颜色
  var colors = new Float32Array([    // Colors
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,     // v0-v1-v2-v3 front
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,     // v0-v3-v4-v5 right
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,     // v0-v5-v6-v1 up
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,     // v1-v6-v7-v2 left
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,     // v7-v4-v3-v2 down
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0　    // v4-v7-v6-v5 back
  ]);


  // 法线
  var normals = new Float32Array([    // Normal
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,  // v0-v1-v2-v3 front
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0,  // v0-v3-v4-v5 right
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,  // v0-v5-v6-v1 up
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0,  // v1-v6-v7-v2 left
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0,  // v7-v4-v3-v2 down
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0   // v4-v7-v6-v5 back
  ]);


  // 每个面的两个三角形的顶点索引
  var indices = new Uint8Array([
    0, 1, 2, 0, 2, 3,    // front
    4, 5, 6, 4, 6, 7,    // right
    8, 9, 10, 8, 10, 11,    // up
    12, 13, 14, 12, 14, 15,    // left
    16, 17, 18, 16, 18, 19,    // down
    20, 21, 22, 20, 22, 23     // back
  ]);

  initArrayBuffer(gl, 'a_Position', vertices, 3, gl.FLOAT);
  initArrayBuffer(gl, 'a_Color', colors, 3, gl.FLOAT);
  initArrayBuffer(gl, 'a_Normal', normals, 3, gl.FLOAT);

  // 创建缓冲数据
  const indexBuffer = gl.createBuffer();
  // 绑定缓冲
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  // 将数据与缓冲进行绑定
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

  return indices.length;
}

function initArrayBuffer(gl, name, data, num, type) {
  const buffer = gl.createBuffer();
  
  if (!buffer) {
    console.log('Failed to create the buffer object');
    return null;
  }
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(gl.program, name);

  gl.vertexAttribPointer(aPosition, num, type, false, 0, 0);
  gl.enableVertexAttribArray(aPosition);
}

const canvas = document.querySelector('#canvas');
const gl = canvas.getContext('webgl');

function draw() {
  const vertex = `
  // 每个顶点都有的
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  attribute vec4 a_Normal;      // 法向量

  // 每个顶点都相同的
  uniform mat4 u_ModelMatrix;   // 模型矩阵
  uniform mat4 u_MvpMatrix;     // 透视投影矩阵 * 观察者矩阵
  uniform mat4 u_NormalMatrix;  // 用来变换法向量的矩阵
  
 
  varying vec4 v_Color;
  varying vec3 v_Normal;
  varying vec3 v_Position;

  void main(){
    // 顶点坐标
    gl_Position = u_MvpMatrix * a_Position;

    // 变换后顶点的坐标
    v_Position = vec3(u_ModelMatrix * a_Position);

    // 顶点法线： 逆转置矩阵 * 源
    v_Normal = normalize(vec3(u_NormalMatrix * a_Normal));

    // 顶点颜色
    v_Color = a_Color;
  }
  `;

  // 逐片元计算光照
  const fragment = `
    precision mediump float;

    uniform vec3 u_LightPosition; // 光源位置
    uniform vec3 u_AmbientLight;  // 环境光
    uniform vec3 u_LightDirection;  // 光照方向
    uniform vec3 u_LightColor;  // 光照颜色
    
    varying vec4 v_Color;
    // 逐片元的的法线/法向量 片元法向量
    varying vec3 v_Normal;
    varying vec3 v_Position;

    void main() {
  
      // 点光源在顶点处的方向
      vec3 lightDirection = normalize(u_LightPosition - vec3(v_Position));
  
      // 计算光线方向和法向量的点积（入射角
      float nDotL = max(dot(lightDirection,v_Normal),0.0); 
  
      // 计算漫反射光线的颜色
      vec3 diffuse = u_LightColor * vec3(v_Color) * nDotL;
  
      // 环境反射光颜色 * 物体基底色
      vec3 ambient = u_AmbientLight * v_Color.rgb;
  
      gl_FragColor = vec4(diffuse + ambient,v_Color);
    }
    `;

  if (!initShaders(gl, vertex, fragment)) {
    return;
  }

  const n = initVertexBuffer(gl);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.enable(gl.DEPTH_TEST);

  // 光源位置
  const uLightPosition = gl.getUniformLocation(gl.program, 'u_LightPosition');
  gl.uniform3f(uLightPosition, 2.3, 4.0, 3.5);

  // 设置光线颜色
  const uLightColor = gl.getUniformLocation(gl.program, 'u_LightColor');
  gl.uniform3f(uLightColor, 1, 1, 1);

  // 环境光颜色
  const uAmbientLight = gl.getUniformLocation(gl.program, 'u_AmbientLight');
  gl.uniform3f(uAmbientLight, 0.2, 0.2, 0.2);

  // 透视模型矩阵
  const uMvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
  const vpMatrix = new Matrix4();
  vpMatrix.setPerspective(15, canvas.width / canvas.clientHeight, 1, 203);
  vpMatrix.lookAt(6, 6, 14, 0, 0, 0, 0, 1, 0);

  // 计算模型视图投影矩阵
  const uModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
  const modelMatrix = new Matrix4();
  const mvpMatrix = new Matrix4();
  // 计算变换后的法向量
  const uNormalMatrix = gl.getUniformLocation(gl.program, 'u_NormalMatrix');
  const normalMatrix = new Matrix4();

  let currentAngle = 0.0;
  const tick = function () {
    currentAngle = animate(currentAngle);

    modelMatrix.setRotate(currentAngle, 0, 1, 0);
    gl.uniformMatrix4fv(uModelMatrix, false, modelMatrix.elements);

    mvpMatrix.set(vpMatrix).multiply(modelMatrix);
    gl.uniformMatrix4fv(uMvpMatrix, false, mvpMatrix.elements);

    normalMatrix.setInverseOf(modelMatrix);
    normalMatrix.transpose();
    gl.uniformMatrix4fv(uNormalMatrix, false, normalMatrix.elements);

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);

    requestAnimationFrame(tick, canvas);
  };
  tick();
}

const ANGLE_STEP = 30.0;
let g_last = Date.now();

function animate(angle) {
  let now = Date.now();
  let elapsed = now - g_last;
  g_last = now;
  let newAngle = angle + (ANGLE_STEP * elapsed) / 1000.0;
  return newAngle %= 360;
}

draw();