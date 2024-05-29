import { tv } from 'tailwind-variants';

export const inputSectionVariants = tv({
    base: ' flex gap-2 items-center',
});

export const InputSection = ({
    type = 'checkbox',
    label = 'label',
    id = '1',
    name = '1',
    onChange,
    sizeRadio,
    value,
}) => {
    return (
        <div className={' ' + +inputSectionVariants({})}>
            <div className="flex justify-between items-center gap-2">
                <input
                    onChange={onChange}
                    type={type}
                    className={`rounded-full ${sizeRadio}`}
                    value={value}
                    id={id}
                    name={name}
                />
                <label className=" block text-body-2 text-primary-black font-body-2 font-plusjakartasans" htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    );
};
