let code = {};

code.single = `
<template>
    <checkbox v-model="single">checkbox</checkbox>
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
    <checkbox-group v-model="social">
        <checkbox label="twitter">
            <icon type="social-twitter"></icon>
            <span>Twitter</span>
        </checkbox>
        <checkbox label="facebook">
            <icon type="social-facebook"></icon>
            <span>Facebook</span>
        </checkbox>
        <checkbox label="github">
            <icon type="social-github"></icon>
            <span>Github</span>
        </checkbox>
        <checkbox label="snapchat">
            <icon type="social-snapchat"></icon>
            <span>Snapchat</span>
        </checkbox>
    </checkbox-group>
    <checkbox-group v-model="fruit">
        <checkbox label="香蕉"></checkbox>
        <checkbox label="苹果"></checkbox>
        <checkbox label="西瓜"></checkbox>
    </checkbox-group>
</template>
<script>
    import {Checkbox, Icon} from 'san-iview';

    export default {
        components: {
            'icon': Icon
            'checkbox': Checkbox,
            'checkbox-group': Checkbox.Group
        },
        initData() {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果']
            }
        }
    }
</script>
`;

code.disabled = `
<template>
    <checkbox v-model="disabledSingle" disabled>checkbox</checkbox>
    <checkbox-group v-model="disabledGroup">
        <checkbox label="香蕉" disabled></checkbox>
        <checkbox label="苹果" disabled></checkbox>
        <checkbox label="西瓜"></checkbox>
    </checkbox-group>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>
`;

code.communication = `
<template>
    <checkbox v-model="checked" :disabled="disabled">
        <span v-if="checked">选中</span>
        <span v-else>取消</span>
         - 
        <span v-if="!disabled">可用</span>
        <span v-else>不可用</span>
    </checkbox>
    <br>
    <Button type="primary" @click="checked = !checked">
        <span v-if="!checked">选中</span>
        <span v-else>取消</span>
    </Button>
    <Button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">可用</span>
        <span v-else>不可用</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                checked: true,
                disabled: false
            }
        }
    }
</script>
`;

code.indeterminate = `
<template>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</checkbox>
    </div>
    <checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <checkbox label="香蕉"></checkbox>
        <checkbox label="苹果"></checkbox>
        <checkbox label="西瓜"></checkbox>
    </checkbox-group>
</template>
<script>
    export default {
        data () {
            return {
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>
`;

export default code;