import { useState } from 'react';
import { Form, Button, FormSelectOption } from '../../../components';
import { InputField } from '../../../components';
import { Link } from 'react-router-dom';
import IconEyeRegular from '../../../svgs/IconEyeRegular';
export const FormSignUp = ({ account, onChange, onClick, inputData, onSubmit }) => {
    const [checkInput, setCheckInput] = useState({
        email: true,
        pass: true,
        phone: true,
        repass: true,
    });
    const [showPass, setShowPass] = useState(false);
    const handleShowHidePass = () => {
        setShowPass(!showPass);
    };
    const handleCheckInput = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

        const isValidEmail = emailPattern.test(inputData.email);
        const isValidPass = passPattern.test(inputData.password);
        const isValiRePass = inputData.password === inputData.repassword;

        setCheckInput({
            email: isValidEmail,
            pass: isValidPass,
            repass: isValiRePass,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCheckInput();
        console.log(checkInput);
        if (checkInput.email === false || checkInput.pass === false || checkInput.repass === false) {
            return;
        }
        onSubmit();
    };
    const optionValue = [
        {
            value: 'IT',
        },
        {
            value: 'Non IT',
        },
    ];

    return (
        <form onSubmit={handleSubmit} noValidate>
            <Form label={'Họ và tên'}>
                <InputField
                    placeholder={'Nhập họ và tên của bạn'}
                    className={' w-full'}
                    name={Object.keys(inputData)[0]}
                    value={inputData.full_name}
                    type="text"
                    onChange={onChange}
                />
            </Form>

            <Form label={'Email'} className={'mt-5'}>
                <InputField
                    placeholder={'Email của bạn'}
                    className={
                        checkInput.email ? 'w-full' : 'border-semantic-danger border outline-semantic-danger w-full'
                    }
                    name={Object.keys(inputData)[1]}
                    value={inputData.email}
                    type="email"
                    onChange={onChange}
                />
            </Form>
            {checkInput.email ? <></> : <span className="mb-6 block text-semantic-danger">Email không hợp lệ</span>}

            <Form label={'Số điện thoại'} className={'mt-5'}>
                <InputField
                    placeholder={'Số điện thoại của bạn'}
                    className={
                        checkInput.email ? 'w-full' : 'border-semantic-danger border outline-semantic-danger w-full'
                    }
                    name={Object.keys(inputData)[5]}
                    value={inputData.phone}
                    type="text"
                    onChange={onChange}
                />
            </Form>
            {checkInput.email ? <></> : <span className="mb-6 block text-semantic-danger">Email không hợp lệ</span>}

            <Form label={'Bạn là ai'} className={'mt-5'}>
                <select
                    onChange={onChange}
                    value={inputData.specialize}
                    name={Object.keys(inputData)[4]}
                    className="block w-full  border border-secondary-gray rounded-lg p-3">
                    {optionValue.map((v, i) => {
                        return (
                            <option key={i} value={v.value}>
                                {v.value}
                            </option>
                        );
                    })}
                </select>
            </Form>

            <Form label={'Mật khẩu'} className={'mt-5'}>
                <div
                    className={
                        checkInput.pass
                            ? ' flex justify-center items-center border border-secondary-gray rounded-lg p-3'
                            : 'flex justify-center items-center rounded-lg  border-semantic-danger border outline-semantic-danger w-full p-3'
                    }>
                    <InputField
                        placeholder={'Tạo mật khẩu'}
                        className={'w-full border-none outline-none p-0'}
                        name={Object.keys(inputData)[2]}
                        value={inputData.password}
                        type={showPass ? 'text' : 'password'}
                        onChange={onChange}
                    />
                    <IconEyeRegular onClick={handleShowHidePass} />
                </div>
            </Form>
            {checkInput.pass ? <></> : <span className="mb-6 block text-semantic-danger">Mật khẩu không hợp lệ</span>}

            <Form label={'Nhập lại mật khẩu'} className={'mt-5'}>
                <InputField
                    placeholder={'Nhập lại mật khẩu'}
                    className={
                        checkInput.email ? 'w-full' : 'border-semantic-danger border outline-semantic-danger w-full'
                    }
                    name={Object.keys(inputData)[6]}
                    value={inputData.repassword}
                    type="password"
                    onChange={onChange}
                />
            </Form>
            {checkInput.repass ? <></> : <span className="mb-6 block text-semantic-danger">Mật khẩu không hợp lệ</span>}

            <div className=" flex justify-center  mt-9 ">
                <Button
                    onClick={onClick}
                    title="Đăng ký"
                    color={'tertiaryicon'}
                    type="submit"
                    className=" w-full py-4"
                    size={'lg'}
                />
            </div>
            <h1 className=" text-center text-button-1 text-primary-black font-button-1 font-plusjakartasans mt-16 ">
                Đã có tài khoảng ?{' '}
                <Link to="/signin" className=" text-button-1 text-primary-blue-500 font-button-1 font-plusjakartasans">
                    Đăng nhập
                </Link>
            </h1>
        </form>
    );
};
