<script>
// Taken from: https://jsfiddle.net/Linusborg/1zdzu7k1/
import Vue from 'vue'

import { boolean } from 'boolean'
import { htmlEscape } from 'escape-goat'

import { validator } from '../../utils'

export default {
  name: 'DataCode',
  props: {
    code: {
      default: '',
      required: true,
      validator
    },
    lang: {
      default: '',
      required: true,
      validator
    },
    isHighlighted: {
      type: Number,
      default: 1,
      required: true
    }
  },
  data() {
    return {
      templateRender: null
    }
  },
  computed: {
    whichCode() {
      if (!boolean(this.isHighlighted)) {
        return `<pre class="shiki-unparsed">${this.lang === 'html' ? htmlEscape(this.code) : this.code}</pre>`
      }
      return `<div>${this.code}</div>`
    }
  },
  watch: {
    // Every time the template prop changes, I recompile it to update the DOM
    whichCode: {
      immediate: true, // makes the watcher fire on first render, too.
      handler(code) {
        const res = Vue.compile(code)

        this.templateRender = res.render

        // staticRenderFns belong into $options,
        // appearantly
        this.$options.staticRenderFns = []

        // clean the cache of static elements
        // this is a cache with the results from the staticRenderFns
        this._staticTrees = []

        // Fill it with the new staticRenderFns
        for (const i in res.staticRenderFns) {
          //staticRenderFns.push(res.staticRenderFns[i])
          this.$options.staticRenderFns.push(res.staticRenderFns[i])
        }
      }
    }
  },
  render() {
    return this.templateRender && this.templateRender()
  }
}
</script>
