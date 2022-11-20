const core = require("@actions/core");
const fetch = require("node-fetch");

(async () => {
  const res = await fetch("https://checkip.amazonaws.com");
  if (res.status !== 200) {
    throw new Error(res.statusText);
  }
  const ip = await res.text();
  core.setOutput("public-ip", ip);
})();
