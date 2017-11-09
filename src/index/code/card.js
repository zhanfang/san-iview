let code = {};

code.base = `
<template>
<div>
    <card style="width:350px">
        <p slot="title">
            <icon type="ios-film-outline"></icon>
            经典电影
        </p>
        <a href="#" slot="extra" on-click="handleChange($event)">
            <icon type="ios-loop-strong"></icon>
            换一换
        </a>
        <ul>
            <li s-for="item in randomMovieList">
                <a href="{{item.url}}" target="_blank">{{ item.name }}</a>
                <span>
                    <icon type="ios-star" s-for="n in 4"></icon>
                    <icon type="ios-star" s-if="item.rate >= 9.5"></icon>
                    <icon type="ios-star-half" s-else></icon>
                    {{ item.rate }}
                </span>
            </li>
        </ul>
    </card>
</div>
</template>
<script>
    import {Icon, Card} from 'san-iview';

    export default {
        components: {
            'icon': Icon,
            'card': Card
        },
        initData () {
            return {
                movieList: [
                    {
                        name: '肖申克的救赎',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: '这个杀手不太冷',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: '霸王别姬',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: '阿甘正传',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: '美丽人生',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: '千与千寻',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: '辛德勒的名单',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: '海上钢琴师',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: '机器人总动员',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: '盗梦空间',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: []
            }
        },
        changeLimit () {
            function getArrayItems(arr, num) {
                const temp_array = [];
                for (let index in arr) {
                    temp_array.push(arr[index]);
                }
                const return_array = [];
                for (let i = 0; i<num; i++) {
                    if (temp_array.length>0) {
                        const arrIndex = Math.floor(Math.random()*temp_array.length);
                        return_array[i] = temp_array[arrIndex];
                        temp_array.splice(arrIndex, 1);
                    } else {
                        break;
                    }
                }
                return return_array;
            }
            const randomMovieList = getArrayItems(this.data.get('movieList'), 5);
            this.data.set('randomMovieList', randomMovieList);
        },
        attached() {
            this.changeLimit();
        }
    }
</script>
`;

code.bordered = `
<template>
    <div style="background:#eee;padding: 20px">
        <card bordered="{{false}}">
            <p slot="title">无边框标题</p>
            <p>无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充无边框内容填充。</p>
        </card>
    </div>
</template>
<script>
    import {Icon, Card} from 'san-iview';

    export default {
        components: {
            'icon': Icon,
            'card': Card
        }
    }
</script>
`;

code.disHover = `
<template>
    <i-row>
        <i-col span="11">
            <card>
                <p slot="title">标准卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </card>
        </i-col>
        <i-col span="11" offset="2">
            <card dis-hover>
                <p slot="title">禁用悬停阴影的卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </card>
        </i-col>
    </i-row>
</template>
<script>
    import {Icon, Card, Row, Col} from 'san-iview';

    export default {
        components: {
            'icon': Icon,
            'card': Card,
            'i-row': Row,
            'i-col': Col
        }
    }
</script>
`;

code.shadow = `
<template>
    <i-row style="background:#eee;padding:20px">
        <i-col span="11">
            <card bordered="{{false}}">
                <p slot="title">无边框卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </card>
        </i-col>
        <i-col span="11" offset="2">
            <card shadow>
                <p slot="title">使用阴影效果的卡片</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
                <p>卡片内容</p>
            </card>
        </i-col>
    </i-row>
</template>
<script>
    import {Icon, Card} from 'san-iview';

    export default {
        components: {
            'icon': Icon,
            'card': Card
        }
    }
</script>
`;

code.simple = `
<template>
    <card style="width:320px">
        <div style="text-align:center">
            <img src="../../images/logo.png">
            <h3>一套基于 Vue.js 的高质量UI组件库</h3>
        </div>
    </card>
</template>
<script>
    import {Icon, Card} from 'san-iview';

    export default {
        components: {
            'icon': Icon,
            'card': Card
        }
    }
</script>
`;

export default code;