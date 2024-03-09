import {tv} from 'tailwind-variants';

export const inputSectionVariants = tv({
    base: ' flex gap-2 items-center',
});

export const InputSection = ({type = 'checkbox', label = 'label'}) => {
    return (
        <div className={' ' + inputSectionVariants({})}>
            <form>
                <input type={type} id="RemenberPass" name="RemenberPass" />
                <label htmlFor="RemenberPass">{label}</label>
            </form>
        </div>
    );
};
