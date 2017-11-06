/**
 * @file spin func
 * @author zhanfang(zhanfang@baidu.com)
 */
import Spin from './spin.san';

Spin.newInstance = properties => {
    /* eslint-disable */
    const _props = properties || {};
    /* eslint-enable */
    const instance = new Spin({
        data: _props
    });

    instance.attach(document.body);

    return {
        show() {
            instance.data.set('visible', true);
        },
        remove(cb) {
            instance.data.set('visible', false);
            setTimeout(() => {
                instance.detach();
                cb();
            }, 500);
        },
        component: instance
    };
};

export default Spin;