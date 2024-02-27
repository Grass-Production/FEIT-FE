import {tv} from 'tailwind-variants';

export const buttonVariants = tv({
    base: 'font-semibold text-white rounded-lg active:opacity-80',
    variants: {
        color: {
            primary: 'bg-blue-500 hover:bg-blue-700',
            secondary: 'bg-purple-500 hover:bg-purple-700',
            success: 'bg-green-500 hover:bg-green-700',
            error: 'bg-red-500 hover:bg-red-700',
        },
        size: {
            sm: 'py-2 px-3',
            md: ' py-3 px-4',
            lg: 'py-4 px-5',
        },
        disabled: {
            true: '',
        },
        type: {
            none: '',
            left: ' flex gap-[6px]',
        },
    },
    defaultVariants: {
        color: 'primary',
        size: 'md',
        type: 'none',
    },
});

export const Button = ({children, icon, size, color, title = 'Click me', onClick = null, className = ''}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${buttonVariants({
                color: color,
                size: size,
                type: icon ? 'left' : 'none',
            })}`}>
            {icon && children}
            <h1>{title}</h1>
        </button>
    );
};
