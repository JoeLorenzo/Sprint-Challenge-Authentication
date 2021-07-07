const request = require("supertest")
const server = require("./server")
const db = require("../database/dbConfig")


beforeEach(async () => {
  await db.seed.run()
})
describe("jest sanity check", () => {
    it('should add two numbers', async() => {
        expect(1+1).toBe(2)
    })
})



describe("root path test", () => {
    it('should check the root path of the server', async () => {
        const res = await request(server).get("/")
        //Does return an expected status code
        expect(res.status).toBe(200)
        //Does it return the expected data format
        expect(res.type).toBe("application/json")
        //Does it return the expected data?
        expect(res.body.message).toBe("Hello from the root!")
        })
})

describe("register", () => {
    it('it registers a new user', async () => {
    const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "Bart", password: "DontHaveACowMan" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toEqual("User successfully registered!")
  })
})

describe("login", () => {
    it('it logins an existing user', async () => {
    const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "Homer", password: "DuffBeer" })
    expect(res.status).toBe(201)
    expect(res.type).toBe("application/json")
    // expect(res.body).toEqual({ message: "User successfully registered!", id: 2  })
  })

})