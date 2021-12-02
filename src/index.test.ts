/* eslint-disable no-console */
import { novaHelloWorld } from './index';

test('console.log "Hello World from Nova"', () => {
  console.log = jest.fn();
  novaHelloWorld();
  expect(console.log).toHaveBeenCalledWith('Hello World from Nova');
});
