import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock({
    url: '/api/auth',
    body: {},
    delay: 250,
    validator: {
        body: {
            username: 'test',
            password: '123',
        },
    },
    method: ['POST'],
});
