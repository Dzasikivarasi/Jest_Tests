export function getPercents(percent, number) {
    if (typeof percent !== 'number' || typeof number !== 'number') {
        return 'Оба или один из параметров не число';
    }

    if (percent <= 0) {
        return 'Задан некорректный процент';
    }

    return number * (percent / 100);
}
