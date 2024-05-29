import { tv } from 'tailwind-variants';
import { InputField } from '../Input';

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
    placeholder,
    status,
    option,
    type = 'text',
}) => {
    const { base, input } = formVariants();

    const optionValue = [
        {
            valuee: 'IT',
        },
        {
            valuee: 'NonIT',
        },
    ];

    console.log(optionValue.map((v, i) => v.value));
    console.log(option);

    return (
        <div className={`${className} ${base()}`}>
            <label className=" block text-label-2 font-label-2 text-primary-black mb-2">{label}</label>
            <select onChange={onchange} className="block w-full  border border-secondary-gray rounded-lg p-3">
                {option.map((v, i) => {
                    return (
                        <option key={i} value={v}>
                            {v}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
