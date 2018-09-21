<template>
    <div>
        <div class="radio-container" v-if="!edit">
            <label class="field-label">{{field.label}}</label>
            <label class="field-desc">{{field.desc}}</label>
            <div class="radio-group" v-for="(option, index) in field.options" :key="index">
                <el-radio :name="field.name" v-model="fieldValue" :label="option.value">{{option.label}}</el-radio>
            </div>
        </div>
        <div class="edit-radio-container" v-else>
            <div class="group">
                <label class="field-label">标题：</label>
                <el-input v-model="field.label" size="small"/>
            </div>
            <div class="group">
                <label class="field-desc">标题描述：</label>
                <el-input v-model="field.desc" size="small"/>
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
        </div>
    </div>
</template>

<script>
export default {
    name: 'field-radio',
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
    },
    methods: {
        addOption () {
            this.$store.commit('addOption')
        },
        removeOption (index) {
            this.$store.commit('removeOption', index)
        }
    }
}
</script>

<style lang="less">
.radio-container {
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
    .radio-group {
        display: inline-block;
        padding-right: 20px;
    }
}
.edit-radio-container {
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