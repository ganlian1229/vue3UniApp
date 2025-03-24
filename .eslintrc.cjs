module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-essential',
        // eslint-plugin-import 插件， @see https://www.npmjs.com/package/eslint-plugin-import
        'plugin:import/recommended',
        // eslint-config-airbnb-base 插件 已经改用 eslint-config-standard 插件
        'standard',
        // 1. 接入 prettier 的规则
        'prettier',
        'plugin:prettier/recommended',
        './.eslintrc-auto-import.json'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'vue',
        // 2. 加入 prettier 的 eslint 插件
        'prettier',
        // eslint-import-resolver-typescript 插件，@see https://www.npmjs.com/package/eslint-import-resolver-typescript
        'import'
    ],
    rules: {
        'vue/no-deprecated-slot-attribute': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'vue/multi-word-component-names': 'off', // 关闭组件命名规则
        'vue/no-v-model-argument': 'off', // 在vue3中使用v-model报错
        'array-bracket-spacing': 'off', // 是否允许非空数组里面有多余的空格
        'object-curly-spacing': 'off', // 大括号内是否允许不必要的空格
        'prettier/prettier': 'off',
        'space-before-function-paren': 'off', // 函数定义时括号前面要不要有空格
        'no-console': 'off', // 禁止使用console
        'no-debugger': 'off', // 禁止使用debugger
        'no-empty-source': 'off',
        eqeqeq: 'off',
        indent: ['warn', 4], // 使用四个空格进行缩进，
        'no-unused-vars': 'off' // 不能有声明后未被使用的变量或参数
    },
    // eslint-import-resolver-typescript 插件，@see https://www.npmjs.com/package/eslint-import-resolver-typescript
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
            typescript: {}
        }
    },
    globals: {
        $t: true,
        uni: true,
        UniApp: true,
        wx: true,
        WechatMiniprogram: true,
        getCurrentPages: true,
        UniHelper: true,
        Page: true,
        App: true,
        NodeJS: true
    }
};
