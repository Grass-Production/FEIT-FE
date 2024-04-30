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
    size,
    id = '1',
}) => {
    return (
        <div className={`${className} flex items-center gap-2`}>
            {Checked ? (
                <input type={type} checked className={`${size} rounded-full`} id={id} name={id} />
            ) : (
                <input type={type} className={`${size} rounded-full`} id={id} name={id} />
            )}
            <label className={`block ${classNameText}`} htmlFor={id}>
                {label}
            </label>
        </div>
    );
};
