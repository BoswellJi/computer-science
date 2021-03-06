module.exports = {
  "mode": "development",
  "context": "D:\\code\\computer-science\\uniapp\\uniapp1",
  "node": {
    "setImmediate": false,
    "process": "mock",
    "dgram": "empty",
    "fs": "empty",
    "net": "empty",
    "tls": "empty",
    "child_process": "empty",
    "__proto__": null
  },
  "output": {
    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\dist\\dev\\mp-weixin",
    "filename": "[name].js",
    "publicPath": "/",
    "chunkFilename": "[id].js",
    "globalObject": "global",
    "__proto__": null
  },
  "resolve": {
    "alias": {
      "@": "D:\\code\\computer-science\\uniapp\\uniapp1\\src",
      "vue$": "@dcloudio/vue-cli-plugin-uni/packages/mp-vue",
      "./@": "D:\\code\\computer-science\\uniapp\\uniapp1\\src",
      "uni-pages": "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\pages.json",
      "@dcloudio/uni-stat": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\uni-stat\\dist\\index.js",
      "uni-stat-config": "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\pages.json?{\"type\":\"stat\"}",
      "mpvue-page-factory": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\mpvue-page-factory\\index.js",
      "__proto__": null
    },
    "extensions": [
      ".mjs",
      ".js",
      ".jsx",
      ".vue",
      ".json",
      ".wasm",
      ".nvue"
    ],
    "modules": [
      "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@vue\\cli-service\\node_modules",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\node_modules"
    ],
    "plugins": [
      {
        "apply": Function("// ¯\\_(ツ)_/¯"),
        "makePlugin": Function("locator, filter",
          "return process.versions.pnp ? {\n  apply: makeResolver(locator, filter),\n} : {\n  apply: nothing,\n}"),
        "moduleLoader": Function("module",
          "return process.versions.pnp ? {\n  apply: makeResolver(getModuleLocator(module)),\n} : {\n  apply: nothing,\n}"),
        "topLevelLoader": {
          "apply": Function("// ¯\\_(ツ)_/¯"),
          "__proto__": null
        },
        "bind": Function("filter, module, dependency",
          "return process.versions.pnp ? {\n  apply: makeResolver(dependency ? getDependencyLocator(getModuleLocator(module), dependency) : getModuleLocator(module), filter),\n} : {\n  apply: nothing,\n}"),
        "tsLoaderOptions": Function("options = {}",
          "return process.versions.pnp ? Object.assign({}, options, {\n  resolveModuleName: resolveModuleName,\n  resolveTypeReferenceDirective: resolveModuleName,\n}) : options"),
        "forkTsCheckerOptions": Function("options = {}",
          "return process.versions.pnp ? Object.assign({}, options, {\n  resolveModuleNameModule: require.resolve(`./ts`),\n  resolveTypeReferenceDirectiveModule: require.resolve(`./ts`),\n}) : options"),
        "__proto__": null
      }
    ],
    "__proto__": null
  },
  "resolveLoader": {
    "modules": [
      "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@vue\\cli-plugin-babel\\node_modules",
      "node_modules",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@vue\\cli-service\\node_modules"
    ],
    "plugins": [
      {
        "apply": Function("// ¯\\_(ツ)_/¯"),
        "__proto__": null
      }
    ],
    "__proto__": null
  },
  "module": {
    "noParse": /^(vue|vue-router|vuex|vuex-router-sync)$/,
    "rules": [
      {
        "test": [/\.vue$/, /\.nvue$/
        ],
        "use": [
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\vue-loader\\lib\\index.js",
            "options": {
              "compilerOptions": {
                "preserveWhitespace": false,
                "__proto__": null
              },
              "cacheDirectory": false,
              "cacheIdentifier": false,
              "compiler": {
                "compile": Function("source, options = {}",
                  "if ( // 启用摇树优化后,需要过滤内置组件\r\n      !options.autoComponentResourcePath ||\r\n      options.autoComponentResourcePath.indexOf('@dcloudio/uni-h5/src') === -1\r\n    ) {\r\n      (options.modules || (options.modules = [])).push(autoComponentsModule)\r\n    }\r\n    if (!options.modules) {\r\n      options.modules = []\r\n    }\r\n    // transformAssetUrls\r\n    options.modules.push(require('./asset-url'))\r\n    options.modules.push(require('./bool-attr'))\r\n\r\n    options.isUnaryTag = isUnaryTag\r\n    // 将 autoComponents 挂在 isUnaryTag 上边\r\n    options.isUnaryTag.autoComponents = new Set()\r\n\r\n    options.preserveWhitespace = false\r\n    if (options.service) {\r\n      options.modules.push(require('./app/service'))\r\n      options.optimize = false // 启用 staticRenderFns\r\n      // domProps => attrs\r\n      options.mustUseProp = () => false\r\n      options.isReservedTag = (tagName) => !isComponent(tagName) // 非组件均为内置\r\n      options.getTagNamespace = () => false\r\n\r\n      try {\r\n        return compileTemplate(source, options, compile)\r\n      } catch (e) {\r\n        console.error(source)\r\n        throw e\r\n      }\r\n    } else if (options.view) {\r\n      options.modules.push(require('./app/view'))\r\n      options.optimize = false // 暂不启用 staticRenderFns\r\n      options.isUnaryTag = isUnaryTag\r\n      options.isReservedTag = (tagName) => false // 均为组件\r\n      try {\r\n        return compileTemplate(source, options, compile)\r\n      } catch (e) {\r\n        console.error(source)\r\n        throw e\r\n      }\r\n    } else if (options['quickapp-native']) {\r\n      // 后续改版，应统一由具体包实现\r\n      options.modules.push(require('@dcloudio/uni-quickapp-native/lib/compiler-module'))\r\n    }\r\n\r\n    if (!options.mp) { // h5,quickapp-native\r\n      return compileTemplate(source, options, compile)\r\n    }\r\n\r\n    options.modules.push(compilerModule)\r\n\r\n    if (options.mp.platform === 'mp-alipay') {\r\n      options.modules.push(compilerAlipayModule)\r\n    } else if (options.mp.platform === 'mp-toutiao') {\r\n      options.modules.push(compilerToutiaoModule)\r\n    }\r\n\r\n    const res = compileTemplate(source, Object.assign(options, {\r\n      optimize: false\r\n    }), compile)\r\n\r\n    options.mp.platform = require('./mp')(options.mp.platform)\r\n\r\n    options.mp.scopeId = options.scopeId\r\n\r\n    options.mp.resourcePath = options.resourcePath\r\n    if (options.resourcePath) {\r\n      options.mp.hashId = hash(options.resourcePath)\r\n    } else {\r\n      options.mp.hashId = ''\r\n    }\r\n\r\n    options.mp.globalUsingComponents = options.globalUsingComponents || Object.create(null)\r\n\r\n    options.mp.filterModules = Object.keys(options.filterModules || {})\r\n\r\n    // (可用的原生微信小程序组件，global+scoped)\r\n    options.mp.wxComponents = options.wxComponents || Object.create(null)\r\n\r\n    const state = {\r\n      ast: {},\r\n      script: '',\r\n      template: '',\r\n      errors: new Set(),\r\n      tips: new Set(),\r\n      options: options.mp\r\n    }\r\n    // console.log(`function render(){${res.render}}`)\r\n    const ast = parser.parse(`function render(){${res.render}}`)\r\n    let template = ''\r\n\r\n    try {\r\n      res.render = generateScript(traverseScript(ast, state), state)\r\n      template = generateTemplate(traverseTemplate(ast, state), state)\r\n    } catch (e) {\r\n      console.error(e)\r\n      throw new Error('Compile failed at ' + options.resourcePath.replace(\r\n        path.extname(options.resourcePath),\r\n        '.vue'\r\n      ))\r\n    }\r\n\r\n    res.specialMethods = state.options.specialMethods || new Set()\r\n    delete state.options.specialMethods\r\n\r\n    res.files = state.files || {}\r\n    delete state.files\r\n\r\n    // resolve scoped slots\r\n    res.generic = state.generic || []\n    delete state.generic\r\n\r\n    // define scoped slots\r\n    res.componentGenerics = state.componentGenerics || {}\r\n    delete state.componentGenerics\r\n\r\n    state.errors.forEach(msg => {\r\n      res.errors.push({\r\n        msg\r\n      })\r\n    })\r\n\r\n    const resourcePath = options.resourcePath.replace(path.extname(options.resourcePath), '')\r\n\r\n    state.tips.forEach(msg => {\r\n      console.log(`提示：${msg}\r\nat ${resourcePath}.vue:1`)\r\n    })\r\n\r\n    /**\r\n     * TODO\r\n     * 方案0.最佳方案是在 loader 中直接 emitFile，但目前 vue template-loader 不好介入,自定义的 compiler 结果又无法顺利返回给 loader\r\n     * 方案1.通过 loader 传递 emitFile 来提交生成 wxml,需要一个 template loader 来给自定义 compier 增加 emitFile\r\n     * 方案2.缓存 wxml 内容，由 plugin 生成 assets 来提交生成 wxml\r\n     * ...暂时使用方案1\r\n     */\r\n    if (options.emitFile) {\r\n      // cache\r\n      if (process.env.UNI_USING_CACHE) {\r\n        const oldEmitFile = options.emitFile\r\n        process.UNI_CACHE_TEMPLATES = {}\r\n        options.emitFile = function emitFile (name, content) {\r\n          const absolutePath = path.resolve(process.env.UNI_OUTPUT_DIR, name)\r\n          process.UNI_CACHE_TEMPLATES[absolutePath] = content\r\n          oldEmitFile(name, content)\r\n        }\r\n      }\r\n\r\n      if (options.updateSpecialMethods) {\r\n        options.updateSpecialMethods(resourcePath, [...res.specialMethods])\r\n      }\r\n      const filterTemplate = []\r\n      options.mp.filterModules.forEach(name => {\r\n        const filterModule = options.filterModules[name]\r\n        if (filterModule.type !== 'renderjs' && filterModule.attrs.lang !== 'renderjs') {\r\n          if (\r\n            filterModule.attrs &&\r\n            filterModule.attrs.src &&\r\n            filterModule.attrs.src.indexOf('@/') === 0\r\n          ) {\r\n            const src = filterModule.attrs.src\r\n            filterModule.attrs.src = normalizePath(path.relative(\r\n              path.dirname(resourcePath), src.replace('@/', '')\r\n            ))\r\n          }\r\n          filterTemplate.push(\r\n            options.mp.platform.createFilterTag(\r\n              options.filterTagName,\r\n              filterModule\r\n            )\r\n          )\r\n        }\r\n      })\r\n\r\n      if (filterTemplate.length) {\r\n        template = filterTemplate.join('\\n') + '\\n' + template\r\n      }\r\n\r\n      if (\r\n        process.UNI_ENTRY[resourcePath] &&\r\n        process.env.UNI_PLATFORM !== 'app-plus' &&\r\n        process.env.UNI_PLATFORM !== 'h5'\r\n      ) {\r\n        // 检查是否启用 shadow\r\n        let colorType = false\r\n        const pageJsonStr = options.getJsonFile(resourcePath)\r\n        if (pageJsonStr) {\r\n          try {\r\n            const windowJson = JSON.parse(pageJsonStr)\r\n            if (process.env.UNI_PLATFORM === 'mp-alipay') {\r\n              colorType = windowJson.allowsBounceVertical === 'NO' &&\r\n                windowJson.navigationBarShadow &&\r\n                windowJson.navigationBarShadow.colorType\r\n            } else {\r\n              colorType = windowJson.disableScroll &&\r\n                windowJson.navigationBarShadow &&\r\n                windowJson.navigationBarShadow.colorType\r\n            }\r\n          } catch (e) {}\r\n        }\r\n        if (colorType) {\r\n          template = options.getShadowTemplate(colorType) + template\r\n        }\r\n      }\r\n\r\n      options.emitFile(options.resourcePath, template)\r\n      if (res.files) {\r\n        Object.keys(res.files).forEach(name => {\r\n          options.emitFile(name, res.files[name])\r\n        })\r\n      }\r\n\r\n      if (state.options.usingGlobalComponents) {\r\n        options.updateUsingGlobalComponents(\r\n          resourcePath,\r\n          state.options.usingGlobalComponents\r\n        )\r\n      }\r\n\r\n      if (\r\n        res.generic &&\r\n        res.generic.length &&\r\n        options.updateGenericComponents\r\n      ) {\r\n        options.updateGenericComponents(\r\n          resourcePath,\r\n          res.generic\r\n        )\r\n      }\r\n      if (\r\n        res.componentGenerics &&\r\n        Object.keys(res.componentGenerics).length &&\r\n        options.updateComponentGenerics\r\n      ) {\r\n        options.updateComponentGenerics(\r\n          resourcePath,\r\n          res.componentGenerics\r\n        )\r\n      }\r\n    } else {\r\n      res.template = template\r\n    }\r\n    return res"),
                "parseComponent": Function("content,\n  options",
                  "if ( options === void 0 ) options = {};\n\n  var sfc = {\n    template: null,\n    script: null,\n    styles: [],\n    customBlocks: [],\n    errors: []\n  };\n  var depth = 0;\n  var currentBlock = null;\n\n  var warn = function (msg) {\n    sfc.errors.push(msg);\n  };\n\n  if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {\n    warn = function (msg, range) {\n      var data = { msg: msg };\n      if (range.start != null) {\n        data.start = range.start;\n      }\n      if (range.end != null) {\n        data.end = range.end;\n      }\n      sfc.errors.push(data);\n    };\n  }\n\n  function start (\n    tag,\n    attrs,\n    unary,\n    start,\n    end\n  ) {\n    if (depth === 0) {\n      currentBlock = {\n        type: tag,\n        content: '',\n        start: end,\n        attrs: attrs.reduce(function (cumulated, ref) {\n          var name = ref.name;\n          var value = ref.value;\n\n          cumulated[name] = value || true;\n          return cumulated\n        }, {})\n      };// fixed by xxxxxx\n      if (isSpecialTag(tag) && !isCustomBlock(String(currentBlock.attrs.lang || ''))) {\n        checkAttrs(currentBlock, attrs);\n        if (tag === 'style') {\n          sfc.styles.push(currentBlock);\n        } else {\n          sfc[tag] = currentBlock;\n        }\n      } else { // custom blocks\n        sfc.customBlocks.push(currentBlock);\n      }\n    }\n    if (!unary) {\n      depth++;\n    }\n  }\n\n  function checkAttrs (block, attrs) {\n    for (var i = 0; i < attrs.length; i++) {\n      var attr = attrs[i];\n      if (attr.name === 'lang') {\n        block.lang = attr.value;\n      }\n      if (attr.name === 'scoped') {\n        block.scoped = true;\n      }\n      if (attr.name === 'module') {\n        block.module = attr.value || true;\n      }\n      if (attr.name === 'src') {\n        block.src = attr.value;\n      }\n    }\n  }\n\n  function end (tag, start) {\n    if (depth === 1 && currentBlock) {\n      currentBlock.end = start;\n      var text = content.slice(currentBlock.start, currentBlock.end);\n      if (options.deindent !== false) {\n        text = deindent(text);\n      }\n      // pad content so that linters and pre-processors can output correct\n      // line numbers in errors and warnings\n      if (currentBlock.type !== 'template' && options.pad) {\n        text = padContent(currentBlock, options.pad) + text;\n      }\n      currentBlock.content = text;\n      currentBlock = null;\n    }\n    depth--;\n  }\n\n  function padContent (block, pad) {\n    if (pad === 'space') {\n      return content.slice(0, block.start).replace(replaceRE, ' ')\n    } else {\n      var offset = content.slice(0, block.start).split(splitRE).length;\n      var lang = block.attrs && block.attrs.lang; // fixed by xxxxxx\n      var padChar = block.type === 'script' && !block.lang && !isCustomBlock(String(lang || ''))\n        ? '//\\n'\n        : '\\n';\n      return Array(offset).join(padChar)\n    }\n  }\n\n  parseHTML(content, {\n    warn: warn,\n    start: start,\n    end: end,\n    outputSourceRange: options.outputSourceRange\n  });\n\n  return sfc"),
                "compileToFunctions": Function("template,\n    options,\n    vm",
                  "options = extend({}, options);\n    var warn$$1 = options.warn || warn;\n    delete options.warn;\n\n    /* istanbul ignore if */\n    if (process.env.NODE_ENV !== 'production') {\n      // detect possible CSP restriction\n      try {\n        new Function('return 1');\n      } catch (e) {\n        if (e.toString().match(/unsafe-eval|CSP/)) {\n          warn$$1(\n            'It seems you are using the standalone build of Vue.js in an ' +\n            'environment with Content Security Policy that prohibits unsafe-eval. ' +\n            'The template compiler cannot work in this environment. Consider ' +\n            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +\n            'templates into render functions.'\n          );\n        }\n      }\n    }\n\n    // check cache\n    var key = options.delimiters\n      ? String(options.delimiters) + template\n      : template;\n    if (cache[key]) {\n      return cache[key]\n    }\n\n    // compile\n    var compiled = compile(template, options);\n\n    // check compilation errors/tips\n    if (process.env.NODE_ENV !== 'production') {\n      if (compiled.errors && compiled.errors.length) {\n        if (options.outputSourceRange) {\n          compiled.errors.forEach(function (e) {\n            warn$$1(\n              \"Error compiling template:\\n\\n\" + (e.msg) + \"\\n\\n\" +\n              generateCodeFrame(template, e.start, e.end),\n              vm\n            );\n          });\n        } else {\n          warn$$1(\n            \"Error compiling template:\\n\\n\" + template + \"\\n\\n\" +\n            compiled.errors.map(function (e) { return (\"- \" + e); }).join('\\n') + '\\n',\n            vm\n          );\n        }\n      }\n      if (compiled.tips && compiled.tips.length) {\n        if (options.outputSourceRange) {\n          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });\n        } else {\n          compiled.tips.forEach(function (msg) { return tip(msg, vm); });\n        }\n      }\n    }\n\n    // turn code into functions\n    var res = {};\n    var fnGenErrors = [];\n    res.render = createFunction(compiled.render, fnGenErrors);\n    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {\n      return createFunction(code, fnGenErrors)\n    });\n\n    // check function generation errors.\n    // this should only happen if there is a bug in the compiler itself.\n    // mostly for codegen development use\n    /* istanbul ignore if */\n    if (process.env.NODE_ENV !== 'production') {\n      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {\n        warn$$1(\n          \"Failed to generate render function:\\n\\n\" +\n          fnGenErrors.map(function (ref) {\n            var err = ref.err;\n            var code = ref.code;\n\n            return ((err.toString()) + \" in\\n\\n\" + code + \"\\n\");\n        }).join('\\n'),\n          vm\n        );\n      }\n    }\n\n    return (cache[key] = res)"),
                "ssrCompile": Function("template,\n      options",
                  "var finalOptions = Object.create(baseOptions);\n      var errors = [];\n      var tips = [];\n\n      var warn = function (msg, range, tip) {\n        (tip ? tips : errors).push(msg);\n      };\n\n      if (options) {\n        if (process.env.NODE_ENV !== 'production' && options.outputSourceRange) {\n          // $flow-disable-line\n          var leadingSpaceLength = template.match(/^\\s*/)[0].length;\n\n          warn = function (msg, range, tip) {\n            var data = { msg: msg };\n            if (range) {\n              if (range.start != null) {\n                data.start = range.start + leadingSpaceLength;\n              }\n              if (range.end != null) {\n                data.end = range.end + leadingSpaceLength;\n              }\n            }\n            (tip ? tips : errors).push(data);\n          };\n        }\n        // merge custom modules\n        if (options.modules) {\n          finalOptions.modules =\n            (baseOptions.modules || []).concat(options.modules);\n        }\n        // merge custom directives\n        if (options.directives) {\n          finalOptions.directives = extend(\n            Object.create(baseOptions.directives || null),\n            options.directives\n          );\n        }\n        // copy other options\n        for (var key in options) {\n          if (key !== 'modules' && key !== 'directives') {\n            finalOptions[key] = options[key];\n          }\n        }\n      }\n\n      finalOptions.warn = warn;\n\n      var compiled = baseCompile(template.trim(), finalOptions);\n      if (process.env.NODE_ENV !== 'production') {\n        detectErrors(compiled.ast, warn);\n      }\n      compiled.errors = errors;\n      compiled.tips = tips;\n      return compiled"),
                "ssrCompileToFunctions": Function("template,\n    options,\n    vm",
                  "options = extend({}, options);\n    var warn$$1 = options.warn || warn;\n    delete options.warn;\n\n    /* istanbul ignore if */\n    if (process.env.NODE_ENV !== 'production') {\n      // detect possible CSP restriction\n      try {\n        new Function('return 1');\n      } catch (e) {\n        if (e.toString().match(/unsafe-eval|CSP/)) {\n          warn$$1(\n            'It seems you are using the standalone build of Vue.js in an ' +\n            'environment with Content Security Policy that prohibits unsafe-eval. ' +\n            'The template compiler cannot work in this environment. Consider ' +\n            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +\n            'templates into render functions.'\n          );\n        }\n      }\n    }\n\n    // check cache\n    var key = options.delimiters\n      ? String(options.delimiters) + template\n      : template;\n    if (cache[key]) {\n      return cache[key]\n    }\n\n    // compile\n    var compiled = compile(template, options);\n\n    // check compilation errors/tips\n    if (process.env.NODE_ENV !== 'production') {\n      if (compiled.errors && compiled.errors.length) {\n        if (options.outputSourceRange) {\n          compiled.errors.forEach(function (e) {\n            warn$$1(\n              \"Error compiling template:\\n\\n\" + (e.msg) + \"\\n\\n\" +\n              generateCodeFrame(template, e.start, e.end),\n              vm\n            );\n          });\n        } else {\n          warn$$1(\n            \"Error compiling template:\\n\\n\" + template + \"\\n\\n\" +\n            compiled.errors.map(function (e) { return (\"- \" + e); }).join('\\n') + '\\n',\n            vm\n          );\n        }\n      }\n      if (compiled.tips && compiled.tips.length) {\n        if (options.outputSourceRange) {\n          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });\n        } else {\n          compiled.tips.forEach(function (msg) { return tip(msg, vm); });\n        }\n      }\n    }\n\n    // turn code into functions\n    var res = {};\n    var fnGenErrors = [];\n    res.render = createFunction(compiled.render, fnGenErrors);\n    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {\n      return createFunction(code, fnGenErrors)\n    });\n\n    // check function generation errors.\n    // this should only happen if there is a bug in the compiler itself.\n    // mostly for codegen development use\n    /* istanbul ignore if */\n    if (process.env.NODE_ENV !== 'production') {\n      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {\n        warn$$1(\n          \"Failed to generate render function:\\n\\n\" +\n          fnGenErrors.map(function (ref) {\n            var err = ref.err;\n            var code = ref.code;\n\n            return ((err.toString()) + \" in\\n\\n\" + code + \"\\n\");\n        }).join('\\n'),\n          vm\n        );\n      }\n    }\n\n    return (cache[key] = res)"),
                "generateCodeFrame": Function("source,\r\n  start,\r\n  end",
                  "source = source.replace(/\\r\\n/g, '\\n') // 替换\\r\\n 为 \\n\n  /* eslint-disable no-void */\r\n  if (start === void 0) start = 0\r\n  if (end === void 0) end = source.length\r\n\r\n  var lines = source.split(/\\n/) // 替换\\r?\\n 为 \\n，不然 length 对不上，导致死循环\r\n  var count = 0\r\n  var res = []\r\n  for (var i = 0; i < lines.length; i++) {\r\n    count += lines[i].length + 1\r\n    if (count >= start) {\r\n      for (var j = i - range; j <= i + range || end > count; j++) {\r\n        if (j < 0 || j >= lines.length) {\r\n          continue\r\n        }\r\n        res.push(('' + (j + 1) + (repeat$1(' ', 3 - String(j + 1).length)) + '|  ' + (lines[j])))\r\n        var lineLength = lines[j].length\r\n        if (j === i) {\r\n          // push underline\r\n          var pad = start - (count - lineLength) + 1\r\n          var length = end > count ? lineLength - pad : end - start\r\n          res.push('   |  ' + repeat$1(' ', pad) + repeat$1('^', length))\r\n        } else if (j > i) {\r\n          if (end > count) {\r\n            var length$1 = Math.min(end - count, lineLength)\r\n            res.push('   |  ' + repeat$1('^', length$1))\r\n          }\r\n          count += lineLength + 1\r\n        }\r\n      }\r\n      break\r\n    }\r\n  }\r\n  return res.join('\\n')"),
                "__proto__": null
              },
              "hotReload": false,
              "transformAssetUrls": false,
              "__proto__": null
            },
            "__proto__": null
          },
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\webpack-uni-mp-loader\\lib\\style.js",
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "vue"
        ],
        "__proto__": null
      },
      {
        "test": /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        "use": [
          {
            "loader": "url-loader",
            "options": {
              "limit": 40960,
              "fallback": {
                "loader": "file-loader",
                "options": {
                  "publicPath": Function("url, resourcePath, context",
                    "return '/' + normalizePath(path.relative(process.env.UNI_INPUT_DIR, resourcePath))"),
                  "outputPath": Function("url, resourcePath, context",
                    "return normalizePath(path.relative(process.env.UNI_INPUT_DIR, resourcePath))"),
                  "__proto__": null
                },
                "__proto__": null
              },
              "__proto__": null
            },
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "images"
        ],
        "__proto__": null
      },
      {
        "test": /\.(svg)(\?.*)?$/,
        "use": [
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\file-loader\\dist\\cjs.js",
            "options": {
              "name": "static/img/[name].[hash:8].[ext]",
              "__proto__": null
            },
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "svg"
        ],
        "__proto__": null
      },
      {
        "test": /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        "use": [
          {
            "loader": "url-loader",
            "options": {
              "limit": 40960,
              "fallback": {
                "loader": "file-loader",
                "options": {
                  "publicPath": Function("url, resourcePath, context",
                    "return '/' + normalizePath(path.relative(process.env.UNI_INPUT_DIR, resourcePath))"),
                  "outputPath": Function("url, resourcePath, context",
                    "return normalizePath(path.relative(process.env.UNI_INPUT_DIR, resourcePath))"),
                  "__proto__": null
                },
                "__proto__": null
              },
              "__proto__": null
            },
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "media"
        ],
        "__proto__": null
      },
      {
        "test": /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        "use": [
          {
            "loader": "url-loader",
            "options": {
              "limit": 40960,
              "fallback": {
                "loader": "file-loader",
                "options": {
                  "publicPath": Function("url, resourcePath, context",
                    "return '/' + normalizePath(path.relative(process.env.UNI_INPUT_DIR, resourcePath))"),
                  "outputPath": Function("url, resourcePath, context",
                    "return normalizePath(path.relative(process.env.UNI_INPUT_DIR, resourcePath))"),
                  "__proto__": null
                },
                "__proto__": null
              },
              "__proto__": null
            },
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "fonts"
        ],
        "__proto__": null
      },
      {
        "test": /\.pug$/,
        "oneOf": [
          {
            "resourceQuery": /vue/,
            "use": [
              {
                "loader": "pug-plain-loader",
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "pug",
              "pug-vue"
            ],
            "__proto__": null
          },
          {
            "use": [
              {
                "loader": "raw-loader",
                "__proto__": null
              },
              {
                "loader": "pug-plain-loader",
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "pug",
              "pug-template"
            ],
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "pug"
        ],
        "__proto__": null
      },
      {
        "test": /\.css$/,
        "oneOf": [
          {
            "resourceQuery": /module/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "css",
              "vue-modules"
            ],
            "__proto__": null
          },
          {
            "resourceQuery": /\?vue/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "css",
              "vue"
            ],
            "__proto__": null
          },
          {
            "test": /\.module\.\w+$/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "css",
              "normal-modules"
            ],
            "__proto__": null
          },
          {
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "css",
              "normal"
            ],
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "css"
        ],
        "__proto__": null
      },
      {
        "test": /\.p(ost)?css$/,
        "oneOf": [
          {
            "resourceQuery": /module/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "postcss",
              "vue-modules"
            ],
            "__proto__": null
          },
          {
            "resourceQuery": /\?vue/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "postcss",
              "vue"
            ],
            "__proto__": null
          },
          {
            "test": /\.module\.\w+$/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "postcss",
              "normal-modules"
            ],
            "__proto__": null
          },
          {
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "postcss",
              "normal"
            ],
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "postcss"
        ],
        "__proto__": null
      },
      {
        "test": /\.scss$/,
        "oneOf": [
          {
            "resourceQuery": /module/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "scss",
              "vue-modules"
            ],
            "__proto__": null
          },
          {
            "resourceQuery": /\?vue/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "scss",
              "vue"
            ],
            "__proto__": null
          },
          {
            "test": /\.module\.\w+$/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "scss",
              "normal-modules"
            ],
            "__proto__": null
          },
          {
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "scss",
              "normal"
            ],
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "scss"
        ],
        "__proto__": null
      },
      {
        "test": /\.sass$/,
        "oneOf": [
          {
            "resourceQuery": /module/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "indentedSyntax": true,
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "sass",
              "vue-modules"
            ],
            "__proto__": null
          },
          {
            "resourceQuery": /\?vue/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "indentedSyntax": true,
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "sass",
              "vue"
            ],
            "__proto__": null
          },
          {
            "test": /\.module\.\w+$/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "indentedSyntax": true,
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "sass",
              "normal-modules"
            ],
            "__proto__": null
          },
          {
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "sass-loader",
                "options": {
                  "sourceMap": false,
                  "sassOptions": {
                    "outputStyle": "expanded",
                    "indentedSyntax": true,
                    "__proto__": null
                  },
                  "prependData": "\n$uni-color-primary: #007aff;\n$uni-color-success: #4cd964;\n$uni-color-warning: #f0ad4e;\n$uni-color-error: #dd524d;\n\n$uni-text-color: #333;//基本色\n$uni-text-color-inverse: #fff;//反色\n$uni-text-color-grey: #999;//辅助灰色，如加载更多的提示信息\n$uni-text-color-placeholder: #808080;\n$uni-text-color-disable: #c0c0c0;\n\n$uni-bg-color: #ffffff;\n$uni-bg-color-grey: #f8f8f8;\n$uni-bg-color-hover: #f1f1f1;//点击状态颜色\n$uni-bg-color-mask: rgba(0, 0, 0, 0.4);//遮罩颜色\n\n$uni-border-color: #c8c7cc;\n\n\n$uni-font-size-sm: 24rpx;\n$uni-font-size-base: 28rpx;\n$uni-font-size-lg: 32rpx;\n\n$uni-img-size-sm: 40rpx;\n$uni-img-size-base: 52rpx;\n$uni-img-size-lg: 80rpx;\n\n$uni-border-radius-sm: 4rpx;\n$uni-border-radius-base: 6rpx;\n$uni-border-radius-lg: 12rpx;\n$uni-border-radius-circle: 50%;\n\n$uni-spacing-row-sm: 10px;\n$uni-spacing-row-base: 20rpx;\n$uni-spacing-row-lg: 30rpx;\n\n$uni-spacing-col-sm: 8rpx;\n$uni-spacing-col-base: 16rpx;\n$uni-spacing-col-lg: 24rpx;\n\n$uni-opacity-disabled: 0.3; // 组件禁用态的透明度\n\n$uni-color-title: #2C405A; // 文章标题颜色\n$uni-font-size-title: 40rpx;\n$uni-color-subtitle: #555555; // 二级标题颜色\n$uni-font-size-subtitle: 36rpx;\n$uni-color-paragraph: #3F536E; // 文章段落颜色\n$uni-font-size-paragraph: 30rpx;\n\n  @import \"@/uni.scss\";",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "sass",
              "normal"
            ],
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "sass"
        ],
        "__proto__": null
      },
      {
        "test": /\.less$/,
        "oneOf": [
          {
            "resourceQuery": /module/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "less-loader",
                "options": {
                  "sourceMap": false,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "less",
              "vue-modules"
            ],
            "__proto__": null
          },
          {
            "resourceQuery": /\?vue/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "less-loader",
                "options": {
                  "sourceMap": false,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "less",
              "vue"
            ],
            "__proto__": null
          },
          {
            "test": /\.module\.\w+$/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "less-loader",
                "options": {
                  "sourceMap": false,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "less",
              "normal-modules"
            ],
            "__proto__": null
          },
          {
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "less-loader",
                "options": {
                  "sourceMap": false,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "less",
              "normal"
            ],
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "less"
        ],
        "__proto__": null
      },
      {
        "test": /\.styl(us)?$/,
        "oneOf": [
          {
            "resourceQuery": /module/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "stylus-loader",
                "options": {
                  "sourceMap": false,
                  "preferPathResolver": "webpack",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "stylus",
              "vue-modules"
            ],
            "__proto__": null
          },
          {
            "resourceQuery": /\?vue/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "stylus-loader",
                "options": {
                  "sourceMap": false,
                  "preferPathResolver": "webpack",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "stylus",
              "vue"
            ],
            "__proto__": null
          },
          {
            "test": /\.module\.\w+$/,
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "modules": {
                    "localIdentName": "[name]_[local]_[hash:base64:5]",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "stylus-loader",
                "options": {
                  "sourceMap": false,
                  "preferPathResolver": "webpack",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "stylus",
              "normal-modules"
            ],
            "__proto__": null
          },
          {
            "use": [
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                "options": {
                  "hmr": true,
                  "publicPath": "../../",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\css-loader\\dist\\cjs.js",
                "options": {
                  "sourceMap": false,
                  "importLoaders": 2,
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\postcss-loader\\src\\index.js",
                "options": {
                  "sourceMap": false,
                  "config": {
                    "path": "D:\\code\\computer-science\\uniapp\\uniapp1\\postcss.config.js",
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "stylus-loader",
                "options": {
                  "sourceMap": false,
                  "preferPathResolver": "webpack",
                  "__proto__": null
                },
                "__proto__": null
              },
              {
                "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
                "options": {
                  "type": "css",
                  "context": {
                    "APP_PLUS": false,
                    "H5": false,
                    "MP_360": false,
                    "MP_ALIPAY": false,
                    "MP_BAIDU": false,
                    "MP_KUAISHOU": false,
                    "MP_QQ": false,
                    "MP_TOUTIAO": false,
                    "MP_WEIXIN": true,
                    "QUICKAPP_NATIVE": false,
                    "QUICKAPP_WEBVIEW": false,
                    "MP": true,
                    "APP": false,
                    "APP_PLUS_NVUE": false,
                    "APP_VUE": false,
                    "APP_NVUE": false,
                    "__proto__": null
                  },
                  "__proto__": null
                },
                "__proto__": null
              }
            ],
            "__ruleNames": [
              "stylus",
              "normal"
            ],
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "stylus"
        ],
        "__proto__": null
      },
      {
        "test": /\.m?jsx?$/,
        "exclude": [Function("filepath",
          "// always transpile js in vue files\n            if (/\\.vue\\.jsx?$/.test(filepath)) {\n              return false\n            }\n            // exclude dynamic entries from cli-service\n            if (filepath.startsWith(cliServicePath)) {\n              return true\n            }\n\n            // only include @babel/runtime when the @vue/babel-preset-app preset is used\n            if (\n              process.env.VUE_CLI_TRANSPILE_BABEL_RUNTIME &&\n              filepath.includes(path.join('@babel', 'runtime'))\n            ) {\n              return false\n            }\n\n            // check if this is something the user explicitly wants to transpile\n            if (transpileDepRegex && transpileDepRegex.test(filepath)) {\n              return false\n            }\n            // Don't transpile node_modules\n            return /node_modules/.test(filepath)")
        ],
        "use": [
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\babel-loader\\lib\\index.js",
            "__proto__": null
          },
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
            "options": {
              "type": "js",
              "context": {
                "APP_PLUS": false,
                "H5": false,
                "MP_360": false,
                "MP_ALIPAY": false,
                "MP_BAIDU": false,
                "MP_KUAISHOU": false,
                "MP_QQ": false,
                "MP_TOUTIAO": false,
                "MP_WEIXIN": true,
                "QUICKAPP_NATIVE": false,
                "QUICKAPP_WEBVIEW": false,
                "MP": true,
                "APP": false,
                "APP_PLUS_NVUE": false,
                "APP_VUE": false,
                "APP_NVUE": false,
                "__proto__": null
              },
              "__proto__": null
            },
            "__proto__": null
          }
        ],
        "__ruleNames": [
          "js"
        ],
        "__proto__": null
      },
      {
        "test": "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\pages.json",
        "use": [
          {
            "loader": "babel-loader",
            "__proto__": null
          },
          {
            "loader": "@dcloudio/webpack-uni-pages-loader",
            "__proto__": null
          }
        ],
        "type": "javascript/auto",
        "__proto__": null
      },
      {
        "resourceQuery": /vue&type=template/,
        "use": [
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-preprocess-loader",
            "options": {
              "type": "html",
              "context": {
                "APP_PLUS": false,
                "H5": false,
                "MP_360": false,
                "MP_ALIPAY": false,
                "MP_BAIDU": false,
                "MP_KUAISHOU": false,
                "MP_QQ": false,
                "MP_TOUTIAO": false,
                "MP_WEIXIN": true,
                "QUICKAPP_NATIVE": false,
                "QUICKAPP_WEBVIEW": false,
                "MP": true,
                "APP": false,
                "APP_PLUS_NVUE": false,
                "APP_VUE": false,
                "APP_NVUE": false,
                "__proto__": null
              },
              "__proto__": null
            },
            "__proto__": null
          }
        ],
        "__proto__": null
      },
      {
        "test": "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\main.js",
        "use": [
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\wrap-loader",
            "options": {
              "before": [
                "import 'uni-pages';"
              ],
              "__proto__": null
            },
            "__proto__": null
          },
          {
            "loader": "@dcloudio/webpack-uni-mp-loader/lib/main",
            "__proto__": null
          }
        ],
        "__proto__": null
      },
      {
        "resourceQuery": /vue&type=script/,
        "use": [
          {
            "loader": "@dcloudio/webpack-uni-mp-loader/lib/script",
            "__proto__": null
          }
        ],
        "__proto__": null
      },
      {
        "resourceQuery": /vue&type=template/,
        "use": [
          {
            "loader": "@dcloudio/webpack-uni-mp-loader/lib/template",
            "__proto__": null
          },
          {
            "loader": "@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta",
            "__proto__": null
          }
        ],
        "__proto__": null
      },
      {
        "resourceQuery": /type=uni-cache-loader-template/,
        "use": [
          {
            "loader": "cache-loader",
            "ident": "uni-cache-loader-template-options",
            "options": {
              "cacheDirectory": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\.cache\\uni-template-compiler\\mp-weixin",
              "cacheIdentifier": "5fdcfb6c",
              "read": Function("key, callback",
                "fs.readFile(key, 'utf-8', (err, content) => {\r\n    if (err) {\r\n      callback(err)\r\n      return\r\n    }\r\n\r\n    try {\r\n      const data = BJSON.parse(content)\r\n      const mpTemplates = data.mpTemplates\r\n      if (mpTemplates) {\r\n        Object.keys(mpTemplates).forEach(name => {\r\n          fs.writeFileSync(name, mpTemplates[name], 'utf-8')\r\n        })\r\n      }\r\n      callback(null, data)\r\n    } catch (e) {\r\n      callback(e)\r\n    }\r\n  })"),
              "write": Function("key, data, callback",
                "const dirname = path.dirname(key)\r\n  // template,缓存 mp template\r\n  if (\r\n    data.remainingRequest.indexOf('vue&type=template') !== -1 &&\r\n    process.UNI_CACHE_TEMPLATES\r\n  ) {\r\n    data.mpTemplates = process.UNI_CACHE_TEMPLATES\r\n    delete process.UNI_CACHE_TEMPLATES\r\n  }\r\n\r\n  const content = BJSON.stringify(data)\r\n\r\n  if (directories.has(dirname)) {\r\n    // for performance skip creating directory\r\n    fs.writeFile(key, content, 'utf-8', callback)\r\n  } else {\r\n    mkdirp(dirname, (mkdirErr) => {\r\n      if (mkdirErr) {\r\n        callback(mkdirErr)\r\n        return\r\n      }\r\n\r\n      directories.add(dirname)\r\n\r\n      fs.writeFile(key, content, 'utf-8', callback)\r\n    })\r\n  }"),
              "__proto__": null
            },
            "__proto__": null
          }
        ],
        "__proto__": null
      },
      {
        "resourceQuery": [/lang=wxs/, /lang=filter/, /lang=sjs/, /blockType=wxs/, /blockType=filter/, /blockType=sjs/
        ],
        "use": [
          {
            "loader": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\webpack-uni-filter-loader\\index.js",
            "__proto__": null
          }
        ],
        "__proto__": null
      }
    ],
    "__proto__": null
  },
  "optimization": {
    "splitChunks": {
      "chunks": Function("chunk",
        "// 防止 node_modules 内 vue 组件被 split\r\n        return chunk.name.indexOf('node-modules') !== 0"),
      "cacheGroups": {
        "default": false,
        "vendors": false,
        "commons": {
          "test": Function("module",
            "if (module.type === 'css/mini-extract') {\r\n              return false\r\n            }\r\n            if (module.resource && (\r\n              module.resource.indexOf('.vue') !== -1 ||\r\n                module.resource.indexOf('.nvue') !== -1 ||\r\n                normalizePath(module.resource).indexOf(mainPath) === 0 // main.js\r\n            )) {\r\n              return false\r\n            }\r\n            return true"),
          "minChunks": 1,
          "name": "common/vendor",
          "chunks": "all",
          "__proto__": null
        },
        "__proto__": null
      },
      "__proto__": null
    },
    "minimizer": [
      {
        "options": {
          "test": /\.m?js(\?.*)?$/i,
          "chunkFilter": Function("return true"),
          "warningsFilter": Function("return true"),
          "extractComments": false,
          "sourceMap": true,
          "cache": true,
          "cacheKeys": Function("defaultCacheKeys",
            "return defaultCacheKeys"),
          "parallel": false,
          "include": undefined,
          "exclude": undefined,
          "minify": undefined,
          "terserOptions": {
            "compress": {
              "arrows": false,
              "collapse_vars": false,
              "comparisons": false,
              "computed_props": false,
              "hoist_funs": false,
              "hoist_props": false,
              "hoist_vars": false,
              "inline": false,
              "loops": false,
              "negate_iife": false,
              "properties": false,
              "reduce_funcs": false,
              "reduce_vars": false,
              "switches": false,
              "toplevel": false,
              "typeofs": false,
              "booleans": true,
              "if_return": true,
              "sequences": true,
              "unused": true,
              "conditionals": true,
              "dead_code": true,
              "evaluate": true,
              "__proto__": null
            },
            "mangle": {
              "safari10": true,
              "__proto__": null
            },
            "__proto__": null
          },
          "__proto__": null
        },
        "__proto__": null
      }
    ],
    "noEmitOnErrors": false,
    "runtimeChunk": {
      "name": "common/runtime",
      "__proto__": null
    },
    "namedModules": false,
    "__proto__": null
  },
  "plugins": [
    {
      "__pluginName": "vue-loader",
      "__pluginType": "plugin",
      "__pluginArgs": [],
      "__pluginConstructorName": "VueLoaderPlugin",
      "__pluginPath": null,
      "__proto__": null
    },
    {
      "definitions": {
        "process.env": {
          "NODE_ENV": "\"development\"",
          "VUE_APP_NAME": "\"\"",
          "VUE_APP_PLATFORM": "\"mp-weixin\"",
          "BASE_URL": "\"/\"",
          "__proto__": null
        },
        "__proto__": null
      },
      "__pluginName": "define",
      "__pluginType": "plugin",
      "__pluginArgs": [
        {
          "process.env": {
            "NODE_ENV": "\"development\"",
            "VUE_APP_NAME": "\"\"",
            "VUE_APP_PLATFORM": "\"mp-weixin\"",
            "BASE_URL": "\"/\"",
            "__proto__": null
          },
          "__proto__": null
        }
      ],
      "__pluginConstructorName": "DefinePlugin",
      "__pluginPath": null,
      "__proto__": null
    },
    {
      "options": {
        "__proto__": null
      },
      "logger": {
        "_stdout": {
          "connecting": false,
          "_hadError": false,
          "_parent": null,
          "_host": null,
          "_readableState": {
            "objectMode": false,
            "highWaterMark": 16384,
            "buffer": {
              "head": null,
              "tail": null,
              "length": 0,
              "__proto__": null
            },
            "length": 0,
            "pipes": null,
            "pipesCount": 0,
            "flowing": null,
            "ended": false,
            "endEmitted": false,
            "reading": false,
            "sync": true,
            "needReadable": false,
            "emittedReadable": false,
            "readableListening": false,
            "resumeScheduled": false,
            "paused": true,
            "emitClose": false,
            "autoDestroy": false,
            "destroyed": false,
            "defaultEncoding": "utf8",
            "awaitDrain": 0,
            "readingMore": false,
            "decoder": null,
            "encoding": null,
            "__proto__": null
          },
          "readable": false,
          "_events": {
            "end": Function("if (!this.allowHalfOpen) {\n    this.write = writeAfterFIN;\n    if (this.writable)\n      this.end();\n  }\n  maybeDestroy(this);"),
            "error": Function(),
            "__proto__": null
          },
          "_eventsCount": 2,
          "_maxListeners": undefined,
          "_writableState": {
            "objectMode": false,
            "highWaterMark": 16384,
            "finalCalled": false,
            "needDrain": false,
            "ending": false,
            "ended": false,
            "finished": false,
            "destroyed": false,
            "decodeStrings": false,
            "defaultEncoding": "utf8",
            "length": 0,
            "writing": false,
            "corked": 0,
            "sync": false,
            "bufferProcessing": false,
            "writecb": null,
            "writelen": 0,
            "bufferedRequest": null,
            "lastBufferedRequest": null,
            "pendingcb": 0,
            "prefinished": false,
            "errorEmitted": false,
            "emitClose": false,
            "autoDestroy": false,
            "bufferedRequestCount": 0,
            "corkedRequestsFree": {
              "next": null,
              "entry": null,
              "__proto__": null
            },
            "__proto__": null
          },
          "writable": true,
          "allowHalfOpen": false,
          "_writev": null,
          "_write": Function("chunk, enc, cb",
            "if (enc !== 'buffer')\n      chunk = Buffer.from(chunk, enc);\n\n    this._handle.bytesWritten += chunk.length;\n\n    const ctx = {};\n    writeBuffer(fd, chunk, 0, chunk.length, null, undefined, ctx);\n    if (ctx.errno !== undefined) {\n      const ex = errors.uvException(ctx);\n      // Legacy: net writes have .code === .errno, whereas writeBuffer gives the\n      // raw errno number in .errno.\n      ex.errno = ex.code;\n      return cb(ex);\n    }\n    cb();"),
          "_sockname": null,
          "_pendingData": null,
          "_pendingEncoding": "",
          "server": null,
          "_server": null,
          "_type": "pipe",
          "fd": 1,
          "_isStdio": true,
          "destroySoon": Function("err, cb",
            "const readableDestroyed = this._readableState &&\n    this._readableState.destroyed;\n  const writableDestroyed = this._writableState &&\n    this._writableState.destroyed;\n\n  if (readableDestroyed || writableDestroyed) {\n    if (cb) {\n      cb(err);\n    } else if (err) {\n      if (!this._writableState) {\n        process.nextTick(emitErrorNT, this, err);\n      } else if (!this._writableState.errorEmitted) {\n        this._writableState.errorEmitted = true;\n        process.nextTick(emitErrorNT, this, err);\n      }\n    }\n\n    return this;\n  }\n\n  // We set destroyed to true before firing error callbacks in order\n  // to make it re-entrance safe in case destroy() is called within callbacks\n\n  if (this._readableState) {\n    this._readableState.destroyed = true;\n  }\n\n  // If this is a duplex stream mark the writable part as destroyed as well\n  if (this._writableState) {\n    this._writableState.destroyed = true;\n  }\n\n  this._destroy(err || null, (err) => {\n    if (!cb && err) {\n      if (!this._writableState) {\n        process.nextTick(emitErrorAndCloseNT, this, err);\n      } else if (!this._writableState.errorEmitted) {\n        this._writableState.errorEmitted = true;\n        process.nextTick(emitErrorAndCloseNT, this, err);\n      } else {\n        process.nextTick(emitCloseNT, this);\n      }\n    } else if (cb) {\n      process.nextTick(emitCloseNT, this);\n      cb(err);\n    } else {\n      process.nextTick(emitCloseNT, this);\n    }\n  });\n\n  return this;"),
          "_destroy": Function("err, cb",
            "cb(err);"),
          [Symbol("asyncId")
          ]: 3,
          [Symbol("kHandle")
          ]: {
            "bytesWritten": 373,
            "onread": Function("arrayBuffer",
              "const nread = streamBaseState[kReadBytesOrError];\n\n  const handle = this;\n  const stream = this[owner_symbol];\n\n  stream[kUpdateTimer]();\n\n  if (nread > 0 && !stream.destroyed) {\n    const offset = streamBaseState[kArrayBufferOffset];\n    const buf = new FastBuffer(arrayBuffer, offset, nread);\n    if (!stream.push(buf)) {\n      handle.reading = false;\n      if (!stream.destroyed) {\n        const err = handle.readStop();\n        if (err)\n          stream.destroy(errnoException(err, 'read'));\n      }\n    }\n\n    return;\n  }\n\n  if (nread === 0) {\n    return;\n  }\n\n  if (nread !== UV_EOF) {\n    return stream.destroy(errnoException(nread, 'read'));\n  }\n\n  // Defer this until we actually emit end\n  if (stream._readableState.endEmitted) {\n    if (stream[kMaybeDestroy])\n      stream[kMaybeDestroy]();\n  } else {\n    if (stream[kMaybeDestroy])\n      stream.on('end', stream[kMaybeDestroy]);\n\n    // Push a null to signal the end of data.\n    // Do it before `maybeDestroy` for correct order of events:\n    // `end` -> `close`\n    stream.push(null);\n    stream.read(0);\n  }"),
            "__proto__": null
          },
          [Symbol("lastWriteQueueSize")
          ]: 0,
          [Symbol("timeout")
          ]: null,
          [Symbol("kBytesRead")
          ]: 0,
          [Symbol("kBytesWritten")
          ]: 0,
          "__proto__": null
        },
        "_stderr": {
          "connecting": false,
          "_hadError": false,
          "_parent": null,
          "_host": null,
          "_readableState": {
            "objectMode": false,
            "highWaterMark": 16384,
            "buffer": {
              "head": null,
              "tail": null,
              "length": 0,
              "__proto__": null
            },
            "length": 0,
            "pipes": null,
            "pipesCount": 0,
            "flowing": null,
            "ended": false,
            "endEmitted": false,
            "reading": false,
            "sync": true,
            "needReadable": false,
            "emittedReadable": false,
            "readableListening": false,
            "resumeScheduled": false,
            "paused": true,
            "emitClose": false,
            "autoDestroy": false,
            "destroyed": false,
            "defaultEncoding": "utf8",
            "awaitDrain": 0,
            "readingMore": false,
            "decoder": null,
            "encoding": null,
            "__proto__": null
          },
          "readable": false,
          "_events": {
            "end": Function("if (!this.allowHalfOpen) {\n    this.write = writeAfterFIN;\n    if (this.writable)\n      this.end();\n  }\n  maybeDestroy(this);"),
            "__proto__": null
          },
          "_eventsCount": 1,
          "_maxListeners": undefined,
          "_writableState": {
            "objectMode": false,
            "highWaterMark": 16384,
            "finalCalled": false,
            "needDrain": false,
            "ending": false,
            "ended": false,
            "finished": false,
            "destroyed": false,
            "decodeStrings": false,
            "defaultEncoding": "utf8",
            "length": 0,
            "writing": false,
            "corked": 0,
            "sync": false,
            "bufferProcessing": false,
            "writecb": null,
            "writelen": 0,
            "bufferedRequest": null,
            "lastBufferedRequest": null,
            "pendingcb": 0,
            "prefinished": false,
            "errorEmitted": false,
            "emitClose": false,
            "autoDestroy": false,
            "bufferedRequestCount": 0,
            "corkedRequestsFree": {
              "next": null,
              "entry": null,
              "__proto__": null
            },
            "__proto__": null
          },
          "writable": true,
          "allowHalfOpen": false,
          "_writev": null,
          "_write": Function("chunk, enc, cb",
            "if (enc !== 'buffer')\n      chunk = Buffer.from(chunk, enc);\n\n    this._handle.bytesWritten += chunk.length;\n\n    const ctx = {};\n    writeBuffer(fd, chunk, 0, chunk.length, null, undefined, ctx);\n    if (ctx.errno !== undefined) {\n      const ex = errors.uvException(ctx);\n      // Legacy: net writes have .code === .errno, whereas writeBuffer gives the\n      // raw errno number in .errno.\n      ex.errno = ex.code;\n      return cb(ex);\n    }\n    cb();"),
          "_sockname": null,
          "_pendingData": null,
          "_pendingEncoding": "",
          "server": null,
          "_server": null,
          "_type": "pipe",
          "fd": 2,
          "_isStdio": true,
          "destroySoon": Function("err, cb",
            "const readableDestroyed = this._readableState &&\n    this._readableState.destroyed;\n  const writableDestroyed = this._writableState &&\n    this._writableState.destroyed;\n\n  if (readableDestroyed || writableDestroyed) {\n    if (cb) {\n      cb(err);\n    } else if (err) {\n      if (!this._writableState) {\n        process.nextTick(emitErrorNT, this, err);\n      } else if (!this._writableState.errorEmitted) {\n        this._writableState.errorEmitted = true;\n        process.nextTick(emitErrorNT, this, err);\n      }\n    }\n\n    return this;\n  }\n\n  // We set destroyed to true before firing error callbacks in order\n  // to make it re-entrance safe in case destroy() is called within callbacks\n\n  if (this._readableState) {\n    this._readableState.destroyed = true;\n  }\n\n  // If this is a duplex stream mark the writable part as destroyed as well\n  if (this._writableState) {\n    this._writableState.destroyed = true;\n  }\n\n  this._destroy(err || null, (err) => {\n    if (!cb && err) {\n      if (!this._writableState) {\n        process.nextTick(emitErrorAndCloseNT, this, err);\n      } else if (!this._writableState.errorEmitted) {\n        this._writableState.errorEmitted = true;\n        process.nextTick(emitErrorAndCloseNT, this, err);\n      } else {\n        process.nextTick(emitCloseNT, this);\n      }\n    } else if (cb) {\n      process.nextTick(emitCloseNT, this);\n      cb(err);\n    } else {\n      process.nextTick(emitCloseNT, this);\n    }\n  });\n\n  return this;"),
          "_destroy": Function("err, cb",
            "cb(err);"),
          [Symbol("asyncId")
          ]: 4,
          [Symbol("kHandle")
          ]: {
            "bytesWritten": 51,
            "onread": Function("arrayBuffer",
              "const nread = streamBaseState[kReadBytesOrError];\n\n  const handle = this;\n  const stream = this[owner_symbol];\n\n  stream[kUpdateTimer]();\n\n  if (nread > 0 && !stream.destroyed) {\n    const offset = streamBaseState[kArrayBufferOffset];\n    const buf = new FastBuffer(arrayBuffer, offset, nread);\n    if (!stream.push(buf)) {\n      handle.reading = false;\n      if (!stream.destroyed) {\n        const err = handle.readStop();\n        if (err)\n          stream.destroy(errnoException(err, 'read'));\n      }\n    }\n\n    return;\n  }\n\n  if (nread === 0) {\n    return;\n  }\n\n  if (nread !== UV_EOF) {\n    return stream.destroy(errnoException(nread, 'read'));\n  }\n\n  // Defer this until we actually emit end\n  if (stream._readableState.endEmitted) {\n    if (stream[kMaybeDestroy])\n      stream[kMaybeDestroy]();\n  } else {\n    if (stream[kMaybeDestroy])\n      stream.on('end', stream[kMaybeDestroy]);\n\n    // Push a null to signal the end of data.\n    // Do it before `maybeDestroy` for correct order of events:\n    // `end` -> `close`\n    stream.push(null);\n    stream.read(0);\n  }"),
            "__proto__": null
          },
          [Symbol("lastWriteQueueSize")
          ]: 0,
          [Symbol("timeout")
          ]: null,
          [Symbol("kBytesRead")
          ]: 0,
          [Symbol("kBytesWritten")
          ]: 0,
          "__proto__": null
        },
        "_stdoutErrorHandler": Function("err",
          "// This conditional evaluates to true if and only if there was an error\n    // that was not already emitted (which happens when the _write callback\n    // is invoked asynchronously).\n    const stream = streamSymbol === kUseStdout ?\n      instance._stdout : instance._stderr;\n    if (err !== null && !stream._writableState.errorEmitted) {\n      // If there was an error, it will be emitted on `stream` as\n      // an `error` event. Adding a `once` listener will keep that error\n      // from becoming an uncaught exception, but since the handler is\n      // removed after the event, non-console.* writes won't be affected.\n      // we are only adding noop if there is no one else listening for 'error'\n      if (stream.listenerCount('error') === 0) {\n        stream.on('error', noop);\n      }\n    }"),
        "_stderrErrorHandler": Function("err",
          "// This conditional evaluates to true if and only if there was an error\n    // that was not already emitted (which happens when the _write callback\n    // is invoked asynchronously).\n    const stream = streamSymbol === kUseStdout ?\n      instance._stdout : instance._stderr;\n    if (err !== null && !stream._writableState.errorEmitted) {\n      // If there was an error, it will be emitted on `stream` as\n      // an `error` event. Adding a `once` listener will keep that error\n      // from becoming an uncaught exception, but since the handler is\n      // removed after the event, non-console.* writes won't be affected.\n      // we are only adding noop if there is no one else listening for 'error'\n      if (stream.listenerCount('error') === 0) {\n        stream.on('error', noop);\n      }\n    }"),
        "_ignoreErrors": true,
        "_times": new Map,
        "Console": Function("options /* or: stdout, stderr, ignoreErrors = true */",
          "// We have to test new.target here to see if this function is called\n  // with new, because we need to define a custom instanceof to accommodate\n  // the global console.\n  if (!new.target) {\n    return new Console(...arguments);\n  }\n\n  if (!options || typeof options.write === 'function') {\n    options = {\n      stdout: options,\n      stderr: arguments[1],\n      ignoreErrors: arguments[2]\n    };\n  }\n\n  const {\n    stdout,\n    stderr = stdout,\n    ignoreErrors = true,\n    colorMode = 'auto',\n    inspectOptions\n  } = options;\n\n  if (!stdout || typeof stdout.write !== 'function') {\n    throw new ERR_CONSOLE_WRITABLE_STREAM('stdout');\n  }\n  if (!stderr || typeof stderr.write !== 'function') {\n    throw new ERR_CONSOLE_WRITABLE_STREAM('stderr');\n  }\n\n  if (typeof colorMode !== 'boolean' && colorMode !== 'auto')\n    throw new ERR_INVALID_ARG_VALUE('colorMode', colorMode);\n\n  if (typeof inspectOptions === 'object' && inspectOptions !== null) {\n    if (inspectOptions.colors !== undefined &&\n        options.colorMode !== undefined) {\n      throw new ERR_INCOMPATIBLE_OPTION_PAIR(\n        'inspectOptions.color', 'colorMode');\n    }\n    optionsMap.set(this, inspectOptions);\n  } else if (inspectOptions !== undefined) {\n    throw new ERR_INVALID_ARG_TYPE('inspectOptions', 'object', inspectOptions);\n  }\n\n  // Bind the prototype functions to this Console instance\n  var keys = Object.keys(Console.prototype);\n  for (var v = 0; v < keys.length; v++) {\n    var k = keys[v];\n    // We have to bind the methods grabbed from the instance instead of from\n    // the prototype so that users extending the Console can override them\n    // from the prototype chain of the subclass.\n    this[k] = this[k].bind(this);\n  }\n\n  this[kBindStreamsEager](stdout, stderr);\n  this[kBindProperties](ignoreErrors, colorMode);"),
        [Symbol("counts")
        ]: new Map,
        [Symbol("kColorMode")
        ]: "auto",
        [Symbol("kIsConsole")
        ]: true,
        [Symbol("kGroupIndent")
        ]: "",
        "__proto__": null
      },
      "pathCache": new Map,
      "fsOperations": 0,
      "primed": false,
      "__pluginName": "case-sensitive-paths",
      "__pluginType": "plugin",
      "__pluginArgs": [],
      "__pluginConstructorName": "CaseSensitivePathsPlugin",
      "__pluginPath": null,
      "__proto__": null
    },
    {
      "compilationSuccessInfo": {
        "__proto__": null
      },
      "onErrors": Function("severity, errors",
        "if (severity !== 'error') {\r\n                return\r\n              }\r\n              const error = errors[0]\r\n              global.__error_reporting__ && global.__error_reporting__(error.name, error.message || '')"),
      "shouldClearConsole": true,
      "formatters": [Function("errors",
        "return formatErrors(errors.filter((e) => (\n    e.type === 'module-not-found'\n  )));"), Function("errors, type",
          "const lintErrors = errors.filter(e => e.type === 'lint-error');\n  if (lintErrors.length > 0) {\n    const flatten = (accum, curr) => accum.concat(curr);\n    return concat(\n      lintErrors\n        .map(error => displayError(error))\n        .reduce(flatten, []),\n      infos\n    )\n  }\n\n  return [];"), Function("errors, type",
            "return errors\n    .filter(isDefaultError)\n    .reduce((accum, error) => (\n      accum.concat(displayError(type, error))\n    ), []);"), Function("errors",
              "errors = errors.filter(e => e.shortMessage)\n  if (errors.length) {\n    return errors.map(e => e.shortMessage)\n  }")
      ],
      "transformers": [Function("error",
        "if (isBabelSyntaxError(error)) {\n    return Object.assign({}, error, {\n      message: cleanStackTrace(cleanMessage(error.message) + '\\n'),\n      severity: 1000,\n      name: 'Syntax Error',\n    });\n  }\n\n  return error;"), Function("error",
          "const webpackError = error.webpackError;\n  if (isModuleNotFoundError(error)) {\n    const dependency = webpackError.dependencies[0];\n    const module = dependency.request || dependency.options.request;\n    return Object.assign({}, error, {\n      message: `Module not found ${module}`,\n      type: TYPE,\n      severity: 900,\n      module,\n      name: 'Module not found'\n    });\n  }\n\n  return error;"), Function("error",
            "if (isEslintError(error)) {\n    return Object.assign({}, error, {\n      name: 'Lint error',\n      type: 'lint-error',\n    });\n  }\n\n  return error;"), Function("error",
              "if (error.webpackError) {\n    const message = typeof error.webpackError === 'string'\n      ? error.webpackError\n      : error.webpackError.message || ''\n    for (const { re, msg, type } of rules) {\n      const match = message.match(re)\n      if (match) {\n        return Object.assign({}, error, {\n          // type is necessary to avoid being printed as default error\n          // by friendly-error-webpack-plugin\n          type,\n          shortMessage: msg(error, match)\n        })\n      }\n    }\n    // no match, unknown webpack error without a message.\n    // friendly-error-webpack-plugin fails to handle this.\n    if (!error.message) {\n      return Object.assign({}, error, {\n        type: 'unknown-webpack-error',\n        shortMessage: message\n      })\n    }\n  }\n  return error")
      ],
      "previousEndTimes": {
        "__proto__": null
      },
      "__pluginName": "friendly-errors",
      "__pluginType": "plugin",
      "__pluginArgs": [
        {
          "additionalTransformers": [Function("error",
            "if (error.webpackError) {\n    const message = typeof error.webpackError === 'string'\n      ? error.webpackError\n      : error.webpackError.message || ''\n    for (const { re, msg, type } of rules) {\n      const match = message.match(re)\n      if (match) {\n        return Object.assign({}, error, {\n          // type is necessary to avoid being printed as default error\n          // by friendly-error-webpack-plugin\n          type,\n          shortMessage: msg(error, match)\n        })\n      }\n    }\n    // no match, unknown webpack error without a message.\n    // friendly-error-webpack-plugin fails to handle this.\n    if (!error.message) {\n      return Object.assign({}, error, {\n        type: 'unknown-webpack-error',\n        shortMessage: message\n      })\n    }\n  }\n  return error")
          ],
          "additionalFormatters": [Function("errors",
            "errors = errors.filter(e => e.shortMessage)\n  if (errors.length) {\n    return errors.map(e => e.shortMessage)\n  }")
          ],
          "onErrors": Function("severity, errors",
            "if (severity !== 'error') {\r\n                return\r\n              }\r\n              const error = errors[0]\r\n              global.__error_reporting__ && global.__error_reporting__(error.name, error.message || '')"),
          "__proto__": null
        }
      ],
      "__pluginConstructorName": "FriendlyErrorsWebpackPlugin",
      "__pluginPath": null,
      "__proto__": null
    },
    {
      "options": {
        "filename": "[name].wxss",
        "moduleFilename": Function("return this.options.filename || DEFAULT_FILENAME"),
        "ignoreOrder": false,
        "chunkFilename": "[name].wxss",
        "__proto__": null
      },
      "__pluginName": "extract-css",
      "__pluginType": "plugin",
      "__pluginArgs": [
        {
          "filename": "static/css/[name].[contenthash:8].css",
          "chunkFilename": "static/css/[name].[contenthash:8].css",
          "__proto__": null
        }
      ],
      "__pluginConstructorName": "MiniCssExtractPlugin",
      "__pluginPath": null,
      "__proto__": null
    },
    {
      "definitions": {
        "process.env.UNI_ENV": "\"mp-weixin\"",
        "process.env.UNI_CLOUD_PROVIDER": "[]",
        "process.env.UNICLOUD_DEBUG": undefined,
        "process.env.UNI_AUTOMATOR_WS_ENDPOINT": undefined,
        "__proto__": null
      },
      "__pluginName": "uni-define",
      "__pluginType": "plugin",
      "__pluginArgs": [
        {
          "process.env.UNI_ENV": "\"mp-weixin\"",
          "process.env.UNI_CLOUD_PROVIDER": "[]",
          "process.env.UNICLOUD_DEBUG": undefined,
          "process.env.UNI_AUTOMATOR_WS_ENDPOINT": undefined,
          "__proto__": null
        }
      ],
      "__pluginConstructorName": "DefinePlugin",
      "__pluginPath": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\webpack\\lib\\DefinePlugin.js",
      "__proto__": null
    },
    {
      "patterns": [
        {
          "from": "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\static",
          "to": "D:\\code\\computer-science\\uniapp\\uniapp1\\dist\\dev\\mp-weixin\\static",
          "ignore": [
            "app-plus/**/*",
            "h5/**/*",
            "mp-360/**/*",
            "mp-alipay/**/*",
            "mp-baidu/**/*",
            "mp-kuaishou/**/*",
            "mp-qq/**/*",
            "mp-toutiao/**/*",
            "quickapp-native/**/*",
            "quickapp-webview/**/*"
          ],
          "__proto__": null
        }
      ],
      "options": {
        "__proto__": null
      },
      "__proto__": null
    },
    {
      "patterns": [
        {
          "from": "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\uni-automator\\dist\\automator.json",
          "to": "../.automator/mp-weixin/.automator.json",
          "transform": Function("content",
            "if (process.env.UNI_AUTOMATOR_WS_ENDPOINT) {\r\n              return JSON.stringify({\r\n                version: require('@dcloudio/uni-automator/package.json').version,\r\n                wsEndpoint: process.env.UNI_AUTOMATOR_WS_ENDPOINT\r\n              })\r\n            }\r\n            return ''"),
          "__proto__": null
        }
      ],
      "options": {
        "__proto__": null
      },
      "__proto__": null
    },
    {
      "sourceMapFilename": "../.sourcemap/mp-weixin/[name].js.map",
      "sourceMappingURLComment": "\n//# sourceMappingURL=[url]",
      "moduleFilenameTemplate": Function("info",
        "if (\n    info.resourcePath &&\r\n    (\r\n      !info.allLoaders ||\r\n      info.query.includes('type=script&lang=ts') ||\n      info.resourcePath.endsWith('.ts')\r\n    )\r\n  ) {\r\n    const filepath = normalizePath(path.relative(getSourceRoot(), info.absoluteResourcePath))\r\n    if (filepath.indexOf('../') === 0) {\r\n      return\r\n    }\r\n    return `uni-app:///${filepath}`\r\n  }"),
      "fallbackModuleFilenameTemplate": "webpack://[namespace]/[resourcePath]?[hash]",
      "namespace": "",
      "options": {
        "test": [/\.js$/
        ],
        "exclude": [/pages\.json/, /node_modules/, /vue&type=template/, /vue&type=style/
        ],
        "moduleFilenameTemplate": Function("info",
          "if (\n    info.resourcePath &&\r\n    (\r\n      !info.allLoaders ||\r\n      info.query.includes('type=script&lang=ts') ||\n      info.resourcePath.endsWith('.ts')\r\n    )\r\n  ) {\r\n    const filepath = normalizePath(path.relative(getSourceRoot(), info.absoluteResourcePath))\r\n    if (filepath.indexOf('../') === 0) {\r\n      return\r\n    }\r\n    return `uni-app:///${filepath}`\r\n  }"),
        "filename": "../.sourcemap/mp-weixin/[name].js.map",
        "__proto__": null
      },
      "__proto__": null
    },
    {
      "__proto__": null
    },
    {
      "__proto__": null
    },
    {
      "definitions": {
        "uni": [
          "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\uni-mp-weixin\\dist\\index.js",
          "default"
        ],
        "uniCloud": [
          "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\vue-cli-plugin-uni\\packages\\uni-cloud\\dist\\index.js",
          "default"
        ],
        "createApp": [
          "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\uni-mp-weixin\\dist\\index.js",
          "createApp"
        ],
        "createPage": [
          "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\uni-mp-weixin\\dist\\index.js",
          "createPage"
        ],
        "createComponent": [
          "D:\\code\\computer-science\\uniapp\\uniapp1\\node_modules\\@dcloudio\\uni-mp-weixin\\dist\\index.js",
          "createComponent"
        ],
        "__proto__": null
      },
      "__proto__": null
    }
  ],
  "entry": Function("return process.UNI_ENTRY"),
  "devtool": false,
  "performance": {
    "assetFilter": Function("assetFilename",
      "return !(/\\.map$/.test(assetFilename)) && !(/vendor/.test(assetFilename))"),
    "hints": false,
    "__proto__": null
  },
  "watchOptions": {
    "ignored": [/node_modules/,
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\*.md",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\.hbuilderx",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\.editorconfig",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\.gitignore",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\LICENSE",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\unpackage",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\uniCloud-aliyun",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\uniCloud-tcb",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\cloudfunctions-aliyun",
      "D:\\code\\computer-science\\uniapp\\uniapp1\\src\\cloudfunctions-tcb"
    ],
    "__proto__": null
  },
  "watch": true,
  "__proto__": null
}