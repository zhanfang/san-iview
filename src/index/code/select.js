let code = {};

code.base = `
<template>
<div>
    <select value="{=model1=}" style="width:200px">
        <select-option
            s-for="item in cityList"
            value="{{item.value}}">
            {{ item.label }}
        </select-option>
    </select>
    <span class="demo-data">{{ model1 }}</span>
</div>
</template>
<script>
    import {Select} from 'san-iview';

    export default {
        components: {
            'select': Select,
            'select-option': Select.Option
        },
        initData () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model1: ''
            }
        }
    }
</script>
`;

code.size = `
<template>
<div>
    <select value="{=model2=}" size="small" style="width:100px">
        <select-option s-for="item in cityList" value="{{item.value}}">{{ item.label }}</select-option>
    </select>
    <select value="{=model3=}" style="width:100px">
        <select-option s-for="item in cityList" value="{{item.value}}">{{ item.label }}</select-option>
    </select>
    <select value="{=model4=}" size="large" style="width:100px">
        <select-option s-for="item in cityList" value="{{item.value}}">{{ item.label }}</select-option>
    </select>
</div>
</template>
<script>
    import {Select} from 'san-iview';

    export default {
        components: {
            'select': Select,
            'select-option': Select.Option
        },
        initData () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model2: '',
                model3: '',
                model4: ''
            }
        }
    }
</script>
`;

code.disabled = `
<template>
<div>
    <select value="{=model5=}" disabled style="width:200px">
        <select-option s-for="item in cityList" value="{{item.value}}">{{ item.label }}</select-option>
    </select>
    <select value="{=model6=}" style="width:200px">
        <select-option value="beijing">北京市</select-option>
        <select-option value="shanghai" disabled>上海市</select-option>
        <select-option value="shenzhen">深圳市</select-option>
    </select>
</div>
</template>
<script>
    import {Select} from 'san-iview';

    export default {
        components: {
            'select': Select,
            'select-option': Select.Option
        },
        initData () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model5: '',
                model6: ''
            }
        }
    }
</script>
`;

code.clearable = `
<template>
<div>
    <select value="model8" clearable style="width:200px">
        <select-option s-for="item in cityList" value="{{item.value}}" :key="item.value">{{ item.label }}</select-option>
    </select>
    <span class="demo-data">{{ model8 }}</span>
</div>
</template>
<script>
    import {Select} from 'san-iview';

    export default {
        components: {
            'select': Select,
            'select-option': Select.Option
        },
        initData () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model8: ''
            }
        }
    }
</script>
`;

code.group = `
<template>
    <Select v-model="model7" style="width:200px">
        <OptionGroup label="热门城市">
            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
        <OptionGroup label="其它城市">
            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                cityList1: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    }
                ],
                cityList2: [
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model7: ''
            }
        }
    }
</script>
`;

code.label = `
<template>
<div>
    <select value="{=model9=}" style="width:200px">
        <select-option value="beijing" label="北京市">
            <span>北京</span>
            <span style="float:right;color:#ccc">Beiing</span>
        </select-option>
        <select-option value="shanghai" label="上海市">
            <span>上海</span>
            <span style="float:right;color:#ccc">ShangHai</span>
        </select-option>
        <select-option value="shenzhen" label="深圳市">
            <span>深圳</span>
            <span style="float:right;color:#ccc">ShenZhen</span>
        </select-option>
    </select>
    <span class="demo-data">{{ model9 }}</span>
</div>
</template>
<script>
    import {Select} from 'san-iview';

    export default {
        components: {
            'select': Select,
            'select-option': Select.Option
        },
        initData () {
            return {
                model9: ''
            }
        }
    }
</script>
`;

code.multiple = `
<template>
    <Select v-model="model10" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model10: []
            }
        }
    }
</script>
`;

code.filterable = `
<template>
    <Row>
        <Col span="12" style="padding-right:10px">
            <Select v-model="model11" filterable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
        <Col span="12">
            <Select v-model="model12" filterable multiple>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model11: '',
                model12: []
            }
        }
    }
</script>
`;

code.remote = `
<template>
    <Row>
        <Col span="12" style="padding-right:10px">
            <Select
                v-model="model13"
                filterable
                remote
                :remote-method="remoteMethod1"
                :loading="loading1">
                <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
            </Select>
        </Col>
        <Col span="12">
        <Select
            v-model="model14"
            multiple
            filterable
            remote
            :remote-method="remoteMethod2"
            :loading="loading2">
            <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                model13: '',
                loading1: false,
                options1: [],
                model14: [],
                loading2: false,
                options2: [],
                list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
            }
        },
        methods: {
            remoteMethod1 (query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options1 = [];
                }
            },
            remoteMethod2 (query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options2 = [];
                }
            }
        }
    }
</script>
`;

export default code;