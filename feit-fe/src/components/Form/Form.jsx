import {tv} from 'tailwind-variants';
import {Button} from '../Button';
import {InputSection} from '../Input/InputSection';
import {NavLink} from 'react-router-dom';
const formVariants = tv({
    slots: {
        base: ' w-96 ',
        input: ' block w-full border border-black rounded-lg p-3',
        label: ' mb-2 ',
    },
});

export const Form = ({valueName, onChangeName, valuePass, onChangePass}) => {
    const {base, input, label} = formVariants();
    return (
        <form className={base()}>
            <div className=" mb-3">
                <label className=" mb-2" htmlFor="">
                    Email
                </label>
                <input
                    value={valueName}
                    onChange={onChangeName}
                    placeholder="Nhập mail"
                    className={input()}
                    type="text"
                />
            </div>
            <div className={label()}>
                <label htmlFor="">Mật khẩu</label>
                <input
                    value={valuePass}
                    onChange={onChangePass}
                    placeholder="Nhập mật khẩu"
                    className={input()}
                    type="text"
                />
            </div>
            <div className=" flex justify-between mb-9">
                <InputSection label="Nhớ mật khẩu" />
                <NavLink className=" underline text-primary-primary" to="/home">
                    Quên mật khẩu ?
                </NavLink>
            </div>
            <div className=" flex justify-center ">
                <Button title="Đăng nhập" size={'lg'} />
            </div>
        </form>
    );
};
