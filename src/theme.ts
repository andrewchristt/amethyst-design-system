// Amethyst theme object for JS consumers (charts, canvas). Mirrors src/styles/tokens.css.
export const theme = {
	colors: {
		light: {
			bg: '#f7f5fc',
			surface: '#ffffff',
			border: '#d8d0ea',
			text: '#1e1433',
			textMuted: '#6a5f80',
			primary: '#6d3fd6',
			danger: '#c2364f',
			warning: '#9a6400',
		},
		dark: {
			bg: '#120c1f',
			surface: '#1c1430',
			border: '#352a52',
			text: '#f1edf9',
			textMuted: '#a99dc2',
			primary: '#a98bff',
			danger: '#f27d93',
			warning: '#e3ac4a',
		},
	},
	fonts: {
		display: '"Fraunces", Georgia, serif',
		body: '"DM Sans", system-ui, sans-serif',
		mono: '"JetBrains Mono", ui-monospace, monospace',
	},
	radius: { sm: '8px', md: '999px', lg: '20px', pill: '999px' },
	space: [0, 4, 8, 12, 16, 24, 32, 48],
} as const;

export default theme;
