<template>
    <div id="counter-page">
        <div class="row">
            <div class="col s12">
                <counter></counter>
            </div>

            <div class="col s6">
                <start-counter-button></start-counter-button>
            </div>

            <div class="col s6">
                <stop-counter-button></stop-counter-button>
            </div>
        </div>
    </div>
</template>

<script>
    import StartCounterButton from '../components/StartCounterButton';
    import StopCounterButton from '../components/StopCounterButton';
    import Counter from '../components/Counter';

    export default {
      name: 'counter-page',
      data () {
        return {

        };
      },

      components: {
        StartCounterButton,
        StopCounterButton,
        Counter
      }
    };
</script>

<style>
    #counter-page {
        position: absolute;

        width: 90%;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .start-counter-button {
        text-align: right;
    }

    .stop-counter-button {
        text-align: left;
    }

    .counter {
        margin-bottom: 30px;
    }
</style>
