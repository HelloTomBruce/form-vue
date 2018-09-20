<template>
    <div class="radio-group-container">
        <label class="field-label">{{field.label}}</label>
        <div class="group-table">
            <div class="row header">
                <span></span>
                <span v-for="(option, index) in field.options" :key="index">{{option.label}}</span>
            </div>
            <div class="row body" v-for="(row, index) in field.rows" :key="index">
                <span>{{row.label}}</span>
                <span v-for="(option, index2) in field.options" :key="index2">
                    <el-radio :name="row.name" v-model=fieldValue[index] :label="option.value"></el-radio>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'group-radio',
    data () {
        return {
            fieldValue: []
        }
    },
    mounted () {
        this.fieldValue = new Array(this.field.rows.length).fill('')
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
.radio-group-container {
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
    .group-table {
        text-align: center;
        .row {
            display: inline-flex;
            flex-flow: row nowrap;
            align-items: center;
            width: 100%;
            height: 30px;
            line-height: 30px;
            border-bottom: 1px solid #ddd;
            &.header {
                background: #ddd;
                span {
                    font-weight: bolder;
                }
            }
            > span {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                flex: 1;
                border-left: 1px solid #ddd;
                &:last-child {
                    border-right: 1px solid #ddd;
                }
                &:first-child {
                    justify-content: left;
                    padding-left: 10px;
                }
                .el-radio__label {
                    display: none;
                }
            }
        }
    }
}
</style>