const core = require("@actions/core");
const { HttpClient, HttpCodes } = require("@actions/http-client");

(async () => {
  const client = new HttpClient();
  const { message, readBody } = await client.get("https://checkip.amazonaws.com");
  if (message.statusCode !== HttpCodes.OK) {
    throw new Error(message.statusMessage);
  }
  const ip = await readBody();
  core.setOutput("public-ip", ip);
})();
