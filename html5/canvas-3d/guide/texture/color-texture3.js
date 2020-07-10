/**
  * 创建着色器程序
  * @param {*} gl 渲染上下文
  * @param {*} vertexShader 顶点着色器
  * @param {*} fragmentShader 片段着色器
  */
 function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log('program: ' + gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

/**
 * 
 * @param {*} gl 渲染上下文
 * @param {*} type 着色器类型
 * @param {*} source 数据源
 */
function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log('shader: ' + gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

function initShaders(gl, vertex, fragment) {
  //  创建两个着色器
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex),
    fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);

  // 将两个着色器link（链接）到一个 program 
  const program = createProgram(gl, vertexShader, fragmentShader);

  gl.useProgram(program);

  gl.program = program;

  return program;
}

/**
 * 初始化顶点数据缓存
 * @param {*} gl 
 */
function initVertexBuffer(gl) {
  // 顶点坐标 纹理坐标
  const vertices = new Float32Array([
    -1, 1, 0, 1,
    -1, -1, 0, 0,
    1, 1, 1, 1,
    1, -1, 1, 0,
  ]);

  // 顶点个数
  const n = 4;

  // 创建缓冲数据
  const vertexTexCoordBuffer = gl.createBuffer();

  // 绑定缓冲
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexTexCoordBuffer);

  // 将数据与缓冲进行绑定
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // 单个元素的字节数
  const fsize = vertices.BYTES_PER_ELEMENT;

  // glsl种a_Position变量的内存地址
  const aPosition = gl.getAttribLocation(gl.program, 'a_Position');

  // 将缓冲中的数据指定给aPosition
  gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, fsize * 4, 0);

  // 
  gl.enableVertexAttribArray(aPosition);

  const aTexCoord = gl.getAttribLocation(gl.program, 'a_TexCoord');
  gl.vertexAttribPointer(aTexCoord, 2, gl.FLOAT, false, fsize * 4, fsize * 2);
  gl.enableVertexAttribArray(aTexCoord);

  return n;
}

function initTexures(gl) {
  // 创建纹理对象
  const texture = gl.createTexture();
  const texture1 = gl.createTexture();

  // 获取glsl变量u_Sampler的存储地址
  const uSampler = gl.getUniformLocation(gl.program, 'u_Sampler0');
  const uSampler1 = gl.getUniformLocation(gl.program, 'u_Sampler1');

  // 创建图片对象
  const image = new Image();
  const image1 = new Image();

  // 监听图片加载事件
  image.addEventListener('load', function () {
    loadTexture(gl,  texture, uSampler, image,0);
  });
  image1.addEventListener('load', function () {
    loadTexture(gl,  texture1, uSampler1, image1,1);
  });

  // 给图片添加src属性
  image.src = './examples/resources/sky.jpg';
  image1.src = './examples/resources/circle.gif';
  return true;
}

let g_texUnit0 = false,g_texUnit1 =false;
function loadTexture(gl, texture, uSampler, image,texUnit) {
  // 对纹理图像进行y轴反转
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

  // 开启0号纹理单元
  if(texUnit===0){
    gl.activeTexture(gl.TEXTURE0);
    g_texUnit0 = true;
  } else {
    gl.activeTexture(gl.TEXTURE1);
    g_texUnit1 = true;
  }

  // 向target绑定
  gl.bindTexture(gl.TEXTURE_2D, texture);

  // 配置纹理参数（不同的纹理，类似背景图
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);

  // 配置纹理图像
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

  // 将0号纹理传递给着色器
  gl.uniform1i(uSampler, texUnit);

  // 方法是异步执行的，必须放这里
  gl.clear(gl.COLOR_BUFFER_BIT);

  if(g_texUnit0 && g_texUnit1){
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

const canvas = document.querySelector('#canvas'),
  gl = canvas.getContext('webgl');

function draw() {
  const vertex =  `
  attribute vec4 a_Position;
  attribute vec2 a_TexCoord;
  varying vec2 v_TexCoord;

  void main() {
    gl_Position = a_Position;
    v_TexCoord = a_TexCoord;
  }`,
    fragment = `
    precision mediump float;
    // 片元着色器访问两个纹理
    // 最终的片元颜色由两个纹理上纹素颜色共同决定
    uniform sampler2D u_Sampler0;
    uniform sampler2D u_Sampler1;
    varying vec2 v_TexCoord;

    void main() {
      vec4 color0 = texture2D(u_Sampler0 , v_TexCoord);
      vec4 color1 = texture2D(u_Sampler1 , v_TexCoord);
      gl_FragColor = color0 * color1;
    }`;

  if (!initShaders(gl, vertex, fragment)) {
    return;
  }

  const n = initVertexBuffer(gl);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  initTexures(gl);
}

draw();