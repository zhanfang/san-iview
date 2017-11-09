let code = {};

code.base = `
<template>
    <i-input value="{=value=}" placeholder="请输入..." style="width: 300px"></i-input>
</template>
<script>
    import {Input} from 'san-iview';

    export default {
        components: {
            'i-input': Input
        },
        initData() {
            return {
                value: ''
            }
        }
    }
</script>
`;

code.size = `
<template>
    <i-input value="{=value1=}" size="large" placeholder="large size"></i-input>
    <br>
    <i-input value="{=value2=}" placeholder="default size"></i-input>
    <br>
    <i-input value="{=value3=}" size="small" placeholder="small size"></i-input>
</template>
<script>
    import {Input} from 'san-iview';

    export default {
        components: {
            'i-input': Input
        },
        initData() {
            return {
                value1: '',
                value2: '',
                value3: ''
            }
        }
    }
</script>
`;

code.icon = `
<template>
    <i-input value="{=value4=}" icon="ios-clock-outline" placeholder="请输入..." style="width: 200px"></i-input>
</template>
<script>
    import {Input} from 'san-iview';

    export default {
        components: {
            'i-input': Input
        },
        initData() {
            return {
                value4: ''
            }
        }
    }
</script>
`;

code.textarea = `
<template>
    <i-input value="{=value5=}" type="textarea" placeholder="请输入..."></i-input>
    <i-input value="{=value6=}" type="textarea" rows="{{4}}" placeholder="请输入..."></i-input>
</template>
<script>
    import {Input} from 'san-iview';

    export default {
        components: {
            'i-input': Input
        },
        initData() {
            return {
                value5: '',
                value6: ''
            }
        }
    }
</script>
`;

code.autosize = `
<template>
    <i-input value="{=value7=}" type="textarea" placeholder="请输入..."></i-input>
    <i-input value="{=value8=}" type="textarea" autosize="{{autosize}}" placeholder="请输入..."></i-input>
</template>
<script>
    import {Input} from 'san-iview';

    export default {
        components: {
            'i-input': Input
        },
        initData() {
            return {
                value7: '',
                value8: '',
                autosize: {
                    minRows: 2,
                    maxRows: 5
                }
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <i-input value="{=value9=}" disabled placeholder="请输入..."></i-input>
    <i-input value="{=value10=}" disabled type="textarea" placeholder="请输入..."></i-input>
</template>
<script>
    export default {
        data () {
            return {
                value9: '',
                value10: ''
            }
        }
    }
</script>
`;

code.addon = `
<template>
    <i-input value="{=value11=}" prepend append>
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
    </i-input>
</template>
<script>
    export default {
        initData () {
            return {
                value11: '',
            }
        }
    }
</script>
`;

export default code;