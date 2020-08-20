<template>
    <div>
        <Test :b="b" :c="c" @addB="changeB" />
        <Test :b="b" :c="c" @addB="changeB" />
        <Test :b="b" :c="c" @addB="changeB" />
    </div>
</template>

<script>
    import Test from './componets/Test.vue'
    export default {
        data() {
            return {
                b: 5,
                c: {
                    v: 10
                }
            }
        },
        components: {
            Test
        },
        methods: {
            changeB({n}) {
                this.b += n;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>