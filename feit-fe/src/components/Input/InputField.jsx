import { tv } from 'tailwind-variants';

export const inputVariant = tv({
    base: 'block w-full border border-secondary-gray rounded-lg p-3',
    variants: {
        color: {
            success: 'border-2  border-green-500 ',
            error: 'text-semantic-danger ',
        },
    },
});

export const InputField = ({ className, placeholder, status, value, onChange, type = 'text' }) => {
    return (
        <input
            className={`${className}  ${inputVariant({
                color: status,
            })}`}
            disabled={status != null && true}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    );
};
