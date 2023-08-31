import { getPercents } from '../task-1.js';

describe('test for get an exact percent of a number', () => {
    it('should correctly count the result number according to the set persent', () => {
        expect(getPercents('не число', 1600)).toBe('Оба или один из параметров не число');
        expect(getPercents(25, 'не число')).toBe('Оба или один из параметров не число');
        expect(getPercents(13, 80000)).toBe(10400);
        expect(getPercents(-15, 100)).toBe('Задан некорректный процент');
    });
})
