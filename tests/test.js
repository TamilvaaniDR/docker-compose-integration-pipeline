const axios = require("axios");

test("Backend health check", async () => {
  const res = await axios.get("http://backend:5000/health");
  expect(res.status).toBe(200);
  expect(res.data.status).toBe("ok");
});