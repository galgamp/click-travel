<template>
  <div>
    <ul>
      <li v-for="(value, name, index) in ticket" :key="index">
        {{ name }} -> {{ value }}
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>
