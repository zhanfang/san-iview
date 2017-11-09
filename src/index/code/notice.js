let code = {};

code.open = `
<template>
    <i-btn type="primary" on-select="open(false)">打开提醒</i-btn>
    <i-btn on-select="open(true)">打开提醒（仅标题）</i-btn>
</template>
<script>
    import {Notice, Button} from 'san-iview';

    export default {
        components: {
            'i-btn': button
        },
        open (nodesc) {
            Notice.open({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        }
    }
</script>
`;

code.type = `
<template>
    <p>带描述信息</p>
    <i-btn on-select="info(false)">消息</i-btn>
    <i-btn on-select="success(false)">成功</i-btn>
    <i-btn on-select="warning(false)">警告</i-btn>
    <i-btn on-select="error(false)">错误</i-btn>
    <p>仅标题</p>
    <i-btn on-select="info(true)">消息</i-btn>
    <i-btn on-select="success(true)">成功</i-btn>
    <i-btn on-select="warning(true)">警告</i-btn>
    <i-btn on-select="error(true)">错误</i-btn>
</template>
<script>
    import {Notice, Button} from 'san-iview';

    export default {
        components: {
            'i-btn': button
        },
        info (nodesc) {
            Notice.info({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        },
        success (nodesc) {
            Notice.success({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        },
        warning (nodesc) {
            Notice.warning({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        },
        error (nodesc) {
            Notice.error({
                title: '这是通知标题',
                desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
            });
        }
    }
</script>
`;

code.time = `
<template>
    <i-btn type="primary" on-select="time">打开提醒</i-btn>
</template>
<script>
    import {Notice, Button} from 'san-iview';

    export default {
        components: {
            'i-btn': button
        },
        time () {
            Notice.open({
                title: '这是通知标题',
                desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
                duration: 0
            });
        }
    }
</script>
`;

code.config = `
Notice.config({
    top: 50,
    duration: 3
});
`;

export default code;