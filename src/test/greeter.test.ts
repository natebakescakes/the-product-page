import greeter from '../greeter';

test('should greet a user', (): void => {
  const user = { name: 'TypeScript' };

  expect(greeter(user)).toBe('Hello TypeScript!');
});
