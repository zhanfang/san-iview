/**
 * @file home
 * @author: zhanfang (fzhanxd@gmail.com)
 */

/* eslint-disable */
import san from 'san';
/* eslint-enable */
import {router} from 'san-router';
import routes from './config/routes.js';

// style
import './main.styl';
import 'san-iview/dist/styles/san-iview.css';

import App from './App';

const app = new App();
app.attach(document.getElementById('app'));

routes.forEach(function (route) {
    router.add(route);
});

router.start();
