const request = require("supertest");

const BASE_URL = "http://backend:5000";

describe("Task API Integration Test", () => {

  it("should create a task", async () => {
    const res = await request(BASE_URL)
      .post("/tasks")
      .send({ title: "Test Task" });

    expect(res.statusCode).toBe(201);
  });

  it("should get tasks", async () => {
    const res = await request(BASE_URL).get("/tasks");
    expect(res.statusCode).toBe(200);
  });

});