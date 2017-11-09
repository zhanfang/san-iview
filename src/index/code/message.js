let code = {};

code.info = `
<template>
    <i-button type="primary" on-select="info">显示普通提醒</i-button>
</template>
<script>
    export default {
        methods: {
            info () {
                Message.info('这是一条普通的提醒');
            }
        }
    }
</script>
`;

code.type = `
<template>
    <i-button on-select="success">显示成功提示</i-button>
    <i-button on-select="warning">显示警告提示</i-button>
    <i-button on-select="error">显示错误提示</i-button>
</template>
<script>
    export default {
        methods: {
            success () {
                Message.success('这是一条成功的提示');
            },
            warning () {
                Message.warning('这是一条警告的提示');
            },
            error () {
                Message.error('对方不想说话，并且向你抛出了一个异常');
            }
        }
    }
</script>
`;

code.loading = `
<template>
    <i-button on-select="loading">显示加载中...</i-button>
</template>
<script>
    export default {
        methods: {
            loading () {
                const msg = Message.loading({
                    content: '正在加载中...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
        }
    }
</script>
`;

code.time = `
<template>
    <i-button on-select="time">显示一个10秒的提示</i-button>
</template>
<script>
    export default {
        methods: {
            Message.info({
                content: '我将在10秒后消失',
                duration: 10
            });
        }
    }
</script>
`;

code.config = `
Message.config({
    top: 50,
    duration: 3
});
`;

code.closable = `
<template>
    <i-button on-select="closable">显示一个可关闭的提示</i-button>
</template>
<script>
    export default {
        methods: {
            closable () {
                Message.info({
                    content: '可手动关闭的提示',
                    duration: 10,
                    closable: true,
                    onClose: () => {
                        console.log('close');
                    }
                });
            }
        }
    }
</script>
`;

export default code;