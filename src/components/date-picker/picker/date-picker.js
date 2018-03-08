/**
 * @file data-picker
 * @author zhanfang(fzhanxd@gmail.com)
 */
import {DataTypes} from 'san';
import Picker from '../picker';
import DatePanel from '../panel/date';
import DateRangePanel from '../panel/date-range';
import {oneOf} from '../../../utils/assist';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    return DatePanel;
};


export default class DatePicker extends Picker {
    static dataTypes = {
        type: DataTypes.oneOf(['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange'])
    };

    inited() {
        if (!this.data.get('currentValue')) {
            const type = this.data.get('type');
            if (type === 'daterange' || type === 'datetimerange') {
                this.currentValue = ['', ''];
            }
            else {
                this.currentValue = '';
            }
        }

        const PanelClass = getPanel(this.data.get('type'));
        this.Panel = new PanelClass({
            data: {
                disabledDate: this.data.get('options.disabledDate')
            }
        });
        const value = this.data.get('type');
        const typeMap = {
            year: 'year',
            month: 'month',
            date: 'day'
        };
        const validType = oneOf(value, Object.keys(typeMap));
        if (validType) {
            this.Panel.data.set('selectionMode', typeMap[value]);
        }

        this.Panel.on('pick', (date, visible = false) => {
            this.data.set('value', date);
            this.data.set('visible', visible);
        });
    }
}
