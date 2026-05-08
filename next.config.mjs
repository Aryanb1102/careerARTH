const isExport = process.env.NEXT_OUTPUT === 'export';

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self' https:",
    ].join('; '),
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isExport ? 'export' : 'standalone',
  // GitHub Pages serves from /careerARTH — only needed for static export
  basePath: isExport ? '/careerARTH' : '',
  assetPrefix: isExport ? '/careerARTH' : '',
  poweredByHeader: false,
  images: {
    // next/image optimisation requires a server; disable for static export
    unoptimized: isExport,
  },
  env: {
    // Baked at build time so image components can prefix paths correctly
    NEXT_PUBLIC_BASE_PATH: isExport ? '/careerARTH' : '',
  },
  // Headers only work at runtime — skip for static export
  ...(isExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: '/:path*',
              headers: securityHeaders,
            },
          ];
        },
      }),
};

export default nextConfig;
