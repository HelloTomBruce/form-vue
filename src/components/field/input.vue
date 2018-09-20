<template>
    <div class="input-container">
        <label class="field-label">{{field.label}}</label>
        <label class="field-desc">{{field.desc}}</label>
        <el-input :name="field.name" v-model="fieldValue" size="small"/>
    </div>
</template>

<script>
export default {
    name: 'field-input',
    data () {
        return {
            fieldValue: ''
        }
    },
    props: {
        field: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="less">
.input-container {
    label {
        display: block;
        &.field-label {
            font-weight: bolder;
            line-height: 24px;
        }
        &.field-desc {
            font-size: 12px;
            line-height: 20px;
        }
    }
    .el-input__inner {
        width: 300px;
    }
}
</style>