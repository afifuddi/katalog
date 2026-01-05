import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'secondary' | 'accent';
}

export function Badge({
    className = '',
    variant = 'default',
    ...props
}: BadgeProps) {
    const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

    const variants = {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-forest-light",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-brown-light",
        outline: "text-foreground",
        accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props} />
    );
}
