# san-iview 
一套桌面端 `San Ui` 组件库。基于 [iView](https://github.com/iview/iview)样式进行开发

## 使用指南
### CDN引入
```html
<!-- import san -->
<script src="//unpkg.com/san@latest"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/san-iview/dist/styles/san-iview.css">
<!-- import san-iview -->
<script src="//unpkg.com/san-iview/dist/san-iview.min.js"></script>
```

示例
```javascript
const {Button, Message} = window['san-iview'];

const Demo = san.defineComponent({
    template: `
        <div class="parent">
            <btn type="primary" on-select="change">
                add child
            </btn>
        </div>`,
    components: {
      btn: Button
    },
    change() {
        Message.success('hello world');
    }
});

const demo = new Demo();

demo.attach(document.body);
```

### NPM安装
1. 通过`npm`安装
```bash
npm install san-iview --save
```
2. 全局引入样式
```javascript
// main.js
import san from 'san';
import 'san-iview/dist/styles/san-iview.css';

import App from './App';

const app = new App();
app.attach(document.getElementById('app'));
```
3. 使用时引入所需组件
```javascript
// App.san
<template>
<div>
    <icon type="ionic"></icon>
</div>
</template>
<script>
import {Icon} from 'san-iview';

export default {
    components: {
        'icon': Icon
    }
};
</script>
```

## Links
- [iView](https://github.com/iview/iview)
- [Webpack](https://github.com/webpack/webpack)
- [ionicons](https://github.com/driftyco/ionicons)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, san-view
