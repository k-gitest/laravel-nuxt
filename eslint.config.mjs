import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      /*
      'vue/no-multiple-template-root': 'error',
      'vue/multi-word-component-names': 'error',
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      */
      "vue/html-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/attributes-order": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-v-text-v-html-on-component": "off",
      "vue/camelcase": "off",
      "vue/prop-name-casing": "off",
    },
  },
  /*
  stylistic.configs.customize({
    indent: 2,         // インデントはスペース2
    quotes: 'single',  // クオートはシングル
    semi: false,       // セミコロンは不要
  }),
  */
)
