// import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {};

// export default withSentryConfig(
//   nextConfig,
//   {
   
//     silent: true,
//     org: "Evolve Media",
//     project: "Evolve Media",
//   },
//   {
    
//     // Upload a larger set of source maps for prettier stack traces (increases build time)
//     widenClientFileUpload: true,

//     // Transpiles SDK to be compatible with IE11 (increases bundle size)
//     transpileClientSDK: true,

    

//     // Hides source maps from generated client bundles
//     hideSourceMaps: true,

//     // Automatically tree-shake Sentry logger statements to reduce bundle size
//     disableLogger: true,


//     automaticVercelMonitors: true,
//   }
// );