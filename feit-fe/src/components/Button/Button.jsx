import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
    base: 'font-plusjakartasans  rounded-md py-2 px-4 ',
    variants: {
        color: {
            primary:
                'bg-white text-button-1 font-button-1 border border-primary-blue-500 text-primary-blue-500  hover:bg-[#3C79FE] hover:text-white active:text-white active:bg-[#0A50E7]',
            secondary:
                'bg-white  text-button-1 font-button-1 border border-[#74727F] text-primary-blue-500 hover:border-primary-blue-500 active:bg-[#85C8FF]',
            success: 'bg-green-500  hover:bg-green-700',

            tertiary:
                'bg-white  text-button-1 font-button-1 text-primary-black hover:bg-[#BFBEC4] active:text-white active:text-primary-blue-500',

            primaryicon: 'bg-[#3C79FE]  text-button-1 font-button-1 text-white  hover:bg-[#0B58FE] active:bg-[#0A50E7]',
            secondaryicon:
                'bg-[#FEFEFE]  text-button-1 font-button-1 text-primary-blue-500 hover:bg-[#3C79FE] active:bg-[#B3CBFF]',
            successicon: 'bg-green-500  hover:bg-green-700',
            tertiaryicon:
                'bg-[#BFBEC4]  text-button-1 font-button-1 text-primary-black hover:bg-[#9F9EA7] active:text-white active:bg-[#3C79FE]',
        },

        disabled: {
            true: 'bg-[#F6F6F6] text-button-1 font-button-1 text-secondary-gray',
        },
        type: {
            none: '',
            left: ' flex justify-between items-center gap-[6px]',
        },
    },
});

export const Button = ({
    children,
    disabled,
    icon = false,
    left = false,
    right = false,
    color,
    title = 'Button',
    onClick = null,
    className = '',
}) => {
    return (
        <button
            onClick={onClick}
            className={`${className} ${buttonVariants({
                color: color,
                type: icon ? 'left' : 'none',
                disabled: disabled,
            })}`}>
            {left === icon && children}
            {title}
            {right === icon && children}
        </button>
    );
};
