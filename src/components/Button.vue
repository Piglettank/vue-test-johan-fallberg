<template>
  <button
    :class="getStyle()"
    v-text="buttonText"
    @click.prevent="onClick()"
  />
</template>

<script>

export default {
  props: {
    onClick: {
      type: Function,
      default: () => '',
    },
    buttonText: {
      type: String,
      default: 'Button',
    },
    color: {
      type: String,
      default: 'Blue'
    },
  },
  methods: {
    getStyle() {
      let style = "font-bold py-2 px-4 rounded"
      if(this.color === 'Red') {
        style += " border-red-600 border-2 bg-red-100 text-red-600 hover:bg-red-200";
      }
      else if(this.color === 'Blue') {
        style += " bg-blue-500 hover:bg-blue-700 text-white";
      }
      return style;
    }
  }
}
</script>
