import momentsGenerator from "../lib/index"
import moment from "moment"

test('Number', () => {
    expect(momentsGenerator(moment(), 3).length).toBe(3)
})

test('Moment', () => {
    expect(momentsGenerator(moment(), moment().add(1, 'day')).length).toBe(2)
})

test('UnitOfTime', () => {
    expect(momentsGenerator(moment(), 'month').length).toBeGreaterThanOrEqual(29)
})