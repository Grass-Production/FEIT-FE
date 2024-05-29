import { tv } from 'tailwind-variants';

export const inputVariant = tv({
    base: 'block  border border-secondary-gray rounded-lg p-3',
    variants: {
        color: {
            success: 'border-2  border-green-500 ',
            error: 'text-semantic-danger outline-semantic-danger',
        },
    },
});

export const InputField = ({
    className = 'w-full',
    placeholder,
    isrequired,
    status,
    value,
    onChange,
    name,
    pattern,
    type = 'text',
}) => {
    return isrequired ? (
        <input
            className={`${className}  ${inputVariant({
                color: status,
            })}`}
            required
            disabled={status != null && true}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            pattern={pattern}
        />
    ) : (
        <input
            className={`${className}  ${inputVariant({
                color: status,
            })}`}
            disabled={status != null && true}
            value={value}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            pattern={pattern}
        />
    );
};
