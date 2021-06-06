const withPWA = require("next-pwa");
const prod = process.env.NODE_ENV === "development";

module.exports = withPWA({
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  pwa: {
    disable: prod,
    dest: "public",
    register: "true",
    skipWaiting: "true",
    publicExcludes: ["!robots.txt"],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: securityHeaders,
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
});

const ContentSecurityPolicy = `
  default-src 'self' https:;
  script-src 'self' 'unsafe-eval' 'unsafe-hashes' 'unsafe-inline' https:;
  child-src  'self' 'unsafe-eval' 'unsafe-inline' 'unsafe-hashes' https:;
  style-src 'self' 'unsafe-eval' 'unsafe-inline' https:;
  img-src * blob: data:;
  media-src 'self' 'unsafe-eval' 'unsafe-inline' https:;
  connect-src *;
  font-src 'self' https:;
  object-src 'self' 'unsafe-eval' 'unsafe-inline' 'unsafe-hashes' https:;
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];
