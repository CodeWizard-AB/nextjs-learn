import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	webpack: (config) => {
		return config; // Pass through default config
	},
};

export default nextConfig;
