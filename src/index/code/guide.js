let introduce = {};
let install = {};
let start = {};
let standard = {};
let i18n = {};
let theme = {};
let loader = {};

introduce.install = `
$ npm install iview --save
`;

introduce.script= `
<script type="text/javascript" src="iview.min.js"></script>
`;

introduce.demo = `
<template>
    <Slider v-model="value" range></Slider>
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
`;

install.cdn = `
<!-- import san -->
<script src="//unpkg.com/san@latest"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/san-iview/dist/styles/san-iview.css">
<!-- import san-iview -->
<script src="//unpkg.com/san-iview/dist/san-iview.min.js"></script>
`;

install.demo = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>san-iview example</title>
    <link rel="stylesheet" href="//unpkg.com/san-iview/dist/styles/san-iview.css">
    <script src="//unpkg.com/san@latest"></script>
    <script src="//unpkg.com/san-iview/dist/san-iview.min.js"></script>
</head>
<body>
<script>
    const {Button, Message} = window['san-iview'];

    const Demo = san.defineComponent({
        template: '
            <div class="parent">
                <btn type="primary" on-select="change">
                    add child
                </btn>
            </div>',
        components: {
        btn: Button
        },
        change() {
            Message.success('hello world');
        }
    });

    const demo = new Demo();

    demo.attach(document.body);

  </script>
</body>
</html>
`;

install.install = `
npm install san-iview --save`;

install.example = `
// main.js
import san from 'san';
import 'san-iview/dist/styles/san-iview.css';

import App from './App';

const app = new App();
app.attach(document.getElementById('app'));

// App.san
<template>
<div>
    <icon type="ionic"></icon>
</div>
</template>
<script>
import {Icon} from 'san-iview';

export default {
    components: {
        'icon': Icon
    }
};
</script>
`;

install.import = `
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';    // 路由挂载
import Routers from './router.js';       // 路由列表
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(VueRouter);
Vue.use(iView);

// 路由配置
const RouterConfig = {
    routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
`;

install.need = `
import Checkbox from 'iview/src/components/checkbox';
`;

install.warning = `
module: {
    rules: [
        { test: /iview.src.*?js$/, loader: 'babel-loader' },
        { test: /\\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
}
`;

start.dev = `
// 如果是第一次使用，先运行init，以后直接运行dev
$ npm run init
$ npm run dev
`;

start.prod = `
$ npm run build
`;

standard.prop = `
正确的使用方法：
<Page :current="1" :total="100"></Page>

错误的使用方法：
<Page current="1" total="100"></Page>
`;

i18n.demo = `
import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';

Vue.use(iView, { locale });
`;

i18n.vue = `
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import iView from 'iview';
import zhLocale from 'iview/dist/locale/zh-CN';
import enLocale from 'iview/dist/locale/en-US';

Vue.use(VueI18n);
Vue.use(iView);

Vue.config.lang = 'zh-CN';
Vue.locale('zh-CN', zhLocale);
Vue.locale('en-US', enLocale);
// 注意：使用 vue-i18n 时，需要将本地的语言包和 iView 的语言包合并
`;

theme.less = `
@import '~iview/src/styles/index.less';

// 下面是要覆盖的变量，例如：
@primary-color: #8c0776;
`;

theme.lessImport = `
import Vue from 'vue';
import iView from 'iview';
import '../my-theme/index.less';

Vue.use(iView);
`;

theme.install = `
npm install iview-theme -g
`;

theme.init = `
iview-theme init my-theme
`;

theme.build = `
cd my-theme
iview-theme build -o dist/
`;

theme.import = `
import Vue from 'vue';
import iView from 'iview';
import '../my-theme/dist/iview.css';

Vue.use(iView);
`;

loader.install = `
npm install iview-loader --save-dev
`;

loader.webpack = `
module: {
    rules: [
        {
            test: /\\.vue$/,
            use: [
                {
                    loader: 'vue-loader',
                    options: {
                        
                    }
                },
                {
                    loader: 'iview-loader',
                    options: {
                        prefix: false
                    }
                }
            ]
        }
    ]
}
`;

loader.tags = `
{
    'i-affix': 'Affix',
    'i-alert': 'Alert',
    'i-auto-complete': 'AutoComplete',
    'i-avatar': 'Avatar',
    'i-back-top': 'BackTop',
    'i-badge': 'Badge',
    'i-breadcrumb': 'Breadcrumb',
    'i-breadcrumb-item': 'BreadcrumbItem',
    'i-button': 'Button',
    'i-button-group': 'ButtonGroup',
    'i-card': 'Card',
    'i-carousel': 'Carousel',
    'i-carousel-item': 'CarouselItem',
    'i-cascader': 'Cascader',
    'i-checkbox': 'Checkbox',
    'i-checkbox-group': 'CheckboxGroup',
    'i-circle': 'i-circle',
    'i-col': 'Col',
    'i-collapse': 'Collapse',
    'i-color-picker': 'ColorPicker',
    'i-date-picker': 'DatePicker',
    'i-dropdown': 'Dropdown',
    'i-dropdown-item': 'DropdownItem',
    'i-dropdown-menu': 'DropdownMenu',
    'i-form': 'Form',
    'i-form-item': 'FormItem',
    'i-icon': 'Icon',
    'i-input': 'Input',
    'i-input-number': 'InputNumber',
    'i-menu': 'Menu',
    'i-menu-group': 'MenuGroup',
    'i-menu-item': 'MenuItem',
    'i-submenu': 'Submenu',
    'i-modal': 'Modal',
    'i-option': 'Option',
    'i-option-group': 'OptionGroup',
    'i-page': 'Page',
    'i-panel': 'Panel',
    'i-poptip': 'Poptip',
    'i-progress': 'Progress',
    'i-radio': 'Radio',
    'i-radio-group': 'RadioGroup',
    'i-rate': 'Rate',
    'i-row': 'Row',
    'i-select': 'Select',
    'i-slider': 'Slider',
    'i-spin': 'Spin',
    'i-step': 'Step',
    'i-steps': 'Steps',
    'i-switch': 'i-switch',
    'i-table': 'Table',
    'i-tabs': 'Tabs',
    'i-tab-pane': 'TabPane',
    'i-tag': 'Tag',
    'i-timeline': 'Timeline',
    'i-timeline-item': 'TimelineItem',
    'i-time-picker': 'TimePicker',
    'i-tooltip': 'Tooltip',
    'i-transfer': 'Transfer',
    'i-tree': 'Tree',
    'i-upload': 'Upload'
}
`;

export default {
    introduce,
    install,
    start,
    standard,
    i18n,
    theme,
    loader
}