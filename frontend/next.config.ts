import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	turbopack: {},
	webpack: (config) => {
		config.watchOptions = {
			ignored: [
				"**/node_modules/**",
				"**/.git/**",
				"**/public/assets/**",
				"**/public/**/js/**",
				"**/public/**/images/**",
				"**/src/styles/**"
			]
		};
		return config;
	}
};

export default nextConfig;
