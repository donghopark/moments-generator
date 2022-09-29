import moment from 'moment';

function moments(pivot: moment.Moment, option: moment.Moment): moment.Moment[]
function moments(pivot: moment.Moment, option: moment.unitOfTime.StartOf): moment.Moment[]
function moments(pivot: moment.Moment, option: number): moment.Moment[]

function moments(pivot: moment.Moment, option: any): moment.Moment[] {
    if (moment.isMoment(option)) {
        const start = pivot.clone().startOf('day')
        const end = option.clone().endOf('day')
        return Array.from(Array(end.diff(start, 'days') + 1).keys()).map(index => start.clone().add(index, 'days'))
    } else if (typeof option === 'number') {
        const start = pivot.clone().startOf('day')
        const end = start.clone().add(option, 'days')
        return Array.from(Array(end.diff(start, 'days')).keys()).map(index => start.clone().add(index, 'days'))
    } else {
        const start = pivot.clone().startOf(option)
        const end = pivot.clone().endOf(option)
        return Array.from(Array(end.diff(start, 'days') + 1).keys()).map(index => start.clone().add(index, 'days'))
    }
}

export default moments;