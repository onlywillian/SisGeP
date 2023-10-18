/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
            {
                protocol: "http",
                hostname: "**",
            }
        ]
    },
    env: {
        API_URL: 'http://localhost:3001'
    }
}

module.exports = nextConfig
