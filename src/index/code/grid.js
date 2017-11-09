let code = {};

code.base = `
<template>
    <i-row>
        <i-col span="12">col-12</i-col>
        <i-col span="12">col-12</i-col>
    </i-row>
    <br>
    <i-row>
        <i-col span="8">col-8</i-col>
        <i-col span="8">col-8</i-col>
        <i-col span="8">col-8</i-col>
    </i-row>
    <br>
    <i-row>
        <i-col span="6">col-6</i-col>
        <i-col span="6">col-6</i-col>
        <i-col span="6">col-6</i-col>
        <i-col span="6">col-6</i-col>
    </i-row>
</template>
<script>
    import {Col, Row} from 'san-iview';
    export default {
        components: {
            'i-row': Row,
            'i-col': Col
        }
    }
</script>
`;

code.gutter = `
<template>
    <i-row gutter="{{16}}">
        <i-col span="6">
            <div>col-6</div>
        </i-col>
        <i-col span="6">
            <div>col-6</div>
        </i-col>
        <i-col span="6">
            <div>col-6</div>
        </i-col>
        <i-col span="6">
            <div>col-6</div>
        </i-col>
    </i-row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.order = `
<template>
    <i-row type="flex">
        <i-col span="6" order="4">1 | order-4</i-col>
        <i-col span="6" order="3">2 | order-3</i-col>
        <i-col span="6" order="2">3 | order-2</i-col>
        <i-col span="6" order="1">4 | order-1</i-col>
    </i-row>
</template>
<script>
<script>
import {Col, Row} from 'san-iview';
export default {
    components: {
        'i-row': Row,
        'i-col': Col
    }
}
</script>
`;

code.push = `
<template>
    <i-row>
        <i-col span="18" push="6">col-18 | push-6</i-col>
        <i-col span="6" pull="18">col-6 | pull-18</i-col>
    </i-row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.offset = `
<template>
    <i-row>
        <i-col span="8">col-8</i-col>
        <i-col span="8" offset="8">col-8 | offset-8</i-col>
    </i-row>
    <br>
    <i-row>
        <i-col span="6" offset="8">col-6 | offset-8</i-col>
        <i-col span="6" offset="4">col-6 | offset-4</i-col>
    </i-row>
    <br>
    <i-row>
        <i-col span="12" offset="8">col-12 | offset-8</i-col>
    </i-row>
</template>
<script>
<script>
import {Col, Row} from 'san-iview';
export default {
    components: {
        'i-row': Row,
        'i-col': Col
    }
}
</script>
`;

code.justify = `
<template>
    <p>子元素向左排列</p>
    <i-row type="flex" justify="start" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </i-row>
    <p>子元素向右排列</p>
    <i-row type="flex" justify="end" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </i-row>
    <p>子元素居中排列</p>
    <i-row type="flex" justify="center" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </i-row>
    <p>子元素等宽排列</p>
    <i-row type="flex" justify="space-between" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </i-row>
    <p>子元素分散排列</p>
    <i-row type="flex" justify="space-around" class="code-row-bg">
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
        <i-col span="4">col-4</i-col>
    </i-row>
</template>
<script>
<script>
import {Col, Row} from 'san-iview';
export default {
    components: {
        'i-row': Row,
        'i-col': Col
    }
}
</script>
`;

code.align = `
<template>
    <p>顶部对齐</p>
    <i-row type="flex" justify="center" align="top" class="code-row-bg">
        <i-col span="4"><p style="height: 80px">col-4</p></i-col>
        <i-col span="4"><p style="height: 30px">col-4</p></i-col>
        <i-col span="4"><p style="height: 100px">col-4</p></i-col>
        <i-col span="4"><p style="height: 60px">col-4</p></i-col>
    </i-row>
    <p>底部对齐</p>
    <i-row type="flex" justify="center" align="bottom" class="code-row-bg">
        <i-col span="4"><p style="height: 80px">col-4</p></i-col>
        <i-col span="4"><p style="height: 30px">col-4</p></i-col>
        <i-col span="4"><p style="height: 100px">col-4</p></i-col>
        <i-col span="4"><p style="height: 60px">col-4</p></i-col>
    </i-row>
    <p>居中对齐</p>
    <i-row type="flex" justify="center" align="middle" class="code-row-bg">
        <i-col span="4"><p style="height: 80px">col-4</p></i-col>
        <i-col span="4"><p style="height: 30px">col-4</p></i-col>
        <i-col span="4"><p style="height: 100px">col-4</p></i-col>
        <i-col span="4"><p style="height: 60px">col-4</p></i-col>
    </i-row>
</template>
<script>
<script>
import {Col, Row} from 'san-iview';
export default {
    components: {
        'i-row': Row,
        'i-col': Col
    }
}
</script>
`;

code.reponsive = `
<template>
    <i-row>
        <i-col :xs="2" :sm="4" :md="6" :lg="8">i-col</i-col>
        <i-col :xs="20" :sm="16" :md="12" :lg="8">i-col</i-col>
        <i-col :xs="2" :sm="4" :md="6" :lg="8">i-col</i-col>
    </i-row>
</template>
<script>
    export default {
        
    }
</script>
`;

code.reponsive2 = `
<template>
    <i-row>
        <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">i-col</i-col>
        <i-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">i-col</i-col>
        <i-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">i-col</i-col>
    </i-row>
</template>
<script>
import {Col, Row} from 'san-iview';
export default {
    components: {
        'i-row': Row,
        'i-col': Col
    }
}
</script>
`;

export default code;