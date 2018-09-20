<template>
    <div class="select-container">
        <label class="field-label">{{field.label}}</label>
        <el-select :name="field.name" v-model="fieldValue" placeholder="请选择">
            <el-option
                v-for="item in field.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    name: 'field-select',
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
.select-container {
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
}
</style>