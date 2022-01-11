import { example } from '.';

describe('example test suite', () => {
  it('should console.log "Hello World from Nova"', () => {
    console.log = jest.fn();
    example();
    expect(console.log).toHaveBeenCalledWith('Hello World from Nova');
  });
});
