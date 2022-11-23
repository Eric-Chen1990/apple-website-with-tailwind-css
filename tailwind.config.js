/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			animation: {
				"box-shadow-glow": "glow 3s linear infinite",
			},
			keyframes: {
				glow: {
					"0%": {
						boxShadow: "1px 1px 10px white",
					},
					"50%": {
						boxShadow: "2px 2px 25px white",
					},
					"100%": {
						boxShadow: "1px 1px 10px white",
					},
				},
			},
		},
	},
	plugins: [],
};
