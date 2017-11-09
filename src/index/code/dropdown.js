let code = {};

code.base = `
<template>
    <dropdown>
        <a href="javascript:void(0)">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item disabled>豆汁儿</dropdown-item>
            <dropdown-item>冰糖葫芦</dropdown-item>
            <dropdown-item divided>北京烤鸭</dropdown-item>
        </dropdown-menu>
    </dropdown>
    <dropdown style="margin-left: 20px">
        <i-btn type="primary">
            下拉菜单
            <Icon type="arrow-down-b"></Icon>
        </i-btn>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item disabled>豆汁儿</dropdown-item>
            <dropdown-item>冰糖葫芦</dropdown-item>
            <dropdown-item divided>北京烤鸭</dropdown-item>
        </dropdown-menu>
    </dropdown>
</template>
<script>
    import {Dropdown, Button} from 'san-iview';
    export default {
        components: {
            'i-btn': Button,
            'dropdown': Dropdown,
            'dropdown-item': Dropdown.Item,
            'dropdown-menu': Dropdown.Menu
        }
    }
</script>
`;

code.trigger = `
<template>
    <dropdown>
        <a href="javascript:void(0)">
            hover 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item>豆汁儿</dropdown-item>
            <dropdown-item>冰糖葫芦</dropdown-item>
            <dropdown-item>北京烤鸭</dropdown-item>
        </dropdown-menu>
    </dropdown>
    <dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
            click 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item>豆汁儿</dropdown-item>
            <dropdown-item>冰糖葫芦</dropdown-item>
            <dropdown-item>北京烤鸭</dropdown-item>
        </dropdown-menu>
    </dropdown>
    <dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
        <a href="javascript:void(0)" @click="handleOpen">
            custom 触发
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
                <i-btn type="primary" @click="handleClose">关闭</i-btn>
            </div>
        </dropdown-menu>
    </dropdown>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen () {
                this.visible = true;
            },
            handleClose () {
                this.visible = false;
            }
        }
    }
</script>
`;

code.placement = `
<template>
    <dropdown placement="bottom-start">
        <a href="javascript:void(0)">
            菜单(左)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item>豆汁儿</dropdown-item>
            <dropdown-item>冰糖葫芦</dropdown-item>
            <dropdown-item>北京烤鸭</dropdown-item>
        </dropdown-menu>
    </dropdown>
    <dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
            菜单(居中)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item>豆汁儿</dropdown-item>
            <dropdown-item>冰糖葫芦</dropdown-item>
            <dropdown-item>北京烤鸭</dropdown-item>
        </dropdown-menu>
    </dropdown>
    <dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
            菜单(右)
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item>豆汁儿</dropdown-item>
            <dropdown-item>冰糖葫芦</dropdown-item>
            <dropdown-item>北京烤鸭</dropdown-item>
        </dropdown-menu>
    </dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

code.nest = `
<template>
    <dropdown-menu>
        <a href="javascript:void(0)">
            北京小吃
            <Icon type="arrow-down-b"></Icon>
        </a>
        <dropdown-menu slot="list">
            <dropdown-item>驴打滚</dropdown-item>
            <dropdown-item>炸酱面</dropdown-item>
            <dropdown-item>豆汁儿</dropdown-item>
            <dropdown placement="right-start">
                <dropdown-item>
                    北京烤鸭
                    <Icon type="ios-arrow-right"></Icon>
                </dropdown-item>
                <dropdown-menu slot="list">
                    <dropdown-item>挂炉烤鸭</dropdown-item>
                    <dropdown-item>焖炉烤鸭</dropdown-item>
                </dropdown-menu>
            </dropdown>
            <dropdown-item>冰糖葫芦</dropdown-item>
        </dropdown-menu>
    </dropdown>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;