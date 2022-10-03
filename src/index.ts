import * as moment from 'moment';

function momentsGenerator(
  pivot: moment.Moment,
  option: moment.Moment | moment.unitOfTime.StartOf | number,
  unit?: moment.unitOfTime.DurationAs,
): moment.Moment[];

function momentsGenerator(pivot: moment.Moment, option: any, unit: moment.unitOfTime.DurationAs = 'day'): moment.Moment[] {
  if (moment.isMoment(option)) {
    const start = pivot.clone().startOf(unit);
    const end = option.clone().endOf(unit);
    return Array.from(Array(end.diff(start, unit) + 1).keys()).map((index) => start.clone().add(index, unit));
  } else if (typeof option === 'number') {
    const start = pivot.clone().startOf(unit);
    const end = start.clone().add(option, unit);
    return Array.from(Array(end.diff(start, unit)).keys()).map((index) => start.clone().add(index, unit));
  } else {
    const start = pivot.clone().startOf(option);
    const end = pivot.clone().endOf(option);
    return Array.from(Array(end.diff(start, unit) + 1).keys()).map((index) => start.clone().add(index, unit));
  }
}
export default momentsGenerator;
