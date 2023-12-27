<template>
  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      v-text="label"
    />
    <div class="relative">
      <select
        id="grid-state"
        class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        @change="changeSelect($event.target.value)"
      >
        <option v-for="o in options" :key="o.value" :value=o.value v-text="o.text">
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    options: {
      type: Array,
      default: () => [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
      ],
    },
    label: {
      type: String,
      default: 'Label',
    },
    changeSelect: {
      type: Function,
      default: (val) => {
        console.log('Change select has no function');
        console.log(`Value: ${val}`);
      },
    },
  },
}
</script>