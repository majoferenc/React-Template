module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			zIndex: {
				'-10': '-10',
			 },
			colors: {
				magenta: '#DD0270',
				magenta100: 'rgba(221, 2, 112, 0.5)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
