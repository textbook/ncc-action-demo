const core = require("@actions/core");
const http = require("@actions/http-client");

const client = new http.HttpClient();

(async () => {
  const res = await client.get("https://checkip.amazonaws.com");
  if (res.message.statusCode !== http.HttpCodes.OK) {
    throw new Error(res.message.statusMessage);
  }
  const ip = await res.readBody();
  core.setOutput("public-ip", ip);
})();
