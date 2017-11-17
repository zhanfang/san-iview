/**
 * @file LoadingBar Ins
 * @author zhanfang(fzhanxd@gmail.com)
 */
import LoadingBar from './loading-bar.san';

LoadingBar.newInstance = properties => {
    /* eslint-disable */
    const _props = properties || {};
    /* eslint-enable */
    const instance = new LoadingBar({
        data: _props
    });

    instance.attach(document.body);

    return {
        update(options) {
            if ('percent' in options) {
                instance.data.set('percent', options.percent);
            }

            if (options.status) {
                instance.data.set('status', options.status);
            }

            if ('show' in options) {
                instance.data.set('show', options.show);
            }

        },
        component: instance,
        destroy() {
            instance.detach();
        }
    };
};

export default LoadingBar;
