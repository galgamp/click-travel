<template>
  <div>
    <ul>
      <li
        v-for="(value, name, index) in ticket"
        :key="index"
        @click="displayTicket()"
      >
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
  methods: {
    displayTicket() {
      this.$store.dispatch('ticket/setSelected', this.ticket)
      this.$router.push({ path: '/tickets/selected' })
    },
  },
}
</script>
