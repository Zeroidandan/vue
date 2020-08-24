<template>
    <div>
       <A :star="star" :idx='idx' @changeStar="starChange"/>
       <B :star="star" :idx='idx' @goNext="nextPic" @goPrev="prevPic"/>
       <C :star="star" :idx='idx' @changeIdx="idxChange"/>
    </div>
</template>

<script>
    import A  from './componets/A.vue';
    import B  from './componets/B.vue';
    import C from './componets/C.vue';
    export default {
        components:{
            A,
            B,
            C
        },
        data(){
            return{
                star:'foods',
                idx:1
            }
        },
        methods:{
            nextPic(){
                this.idx ++;
            },
            prevPic(){
                this.idx --;
            },
            idxChange({idx}){
                this.idx = idx;
            },
            starChange({star}){
                this.star = star;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>