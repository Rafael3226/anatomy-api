import dotenv from 'dotenv';

dotenv.config();

test('env.port exists', () => {
  const port = process.env.PORT;
  expect(port).not.toBeUndefined();
});
