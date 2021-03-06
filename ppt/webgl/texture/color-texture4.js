function initVertexBuffer(gl) {
  // 顶点坐标 和 纹理坐标，
  // 纹理覆盖在顶点坐标装配的几何图形上；
  // 纹理图像根据坐标来重复背景填充
  const vertices = new Float32Array([
    -.5, .5, 0, .5,
    -.5, -.5, 0, 0,
    .5, .5, .5, .5,
    .5, -.5, .5, 0,
  ]);

  // const vertices = new Float32Array([
  //   -1, 1, 0, 1,
  //   -1, -1, 0, 0,
  //   1, 1, 1, 1,
  //   1, -1, 1, 0,
  // ]);

  const vertexTexCoordBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
  const fsize = vertices.BYTES_PER_ELEMENT;

  const aPosition = gl.getAttribLocation(gl.program, 'a_Position');
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, fsize * 4, 0);
  gl.enableVertexAttribArray(aPosition);

  const aTexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
  gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, fsize * 4, fsize * 2);
  gl.enableVertexAttribArray(aTexCoord);

  return 4;
}

function initTexures(gl) {
  // 创建纹理对象
  const texture = gl.createTexture();
  const image = new Image();

  image.src = '/asset/sky.jpg';
  image.addEventListener('load', function () {
    loadTexture(gl, texture, image);
  });
}

function loadTexture(gl, texture, image) {
  // 对纹理图像进行y轴反转
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

  // 开启0号纹理单元(激活纹理单元)
  gl.activeTexture(gl.TEXTURE0);

  // 将纹理对象绑定给webgl系统
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 配置纹理对象 texParameter[if]: int float => gl.LINEAR
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  // 将纹理图像分配给纹理对象
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

  // 获取glsl变量u_Sampler的存储地址
  const uSampler = gl.getUniformLocation(gl.program, 'u_Sampler');

  // 将0号纹理传递给着色器， 唯一的纹理对象，被绑定在gl.TEXTURE0上，所以第二个为0
  // 片元着色器终于能够访问纹理图像了
  gl.uniform1i(uSampler, 0);

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);

}

const canvas = document.querySelector('#canvas');
const gl = canvas.getContext('webgl');

const vertex = `
  attribute vec4 a_Position;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;

  void main() {
    gl_Position = a_Position;
    v_TexCoord = a_TexCoord;
  }
`;
const fragment = `
    precision mediump float;

    uniform sampler2D u_Sampler;
    uniform vec2 u_TextureSize;

    varying vec2 v_TexCoord;

    void main() {
      // 获取一个像素大小
      vec2 onePixel = vec2(1.0,1.0)/u_TextureSize;

      // rgba => bgra

      gl_FragColor = (
        texture2D(u_Sampler, v_TexCoord) +
        texture2D(u_Sampler, v_TexCoord + vec2(onePixel.x, 0.0)) +
        texture2D(u_Sampler, v_TexCoord + vec2(-onePixel.x, 0.0))) / 3.0;
    }
`;

initShaders(gl, vertex, fragment);

gl.clearColor(0.0, 0.0, 0.0, 1.0);

var textureSizeLocation = gl.getUniformLocation(gl.program, "u_TextureSize");

gl.uniform2f(textureSizeLocation, canvas.width, canvas.height);

const n = initVertexBuffer(gl);

initTexures(gl);


