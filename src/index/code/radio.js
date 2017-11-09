let code = {};

code.single = `
<template>
    <radio v-model="single">radio</radio>
</template>
<script>
    export default {
        data () {
            return {
                single: false
            }
        }
    }
</script>
`;

code.group = `
<template>
    <radio-group label="{=phone=}">
        <radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </radio>
        <radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </radio>
        <radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </radio>
    </radio-group>
    <radio-group label="{=animal=}">
        <radio label="金斑蝶"></radio>
        <radio label="爪哇犀牛"></radio>
        <radio label="印度黑羚"></radio>
    </radio-group>
</template>
<script>
    import {Radio, Icon} from 'san-iview';

    export default {
        components: {
            'radio': Radio,
            'radio-group': Radio.Group
        },
        initData () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
    };
</script>
`;

code.disabled = `
<template>
    <radio-group label="{=disabledGroup=}">
        <radio label="金斑蝶" disabled></radio>
        <radio label="爪哇犀牛"></radio>
        <radio label="印度黑羚"></radio>
    </radio-group>
</template>
<script>
    import {Radio} from 'san-iview';

    export default {
        components: {
            'radio': Radio,
            'radio-group': Radio.Group
        },
        initData () {
            return {
                disabledGroup: '爪哇犀牛'
            }
        }
    }
</script>
`;

code.vertical = `
<template>
    <radio-group label="{=vertical=}" vertical>
        <radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </radio>
        <radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </radio>
        <radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </radio>
    </radio-group>
</template>
<script>
    import {Radio} from 'san-iview';

    export default {
        components: {
            'radio': Radio,
            'radio-group': Radio.Group
        },
        initData () {
            return {
                vertical: 'apple'
            }
        }
    }
</script>
`;

code.button = `
<template>
    <radio-group label="{=button1=}" type="button">
        <radio label="北京"></radio>
        <radio label="上海"></radio>
        <radio label="深圳"></radio>
        <radio label="杭州"></radio>
    </radio-group>
    <radio-group label="button2" type="button">
        <radio label="北京"></radio>
        <radio label="上海" disabled></radio>
        <radio label="深圳"></radio>
        <radio label="杭州"></radio>
    </radio-group>
    <radio-group label="{=button3=}" type="button">
        <radio label="北京" disabled></radio>
        <radio label="上海" disabled></radio>
        <radio label="深圳" disabled></radio>
        <radio label="杭州" disabled></radio>
    </radio-group>
</template>
<script>
    import {Radio} from 'san-iview';

    export default {
        components: {
            'radio': Radio,
            'radio-group': Radio.Group
        },
        initData () {
            return {
                button1: '北京',
                button2: '北京',
                button3: '北京'
            }
        }
    }
</script>
`;

code.size = `
<template>
    <radio-group label="{=button4=}" type="button" size="large">
        <radio label="北京"></radio>
        <radio label="上海"></radio>
        <radio label="深圳"></radio>
        <radio label="杭州"></radio>
    </radio-group>
    <radio-group label="{=button5=}" type="button">
        <radio label="北京"></radio>
        <radio label="上海"></radio>
        <radio label="深圳"></radio>
        <radio label="杭州"></radio>
    </radio-group>
    <radio-group label="{=button6=}" type="button" size="small">
        <radio label="北京"></radio>
        <radio label="上海"></radio>
        <radio label="深圳"></radio>
        <radio label="杭州"></radio>
    </radio-group>
</template>
<script>
    import {Radio} from 'san-iview';

    export default {
        components: {
            'radio': Radio,
            'radio-group': Radio.Group
        },
        initData () {
            return {
                button4: '北京',
                button5: '北京',
                button6: '北京'
            }
        }
    }
</script>
`;

export default code;