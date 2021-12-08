import { novaHelloWorld } from '.';

const sum = (a: number, b: number) => a + b;

it('sums 5 and 2 returns 7', () => {
  const a: number = 5;
  expect(sum(5, 2)).toBe(7);
});

describe('example test suite', () => {
  it('should console.log "Hello World from Nova"', () => {
    console.log = jest.fn(); // eslint-disable-line no-console
    novaHelloWorld();
    expect(console.log).toHaveBeenCalledWith('Hello World from Nova'); // eslint-disable-line no-console
  });
});
