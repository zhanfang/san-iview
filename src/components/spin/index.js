/**
 * @file Spin
 * @author zhanfang(fzhanxd@gmail.com)
 */
import Spin from './spin.js';

let spinInstance;

function getSpinInstance() {
    spinInstance = spinInstance || Spin.newInstance({
        fullscreen: true,
        fix: true
    });

    return spinInstance;
}

Spin.show = function(props = {}) {
    const instance = getSpinInstance();
    instance.show();
};
Spin.hide = function() {
    if (!spinInstance) {
        return false;
    }
    const instance = getSpinInstance();
    instance.remove(() => {
        spinInstance = null;
    });
}

export default Spin;
