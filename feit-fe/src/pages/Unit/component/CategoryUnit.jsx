import { InputField } from '../../../components';
import { IconSpeakerHigh, IconSpeakerLow } from '../../../svgs';

import { IconNote } from '../../../svgs';

export const Tip = () => {
    return (
        <div className="w-[85rem] max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div className=" flex gap-4 justify-center items-center">
                <IconNote />
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-secondary-gray">Tip ghi nhớ</h1>
            </div>
            <div className="">
                <h1 className=" text-center text-heading-3 font-heading-3 font-bitter text-foundation-brightcyan-700">
                    “Các bạn nên ghi chú những từ vựng này để ghi nhớ tốt hơn nhé !”
                </h1>
            </div>
        </div>
    );
};

export const Listen = ({ word, explain_vie }) => {
    return (
        <div className="  max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" mb-1 text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black">
                    Hãy nhấn để nghe từ vựng
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                    Hãy nhấn vào biểu tượng âm thanh để nghe từ vựng nha !
                </h1>
            </div>
            <div className=" w-3/4 flex justify-center items-center mx-auto">
                <div className=" w-1/2 ">
                    <div className=" m-auto border-[4px] flex justify-center items-center border-secondary-gray w-44 h-44 rounded-[40px] bg-white">
                        <IconSpeakerHigh sizew="100" sizeh="100" color="#14121B" />
                    </div>
                </div>
                <div className=" w-1/2 ">
                    <div className=" mb-8">
                        <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray mb-3">
                            Tiếng Anh
                        </h1>
                        <h1 className=" text-heading-3 font-heading-3 font-bitter text-primary-blue-700">{word}</h1>
                    </div>
                    <div>
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray mb-3">
                            Tiếng Việt
                        </h1>
                        <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">
                            {explain_vie}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Example = ({ example_vie, example_eng }) => {
    return (
        <div className="  max-h-[500px] h-[60vh] flex flex-col justify-around items-center">
            <div>
                <h1 className=" text-center text-heading-4 font-plusjakartasans font-heading-4 text-primary-black mb-3">
                    Câu ví dụ
                </h1>
                <h1 className=" text-center text-body-1 font-body-1 font-plusjakartasans text-primary-black ">
                    Bạn hãy đọc kỹ phần ví dụ để hiểu rõ hơn từ vựng nha hí hí !
                </h1>
            </div>
            <div className="mx-auto w-3/4">
                <div className="">
                    <div className=" mb-10">
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                            Tiếng Anh
                        </h1>
                        <p className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">
                            {example_eng}
                        </p>
                    </div>
                    <div>
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                            Tiếng Việt
                        </h1>
                        <p className=" text-body-1 font-body-1 font-plusjakartasans text-primary-black">
                            {example_vie}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FillInTheBlank = ({ field, result, right = false, error = false, inputValue, handleChange }) => {
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
                        <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                            <IconSpeakerHigh sizeh="100" sizew="100" color="#14121B" />
                        </div>
                        <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                            <IconSpeakerLow />
                        </div>
                    </div>
                    <div className=" mb-10">
                        <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-primary-black mb-3">
                            Câu:{inputValue}
                        </h1>
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