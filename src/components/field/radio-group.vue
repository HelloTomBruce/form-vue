<template>
    <div>
        <div class="radio-group-container" v-if="!edit">
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
        <div class="edit-radio-group" v-else>
            <div class="group">
                <label class="field-label">标题：</label>
                <el-input v-model="field.label" size="small"/>
            </div>
            <div class="option-one" v-for="(option, index) in field.options" :key="index">
                <label class="option-label">选项标题：
                    <span class="delete" @click="removeOption(index)">
                        <i class="el-icon-close"></i>
                    </span>
                </label>
                <el-input v-model="option.label" size="small"/>
                <label class="option-value">选项值：</label>
                <el-input v-model="option.value" size="small"/>
            </div>
            <div class="add-option">
                <el-button type="primary" size="small" @click="addOption">增加选项</el-button>
            </div>
            <div class="option-one" v-for="(row, index) in field.rows" :key="index + 'row'">
                <label class="option-label">问题：
                    <span class="delete" @click="removeRow(index)">
                        <i class="el-icon-close"></i>
                    </span>
                </label>
                <el-input v-model="row.label" size="small"/>
            </div>
            <div class="add-option">
                <el-button type="primary" size="small" @click="addRow">增加问题</el-button>
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
        },
        edit: {
            type: Boolean
        }
    },
    methods: {
        addOption () {
            this.$store.commit('addOption')
        },
        removeOption (index) {
            this.$store.commit('removeOption', index)
        },
        addRow () {
            this.$store.commit('addRow')
        },
        removeRow (index) {
            this.$store.commit('removeRow', index)
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
.edit-radio-group {
     label {
        display: block;
        font-size: 14px;
        line-height: 27px;
        .delete {
            float: right;
            cursor: pointer;
        }
    }
    .el-input__inner {
        margin-bottom: 20px;
    }
    .add-option {
        padding: 20px;
        text-align: center;
    }
    .group, .option-one {
        padding-top: 10px;
        border-bottom: 1px solid #ddd;
    }
}
</style>