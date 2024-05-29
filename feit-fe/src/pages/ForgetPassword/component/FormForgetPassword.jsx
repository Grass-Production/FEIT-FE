import { NavLink } from 'react-router-dom';
import { InputField, Form, Button, ToastError } from '../../../components';
import { ArrowRight, IconCheckCircle, IconArrowLogin } from '../../../svgs';
import { useState } from 'react';
import { forgetpassword, verifypassowrd, changepassowrd } from '../../../services/userAPI';
import { Fragment } from 'react';
import 'animate.css';
export const FormEmail = ({ sendTypeForm }) => {
    const [email, setMail] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const test = () => {
        sendTypeForm(1);
    };

    const handleForgetPassword = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        const res = await forgetpassword({ email: email });
        console.log(res);
        if (res.status === 'success') {
            setIsLoading(false)

            sendTypeForm(1);
        } else {
            setIsLoading(false)
            setIsToast(true)
            setTimeout(() => setIsToast(false), 2000);

            // alert('Tài khoảng chưa được đăng ký');
        }
    };

    return (
        <div className="">
            {isToast && <ToastError message='Email không tồn tại' />}
            <div className=" mb-14">
                <h1 className=" text-left text-heading-4 text-primary-black font-heading-4 mb-3">Quên mật khẩu</h1>
                <h1 className=" text-left mb-5 text-body-1 font-bitter text-secondary-gray font-body-1">
                    Hãy nhập email hoặc số điện mà bạn đã đăng ký tài khoản
                </h1>
            </div>
            <div>
                <form onSubmit={handleForgetPassword}>
                    <Form on label={'Tài khoản'} className={' w-full '}>
                        <InputField
                            value={email}
                            onChange={(e) => setMail(e.target.value)}
                            placeholder={'Email hoặc số điện thoại'}
                            className=" rounded-none w-full px-4 py-2 mb-6"
                        />
                        {isLoading ?
                            <Button disabled={true} className=' w-full mt-9' title='Đang xử lý...' icon={true} right={true}>
                                <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                            </Button> :
                            <Button
                                icon={true}
                                type="submit"
                                title="Xác nhận"
                                className=" w-full py-4 rounded-none border-[2px] border-primary-black"
                                right={true}
                                color={'primaryicon'}>
                                <ArrowRight />
                            </Button>}
                    </Form>
                </form>
            </div>
        </div>
    );
};

export const FormVerify = ({ sendTypeForm }) => {
    const [inputs, setInputs] = useState(['', '', '', '', '', '']);
    const [isLoading, setIsLoading] = useState(false)
    const [isToast, setIsToast] = useState(false)
    const handleSendPreTypeForm = () => {
        sendTypeForm(2);
    };

    const handleVerifyCode = async (event) => {
        event.preventDefault();
        try {
            setIsLoading(true)
            const res = await verifypassowrd({ verification_code: inputs.join('') });
            console.log(res);
            if (res.status === 200) {
                setIsLoading(false)
                sendTypeForm(2);
            }
        } catch (error) {
            setIsToast(true)
            setIsLoading(false)

            setTimeout(() => setIsToast(false), 2000);
        }

    };

    const handleKeyDown = (e, index) => {
        if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
            e.preventDefault();
        }

        if (e.key === 'Backspace') {
            const newInputs = [...inputs];
            newInputs[index] = '';
            setInputs(newInputs);
            const prevInput = document.getElementById(`input-${index - 1}`);
            if (prevInput) {
                prevInput.focus();
            }
        } else if (e.key === 'Delete') {
            const newInputs = [...inputs];
            newInputs[index] = '';
            setInputs(newInputs);
            if (index < inputs.length - 1) {
                const nextInput = document.getElementById(`input-${index + 1}`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };

    const handleInput = (e, index) => {
        const newInputs = [...inputs];
        newInputs[index] = e.target.value;
        setInputs(newInputs);

        if (e.target.value && index < inputs.length - 1) {
            const nextInput = document.getElementById(`input-${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleFocus = (e) => {
        e.target.select();
    };

    const handlePaste = (e) => {
        const text = e.clipboardData.getData('text');
        if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
            return;
        }
        const digits = text.split('').slice(0, inputs.length);
        setInputs(digits);
    };
    return (
        <div className="">
            {isToast && <ToastError message='Mã xác thực không chính xác' />}
            <div className=" mb-14">
                <h1 className=" text-left text-heading-4 text-primary-black font-heading-4 mb-3">Nhập mã khôi phục</h1>
                <h1 className=" text-left mb-5 text-body-1 font-bitter text-secondary-gray font-body-1">
                    Mã khôi phục đã được gửi đến, vui lòng nhập mã xác nhận bên dưới.
                </h1>
            </div>
            <div>
                <form onSubmit={handleVerifyCode}>
                    <div class="flex justify-between mb-6">
                        {inputs.map((input, index) => (
                            <Fragment key={index}>
                                <input
                                    id={`input-${index}`}
                                    type="text"
                                    className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-primary-black hover:border-primary-black appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    pattern="\d*"
                                    maxLength="1"
                                    value={input}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onInput={(e) => handleInput(e, index)}
                                    onFocus={handleFocus}
                                    onPaste={handlePaste}
                                />
                            </Fragment>
                        ))}
                    </div>
                    {isLoading ?
                        <Button disabled={true} className=' w-full mt-9' title='Đang xử lý...' icon={true} right={true}>
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                        </Button> :
                        <Button
                            icon={true}
                            type="submit"
                            title="Xác nhận"
                            className=" w-full py-4 rounded-none border-[2px] border-primary-black"
                            right={true}
                            color={'primaryicon'}>
                            <ArrowRight />
                        </Button>}
                </form>
            </div>
        </div>
    );
};

export const FormChangePassword = ({ sendTypeForm }) => {
    const [password, setPassowd] = useState({
        newpassword: '',
        passwordcompare: '',
    });

    const handleSendTypeForm = () => {
        sendTypeForm(3);
    };

    const handleChangePassword = async (event) => {
        event.preventDefault();
        if (password.newpassword !== password.passwordcompare) {
            alert('Mật khẩu không khớp');
            return;
        }
        const res = await changepassowrd({
            password: password.newpassword,
            password_compare: password.passwordcompare,
        });
        console.log(res);
        if (res.status === 200) {
            sendTypeForm(3);
        }
    };

    return (
        <div className="">
            <div className=" mb-14">
                <h1 className=" text-left text-heading-4 text-primary-black font-heading-4 mb-3">Khôi phục mật khẩu</h1>
                <h1 className=" text-left mb-5 text-body-1 font-bitter text-secondary-gray font-body-1">
                    Tạo lại mật khẩu của bạn
                </h1>
            </div>
            <div>
                <form onSubmit={handleChangePassword}>
                    <Form label={'Mật khẩu'} className={' w-full mb-6'}>
                        <InputField
                            type='password'
                            value={password.newpassword}
                            onChange={(e) => setPassowd({ ...password, newpassword: e.target.value })}
                            placeholder={'Tạo mật khẩu '}
                            className=" rounded-none w-full px-4 py-2"
                        />
                    </Form>
                    <Form label={'Nhập lại mật khẩu'} className={' w-full mb-6'}>
                        <InputField
                            type='password'

                            value={password.passwordcompare}
                            onChange={(e) => setPassowd({ ...password, passwordcompare: e.target.value })}
                            placeholder={'Nhập lại mật khẩu'}
                            className=" rounded-none w-full px-4 py-2"
                        />
                    </Form>
                    <Button
                        icon={true}
                        title="Hoàn thành"
                        className=" w-full py-4 rounded-none border-[2px] border-primary-black"
                        right={true}
                        color={'primaryicon'}>
                        <ArrowRight />
                    </Button>
                </form>
            </div>
        </div>
    );
};

export const Finish = () => {
    return (
        <div className="">
            <div className=" mb-14">
                <h1 className=" text-left text-heading-4 text-primary-black font-heading-4 mb-3">
                    Khôi phục thành công
                </h1>
                <h1 className=" text-left mb-5 text-body-1 font-bitter text-secondary-gray font-body-1">
                    Bạn đã khôi phục thành công mật khẩu.
                </h1>
            </div>
            <div>
                <NavLink to="/signin">
                    <Button
                        icon={true}
                        title="Đăng nhập"
                        className=" w-full py-4 rounded-none border-[2px] border-primary-black"
                        right={true}
                        color={'primaryicon'}>
                        <IconArrowLogin />
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export const RenderFormForgetPassword = ({ count, sendTypeForm }) => {
    let componentToRender;
    switch (count) {
        case 0:
            componentToRender = (
                <div className="animate__animated wow animate__fadeIn w-[28rem]">
                    <FormEmail sendTypeForm={sendTypeForm} />
                </div>
            );
            break;
        case 1:
            componentToRender = (
                <div className="animate__animated wow animate__fadeIn w-[28rem]">
                    <FormVerify sendTypeForm={sendTypeForm} />
                </div>
            );
            break;
        case 2:
            componentToRender = (
                <div className="animate__animated wow animate__fadeIn ">
                    <FormChangePassword sendTypeForm={sendTypeForm} />
                </div>
            );
            break;
        case 3:
            componentToRender = (
                <div className="animate__animated wow animate__fadeIn w-[28rem]">
                    <Finish />
                </div>
            );
            break;
        default:
            componentToRender = <div>Default Component</div>;
            break;
    }
    return <>{componentToRender}</>;
};
