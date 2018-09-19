<template>
    <div class="home">
        <div class="form-container">
            <header class="form-header">
                <h2>欢迎您加入酷学院</h2>
            </header>
            <div class="form-content">
            </div>
            <div class="form-footer">
                <el-button type="primary">提交</el-button>
            </div>
        </div>
        <div class="right-panel">
            <right-panel/>
        </div>
    </div>
</template>

<script>
import RightPanel from './RightPanel.vue'
export default {
    name: 'Home',
    data () {
        return {

        }
    },
    components: {
        RightPanel
    }
}
</script>

<style lang="less">
.home {
    height: 100%;
    .form-container {
        width: 40%;
        margin: 20px auto;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .right-panel {
        position: absolute;
        top: 20px;
        right: 10px;
        width: 20%;
    }
}
</style>
