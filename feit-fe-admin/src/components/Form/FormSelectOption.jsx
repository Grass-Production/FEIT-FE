import { tv } from 'tailwind-variants';
import { InputField } from '../Input';
import { Children } from 'react';

const formVariants = tv({
    slots: {
        base: ' w-96 ',
        input: ' block w-full border border-secondary-gray rounded-lg p-3',
    },
});

export const FormSelectOption = ({
    value,
    onChange,
    className,
    nameInput,
    classNameInput,
    label,
    disabled,
    children,
    placeholder,
    status,
    option,
    type = 'text',
}) => {
    const { base, input } = formVariants();

    return (
        <div className={`${className} ${base()}`}>
            <label className=" block mb-1 text-label-1 font-label-1 font-plusjakartasans text-secondary-gray">
                {label}
            </label>
            <select
                onChange={onChange}
                disabled={disabled}
                value={value}
                className="block w-full  border border-secondary-gray p-2">
                {children}
            </select>
        </div>
    );
};
