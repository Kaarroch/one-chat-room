const { expect } = require('chai');
const supertest = require('supertest');
describe('Google', function() {
  it('should display its home page', async function() {
    // Make a GET request on www.google.com
    const response = await supertest('http://www.google.com').get('/');
    // Assert that the response status code is 200 OK
    expect(response.status).to.equal(200);
    // Assert that the response contains the text "Google"
    expect(response.text).to.have.string('Google');
  });
});