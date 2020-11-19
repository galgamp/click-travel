<template>
  <div>
    <TicketItem
      v-for="(ticket, index) in tickets"
      :key="index"
      :ticket="ticket"
    />
  </div>
</template>

<script>
export default {
  props: {
    tickets: {
      type: Array,
      default: null,
    },
  },
}
</script>
