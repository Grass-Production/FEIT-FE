import { NavLink } from 'react-router-dom';
import { InputField, Form, Button } from '../../../components';
import { ArrowRight, IconCheckCircle, IconArrowLogin } from '../../../svgs';
import { useState } from 'react';
import { forgetpassword, verifypassowrd, changepassowrd } from '../../../services/userAPI';
import { Fragment } from 'react';
import 'animate.css';
export const FormEmail = ({ sendTypeForm }) => {
    const [email, setMail] = useState('');

    const test = () => {
        sendTypeForm(1);
    };

    const handleForgetPassword = async (event) => {
        event.preventDefault();
        const res = await forgetpassword({ email: email });
        console.log(res);
        if (res.status === 'success') {
            sendTypeForm(1);
        } else {
            alert('Tài khoảng chưa được đăng ký');
        }
    };

    return (
        <div className="">
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
                        <Button
                            icon={true}
                            type="submit"
                            title="Xác nhận"
                            className=" w-full py-4 rounded-none border-[2px] border-primary-black"
                            right={true}
                            color={'primaryicon'}>
                            <ArrowRight />
                        </Button>
                    </Form>
                </form>
            </div>
        </div>
    );
};

export const FormVerify = ({ sendTypeForm }) => {
    const [inputs, setInputs] = useState(['', '', '', '', '', '']);

    const handleSendPreTypeForm = () => {
        sendTypeForm(2);
    };

    const handleVerifyCode = async (event) => {
        event.preventDefault();
        const res = await verifypassowrd({ verification_code: inputs.join('') });
        console.log(res);
        if (res.status === 200) {
            sendTypeForm(1);
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
                    <Button
                        icon={true}
                        type="submit"
                        title="Xác nhận"
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
                            value={password.newpassword}
                            onChange={(e) => setPassowd({ ...password, newpassword: e.target.value })}
                            placeholder={'Tạo mật khẩu '}
                            className=" rounded-none w-full px-4 py-2"
                        />
                    </Form>
                    <Form label={'Nhập lại mật khẩu'} className={' w-full mb-6'}>
                        <InputField
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
