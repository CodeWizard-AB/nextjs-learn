import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	webpack: (config) => {
		config.externals = {
			...config.externals,
			"@mapbox/node-pre-gyp": "commonjs @mapbox/node-pre-gyp",
		};
		return config;
	},
};

export default nextConfig;
