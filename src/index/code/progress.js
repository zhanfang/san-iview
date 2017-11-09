let code = {};

code.base = `
<template>
<div>
    <progress percent="25"></progress>
    <progress percent="45" status="active"></progress>
    <progress percent="65" status="wrong"></progress>
    <progress percent="100"></progress>
    <progress percent="25" hideInfo></progress>
</div>
</template>
<script>
    import {Progress} from 'san-iview';

    export default {
        components: {
            'progress': Progress
        }
    }
</script>
`;

code.vertical = `
<template>
<div style="height: 100px;">
    <progress vertical percent="25"></progress>
    <progress vertical percent="45" status="active"></progress>
    <progress vertical percent="65" status="wrong"></progress>
    <progress vertical percent="100" status="success"></progress>
    <progress vertical percent="25" hideInfo></progress>
</div>
</template>
<script>
    import {Progress} from 'san-iview';

    export default {
        components: {
            'progress': Progress
        }
    }
</script>
`;

code.percent = `
<template>
<div>
    <progress percent="{=percent=}"></progress>
    <button-group size="large">
        <i-button icon="ios-plus-empty" on-select="add"></i-button>
        <i-button icon="ios-minus-empty" on-select="minus"></i-button>
    </button-group>
</div>
</template>
<script>
    import {Icon, Button, Progress} from 'san-iview';

    export default {
        components: {
            'icon': Icon,
            'i-button': Button,
            'button-group': Button.Group,
            'progress': Progress
        },
        initData () {
            return {
                percent: 0
            }
        },
        add () {
            let percent = this.data.get('percent');
            if ( percent>= 100) {
                return false;
            }
            this.data.set('percent', percent + 10);
        },
        minus () {
            let percent = this.data.get('percent');
            if ( percent <= 0) {
                return false;
            }
            this.data.set('percent', percent - 10);
        }
    }
</script>
`;

code.custom = `
<template>
<div>
    <progress percent="25" stroke-width="5"></progress>
    <progress percent="100">
        <Icon type="checkmark-circled"></Icon>
        <span>成功</span>
    </progress>
</div>
</template>
<script>
    import {Icon Progress} from 'san-iview';

    export default {
        components: {
            'icon': Icon,
            'progress': Progress
        }
    }
</script>
`;

export default code;