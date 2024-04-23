import { tv } from 'tailwind-variants';

export const inputSectionVariants = tv({
    base: ' flex gap-2 items-center',
});

export const InputSection = ({ type = 'checkbox', label = 'label', className, id = '1' }) => {
    return (
        <div className={`${className} flex items-center gap-2`}>
            <input type={type} className="rounded-full" id={id} name={id} />
            <label
                className=" block w-full text-button-2 text-primary-black font-button-2 font-plusjakartasans"
                htmlFor={id}>
                {label}
            </label>
        </div>
    );
};
