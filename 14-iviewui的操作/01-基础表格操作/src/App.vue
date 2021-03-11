<template>
    <div class="wrap">
        <h1>iviewui中的插件--表格</h1>
        <Table :columns="columns" :data="tabledata"></Table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                columns: [
                    {
                        title:'姓名',
                        key:'name'
                    },
                    {
                        title:'性别',
                        key:'sex'
                    },
                    {
                        title:'年龄',
                        key:'age'
                    }
                ],
                tabledata:[
                    {
                        name:'赵依依',
                        sex:'女',
                        age:16,
                        mathScore:89
                    },
                    {
                        name:'钱三一',
                        sex:'男',
                        age:18,
                        mathScore:98
                    },
                    {
                        name:'伍佰',
                        sex:'男',
                        age:22,
                        mathScore:76
                    },
                ]
            }
        },
    }
</script>

<style lang="less" scoped>
    .wrap{
        width: 900px;
        margin: 40px auto;
    }
</style>