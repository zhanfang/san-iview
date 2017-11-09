let code = {};

code.base = `
<template>
    <i-button type="primary" @click="modal1 = true">显示对话框</i-button>
    <modal
        value="{{modal1}}"
        width="{{360}}"
        title="普通的Modal对话框标题"
        on-ok="ok"
        on-close="closeModal1">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </modal>
</template>
<script>
    import {Button, Modal, Message} from 'san-iview';
    export default {
        components: {
            'modal': Modal
            'i-button': Button
        },
        initData () {
            return {
                modal1: false
            }
        },
        ok () {
            Message.info('点击了确定');
        },
        closeModal1 () {
            this.data.set('modal1', true);
            Message.info('点击了取消');
        }
    }
</script>
`;

code.custom = `
<template>
    <i-button on-select="handleModal2">自定义页头和页脚</i-button>
    <modal 
        s-if="modal2"
        value="{{modal2}}" 
        on-close="closeModal2"
        >
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>此任务删除后，下游 10 个任务将无法执行。</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer">
            <i-button type="error" size="large" long loading="{=modal_loading=}" on-select="del">删除</i-button>
        </div>
    </modal>
    <i-button on-select="handleModal3">不带标题栏</i-button>
    <modal 
        s-if="modal3"
        value="{=modal3=}"
        showHead="{{false}}"
        on-close="closeModal3"
        >
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </modal>
    <i-button on-select="handleModal5">设置宽度</i-button>
    <modal
        s-if="modal4"
        value="{{modal4}}"
        title="自定义宽度"
        width="{{300}}"
        on-close="closeModal5">
        <p>自定义宽度，单位 px，默认 520px。</p>
        <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
    </modal>
</template>
<script>
    import {Button, Modal, Message} from 'san-iview';
    export default {
        components: {
            'modal': Modal
            'i-button': Button
        },
        initData () {
            return {
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false
            }
        },
        del () {
            this.modal_loading = true;
            setTimeout(() => {
                this.modal_loading = false;
                this.modal2 = false;
                this.$Message.success('删除成功');
            }, 2000);
        },
        handleModal2() {
            this.data.set('modal2', true);
        },
        closeModal2() {
            this.data.set('modal2', false);
            Message.info('点击了取消');
        },
        handleModal3() {
            this.data.set('modal3', true);
        },
        closeModal3() {
            this.data.set('modal3', false);
            Message.info('点击了取消');
        },
        handleModal4() {
            this.data.set('modal4', true);
        },
        closeModal4() {
            this.data.set('modal4', false);
            Message.info('点击了取消');
        },
    }
</script>
`;

code.async = `
<template>
    <i-button type="primary" @click="modal6 = true">显示对话框</i-button>
    <modal
        v-model="modal6"
        title="对话框标题"
        :loading="loading"
        @on-ok="asyncOK">
        <p>点击确定后，对话框将在 2秒 后关闭。</p>
    </modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>
`;

code.close = `
<template>
<div>
    <i-button on-select="handleModal8">禁用遮罩层关闭</i-button>
    <Modal
        title="对话框标题"
        value="{{modal8}}"
        showFooter="{{false}}"
        maskCloseable="{{false}}"
        on-close="closeModal8">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</div>
</template>
<script>
    import {Button, Modal, Message} from 'san-iview';
    export default {
        components: {
            'modal': Modal
            'i-button': Button
        },
        initData () {
            return {
                modal8: false,
            }
        },
        handleModal8() {
            this.data.set('modal8', true);
        },
        closeModal8() {
            this.data.set('modal8', false);
        },
    }
</script>
`;

code.position = `
<template>
<div>
    <i-button @click="modal9 = true">距离顶部 20px</i-button>
    <modal
        title="对话框标题"
        v-model="modal9"
        :styles="{top: '20px'}">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </modal>
    <i-button @click="modal10 = true">垂直居中</i-button>
    <modal
        title="对话框标题"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </modal>
</div>
</template>
<script>
    import {Button, Modal, Message} from 'san-iview';
    export default {
        components: {
            'modal': Modal
            'i-button': Button
        },
        initData() {
            return {
                modal9: false
            }
        },
        handleModal9() {
            this.data.set('modal9', true);
        },
        closeModal9() {
            this.data.set('modal9', false);
        }
    }
</script>
`;

code.baseInstance = `
<template>
    <i-button @click="instance('info')">消息</i-button>
    <i-button @click="instance('success')">成功</i-button>
    <i-button @click="instance('warning')">警告</i-button>
    <i-button @click="instance('error')">错误</i-button>
</template>
<script>
    export default {
        methods: {
            instance (type) {
                const title = '对话框的标题';
                const content = '<p>一些对话框内容</p><p>一些对话框内容</p>';
                switch (type) {
                    case 'info':
                        this.$modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    }
</script>
`;

code.confirm = `
<template>
    <i-button @click="confirm">标准</i-button>
    <i-button @click="custom">自定义按钮文字</i-button>
    <i-button @click="async">异步关闭</i-button>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    onOk: () => {
                        this.$Message.info('点击了确定');
                    },
                    onCancel: () => {
                        this.$Message.info('点击了取消');
                    }
                });
            },
            custom () {
                this.$modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>一些对话框内容</p><p>一些对话框内容</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$modal.confirm({
                    title: '确认对话框标题',
                    content: '<p>对话框将在 2秒 后关闭</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$modal.remove();
                            this.$Message.info('异步关闭了对话框');
                        }, 2000);
                    }
                });
            }
        }
    }
</script>
`;

code.render = `
<template>
    <p>
        姓名：{{ value }}
    </p>
    <p>
        <i-button @click="render">自定义内容</i-button>
    </p>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }            
        },
        methods: {
            render () {
                this.$modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>
`;

export default code;