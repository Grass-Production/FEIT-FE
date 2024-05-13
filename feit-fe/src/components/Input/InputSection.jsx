import { tv } from 'tailwind-variants';

export const inputSectionVariants = tv({
    base: ' flex gap-2 items-center',
});

export const InputSection = ({ type = 'checkbox', label = 'label', id = '1', onChange }) => {
    return (
        <div className={' ' + +inputSectionVariants({})}>
            <div className="flex justify-between items-center gap-2">
                <input onChange={onChange} type={type} className="rounded-full" id={id} name={id} />
                <label className=" block text-body-2 text-primary-black font-body-2 font-plusjakartasans" htmlFor={id}>
                    {label}
                </label>
            </div>
        </div>
    );
};
