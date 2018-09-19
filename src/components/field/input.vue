<template>
    <div class="input-container">
        <label class="field-label">{{field.label}}</label>
        <label class="field-desc">{{field.desc}}}</label>
        <el-input :name="field.name" v-model="fieldValue" size="medium"/>
    </div>
</template>

<script>
export default {
    name: 'input',
    data () {
        fieldValue: ''
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

</style>