/**
 * @file time-picker
 * @author zhanfang(fzhanxd@gmail.com)
 */
import {DataTypes} from 'san';
import Picker from '../picker';
import TimePanel from '../panel/time';
import TimeRangePanel from '../panel/time-range';

const getPanel = function (type) {
    if (type === 'timerange') {
        return TimeRangePanel;
    }
    return TimePanel;
};


export default class TimePicker extends Picker {
    static dataTypes = {
        type: DataTypes.oneOf(['time', 'timerange']),
        steps: DataTypes.array
    };

    inited() {
        if (!this.data.get('currentValue')) {
            const type = this.data.get('type');
            if (type === 'timerange') {
                this.currentValue = ['', ''];
            }
            else {
                this.currentValue = '';
            }
        }

        const PanelClass = getPanel(this.data.get('type'));
        this.Panel = new PanelClass();

        this.Panel.on('pick', time => {
            this.data.set('value', new Date(time));
        });
    }
}
