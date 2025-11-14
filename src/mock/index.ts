import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new AxiosMockAdapter(axios, { delayResponse: 250 });

mock.onPost('/api/auth', {
    username: 'test',
    password: '123',
}).reply(200, { success: true });
