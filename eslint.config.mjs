import uniHelper from '@uni-helper/eslint-config'

export default uniHelper({
  vue: true,
  markdown: false,
  extends: [
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended',
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
    'src/manifest.json',

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
    'prettier/prettier': 'off',
    'eqeqeq': 'off',
    'indent': ['warn', 4], // 使用四个空格进行缩进，
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        externalIgnores: ['text'],
      },
    ],
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
    html: true,
  },
})
