import type { ButtonHTMLAttributes } from 'react';
import './button.css';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variant;
	size?: Size;
	loading?: boolean;
}

export const Button = ({ variant = 'primary', size = 'md', loading, className = '', children, ...rest }: ButtonProps) => (
	<button
		className={`am-btn am-btn--${variant} ${size === 'md' ? '' : `am-btn--${size}`} ${className}`}
		aria-busy={loading || undefined}
		disabled={rest.disabled || loading}
		{...rest}
	>
		{children}
	</button>
);
