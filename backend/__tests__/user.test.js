const request = require('supertest');
const app = require('../server.test'); // Adjust the path as needed

describe('User Tests', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoxLCJpYXQiOjE3NDEzMjgwNTIsImV4cCI6MTc0MTMyODk1Mn0.MKObVI2wDxt89ozt5cL1ri5t0RDxUfBx6t2rf7_tk0E'; // Use the provided valid token

    it('should get user profile', async () => {
        const response = await request(app)
            .get('/user/profile')
            .set('Authorization', `Bearer ${token}`); // Use the valid token
        console.log(response.body); // Log the response body
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('email', 'newusera11@example.com'); // Check for email property
    });
});