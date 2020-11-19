<template>
  <TicketItemList :tickets="tickets" />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, params }) {
    await store.dispatch('ticket/fetchTicketsFromDestination', params.code)
  },
  computed: mapGetters({
    tickets: 'ticket/getAll',
  }),
}
</script>
