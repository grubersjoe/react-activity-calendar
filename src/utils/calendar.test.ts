import { generateTestData, getMonthLabels, groupByWeeks } from './calendar';

describe('getMonthLabels', () => {
  test('returns empty list for empty input', () => {
    expect(getMonthLabels([])).toStrictEqual([]);
  });

  test('throws if a week has no activity defined', () => {
    const weeks = [Array(7).fill(undefined)];

    expect(() => expect(getMonthLabels(weeks)).toStrictEqual([])).toThrow();
  });

  test('returns correct month labels', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 2, 12),
          end: new Date(2023, 5, 1),
        },
      }),
    );

    expect(getMonthLabels(weeks)).toStrictEqual([
      { label: 'Mar', weekIndex: 0 },
      { label: 'Apr', weekIndex: 3 },
      { label: 'May', weekIndex: 8 },
    ]);
  });

  test('skips label for first month if it does not contain at least three weeks of data', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 9, 22),
          end: new Date(2023, 11, 31),
        },
      }),
    );

    expect(getMonthLabels(weeks)).toStrictEqual([
      { label: 'Nov', weekIndex: 2 },
      { label: 'Dec', weekIndex: 6 },
    ]);
  });

  test('skips label for last month if it does not contain at least three weeks of data', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 3, 1),
          end: new Date(2023, 4, 20),
        },
      }),
    );

    expect(getMonthLabels(weeks)).toStrictEqual([{ label: 'Apr', weekIndex: 0 }]);
  });

  test('skips first and last label if both months do not contain at least three weeks of data', () => {
    const weeks = groupByWeeks(
      generateTestData({
        interval: {
          start: new Date(2023, 1, 22),
          end: new Date(2023, 4, 10),
        },
      }),
    );

    expect(getMonthLabels(weeks)).toStrictEqual([
      { label: 'Mar', weekIndex: 2 },
      { label: 'Apr', weekIndex: 6 },
    ]);
  });
});
