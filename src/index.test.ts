/* eslint-disable no-console */
import { novaHelloWorld } from './index';

it('should console.log "Hello World from Nova"', () => {
  console.log = jest.fn();
  novaHelloWorld();
  expect(console.log).toHaveBeenCalledWith('Hello World from Nova');
});
