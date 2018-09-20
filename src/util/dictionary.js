export const COMPONENTLIST = [
    {
        id: '00001',
        type: '单行文本',
        name: '',
        label: '这是组件标题',
        desc: '这是组件描述'
    },
    {
        id: '00002',
        type: '矩阵单选',
        label: '这是组件标题',
        options: [
            {
                value: '1',
                label: '选项一'
            }
        ],
        rows: [
            {
                label: '问题一',
                name: ''
            }
        ]
    },
    {
        id: '00003',
        name: '',
        type: '单选',
        label: '这是组件标题',
        desc: '这是组件描述',
        options: [
            {
                label: '选项一',
                value: '1'
            }
        ]
    },
    {
        id: '00004',
        name: '',
        type: '下拉框',
        label: '这是组件标题',
        options: [
            {
                label: '选项一',
                value: '1'
            }
        ]
    }
]

export const DEFAULTFORM = [
    {
        id: '00001',
        type: '单行文本',
        name: 'username',
        label: '留下你的大名吧',
        desc: '请告诉我你的大名或绰号都行'
    },
    {
        id: '00003',
        name: 'education',
        type: '单选',
        label: '你的最高学历是',
        desc: '告诉我们你的最高学历，我们只是想了解下',
        options: [
            {
                label: '高中',
                value: '1'
            },
            {
                label: '大学',
                value: '2'
            },
            {
                label: '硕士',
                value: '3'
            },
            {
                label: '博士',
                value: '4'
            }
        ]
    },
    {
        id: '00004',
        name: 'from',
        type: '下拉框',
        label: '你来自哪里呢',
        options: [
            {
                label: '北京',
                value: '北京'
            },
            {
                label: '上海',
                value: '上海'
            },
            {
                label: '广州',
                value: '广州'
            },
            {
                label: '深圳',
                value: '深圳'
            }
        ]
    },
    {
        id: '00002',
        type: '矩阵单选',
        label: '自我评估测试',
        options: [
            {
                value: '1',
                label: '较差一些'
            },
            {
                value: '2',
                label: '一般了'
            },
            {
                value: '3',
                label: '还不错'
            },
            {
                value: '4',
                label: '这是我的强项'
            }
        ],
        rows: [
            {
                label: '沟通技巧',
                name: 'communicateSkill'
            },
            {
                label: '时间观念',
                name: 'timeConcept'
            },
            {
                label: '技能熟练',
                name: 'skillProficiency'
            }
        ]
    }
]
