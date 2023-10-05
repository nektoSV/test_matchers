import sortDescending from '../app';

test.each([
  [
    '100, 80, 10',
    [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
    ],
    [
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]
  ],
  [
    '50, 10, 8',
    [
      {name: 'мечник', health: 10},
      {name: 'маг', health: 50},
      {name: 'лучник', health: 8},
    ],
    [
      {name: 'маг', health: 50},
      {name: 'мечник', health: 10},
      {name: 'лучник', health: 8},
    ]
  ],
])
('testing sort function with %s', (_, arr, expected) => {
  const result = sortDescending(arr);
  expect(result).toEqual(expected);
});