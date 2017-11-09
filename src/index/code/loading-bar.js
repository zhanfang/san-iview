let code = {};

code.router = `
// 部分代码省略
import iView from 'iview';
Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
`;

code.ajax = `
<script>
import {LoadingBar} from 'san-iview';

export default {
    methods: {
        getData () {
            LoadingBar.start();
            $.ajax({
                url: '/api/someurl',
                type: 'get',
                success: () => {
                    LoadingBar.finish();
                }
                error: () => {
                    LoadingBar.error();
                }
            });
        }
    }
}
</script>
`;

code.base = `
<template>
<div>
    <btn on-select="start">Start</btn>
    <btn on-select="finish">Finish</btn>
    <btn on-select="error">Error</btn>
</div>
</template>
<script>
    import {LoadingBar} from 'san-iview';

    export default {
        start () {
            this.$Loading.start();
        },
        finish () {
            this.$Loading.finish();
        },
        error () {
            this.$Loading.error();
        }
    }
</script>
`;

code.config = `
LoadingBar.config({
    color: '#5cb85c',
    failedColor: '#f0ad4e',
    height: 5
});
`;

export default code;