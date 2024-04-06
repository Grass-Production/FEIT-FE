import { InputField } from '../../../components';
export const FillInTheBlankReview = ({ field, result, mean, right = false, error = false }) => {
    return (
        <div className=" w-[56.563rem] max-h-[750px] h-[70vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Nghĩa của từ vựng
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    Hãy viết nghĩa tiếng Việt của từ vựng dưới đây
                </h1>
            </div>

            <h1 className=" text-heading-6 font-heading-6 font-plusjakartasans text-primary-black text-center">
                Cú pháp
            </h1>

            <div className="mx-auto w-11/12">
                <div className="">
                    {right ? (
                        <>
                            <div className=" mb-10">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                                    Đáp án của bạn
                                </h1>
                                <InputField className={' w-full'} placeholder={'Hãy viết từ còn trống'} />
                            </div>
                            <div className=" border-t border-secondary-gray pt-4">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                                    Đáp án đúng
                                </h1>

                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                    Syntax
                                </h1>
                            </div>
                        </>
                    ) : (
                        <div className=" mb-10">
                            <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                                Đáp án của bạn
                            </h1>
                            <InputField
                                status={error ? 'error' : null}
                                className={' w-full'}
                                placeholder={'Hãy viết từ còn trống'}
                            />
                        </div>
                    )}
                    {error && (
                        <>
                            <div className=" border-t border-secondary-gray pt-4">
                                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                                    Đáp án đúng
                                </h1>

                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                    Syntax
                                </h1>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
