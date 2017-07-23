<template>
    <div class="counter">
        <div class="counter--timer">
            {{ time }}
        </div>
        <p></p>
    </div>
</template>

<script>
    import EventBus from '../EventBus';
    import Timer from 'easytimer';

    export default {
      name: 'counter',

      data () {
        return {
          timer: null,
          time: '00:00'
        };
      },

      methods: {
        createTimer () {
          this.timer = new Timer();

          this.timer.addEventListener('secondsUpdated', () => {
            this.time = this.timer.getTimeValues().toString(['minutes', 'seconds']);
          });

          this.timer.addEventListener('targetAchieved', this.handleTimerStopped.bind(this));
        },

        handleTimerStarted () {
          this.$store.commit('setStarted');

          this.timer.start({
            precision: 'seconds',
            countdown: true,
            startValues: { seconds: 10 }
          });

          new Notification('Counter started!', {
            title: 'Counter Started',
            body: 'Get to work'
          });
        },

        handleTimerStopped () {
          this.$store.commit('setFinished');
          this.timer.stop();
          this.time = '00:00';

          new Notification('Counter finished', {
            title: 'Counter finished',
            body: 'Break time'
          });
        }
      },

      mounted () {
        this.createTimer();
        EventBus.$on('start-counter', this.handleTimerStarted.bind(this));
        EventBus.$on('stop-counter', this.handleTimerStopped.bind(this));
      }
    };
</script>

<style>
    .counter {
        font-size: 50px;
        text-align: center;
    }
</style>
