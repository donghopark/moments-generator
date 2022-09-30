import moments from "../index"
import moment from 'moment'

console.log(moments(moment(), 'month'))
console.log(moments(moment(), 3))
console.log(moments(moment(), moment().add(5, 'day')))