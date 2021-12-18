const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "development";

module.exports = withPWA({
  pwa: {
    disable: prod,
    dest: "public",
    register: "true",
    skipWaiting: "true",
    publicExcludes: ["!robots.txt"],
  }
});
