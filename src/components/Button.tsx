import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    icon?: React.ElementType;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className,
    icon: Icon,
    ...props
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 focus:ring-blue-500',
        secondary: 'bg-white text-blue-900 hover:bg-blue-50 shadow-md hover:shadow-lg focus:ring-blue-200',
        outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
        ghost: 'text-blue-700 hover:bg-blue-100/50 hover:text-blue-800 focus:ring-blue-500',
    };

    const sizes = {
        sm: 'text-sm px-4 py-2 space-x-2',
        md: 'text-base px-6 py-3 space-x-2',
        lg: 'text-lg px-8 py-4 space-x-3',
    };

    const classes = twMerge(clsx(baseStyles, variants[variant], sizes[size], className));

    const content = (
        <>
            {Icon && <Icon className={size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} />}
            <span>{children}</span>
        </>
    );

    const MotionComponent = motion(href ? (href.startsWith('/') ? Link : 'a') : 'button');

    return (
        // @ts-ignore - motion component props are dynamic
        <MotionComponent
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={classes}
            {...(href ? { to: href.startsWith('/') ? href : undefined, href: !href.startsWith('/') ? href : undefined } : {})}
            {...props}
        >
            {content}
        </MotionComponent>
    );
}
