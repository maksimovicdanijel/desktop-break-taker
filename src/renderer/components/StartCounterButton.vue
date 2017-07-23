<template>
    <div class="start-counter-button">
        <a href="#" :disabled="counterStarted" @click.prevent="handleClick" class="waves-effect waves-light btn">Start counter</a>
    </div>
</template>

<script>
    import EventBus from '../EventBus';

    export default {
      name: 'start-counter-button',
      computed: {
        counterStarted () {
          return this.$store.state.Counter.started;
        }
      },

      methods: {
        handleClick () {
          EventBus.$emit('start-counter');
        }
      }
    };
</script>
