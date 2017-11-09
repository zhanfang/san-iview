let code = {};

code.base = `
<template>
<div>
    <i-row>
        <i-col span="12">
            有默认值
            <color-picker value="{=color1=}"/>
        </i-col>
        <i-col span="12">
            无默认值
            <color-picker value="{=color2=}" width="120"/>
        </i-col>
    </i-row>
</div>
</template>
<script>
    import {Row, Col, ColorPicker} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'color-picker': ColorPicker
        },
        iniData () {
            return {
                color1: '#19be6b',
                color2: ''
            }
        }
    }
</script>
`;

code.alpha = `
<template>
    <color-picker v-model="color3" alpha />
</template>
<script>
    export default {
        data () {
            return {
                color3: 'rgba(25, 190,107, .5)'
            }
        }
    }
</script>
`;

code.colors = `
<template>
<div>
    <i-row>
        <i-col span="12">
            <color-picker value="{=color4=}" recommend />
        </i-col>
        <i-col span="12">
            <color-picker value="{=color5=}" rColors="{{colors}}" />
        </i-col>
    </i-row>
</div>
</template>
<script>
    import {Row, Col, ColorPicker} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'color-picker': ColorPicker
        },
        iniData () {
            return {
                color4: '#19be6b',
                color5: '#19be6b',
                colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9']
            }
        }
    }
</script>
`;

code.size = `
<template>
<div>
    <i-row>
        <i-col span="8">
            <color-picker v-model="color6" size="large" />
        </i-col>
        <i-col span="8">
            <color-picker v-model="color6" />
        </i-col>
        <i-col span="8">
            <color-picker v-model="color6" size="small" />
        </i-col>
    </i-row>
</div>
</template>
<script>
    import {Row, Col, ColorPicker} from 'san-iview';

    export default {
        components: {
            'i-row': Row,
            'i-col': Col,
            'color-picker': ColorPicker
        },
        iniData () {
            return {
                color6: '#19be6b'
            }
        }
    }
</script>
`;

export default code;