/**
 * @file home
 * @author: zhanfang (fzhanxd@gmail.com)
 */

/* eslint-disable */
import san from 'san';
/* eslint-enable */
import '../src/styles/index.styl';

import {router} from 'san-router';
import routes from './routes';

import App from './App';

const app = new App();
app.attach(document.getElementById('app'));

routes.forEach(item => {
    router.add(item);
});
router.start();

