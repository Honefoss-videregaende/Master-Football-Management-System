const request = require('supertest');
const app = require('../server.test'); // Adjust the path as needed

describe('Auth Tests', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/auth/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123',
                roleId: 1 // Ensure roleId is provided
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('username', 'testuser');
    });

    it('should login a user', async () => {
        const response = await request(app)
            .post('/auth/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
});