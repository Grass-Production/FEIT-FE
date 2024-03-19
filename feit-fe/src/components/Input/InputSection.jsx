import { tv } from 'tailwind-variants';

export const inputSectionVariants = tv({
    base: ' flex gap-2 items-center',
});

export const InputSection = ({ type = 'checkbox', label = 'label' }) => {
    return (
        <div className={' ' + inputSectionVariants({})}>
            <form className="flex justify-between items-center gap-2">
                <input type={type} className="rounded-full" id="RemenberPass" name="RemenberPass" />
                <label
                    className=" block text-body-2 text-primary-black font-body-2 font-plusjakartasans"
                    htmlFor="RemenberPass">
                    {label}
                </label>
            </form>
        </div>
    );
};
