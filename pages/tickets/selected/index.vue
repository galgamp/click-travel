<template>
  <div class="ticket-container">
    <div class="ticket-left">
      <div class="header left">
        <h1>Boarding Pass</h1>
        <h2>{{ ticket.class }}</h2>
      </div>
      <div class="information left">
        <div class="first-row">
          <div class="passenger">
            <div class="title-item">Passenger</div>
            <span>{{ ticket.passenger }}</span>
          </div>
        </div>
        <div class="second-row">
          <div class="flight">
            <div class="title-item">FLIGHT</div>
            <span>{{ ticket.flight }}</span>
          </div>
          <div class="from">
            <div class="title-item">FROM</div>
            <span>{{ ticket.from }}</span>
          </div>
          <div class="to">
            <div class="title-item">TO</div>
            <span>{{ ticket.to }}</span>
          </div>
          <div class="class">
            <div class="title-item">CLASS</div>
            <span>{{ ticket.class }}</span>
          </div>
        </div>
        <div class="third-row">
          <div class="gate">
            <div class="title-item">GATE</div>
            <b class="item-value">{{ ticket.gate }}</b>
          </div>
          <div class="time">
            <div class="title-item">TIME</div>
            <b class="item-value">{{ ticket.time }}</b>
          </div>
          <div class="seat">
            <div class="title-item">SEAT</div>
            <b class="item-value">{{ ticket.seat }}</b>
          </div>
          <div class="barcode">
            <img
              src="https://www.haoui.com/newsletter/2016/octobre18/saviezvous2/s2.jpg"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="ticket-right">
      <div class="header right">
        <h1>Boarding Pass</h1>
        <h2>{{ ticket.class }}</h2>
      </div>
      <div class="information right">
        <div class="first-row">
          <div class="passenger">
            <div class="title-item">Passenger</div>
            <span>{{ ticket.passenger }}</span>
          </div>
        </div>
        <div class="second-row">
          <div class="gate">
            <div class="title-item">GATE</div>
            <b class="item-value">{{ ticket.gate }}</b>
          </div>
          <div class="time">
            <div class="title-item">TIME</div>
            <b class="item-value">{{ ticket.time }}</b>
          </div>
          <div class="seat">
            <div class="title-item">SEAT</div>
            <b class="item-value">{{ ticket.seat }}</b>
          </div>
        </div>
        <div class="third-row">
          <div class="barcode">
            <img
              src="https://www.haoui.com/newsletter/2016/octobre18/saviezvous2/s2.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
    <!-- <li v-for="(value, name, index) in ticket" :key="index">
      {{ name }} -> {{ value }}
    </li> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    ticket: 'ticket/getSelected',
  }),
}
</script>

<style lang="scss">
.ticket-container {
  margin: 5%;
  width: 1000px;
  .ticket-left {
    width: 65%;
    float: left;
    border-right: 1px dashed;
    border-color: grey;
  }
  .header {
    color: #ffffff;
    background-color: #34a7dd;
    &.left {
      border-radius: 15px 0% 0% 0%;
      h1,
      h2 {
        margin-left: 30px;
      }
    }
    &.right {
      border-radius: 15px 15px 0% 0%;
    }
  }
  .information {
    .title-item {
      color: grey;
    }
    &.left {
      .passenger {
        padding: 10px 30px;
      }
      .flight {
        padding: 10px 30px;
        display: block;
        float: left;
      }
      .from {
        padding: 10px 30px;
        display: block;
        float: left;
      }
      .to {
        padding: 10px 30px;
        display: block;
        float: left;
      }
      .class {
        padding: 10px 30px;
      }

      .gate {
        padding: 10px 30px;
        display: block;
        float: left;
      }
      .time {
        padding: 10px 30px;
        display: block;
        float: left;
      }
      .seat {
        padding: 10px 30px;
        display: block;
        float: left;
      }
      .third-row {
        .item-value {
          font-size: 30px;
        }

        .barcode {
          padding: 10px 30px;
          margin-left: 20px;
          img {
            width: 150px;
          }
        }
      }
    }
    &.right {
      .passenger {
        padding: 10px 0px;
      }
      .gate {
        padding: 10px 50px 10px 0px;
        display: block;
        float: left;
      }
      .time {
        padding: 10px 50px 10px 0px;
        display: block;
        float: left;
      }
      .seat {
        padding: 10px 50px 10px 0px;
        display: block;
        float: left;
      }
      .barcode {
        margin-top: 70px;
        text-align: center;
        img {
          width: 150px;
        }
      }
    }
  }
  .footer {
    border-radius: 0% 0% 15px 15px;
    background-color: #34a7dd;
    height: 30px;
  }
}
</style>
