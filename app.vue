<template>
    <div>
        Hi, vue
        <p>counter: {{ state.value?.counter }}</p>
        <button @click="onClick">i++</button>
        <button @click="reset">reset</button>
    </div>
</template>

<script lang="ts">
export default {
    created() {

    },
    computed: {
        state() {
            return useState(() => ({ counter: 0 }))
        }
    },
    methods: {
        onClick() {
            this.state.value.counter++
        },
        reset() {
            this.state.value.counter = 0
        }
    }
}
</script>