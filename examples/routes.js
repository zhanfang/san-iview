/**
 * @file examples路由
 * @author zhanfang(fzhanxd@gmail.com)
 */

import Breadcrumb from './components/breadcrumb';
import Card from './components/card';
import Button from './components/button';
import Menu from './components/menu';

export default [
    {
        rule: '/breadcrumb',
        Component: Breadcrumb,
        target: '#page'
    },
    {
        rule: '/button',
        Component: Button,
        target: '#page'
    },
    {
        rule: '/card',
        Component: Card,
        target: '#page'
    },
    {
        rule: '/menu',
        Component: Menu,
        target: '#page'
    }
];
