import type { NextConfig } from 'next';
import { fetchRedirects } from '@/sanity/lib/fetchRedirects';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    async redirects() {
        return (await fetchRedirects()) as [];
    },
};

export default nextConfig;
