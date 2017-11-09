let code = {};

code.base = `
<template>
    <switch value="{=switch1=}" on-switch="change($event)"></switch>
</template>
<script>
    import {Switch, Message} from 'san-iview';

    export default {
        components: {
            'switch': Switch
        },
        initData () {
            return {
                switch1: false
            }  
        },
        change (status) {
            Message.info('开关状态：' + status);
        }
    }
</script>
`;

code.size = `
<template>
    <switch size="large"></switch>
    <switch></switch>
    <switch size="small"></switch>
</template>
<script>
    import {Switch} from 'san-iview';

    export default {
        components: {
            'switch': Switch
        }
    }
</script>
`;

code.custom = `
<template>
    <switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </switch>
    <switch>
        <icon type="android-done" slot="open"></icon>
        <icon type="android-close" slot="close"></icon>
    </switch>
    <br><br>
    <switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </switch>
    <switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </switch>
</template>
<script>
    import {Switch, Icon} from 'san-iview';

    export default {
        components: {
            'switch': Switch,
            'icon': Icon
        }
    };
</script>
`;

code.disabled = `
<template>
    <switch disabled></switch>
</template>
<script>
    import {Switch} from 'san-iview';

    export default {
        components: {
            'switch': Switch
        },
        initData () {
            return {
                disabled: true
            }
        }
    };
</script>
`;

export default code;
