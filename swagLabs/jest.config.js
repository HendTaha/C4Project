module.exports = {
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    testMatch: [
        //'**/test/**/*.spec.(js|ts)',
        './test/features/**/*.feature',
    ],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    collectCoverage: true,
    coverageDirectory: './coverage',
    coverageThreshold: {
        global: {
            branches: 99,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    collectCoverageFrom: [
        'test/step-definations/*.js',
        'src/**/*.ts',
        '!**/node_modules/**',
    ],
    setupFilesAfterEnv: ['./test/setup.js'],
    roots: [
        'test/',
    ],
    moduleDirectories: [
        'node_modules',
        '.',
    ],
};
