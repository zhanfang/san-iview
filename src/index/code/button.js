let code = {};

code.type = `
<template>
    <i-button>Default</i-button>
    <i-button type="primary">Primary</i-button>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="dashed">Dashed</i-button>
    <i-button type="text">Text</i-button>
    <br><br>
    <i-button type="info">信息按钮</i-button>
    <i-button type="success">成功按钮</i-button>
    <i-button type="warning">警告按钮</i-button>
    <i-button type="error">错误按钮</i-button>
</template>
<script>
import {Button} from 'san-iview';
export default {
    components: {
        'i-button': Button
    }
}
</script>
`;

code.icon = `
<template>
    <i-button type="primary" shape="circle" icon="ios-search"></i-button>
    <i-button type="primary" icon="ios-search">搜索</i-button>
    <i-button type="primary" shape="circle" icon="ios-search">搜索</i-button>
    <i-button type="primary" shape="circle">圆角按钮</i-button>
    <br><br>
    <i-button type="ghost" shape="circle" icon="ios-search"></i-button>
    <i-button type="ghost" icon="ios-search">搜索</i-button>
    <i-button type="ghost" shape="circle" icon="ios-search">搜索</i-button>
    <i-button type="ghost" shape="circle">圆角按钮</i-button>
</template>
<script>
import {Button} from 'san-iview';
export default {
    components: {
        'i-button': Button
    }
}
</script>
`;

code.size = `
<template>
    <i-button type="primary" size="large">Large</i-button>
    <i-button type="primary">Default</i-button>
    <i-button type="primary" size="small">Small</i-button>
    <br><br>
    <i-button type="primary" shape="circle" size="large">Large</i-button>
    <i-button type="primary" shape="circle">Default</i-button>
    <i-button type="primary" shape="circle" size="small">Small</i-button>
</template>
<script>
import {Button} from 'san-iview';
export default {
    components: {
        'i-button': Button
    }
}
</script>
`;

code.long = `
<template>
    <i-button type="success" long>确认提交</i-button>
    <br><br>
    <i-button type="error" long>确认删除</i-button>
</template>
<script>
import {Button} from 'san-iview';
export default {
    components: {
        'i-button': Button
    }
}
</script>
`;

code.disabled = `
<template>
    <i-button>Default</i-button>
    <i-button disabled>Default(Disabled)</i-button>
    <br>
    <i-button type="primary">Primary</i-button>
    <i-button type="primary" disabled>Primary(Disabled)</i-button>
    <br>
    <i-button type="ghost">Ghost</i-button>
    <i-button type="ghost" disabled>Ghost(Disabled)</i-button>
    <br>
    <i-button type="dashed">Dashed</i-button>
    <i-button type="dashed" disabled>Dashed(Disabled)</i-button>
    <br>
    <i-button type="text">Text</i-button>
    <i-button type="text" disabled>Text(Disabled)</i-button>
</template>
<script>
import {Button} from 'san-iview';
export default {
    components: {
        'i-button': Button
    }
}
</script>
`;

code.loading = `
<template>
    <i-button type="primary" loading>Loading...</i-button>
    <i-button type="primary" loading="{{loading}}" on-select="toLoading">
        <span s-if="!loading">Click me!</span>
        <span s-else>Loading...</span>
    </i-button>
    <i-button type="primary" loading="{{loading2}}" icon="checkmark-round" on-select="toLoading2">
        <span s-if="!loading2">Click me!</span>
        <span s-else>Loading...</span>
    </i-button>
</template>
<script>
    import {Button} from 'san-iview';
    export default {
        components: {
            'i-button': Button
        },
        initData () {
            return {
                loading: false,
                loading2: false
            }
        },
        toLoading () {
            this.data.set('loading', true);
        },
        toLoading2 () {
            this.data.set('loading2', true);
        }
    }
</script>
`;
code.group = `
<template>
    <h4>基本</h4>
    <br><br>
    <i-button-group>
        <i-button>取消</i-button>
        <i-button type="primary">确定</i-button>
    </i-button-group>
    <i-button-group>
        <i-button disabled>昨日</i-button>
        <i-button disabled>今日</i-button>
        <i-button disabled>明日</i-button>
    </i-button-group>
    <i-button-group>
        <i-button type="primary">L</i-button>
        <i-button>M</i-button>
        <i-button type="ghost">M</i-button>
        <i-button type="dashed">R</i-button>
    </i-button-group>
    <br><br>
    <h4>配合图标</h4>
    <br><br>
    <i-button-group>
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </i-button-group>
    <i-button-group>
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </i-button-group>
    <i-button-group>
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </i-button-group>
    <br><br>
    <h4>圆角</h4>
    <br><br>
    <i-button-group shape="circle">
        <i-button type="primary">
            <Icon type="chevron-left"></Icon>
            前进
        </i-button>
        <i-button type="primary">
            后退
            <Icon type="chevron-right"></Icon>
        </i-button>
    </i-button-group>
    <i-button-group shape="circle">
        <i-button type="primary" icon="ios-skipbackward"></i-button>
        <i-button type="primary" icon="ios-skipforward"></i-button>
    </i-button-group>
    <i-button-group shape="circle">
        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>
        <i-button type="ghost" icon="ios-sunny-outline"></i-button>
        <i-button type="ghost" icon="ios-crop"></i-button>
        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>
    </i-button-group>
    <br><br>
    <h4>尺寸</h4>
    <br><br>
    <i-button-group size="large">
        <i-button type="ghost">Large</i-button>
        <i-button type="ghost">Large</i-button>
    </i-button-group>
    <i-button-group>
        <i-button type="ghost">Default</i-button>
        <i-button type="ghost">Default</i-button>
    </i-button-group>
    <i-button-group size="small">
        <i-button type="ghost">Small</i-button>
        <i-button type="ghost">Small</i-button>
    </i-button-group>
    <br><br>
    <i-button-group size="large" shape="circle">
        <i-button type="ghost">Large</i-button>
        <i-button type="ghost">Large</i-button>
    </i-button-group>
    <i-button-group shape="circle">
        <i-button type="ghost">Default</i-button>
        <i-button type="ghost">Default</i-button>
    </i-button-group>
    <i-button-group size="small" shape="circle">
        <i-button type="ghost">Small</i-button>
        <i-button type="ghost">Small</i-button>
    </i-button-group>
</template>
<script>
    export default {
        
    }
</script>
`;

code.vertical = `
<template>
    <i-button-group vertical>
        <i-button type="ghost" icon="social-facebook"></i-button>
        <i-button type="ghost" icon="social-twitter"></i-button>
        <i-button type="ghost" icon="social-googleplus"></i-button>
        <i-button type="ghost" icon="social-tumblr"></i-button>
    </i-button-group>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;