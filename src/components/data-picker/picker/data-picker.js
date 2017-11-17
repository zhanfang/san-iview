import Picker from '../picker';
import DatePanel from '../panel/date';
import DateRangePanel from '../panel/date-range';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    return DatePanel;
};


export default {
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
            },
            default: 'date'
        },
        value: {}
    },
    watch: {
        type(value){
            const typeMap = {
                year: 'year',
                month: 'month',
                date: 'day'
            };
            const validType = oneOf(value, Object.keys(typeMap));
            if (validType) this.Panel.selectionMode = typeMap[value];
        }
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'daterange' || this.type === 'datetimerange') {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }

        const panel = getPanel(this.type);
        this.Panel = new Vue(panel);
    }
};
