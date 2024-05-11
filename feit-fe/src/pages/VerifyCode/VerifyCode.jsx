import { IconArrowLeft } from '../../svgs';
import { Button } from '../../components';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { verifysignup } from '../../services/userAPI';
import { useNavigate } from 'react-router-dom';

export default function VerifyCode() {
    const [inputs, setInputs] = useState(['', '', '', '', '', '']);
    const [minute, setMinute] = useState(29);
    const [second, setSecond] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setSecond((prevSecond) => {
                // Nếu second đang là 0, reset nó và giảm minute đi 1
                if (prevSecond === 0) {
                    setMinute((prevMinute) => prevMinute - 1);
                    return 59; // Reset second về 59
                } else {
                    return prevSecond - 1; // Giảm second đi 1
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async () => {
        try {
            const res = await verifysignup({ verification_code: inputs.join('') });
            if (res.status === 200) {
                navigate(`/signin`);
            }
            console.log(res);
        } catch (error) {
            console.log('error :', error);
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
        e.preventDefault();
        const text = e.clipboardData.getData('text');
        if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
            return;
        }
        const digits = text.split('').slice(0, inputs.length);
        setInputs(digits);
    };

    return (
        <div className="">
            <div className="">
                <NavLink to="/signup">
                    <Button className=" absolute ml-[120px] mt-[120px]" icon={true} left={true} title="Quay lại">
                        <IconArrowLeft />
                    </Button>
                </NavLink>
                <div className="h-screen m-auto flex justify-center items-center">
                    <div className=" shadow-card-home border-[4px] border-primary-black px-14 py-14">
                        <div className=" border-b pb-2 border-secondary-gray mb-10">
                            <h1 className=" mb-1 text-center text-heading-6 font-heading-6 font-plusjakartasans text-primary-black">
                                Xác nhận đăng ký
                            </h1>
                            <h3 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                                Chúng tôi đã gửi mã xác nhận về email của bạn, vui lòng kiểm tra email của bạn
                            </h3>
                        </div>
                        <h1 className=" mb-10 text-center text-heading-6 font-heading-6 font-plusjakartasans text-primary-black">
                            {minute}:{second < 10 ? `0${second}` : second}
                        </h1>
                        <div class="flex justify-center gap-10 mb-10">
                            {inputs.map((input, index) => (
                                <input
                                    key={index}
                                    id={`input-${index}`}
                                    type="text"
                                    className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                    pattern="\d*"
                                    maxLength="1"
                                    value={input}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onInput={(e) => handleInput(e, index)}
                                    onFocus={handleFocus}
                                    onPaste={handlePaste}
                                />
                            ))}
                        </div>
                        <Button
                            onClick={handleSubmit}
                            title="Xác nhận"
                            className=" w-full"
                            color={'tertiaryicon'}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// import { IconArrowLeft } from '../../svgs';
// import { Button } from '../../components';
// import { NavLink } from 'react-router-dom';
// import { useState } from 'react';
// export default function VerifyCode() {
//     const [inputs, setInputs] = useState(['', '', '', '']);

//     const handleKeyDown = (e, index) => {
//         if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
//             e.preventDefault();
//         }

//         if (e.key === 'Backspace') {
//             const newInputs = [...inputs];
//             newInputs[index] = '';
//             setInputs(newInputs);
//             const prevInput = document.getElementById(`input-${index - 1}`);
//             if (prevInput) {
//                 prevInput.focus();
//             }
//         } else if (e.key === 'Delete') {
//             const newInputs = [...inputs];
//             newInputs[index] = '';
//             setInputs(newInputs);
//             if (index < inputs.length - 1) {
//                 const nextInput = document.getElementById(`input-${index + 1}`);
//                 if (nextInput) {
//                     nextInput.focus();
//                 }
//             }
//         }
//     };

//     const handleInput = (e, index) => {
//         const newInputs = [...inputs];
//         newInputs[index] = e.target.value;
//         setInputs(newInputs);

//         if (e.target.value && index < inputs.length - 1) {
//             const nextInput = document.getElementById(`input-${index + 1}`);
//             if (nextInput) {
//                 nextInput.focus();
//             }
//         }
//     };

//     const handleFocus = (e) => {
//         e.target.select();
//     };

//     const handlePaste = (e) => {
//         e.preventDefault();
//         const text = e.clipboardData.getData('text');
//         if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
//             return;
//         }
//         const digits = text.split('').slice(0, inputs.length);
//         setInputs(digits);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Your form submission logic here
//     };
//     return (
//         <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
//             <header className="mb-8">
//                 <h1 className="text-2xl font-bold mb-1">Mobile Phone Verification</h1>
//                 <p className="text-[15px] text-slate-500">
//                     Enter the 4-digit verification code that was sent to your phone number.
//                 </p>
//             </header>
//             <h1>{inputs}</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="flex items-center justify-center gap-3">
//                     {inputs.map((input, index) => (
//                         <input
//                             key={index}
//                             id={`input-${index}`}
//                             type="text"
//                             className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
//                             pattern="\d*"
//                             maxLength="1"
//                             value={input}
//                             onKeyDown={(e) => handleKeyDown(e, index)}
//                             onInput={(e) => handleInput(e, index)}
//                             onFocus={handleFocus}
//                             onPaste={handlePaste}
//                         />
//                     ))}
//                 </div>
//                 <div className="max-w-[260px] mx-auto mt-4">
//                     <button
//                         type="submit"
//                         className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">
//                         Verify Account
//                     </button>
//                 </div>
//             </form>
//             <div className="text-sm text-slate-500 mt-4">
//                 Didn't receive code?{' '}
//                 <a href="#0" className="font-medium text-indigo-500 hover:text-indigo-600">
//                     Resend
//                 </a>
//             </div>
//         </div>
//     );
// }
