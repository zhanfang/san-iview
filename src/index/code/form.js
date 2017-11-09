let code = {};

code.inline = `
<template>
    <i-form model="{{formInline}}" rules="{{ruleInline}}" inline>
        <form-item prop="user">
            <i-input 
                type="text"
                value="{=formInline.user=}"
                placeholder="Username"
                prepend>
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </i-input>
        </form-item>
        <form-item prop="password">
            <i-input 
                type="password"
                value="{=formInline.password=}"
                placeholder="Password"
                prepend>
                <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </i-input>
        </form-item>
        <form-item>
            <i-btn type="primary" on-select="handleSubmit('formInline')">登录</i-btn>
        </form-item>
    </i-form>
</template>
<script>
    import {Icon, Row, Col, Input, Switch, Message, Form, Button, Select, Radio, Checkbox} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'i-input': Input,
            'icon': Icon,
            'i-form': Form,
            'form-item': Form.Item,
            'i-switch': Switch,
            'i-btn': Button,
            'select': Select,
            'select-option': Select.Option,
            'radio': Radio,
            'radio-group': Radio.Group,
            'checkbox': Checkbox,
            'checkbox-group': Checkbox.Group
        },
        initData () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        handleSubmit (name) {
            this.ref(name).validate((valid) => {
                if (valid) {
                    Message.success('提交成功!');
                } else {
                    Message.error('表单验证失败!');
                }
            })
        }
    }
</script>
`;

code.item = `
<template>
<div>
    <i-form model="{{formItem}}" labelWidth="{{80}}">
        <form-item label="输入框">
            <i-input value="{=formItem.input=}" placeholder="请输入"></i-input>
        </form-item>
        <form-item label="选择器">
            <Select value="{=formItem.select=}" placeholder="请选择">
                <select-option value="beijing">北京市</select-option>
                <select-option value="shanghai">上海市</select-option>
                <select-option value="shenzhen">深圳市</select-option>
            </Select>
        </form-item>
        <form-item label="单选框">
            <radio-group label="{=formItem.radio=}">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </radio-group>
        </form-item>
        <form-item label="多选框">
            <checkbox-group value="{=formItem.checkbox=}">
                <checkbox label="吃饭"></checkbox>
                <checkbox label="睡觉"></checkbox>
                <checkbox label="跑步"></checkbox>
                <checkbox label="看电影"></checkbox>
            </checkbox-group>
        </form-item>
        <form-item label="开关">
            <i-switch value="{=formItem.switch=}" size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </i-switch>
        </form-item>
        <form-item label="文本域">
            <i-input value="{=formItem.textarea=}" type="textarea" autosize="{{autosize}}" placeholder="请输入..."></i-input>
        </form-item>
        <form-item>
            <i-btn type="primary">提交</i-btn>
            <i-btn type="ghost" style="margin-left: 8px">取消</i-btn>
        </form-item>
    </i-form>
</div>
</template>
<script>
    import {Icon, Row, Col, Input, Switch, Message, Form, Button, Select, Radio, Checkbox} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'i-input': Input,
            'icon': Icon,
            'i-form': Form,
            'form-item': Form.Item,
            'i-switch': Switch,
            'i-btn': Button,
            'select': Select,
            'select-option': Select.Option,
            'radio': Radio,
            'radio-group': Radio.Group,
            'checkbox': Checkbox,
            'checkbox-group': Checkbox.Group
        },
        initData () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
`;

code.position = `
<template>
<div>
    <i-form labelPosition="left" labelWidth="{{100}}">
        <form-item label="标题">
            <i-input value="{=formLeft.input1=}"></i-input>
        </form-item>
        <form-item label="标题名称">
            <i-input value="{=formLeft.input2=}"></i-input>
        </form-item>
        <form-item label="标题名称对齐">
            <i-input value="{=formLeft.input3=}"></i-input>
        </form-item>
    </i-form>
    <i-form labelPosition="right" labelWidth="{{100}}">
        <form-item label="标题">
            <i-input value="{=formRight.input1=}"></i-input>
        </form-item>
        <form-item label="标题名称">
            <i-input value="{=formRight.input2=}"></i-input>
        </form-item>
        <form-item label="标题名称对齐">
            <i-input value="{=formRight.input3=}"></i-input>
        </form-item>
    </i-form>
    <i-form labelPosition="top">
        <form-item label="标题">
            <i-input value="{=formTop.input1=}"></i-input>
        </form-item>
        <form-item label="标题名称">
            <i-input value="{=formTop.input2=}"></i-input>
        </form-item>
        <form-item label="标题名称对齐">
            <i-input value="{=formTop.input3=}"></i-input>
        </form-item>
    </i-form>
</div>
</template>
<script>
    import {Icon, Row, Col, Input, Switch, Message, Form, Button, Select, Radio, Checkbox} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'i-input': Input,
            'icon': Icon,
            'i-form': Form,
            'form-item': Form.Item,
            'i-switch': Switch,
            'i-btn': Button,
            'select': Select,
            'select-option': Select.Option,
            'radio': Radio,
            'radio-group': Radio.Group,
            'checkbox': Checkbox,
            'checkbox-group': Checkbox.Group
        },
        initData () {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                }
            }
        }
    }
</script>
`;

code.validate = `
<template>
<div>
    <i-form
        model="{=formValidate=}"
        rules="{{ruleValidate}}"
        labelWidth="{{80}}"
        s-ref="formValidate"
    >
        <form-item label="姓名" prop="name">
            <i-input value="{=formValidate.name=}" placeholder="请输入姓名"></i-input>
        </form-item>
        <form-item label="邮箱" prop="mail">
            <i-input value="{=formValidate.mail=}" placeholder="请输入邮箱"></i-input>
        </form-item>
        <form-item label="城市" prop="city">
            <Select value="{=formValidate.city=}" placeholder="请选择所在地">
                <select-option value="beijing">北京市</select-option>
                <select-option value="shanghai">上海市</select-option>
                <select-option value="shenzhen">深圳市</select-option>
            </Select>
        </form-item>
        <form-item label="性别" prop="gender">
            <radio-group label="{=formValidate.gender=}">
                <Radio label="male">男</Radio>
                <Radio label="female">女</Radio>
            </radio-group>
        </form-item>
        <form-item label="爱好" prop="interest">
            <checkbox-group value="{=formValidate.interest=}">
                <checkbox label="吃饭"></checkbox>
                <checkbox label="睡觉"></checkbox>
                <checkbox label="跑步"></checkbox>
                <checkbox label="看电影"></checkbox>
            </checkbox-group>
        </form-item>
        <form-item label="介绍" prop="desc">
            <i-input value="{=formValidate.desc=}" type="textarea" autosize="{{autosize}}" placeholder="请输入..."></i-input>
        </form-item>
        <form-item>
            <i-btn type="primary" on-select="handleSubmit('formValidate')">提交</i-btn>
            <i-btn type="ghost" on-select="handleReset('formValidate')" style="margin-left: 8px">重置</i-btn>
        </form-item>
    </i-form>
</div>
</template>
<script>
    import {Icon, Row, Col, Input, Switch, Message, Form, Button, Select, Radio, Checkbox} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'i-input': Input,
            'icon': Icon,
            'i-form': Form,
            'form-item': Form.Item,
            'i-switch': Switch,
            'i-btn': Button,
            'select': Select,
            'select-option': Select.Option,
            'radio': Radio,
            'radio-group': Radio.Group,
            'checkbox': Checkbox,
            'checkbox-group': Checkbox.Group
        },
        initData () {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: '请选择城市', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: '请选择性别', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
                        { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请输入个人介绍', trigger: 'blur' },
                        { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
                    ]
                }
            }
        },
        handleSubmit (name) {
            this.ref(name).validate((valid) => {
                if (valid) {
                    Message.success('提交成功!');
                } else {
                    Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.ref(name).resetFields();
        }
    }
</script>
`;

code.custom = `
<template>
<div>
    <i-form 
        s-ref="formCustom" 
        model="{{formCustom}}"
        rules="{{ruleCustom}}"
        labelWidth="{{80}}">
        <form-item label="密码" prop="passwd">
            <i-input type="password" value="{=formCustom.passwd=}"></i-input>
        </form-item>
        <form-item label="确认密码" prop="passwdCheck">
            <i-input type="password" value="{=formCustom.passwdCheck=}"></i-input>
        </form-item>
        <form-item label="年龄" prop="age">
            <i-input type="text" value="{=formCustom.age=}" number></i-input>
        </form-item>
        <form-item>
            <i-btn type="primary" on-select="handleSubmit('formCustom')">提交</i-btn>
            <i-btn type="ghost" on-select="handleReset('formCustom')" style="margin-left: 8px">重置</i-btn>
        </form-item>
    </i-form>
</div>
</template>
<script>
    import {Icon, Row, Col, Input, Switch, Message, Form, Button, Select, Radio, Checkbox} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'i-input': Input,
            'icon': Icon,
            'i-form': Form,
            'form-item': Form.Item,
            'i-switch': Switch,
            'i-btn': Button,
            'select': Select,
            'select-option': Select.Option,
            'radio': Radio,
            'radio-group': Radio.Group,
            'checkbox': Checkbox,
            'checkbox-group': Checkbox.Group
        },
        initData () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.data.get('formCustom.passwdCheck') !== '') {
                        // 对第二个密码框单独验证
                        this.ref('formCustom').validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.data.get('formCustom.passwd')) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    age: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    age: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
            }
        },
        handleSubmit (name) {
            this.ref(name).validate((valid) => {
                if (valid) {
                    Message.success('提交成功!');
                } else {
                    Message.error('表单验证失败!');
                }
            })
        },
        handleReset (name) {
            this.ref(name).resetFields();
        }
    }
</script>
`;

code.dynamic = `
<template>
<div>
    <i-form s-ref="formDynamic" labelWidth="{{80}}">
        <form-item
            s-for="item, index in formDynamic.items"
            label="项目{{index + 1}}">
            <i-row>
                <i-col span="18">
                    <i-input type="text" value="{=item.value=}" placeholder="请输入..."></i-input>
                </i-col>
                <i-col span="4" offset="1">
                    <i-btn type="ghost" on-select="handleRemove(index)">删除</i-btn>
                </i-col>
            </i-row>
        </form-item>
        <form-item>
            <i-row>
                <i-col span="12">
                    <i-btn type="dashed" long on-select="handleAdd" icon="plus-round">新增</i-btn>
                </i-col>
            </i-row>
        </form-item>
        <form-item>
            <i-btn type="primary" on-select="handleSubmit('formDynamic')">提交</i-btn>
            <i-btn type="ghost" on-select="handleReset('formDynamic')" style="margin-left: 8px">重置</i-btn>
        </form-item>
    </i-form>
</div>
</template>
<script>
    import {Icon, Row, Col, Input, Switch, Message, Form, Button, Select, Radio, Checkbox} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'i-input': Input,
            'icon': Icon,
            'i-form': Form,
            'form-item': Form.Item,
            'i-switch': Switch,
            'i-btn': Button,
            'select': Select,
            'select-option': Select.Option,
            'radio': Radio,
            'radio-group': Radio.Group,
            'checkbox': Checkbox,
            'checkbox-group': Checkbox.Group
        },
        initData () {
            return {
                formDynamic: {
                    items: [
                        {
                            value: ''
                        }
                    ]
                }
            }
        },
        handleAdd () {
            this.data.push('formDynamic.items', {
                value: ''
            });
        },
        handleRemove (index) {
            console.log(index);
            this.data.splice('formDynamic.items', [index, 1]);
        }
    }
</script>
`;

export default code;