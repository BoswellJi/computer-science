/**
 * 初始化顶点数据缓存
 * @param {*} gl 
 */
function initVertexBuffer(gl) {
  // 顶点坐标 颜色
  const vertices = new Float32Array([
    0.0, 0.5, -0.4, 0.4, 1.0, 0.4,
    -0.5, -0.5, -0.4, 0.4, 1.0, 0.4,
    0.5, -0.5, -0.4, 1.0, 0.4, 0.4,

    0.5, 0.4, -0.2, 1.0, 0.4, 0.4,
    -0.5, 0.4, -0.2, 1.0, 1.0, 0.4,
    0.0, -0.6, -0.2, 1.0, 1.0, 0.4,

    0.0, 0.5, 0.0, 0.4, 0.4, 1.0,
    -0.5, -0.5, 0.0, 0.4, 0.4, 1.0,
    0.5, -0.5, 0.0, 1.0, 0.4, 0.4
  ]);

  const n = 9;

  const vertexTexCoordBuffer = gl.createBuffer();
  const fsize = vertices.BYTES_PER_ELEMENT;

  gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(gl.program, 'a_Position');
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, fsize * 6, 0);
  gl.enableVertexAttribArray(aPosition);

  const aColor = gl.getAttribLocation(gl.program, 'a_Color');
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, fsize * 6, fsize * 3);
  gl.enableVertexAttribArray(aColor);

  return n;
}


const canvas = document.querySelector('#canvas');
const gl = canvas.getContext('webgl');

const vertex = `
    attribute vec4 a_Position;
    attribute vec4 a_Color;
    varying vec4 v_Color;

    uniform mat4 u_ProjMatrix;
    uniform mat4 u_ModelMatrix;


    void main(){
      gl_Position = u_ProjMatrix * u_ModelMatrix * a_Position;
      v_Color = a_Color;
    }
`;
const fragment = `
    precision mediump float;
    varying vec4 v_Color;

    void main(){
      gl_FragColor = v_Color;
    }
`;

initShaders(gl, vertex, fragment)

const n = initVertexBuffer(gl);

// 展示了可视空间的作用，想要绘制任何东西，必须把它置于可视空间中
// 视点与近，远裁剪面的距离，使用矩阵设置可视空间，远近裁剪面之间的空间就是可视空间，超出了就会被裁剪掉
// 正射投影矩阵
const uProjMatrix = gl.getUniformLocation(gl.program, 'u_ProjMatrix');
const projMatrix = new Matrix4();
projMatrix.setOrtho(-.5, .5, -.5, .5, 0, 5);
gl.uniformMatrix4fv(uProjMatrix, false, projMatrix.elements);

const uModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
const modelMatrix = new Matrix4();
modelMatrix.setScale(.5,.5, 1);
gl.uniformMatrix4fv(uModelMatrix, false, modelMatrix.elements);

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLES, 0, n);

// 根据键盘移动视点
let g_eyeX = 0.5;

/**
 * 当在调整观察者的位置时，视点在极右，或者极左的时候，三角形会缺少一部分
 * 原因： 没有指定可视范围，实际观察得到的区域边界,默认可视深度不够，所以三角形会缺一个角
 */
// document.addEventListener('keydown', function (e) {

//   projMatrix.setOrtho(-.5, .5, -.5, .5, 0, g_eyeX);
//   gl.uniformMatrix4fv(uProjMatrix, false, projMatrix.elements);

//   gl.clear(gl.COLOR_BUFFER_BIT);
//   gl.drawArrays(gl.TRIANGLES, 0, n);

//   // 左右键
//   if (e.keyCode == 39) {
//     g_eyeX += 0.01;
//   } else if (e.keyCode == 37) {
//     g_eyeX -= 0.01;
//   }
// });