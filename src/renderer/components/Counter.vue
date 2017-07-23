<template>
    <div class="counter">
        <p>OO:OO</p>
    </div>
</template>

<script>
    import EventBus from '../EventBus';

    export default {
      name: 'counter',

      mounted () {
        EventBus.$on('start-counter', () => {
          this.$store.commit('setStarted');

          new Notification('Counter started!', {
            title: 'Counter Started',
            body: 'Get to work'
          });
        });

        EventBus.$on('stop-counter', () => {
          this.$store.commit('setFinished');

          new Notification('Counter finished', {
            title: 'Counter finished',
            body: 'Break time'
          });
        });
      }
    };
</script>

<style>
    .counter {
        font-size: 50px;
        text-align: center;
    }
</style>
