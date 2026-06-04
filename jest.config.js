module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(png|svg|jpg|jpeg|gif)$': '<rootDir>/__mocks__/fileMock.js',
  },
};