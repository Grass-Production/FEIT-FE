import { IconArrowLeft } from '../../svgs';
import { Button } from '../../components';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { verifysignup } from '../../services/userAPI';
import { useNavigate } from 'react-router-dom';
import { ToastError } from '../../components';
export default function VerifyCode() {
    const [inputs, setInputs] = useState(['', '', '', '', '', '']);
    const [minute, setMinute] = useState(29);
    const [second, setSecond] = useState(5);
    const [isLoading, setIsLoading] = useState(false)
    const [isToast, setIsToast] = useState(false)

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
            setIsLoading(true)
            const res = await verifysignup({ verification_code: inputs.join('') });
            if (res.status === 200) {
                setIsLoading(false)
                navigate(`/signin`);
            }
            console.log(res);
        } catch (error) {
            setIsToast(true)
            setIsLoading(false)
            setTimeout(() => setIsToast(false), 2000);

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
            {isToast && <ToastError message='Mã xác thực không chính xác' />}
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

                        {isLoading ? <Button disabled={true} className=' w-full mt-9' title='Đang xử lý...' icon={true} right={true}>
                            <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                        </Button> :
                            <Button
                                onClick={handleSubmit}
                                title="Xác nhận"
                                className=" w-full"
                                color={'tertiaryicon'}></Button>}
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
