/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			fontFamily: {
				sans: ['Chivo', 'Helvetica', 'Arial', 'sans-serif'],
				snack: ['SnackBowl']
			},
			colors: {
				darkGray: 'hsl(162, 32.10%, 56.10%)',
				lightGray: 'hsla(0, 0%, 78%, 0.7)',
				veryLightGray: 'hsl(0, 0%, 98%)',
				lightblue: '#ADD8E6', // Added light blue color
				customGreen: 'hsl(162, 32.10%, 56.10%)' // Added custom green color
			}
		},
		groups: ['scope']
	},
	plugins: []
};
