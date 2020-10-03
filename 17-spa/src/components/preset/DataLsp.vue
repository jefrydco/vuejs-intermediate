<template>
  <span
    v-tooltip.top="{ content: lsp, autoHide: false, html: true }"
    class="data-lsp"
  >
    <slot />
  </span>
</template>

<script>
import { VTooltip } from 'v-tooltip'

export default {
  name: 'DataLsp',
  directives: {
    tooltip: VTooltip
  },
  props: {
    lsp: {
      type: String,
      required: true
    }
  }
}
</script>
