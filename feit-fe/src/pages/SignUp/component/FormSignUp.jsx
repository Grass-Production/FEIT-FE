import { useState } from 'react';
import { Form, Button, FormSelectOption } from '../../../components';
import { InputField } from '../../../components';
import { Link } from 'react-router-dom';
import IconEyeRegular from '../../../svgs/IconEyeRegular';

export const FormSignUp = ({ account, onChange, onClick, inputData, onSubmit, loading }) => {
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
    const handleSubmit = (event) => {
        event.preventDefault();

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

        if (isValidEmail === false || isValidPass === false || isValiRePass === false) {
            return;
        }

        onSubmit();
    };
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     handleCheckInput();
    //     console.log(checkInput);
    //     if (checkInput.email === false || checkInput.pass === false || checkInput.repass === false) {
    //         return;
    //     }
    //     onSubmit();
    // };
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
                        className={'w-full border-none outline-none !p-0'}
                        name={Object.keys(inputData)[2]}
                        value={inputData.password}
                        type={showPass ? 'text' : 'password'}
                        onChange={onChange}
                    />
                    <IconEyeRegular onClick={handleShowHidePass} />
                </div>
            </Form>
            {checkInput.pass ? <></> : <span className="mb-6 block text-semantic-danger">Mật khẩu phải có ít nhất 6 ký tự, <br /> bao gồm ít nhất một chữ hoa, một chữ số và một ký tự đặc biệt.</span>}

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

            {loading ?
                <Button disabled={true} className=' py-4 w-full mt-9' title='Đang xử lý...' icon={true} right={true}>
                    <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                    </svg>
                </Button> :
                <div className=" flex justify-center  mt-9 ">
                    <Button
                        onClick={onClick}
                        title="Đăng ký"
                        color={'tertiaryicon'}
                        type="submit"
                        className=" w-full py-4"
                        size={'lg'}
                    />
                </div>}
            <h1 className=" text-center text-button-1 text-primary-black font-button-1 font-plusjakartasans mt-16 ">
                Đã có tài khoảng ?{' '}
                <Link to="/signin" className=" text-button-1 text-primary-blue-500 font-button-1 font-plusjakartasans">
                    Đăng nhập
                </Link>
            </h1>
        </form>
    );
};
