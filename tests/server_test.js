var supertest = require("supertest");
let app = require("../src/index");
let request = supertest(app);
it("should run on port 80", () => {
    return request.get("/").then(res => {
        expect(res.statusCode).toEqual(200);
    }).catch(err => {
        fail(err);
    });
});

