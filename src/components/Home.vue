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
    padding: 20px 0;
    .form-container {
        width: 40%;
        margin: 0px auto;
        border: 1px solid #ddd;
        border-radius: 5px;
        background: #fff;
        h2 {
            font-size: 16px;
            text-align: left;
            padding-left: 10px;
            font-weight: normal;
            line-height: 30px;
            color: #fff;
            background: #66b1ff;
        }
        .form-content {
            min-height: 450px;
        }
        .form-footer {
            padding-bottom: 20px;
        }
    }
    .right-panel {
        position: fixed;
        top: 20px;
        right: 10px;
        width: 20%;
        height: 100%;
        background: #fff;
    }
}
</style>
