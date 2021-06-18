var user_controller = require("../../src/controllers/controllers");
var mongoose = require("mongoose");
var config = require("../../src/config");
var supertest = require("supertest");
let app = require("../../src/index");
let request = supertest(app);
generateRandomWords = (size) => Math.random().toString(36).substring(size);

function generateMockUsers() {
  return {
    full_name: `${generateRandomWords(4)} ${generateRandomWords(2)}`,
    email: `${generateRandomWords(4)}@gmail.com`,
    role: 1,
    phone: Math.floor(Math.random() * 1000000000),
    password: `${generateRandomWords(5)}`,
  };
}

let mainUser = {
  full_name: `Luiz Fritsch`,
  email: `fritsch.guilherm3@gmail.com`,
  role: 0,
  phone: "55985184282",
  password: `123`,
};

/**
 * BeforeAll inserting an mainUser to in the future login with it and get a jwt token to make all other requests
 */
/* beforeAll(() => {
  return request
    .post("/user")
    .send(mainUser)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}); */

describe("GET /user()", () => {
  it("should return true when there is at least 1 user on DB", async () => {
    return request
      .get("/user")
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        console.log(res.body.length);
        expect(res.body.length).toBeGreaterThan(1);
      })
      .catch((err) => {
        fail(err);
      });
  });
});
