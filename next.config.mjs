/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true,
        loader: 'akamai',
        path: '/',
    }
};

export default nextConfig;
