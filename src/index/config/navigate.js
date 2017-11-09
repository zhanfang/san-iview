// 定义左侧导航

const list = {
    components: [
        {
            type: 'Basic',
            title: '基础',
            list: [
                {
                    title: 'Grid 栅格',
                    path: '/components/grid',
                    img: 'grid.png',
                    icon: 'ios-grid-view-outline'
                },
                {
                    title: 'Color 色彩',
                    path: '/components/color',
                    img: 'color.png',
                    icon: 'android-color-palette'
                },
                {
                    title: 'Button 按钮',
                    path: '/components/button',
                    img: 'button.png',
                    icon: 'social-youtube-outline'
                },
                {
                    title: 'Icon 图标',
                    path: '/components/icon',
                    img: 'icon.png',
                    icon: 'ios-heart-outline'
                }
            ]
        },
        {
            type: 'Form',
            title: '表单',
            list: [
                {
                    title: 'Input 输入框',
                    path: '/components/input',
                    img: 'input.png',
                    icon: 'ios-compose-outline'
                },
                {
                    title: 'Radio 单选框',
                    path: '/components/radio',
                    img: 'radio.png',
                    icon: 'ios-circle-filled'
                },
                {
                    title: 'Checkbox 多选框',
                    path: '/components/checkbox',
                    img: 'checkbox.png',
                    icon: 'android-checkbox-outline'
                },
                {
                    title: 'Switch 开关',
                    path: '/components/switch',
                    img: 'switch.png',
                    icon: 'toggle'
                },
                {
                    title: 'Select 选择器',
                    path: '/components/select',
                    img: 'select.png',
                    icon: 'ios-arrow-down'
                },

                {
                    title: 'Upload 上传',
                    path: '/components/upload',
                    img: 'upload.png',
                    icon: 'ios-cloud-upload-outline'
                },
                {
                    title: 'ColorPicker 颜色选择器',
                    path: '/components/color-picker',
                    img: 'color-picker.png',
                    icon: 'android-color-palette'
                },
                {
                    title: 'Form 表单',
                    path: '/components/form',
                    img: 'form.png',
                    icon: 'ios-list-outline'
                }
            ]
        },
        {
            type: 'View',
            title: '视图',
            list: [
                {
                    title: 'Card 卡片',
                    path: '/components/card',
                    img: 'card.png',
                    icon: 'ios-browsers-outline'
                },
                {
                    title: 'Message 全局提示',
                    path: '/components/message',
                    img: 'message.png',
                    icon: 'ios-information-outline'
                },
                {
                    title: 'Notice 通知提醒',
                    path: '/components/notice',
                    img: 'notice.png',
                    icon: 'ios-bell-outline'
                },
                {
                    title: 'Modal 对话框',
                    path: '/components/modal',
                    img: 'modal.png',
                    icon: 'ios-chatbubble-outline'
                },
                {
                    title: 'Progress 进度条',
                    path: '/components/progress',
                    img: 'progress.png',
                    icon: 'android-remove'
                },
                {
                    title: 'Collapse 折叠面板',
                    path: '/components/collapse',
                    img: 'collapse.png',
                    icon: 'ios-albums-outline'
                }
            ]
        },
        {
            type: 'Navigation',
            title: '导航',
            list: [
                {
                    title: 'Menu 导航菜单',
                    path: '/components/menu',
                    img: 'menu.png',
                    icon: 'navicon-round'
                },
                {
                    title: 'Tabs 标签页',
                    path: '/components/tabs',
                    img: 'tabs.png',
                    icon: 'social-windows-outline'
                },
                {
                    title: 'Dropdown 下拉菜单',
                    path: '/components/dropdown',
                    img: 'dropdown.png',
                    icon: 'arrow-down-b'
                },
                {
                    title: 'Page 分页',
                    path: '/components/page',
                    img: 'page.png',
                    icon: 'ios-book-outline'
                },
                {
                    title: 'LoadingBar 加载进度条',
                    path: '/components/loading-bar',
                    img: 'loading-bar.png',
                    icon: 'ios-minus-empty'
                }
            ]
        }, {
            type: 'Other',
            title: '其它',
            list: [
                {
                    title: 'Spin 加载中',
                    path: '/components/spin',
                    img: 'spin.png',
                    icon: 'load-d'
                }
            ]
        }
    ]
};

export default list;
