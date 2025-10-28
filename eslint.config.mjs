import uniHelper from '@uni-helper/eslint-config';

export default uniHelper({
  vue: true,
  markdown: false,
  extends: [
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  ignores: [
    // 忽略uni_modules目录
    '**/uni_modules/',
    // 忽略原生插件目录
    '**/nativeplugins/',
    'dist',
    // unplugin-auto-import 生成的类型文件，每次提交都改变，所以加入这里吧，与 .gitignore 配合使用
    'auto-import.d.ts',
    // vite-plugin-uni-pages 生成的类型文件，每次切换分支都一堆不同的，所以直接 .gitignore
    'uni-pages.d.ts',
    // 插件生成的文件
    'src/pages.json',
    'src/manifest.json'
  ],
  // https://eslint-config.antfu.me/rules
  rules: {
    'no-useless-return': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-refs': 'off',
    'unused-imports/no-unused-vars': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'jsdoc/check-param-names': 'off',
    'jsdoc/require-returns-description': 'off',
    'ts/no-empty-object-type': 'off',
    'no-extend-native': 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100, // 一行最多 100 字符
        tabWidth: 4, // 使用 4 个空格缩进
        semi: true, // 行尾需要有分号
        singleQuote: true, // 使用单引号而不是双引号
        useTabs: false, // 用制表符而不是空格缩进行
        quoteProps: 'as-needed', // 仅在需要时在对象属性两边添加引号
        jsxSingleQuote: false, // 在 JSX 中使用单引号而不是双引号
        trailingComma: 'none', // 末尾不需要逗号
        bracketSpacing: true, // 大括号内的首尾需要空格
        bracketSameLine: false, // 将多行 HTML（HTML、JSX、Vue、Angular）元素反尖括号需要换行
        arrowParens: 'always', // 箭头函数，只有一个参数的时候，也需要括号 avoid
        rangeStart: 0, // 每个文件格式化的范围是开头-结束
        rangeEnd: Infinity, // 每个文件格式化的范围是文件的全部内容
        requirePragma: false, // 不需要写文件开头的 @prettier
        insertPragma: false, // 不需要自动在文件开头插入 @prettier
        proseWrap: 'preserve', // 使用默认的折行标准 always
        htmlWhitespaceSensitivity: 'css', // 根据显示样式决定 html 要不要折行
        vueIndentScriptAndStyle: false, // （默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
        endOfLine: 'auto', // 换行符使用 lf 在Linux和macOS以及git存储库内部通用\n
        embeddedLanguageFormatting: 'auto' // （默认值）允许自动格式化内嵌的代码块
      }
    ],
    eqeqeq: 'off',
    indent: ['error', 4],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        externalIgnores: ['text']
      }
    ]
    // vue SFC 调换顺序改这里
    // 'vue/block-order': ['error', {
    //   order: [['script', 'template'], 'style'],
    // }],
  },
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true
  }
});
