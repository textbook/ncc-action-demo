const core = require("@actions/core");
const { HttpClient, HttpCodes } = require("@actions/http-client");

const client = new HttpClient();

(async () => {
  const { message, readBody } = await client.get("https://checkip.amazonaws.com");
  if (message.statusCode !== HttpCodes.OK) {
    throw new Error(message.statusMessage);
  }
  const ip = await readBody();
  core.setOutput("public-ip", ip);
})();
