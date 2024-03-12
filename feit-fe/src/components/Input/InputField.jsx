import { tv } from 'tailwind-variants';

export const inputVariant = tv({
    base: 'py-5 pl-3 placeholder-[#AFB1B6] border border-[#AFB1B6] outline-none rounded-xl',
    variants: {
        color: {
            success: 'border-2 border-green-500 ',
            error: 'border-2 border-red-500 ',
        },
    },
});

export const InputField = ({ className, placeholder, status }) => {
    return (
        <input
            className={`  ${className} ${inputVariant({
                color: status,
            })}`}
            type="text"
            placeholder={placeholder}
        />
    );
};
