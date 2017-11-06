/**
 * @file Notification
 * @author zhanfang(fzhanxd@gmail.com)
 */
import Notification from './notification';

Notification.newInstance = properties => {
    const props = properties || {};

    const notification = new Notification({
        data: props
    });
    notification.attach(document.body);

    return {
        notice(noticeProps) {
            notification.add(noticeProps);
        },
        remove(name) {
            notification.close(name);
        },
        component: notification,
        destroy(element) {
            notification.closeAll();
            setTimeout(function () {
                notification.detach();
            }, 500);
        }
    };
};

export default Notification;
