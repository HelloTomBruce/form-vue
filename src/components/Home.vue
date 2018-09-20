<template>
    <div class="home">
        <div class="form-container">
            <header class="form-header">
                <h2>欢迎您加入酷学院</h2>
            </header>
            <div class="form-content">
                <field-title title="个人登记表单"/>
                <div class="field-one" v-for="(field, index) in FORM" :key="index">
                    <component :is="field.id | getField" :field=field />
                </div>
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
import { mapState } from 'vuex'
import RightPanel from './RightPanel.vue'
import FieldInput from './field/input.vue'
import GroupRadio from './field/radio-group.vue'
import FieldRadio from './field/radio.vue'
import FieldSelect from './field/select.vue'
import FieldTitle from './field/title.vue'
export default {
    name: 'Home',
    data () {
        return {
        }
    },
    computed: {
        ...mapState([
            'FORM'
        ]),
    },
    components: {
        RightPanel,
        FieldInput,
        GroupRadio,
        FieldRadio,
        FieldSelect,
        FieldTitle
    },
    filters: {
        getField (id) {
            let fieldName = ''
            switch (id) {
                case '00001':
                    fieldName = 'field-input'
                    break
                case '00002':
                    fieldName = 'group-radio'
                    break
                case '00003':
                    fieldName = 'field-radio'
                    break
                case '00004':
                    fieldName = 'field-select'
                    break
                default:
                    fieldName = 'field-select'
            }
            console.log(fieldName)
            return fieldName
        }
    },
    mounted () {
        this.formData = this.$store.state.FORM
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
            .field-one {
                padding: 20px 10px;
                text-align: left;
                font-size: 14px;
                cursor: pointer;
                &:hover {
                    background: rgba(102, 177, 255, .5);
                }
            }
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
