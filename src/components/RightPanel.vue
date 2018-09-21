<template>
    <div class="form-edit">
        <h4>添加字段</h4>
        <div class="component-list">
            <el-button @click="addField(item.id)" v-for="(item, id) in componentList" :key="id">{{item.type}}</el-button>
        </div>
        <h4>编辑字段</h4>
        <div class="component-edit">
            <component :is="CURRENTEDIT.id | getField" :field="CURRENTEDIT" :edit="true"/>
        </div>
    </div>
</template>

<script>
import { COMPONENTLIST } from '../util/dictionary.js'
import { mapState } from 'vuex'
import RightPanel from './RightPanel.vue'
import FieldInput from './field/input.vue'
import GroupRadio from './field/radio-group.vue'
import FieldRadio from './field/radio.vue'
import FieldSelect from './field/select.vue'
export default {
    name: 'RightPanel',
    data () {
        return {
            componentList: []
        }
    },
    computed: {
        ...mapState([
            'CURRENTEDIT'
        ])
    },
    components: {
        RightPanel,
        FieldInput,
        GroupRadio,
        FieldRadio,
        FieldSelect
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
    created () {
        this.componentList = COMPONENTLIST
    },
    methods: {
        addField (id) {
            this.$store.commit('addField', id)
        }
    }
}
</script>

<style lang="less">
.form-edit {
    h4 {
        font-size: 14px;
        line-height: 25px;
        background: #66b1ff;
        color: #fff;
        padding-left: 10px;
        text-align: left;
        font-weight: normal;
    }
    .component-list {
        column-count: 2;
        column-fill: balance;
        column-gap: 0;
        padding: 30px 30px 10px;
        .el-button {
            margin: 0 0 20px 0;
            width: 100px;
        }
    }
    .component-edit {
        padding: 20px;
        text-align: left;
    }
}
</style>
