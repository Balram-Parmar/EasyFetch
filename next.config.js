/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add fallbacks for Node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      os: false,
    };
    
    // Fix FFmpeg worker loading
    config.module.rules.push({
      test: /\.worker\.js$/,
      loader: 'worker-loader',
      options: {
        filename: 'static/chunks/[id].worker.js',
        publicPath: '/_next/',
      },
    });
    
    // Suppress the critical dependency warning
    config.module.exprContextCritical = true;
    
    return config;
  },

}

module.exports = nextConfig;