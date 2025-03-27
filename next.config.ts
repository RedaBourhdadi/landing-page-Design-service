import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ['images.unsplash.com', 'unsplash.com'],
		formats: ['image/webp'],
	},
	reactStrictMode: true,
};

export default nextConfig;
