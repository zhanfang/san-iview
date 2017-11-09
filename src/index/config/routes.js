/**
 * @file 前端路由
 * @author zhanfang(fzhanxd@gmail.com)
 */
import Install from '../pages/docs/install';
import Button from '../pages/components/button';
import Icon from '../pages/components/icon';
import Color from '../pages/components/color';
import Grid from '../pages/components/grid';
import Menu from '../pages/components/menu';
import Input from '../pages/components/input';
import CheckBox from '../pages/components/checkbox';
import Switch from '../pages/components/switch';
import Radio from '../pages/components/radio';
import Form from '../pages/components/form';
import Message from '../pages/components/message';
import Modal from '../pages/components/modal';
import ColorPicker from '../pages/components/colorpicker';
import Upload from '../pages/components/upload';
import Card from '../pages/components/card';
import Notice from '../pages/components/notice';
import Select from '../pages/components/select';
import Progress from '../pages/components/progress';
import Dropdown from '../pages/components/dropdown';
import Tabs from '../pages/components/tabs';
import Collapse from '../pages/components/collapse';
import Page from '../pages/components/page';
import Spin from '../pages/components/spin';
import LoadingBar from '../pages/components/loading-bar';

import Home from '../pages/home/app';

export default [
    {
        rule: '/',
        Component: Home,
        target: '#page'
    },    
    {
        rule: '/docs/guide/install',
        Component: Install,
        target: '#page'
    },
    {
        rule: '/components/button',
        Component: Button,
        target: '#page'
    },
    {
        rule: '/components/icon',
        Component: Icon,
        target: '#page'
    },
    {
        rule: '/components/color',
        Component: Color,
        target: '#page'
    },
    {
        rule: '/components/grid',
        Component: Grid,
        target: '#page'
    },
    {
        rule: '/components/menu',
        Component: Menu,
        target: '#page'
    },
    {
        rule: '/components/grid',
        Component: Install,
        target: '#page'
    },
    {
        rule: '/components/input',
        Component: Input,
        target: '#page'
    },
    {
        rule: '/components/checkbox',
        Component: CheckBox,
        target: '#page'
    },
    {
        rule: '/components/switch',
        Component: Switch,
        target: '#page'
    },
    {
        rule: '/components/radio',
        Component: Radio,
        target: '#page'
    },
    {
        rule: '/components/form',
        Component: Form,
        target: '#page'
    },
    {
        rule: '/components/message',
        Component: Message,
        target: '#page'
    },
    {
        rule: '/components/modal',
        Component: Modal,
        target: '#page'
    },
    {
        rule: '/components/color-picker',
        Component: ColorPicker,
        target: '#page'
    },
    {
        rule: '/components/upload',
        Component: Upload,
        target: '#page'
    },
    {
        rule: '/components/card',
        Component: Card,
        target: '#page'
    },
    {
        rule: '/components/notice',
        Component: Notice,
        target: '#page'
    },
    {
        rule: '/components/select',
        Component: Select,
        target: '#page'
    },
    {
        rule: '/components/progress',
        Component: Progress,
        target: '#page'
    },
    {
        rule: '/components/dropdown',
        Component: Dropdown,
        target: '#page'
    },
    {
        rule: '/components/tabs',
        Component: Tabs,
        target: '#page'
    },
    {
        rule: '/components/collapse',
        Component: Collapse,
        target: '#page'
    },
    {
        rule: '/components/page',
        Component: Page,
        target: '#page'
    },
    {
        rule: '/components/spin',
        Component: Spin,
        target: '#page'
    },
    {
        rule: '/components/loading-bar',
        Component: LoadingBar,
        target: '#page'
    }
];
