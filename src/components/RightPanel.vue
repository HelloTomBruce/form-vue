<template>
    <div class="form-edit">
        <h4>添加字段</h4>
        <div class="component-list">
            <el-button @click="addField(item.id)" v-for="(item, id) in componentList" :key="id">{{item.type}}</el-button>
        </div>
        <h4>编辑字段</h4>
        <div class="component-edit">
        </div>
    </div>
</template>

<script>
import { COMPONENTLIST } from '../util/dictionary.js'
export default {
    name: 'RightPanel',
    data () {
        return {
            componentList: []
        }
    },
    created () {
        this.componentList = COMPONENTLIST
    },
    methods: {
        addField (id) {
            this.$store.commit('addField', id)
        }
    }
}
</script>

<style lang="less">
.form-edit {
    h4 {
        font-size: 14px;
        line-height: 25px;
        background: #66b1ff;
        color: #fff;
        padding-left: 10px;
        text-align: left;
        font-weight: normal;
    }
    .component-list {
        column-count: 2;
        column-fill: balance;
        column-gap: 0;
        padding: 30px 30px 10px;
        .el-button {
            margin: 0 0 20px 0;
            width: 100px;
        }
    }
}
</style>
