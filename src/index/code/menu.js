let code = {};

code.base = `
<template>
<div>
    <menu mode="horizontal" theme="{{theme1}}" activeName="1">
        <menu-item name="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </menu-item>
        <menu-item name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </menu-item>
        <submenu name="3">
            <span slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </span>
            <menu-group title="使用">
                <menu-item name="3-1">新增和启动</menu-item>
                <menu-item name="3-2">活跃分析</menu-item>
                <menu-item name="3-3">时段分析</menu-item>
            </menu-group>
            <menu-group title="留存">
                <menu-item name="3-4">用户留存</menu-item>
                <menu-item name="3-5">流失用户</menu-item>
            </menu-group>
        </submenu>
    </menu>
    <br>
    <p>切换主题</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
</div>
</template>
<script>
    import {Icon, Menu, Radio} from 'san-iview';
    export default {
        components: {
            'menu': Menu,
            'menu-item': Menu.Item,
            'icon': Icon,
            'radio': Radio,
            'radio-group': Radio.Group
        },
        initData () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
`;

code.vertical = `
<template>
<div>
    <menu mode="vertical" theme="{{theme2}}">
        <menu-group title="文章管理">
            <menu-item name="1-1">文章管理</menu-item>
            <menu-item name="1-2">评论管理</menu-item>
            <menu-item name="1-3">举报管理</menu-item>
        </menu-group>
        <submenu name="2">
            <span slot="title">
                <Icon type="ios-people"></Icon>
                用户管理
            </span>
            <menu-item name="2-1">新增用户</menu-item>
            <menu-item name="2-2">活跃用户</menu-item>
        </submenu>
        <submenu name="3">
            <span slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </span>
            <menu-group title="使用">
                <menu-item name="3-1">新增和启动</menu-item>
                <menu-item name="3-2">活跃分析</menu-item>
                <menu-item name="3-3">时段分析</menu-item>
            </menu-group>
            <menu-group title="留存">
                <menu-item name="3-4">用户留存</menu-item>
                <menu-item name="3-5">流失用户</menu-item>
            </menu-group>
        </submenu>
    </menu>
</div>
</template>
<script>
import {Icon, Menu, Radio} from 'san-iview';
export default {
    components: {
        'menu': Menu,
        'menu-item': Menu.Item,
        'menu-group': Menu.Group,
        'icon': Icon,
        'radio': Radio,
        'radio-group': Radio.Group
    },
    initData () {
        return {
            theme1: 'light'
        }
    }
}
</script>
`;

code.group = `
<template>
    <Menu :theme="theme3" active-name="1">
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="document-text"></Icon>
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="chatbubbles"></Icon>
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="统计分析">
            <MenuItem name="3">
                <Icon type="heart"></Icon>
                用户留存
            </MenuItem>
            <MenuItem name="4">
                <Icon type="heart-broken"></Icon>
                流失用户
            </MenuItem>
        </MenuGroup>
    </Menu>
    <br>
    <p>切换主题</p>
    <RadioGroup v-model="theme3">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>
`;

export default code;