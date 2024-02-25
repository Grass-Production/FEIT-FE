import {tv} from 'tailwind-variants';

export const inputSectionVariants = tv({
    base: ' flex gap-2 items-center',
});

export const InputSection = ({type = 'checkbox', label = 'label'}) => {
    return (
        <div className={' ' + inputSectionVariants({})}>
            <input type={type} />
            <label>{label}</label>
        </div>
    );
};
