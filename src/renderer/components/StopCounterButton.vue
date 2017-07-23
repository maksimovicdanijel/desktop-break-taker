<template>
    <div class="stop-counter-button">
        <a href="#" @click="handleClick" :disabled="!counterStarted" class="waves-effect waves-light btn">Stop counter</a>
    </div>
</template>

<script>
    import EventBus from '../EventBus';

    export default {
      name: 'stop-counter-button',
      computed: {
        counterStarted () {
          return this.$store.state.Counter.started;
        }
      },

      methods: {
        handleClick () {
          EventBus.$emit('stop-counter');
        }
      }
    };
</script>
