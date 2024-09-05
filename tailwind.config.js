/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "system-ui"],
			},
		},
	},
	plugins: [],
};
