<template>
    <div>
        <div class="input-container" v-if="!edit">
            <label class="field-label">{{field.label}}</label>
            <label class="field-desc">{{field.desc}}</label>
            <el-input :name="field.name" v-model="fieldValue" size="small"/>
        </div>
        <div class="edit-input-container" v-else>
            <div class="group">
                <label class="field-label">标题：</label>
                <el-input v-model="field.label" size="small"/>
            </div>
            <div class="group">
                <label class="field-desc">标题描述：</label>
                <el-input v-model="field.desc" size="small"/>
            </div>
        </div>
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
        },
        edit: {
            type: Boolean
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
.edit-input-container {
    label {
       display: block;
       font-size: 14px;
       line-height: 27px;
    }
    .el-input__inner {
        margin-bottom: 20px;
    }
    .group {
        padding-top: 10px;
        border-bottom: 1px solid #ddd;
    }
}
</style>