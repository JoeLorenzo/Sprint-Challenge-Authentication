const request = require("supertest")
const server = require("../api/server")

describe("no token", () => {
    it('restricts path with no token', async () => {
    const res = await request(server)
        .get("/api/jokes")
        // .send('auth=blah')
    expect(res.status).toBe(400)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toEqual("No authentication token provided.")
  })
})