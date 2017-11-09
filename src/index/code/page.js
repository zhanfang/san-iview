let code = {};

code.base = `
<template>
<div>
    <Page total="{{100}}"></Page>
</div>
</template>
<script>
    import {Page} from 'san-iview';

    export default {
        components: {
            'page': Page
        }    
    }
</script>
`;

code.sizer = `
<template>
    <Page :total="100" show-sizer></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.elevator = `
<template>
    <Page :total="100" show-elevator></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.total = `
<template>
    <Page :total="100" show-total></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

code.mini = `
<template>
<div>
    <Page total="{{40}}" size="small" current="{{2}}"></Page>
</div>
</template>
<script>
    import {Page} from 'san-iview';

    export default {
        components: {
            'page': Page
        }    
    }
</script>
`;

code.simple = `
<template>
    <Page :current="2" :total="50" simple></Page>
</template>
<script>
    export default {
        
    }
</script>
`;

export default code;