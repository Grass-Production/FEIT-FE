import { useEffect, useState } from 'react';
import { InputField } from '../../../components';
export const FillInTheBlank = ({
    field,
    result,
    mean,
    right = false,
    error = false,
    inputValue,
    setInputValue,
    handleChange,
}) => {
    const [statusResult, setStatusResult] = useState(false);

    useEffect(() => {}, []);

    // function handleChange(event) {
    //     setInputValue(event.target.value);
    // }

    return (
        <div className=" w-[56.563rem] max-h-[750px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Hãy viết nào chỗ trống
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    Hãy điền từ bạn nghe được vào chỗ còn trống ấy !
                </h1>
            </div>
            <div className="mx-auto w-11/12">
                <div className="">
                    <div className=" flex gap-8 justify-center">
                        <div className="  mb-10 border border-secondary-gray w-56 h-56 rounded-[40px] bg-white"></div>
                        <div className="  mb-10 border border-secondary-gray w-56 h-56 rounded-[40px] bg-white"></div>
                    </div>
                    <div className=" mb-10">
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                            Câu:{inputValue}
                        </h1>
                        {/* <h1 className="text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                            Today i’m gonna interview _ _ _ _ _
                        </h1> */}
                        {right ? (
                            <h1 className="text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                Today i’m gonna interview {result}
                            </h1>
                        ) : (
                            <h1
                                className={`text-heading-7 font-heading-7 font-plusjakartasans ${error ? ' text-semantic-danger' : 'text-primary-black'} `}>
                                Today i’m gonna interview {error ? field : '_ _ _ _'}
                            </h1>
                        )}
                        {error && (
                            <>
                                <h1 className=" text-heading-7 mt-3 font-heading-7 font-plusjakartasans text-semantic-success">
                                    Today i’m gonna interview {result}
                                </h1>
                            </>
                        )}
                    </div>
                    <InputField
                        className={' w-full'}
                        onChange={handleChange}
                        value={inputValue}
                        placeholder={'Hãy viết từ còn trống'}
                    />
                </div>
            </div>
        </div>
    );
};
