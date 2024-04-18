import { tv } from 'tailwind-variants';
import { InputField } from '../Input';

const formVariants = tv({
    slots: {
        base: ' w-96 ',
        input: ' block w-full border border-secondary-gray rounded-lg p-3',
    },
});

export const Form = ({ value, onChange, className, classNameInput, label, placeholder, status, type = 'text' }) => {
    const { base, input } = formVariants();
    return (
        <div className={`${className} ${base()}`}>
            <div className="">
                <label className=" block text-label-2 font-label-2 text-primary-black mb-2">{label}</label>
                <InputField
                    value={value}
                    onChange={onChange}
                    className={classNameInput}
                    status={status}
                    placeholder={placeholder}
                    type={type}
                />
            </div>
        </div>
    );
};
