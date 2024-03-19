import { tv } from 'tailwind-variants';
import { Button } from '../Button';
import { InputSection } from '../Input/InputSection';
import { NavLink } from 'react-router-dom';
const formVariants = tv({
    slots: {
        base: ' w-96 ',
        input: ' block w-full border border-secondary-gray rounded-lg p-3',
        label: ' mb-2 ',
    },
});

export const Form = ({ valueName, onChangeName, valuePass, onChangePass }) => {
    const { base, input, label } = formVariants();
    return (
        <form className={base()}>
            <div className=" mb-3">
                <label className=" block text-label-2 font-label-2 text-primary-black mb-2" htmlFor="">
                    Email
                </label>
                <input
                    value={valueName}
                    onChange={onChangeName}
                    placeholder="Nhập mail"
                    className={input()}
                    type="email"
                />
            </div>
            <div className={`${label()} mb-6`}>
                <label className=" block text-label-2 font-label-2 text-primary-black mb-2" htmlFor="">
                    Mật khẩu
                </label>
                <input
                    value={valuePass}
                    onChange={onChangePass}
                    placeholder="Nhập mật khẩu"
                    className={input()}
                    type="password"
                />
            </div>
            <div className=" flex justify-between mb-9">
                <InputSection label="Nhớ mật khẩu" />
                <NavLink className=" text-primary-blue-500 text-button-1 font-button-1 font-plusjakartasans" to="/home">
                    Quên mật khẩu ?
                </NavLink>
            </div>
            <div className=" flex justify-center ">
                <Button title="Đăng nhập" color={'tertiaryicon'} className=" w-full py-4" size={'lg'} />
            </div>
        </form>
    );
};
