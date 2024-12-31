import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    // 配置需要进行 lint 检查的文件
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    // 配置不需要进行 lint 检查的文件和目录
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', 'node_modules/**'],
  },

  // 启用 ESLint 推荐的规则配置
  js.configs.recommended,
  // 启用 Vue 必要的规则配置
  ...pluginVue.configs['flat/essential'],
  // 避免与 Prettier 的规则冲突
  skipFormatting,

  {
    rules: {
      // JavaScript 相关规则
      // 禁止使用 console，但允许 console.warn 和 console.error
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      // 禁止使用 debugger
      'no-debugger': 'warn',
      // 禁止定义未使用的变量，但允许以 _ 开头的参数未使用
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // 优先使用 const 声明变量
      'prefer-const': 'error',
      
      // Vue 相关规则
      // 要求组件名称必须是多个单词
      'vue/multi-word-component-names': 'error',
      // 禁止注册但未使用的组件
      'vue/no-unused-components': 'error',
      // 禁止模板中未使用的变量
      'vue/no-unused-vars': 'error',
      // 确保 setup 中的变量可以在模板中使用
      'vue/script-setup-uses-vars': 'error',
      // 强制组件标签顺序
      'vue/component-tags-order': ['error', {
        order: ['script', 'template', 'style']
      }],
    },
  },
]
