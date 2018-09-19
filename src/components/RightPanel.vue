<template>
    <div class="form-edit">
        <h4>添加字段</h4>
        <div class="component-list">
            <el-button v-for="(item, id) in componentList" :key="id">{{item.type}}</el-button>
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
    }
}
</script>

<style lang="less">

</style>
