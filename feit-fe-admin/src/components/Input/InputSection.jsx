import { tv } from 'tailwind-variants';

export const inputSectionVariants = tv({
    base: ' flex gap-2 items-center',
});

export const InputSection = ({
    type = 'checkbox',
    Checked = false,
    classNameText = 'text-button-2 text-primary-black font-button-2 font-plusjakartasans',
    label = 'label',
    className,
    value,
    onChange,
    size,
    id = '1',
    name = id,
}) => {
    return (
        <div className={`${className} flex items-center gap-2`}>
            {Checked ? (
                <input
                    onChange={onChange}
                    type={type}
                    value={value}
                    defaultChecked
                    className={`${size} rounded-full`}
                    id={id}
                    name={name}
                />
            ) : (
                <input
                    onChange={onChange}
                    type={type}
                    value={value}
                    className={`${size} rounded-full`}
                    id={id}
                    name={name}
                />
            )}
            <label className={`block ${classNameText}`} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};
