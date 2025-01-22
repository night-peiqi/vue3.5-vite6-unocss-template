import presetRemToPx from '@unocss/preset-rem-to-px'

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
} from 'unocss'

export default defineConfig({
  presets: [
    /** 基础工具类 */
    presetUno,
    /**
     * 属性模式：https://unocss.dev/presets/attributify
     * 当类名很多很长时，可以以属性的形式来使用，并且同类型的属性可以合并
     */
    presetAttributify,
    /**
     * 图标预设：https://unocss.dev/presets/icons
     * 全部图标：https://icones.js.org/
     */
    presetIcons(),
    /**
     * rem转px：https://unocss.dev/presets/rem-to-px
     */
    // 为什么要用到这个插件？
    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    presetRemToPx({
      // 这里为什么要设置基础字体大小？看下面这篇文章
      // https://juejin.cn/post/7262975395620618298
      baseFontSize: 4,
    }),
    presetMini(),
  ],
  /**
   * 常用复杂样式
   */
  shortcuts: [
    ['btn', 'px-6 py-3 rounded-3 border-none inline-block bg-green-400 text-white cursor-pointer !outline-none hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
})
