import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			colors: {
				bg: 'var(--am-bg)',
				surface: 'var(--am-surface)',
				sunken: 'var(--am-surface-sunken)',
				line: 'var(--am-border)',
				ink: 'var(--am-text)',
				muted: 'var(--am-text-muted)',
				primary: { DEFAULT: 'var(--am-primary)', hover: 'var(--am-primary-hover)', soft: 'var(--am-primary-soft)' },
				danger: { DEFAULT: 'var(--am-danger)', soft: 'var(--am-danger-soft)' },
				warning: { DEFAULT: 'var(--am-warning)', soft: 'var(--am-warning-soft)' },
			},
			fontFamily: {
				display: ['Fraunces', 'Georgia', 'serif'],
				sans: ['DM Sans', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
			},
			borderRadius: { sm: '8px', DEFAULT: '999px', lg: '20px' },
			boxShadow: {
				sm: '0 1px 3px rgba(30, 20, 51, 0.08)',
				md: '0 10px 28px rgba(109, 63, 214, 0.16)',
			},
		},
	},
} satisfies Config;
