<template>
    <div class="title-container">
        <h4 contenteditable>{{title}}</h4>
    </div>
</template>

<script>
export default {
    name: 'field-title',
    data () {
        return {

        }
    },
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="less">
.title-container {
    padding: 30px 20px;
    h4 {
        text-align: left;
        font-size: 20px;
        font-weight: 500;
    }
}
</style>