import { InputField, Sound } from '../../../components';
import { IconSpeakerHigh, IconSpeakerLow, IconClose } from '../../../svgs';
import { Button } from '../../../components';
import { IconNote } from '../../../svgs';
import { NavLink } from 'react-router-dom';

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

export const Listen = ({ word, explain_vie, sound, mean }) => {
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
            <div className=" gap-[60px] flex justify-center items-center mx-auto border-[4px] border-primary-black p-8">
                <div className=" ">
                    {/* <div className=" m-auto border-[4px] flex justify-center items-center border-secondary-gray w-44 h-44 rounded-[40px] bg-white">
                        <IconSpeakerHigh sizew="100" sizeh="100" color="#14121B" />
                    </div> */}
                    <Sound sound={sound} />
                </div>
                <div className="  ">
                    <div className=" mb-8 border-b pb-3 border-primary-black">
                        <h1 className=" text-body-1 font-bold font-plusjakartasans text-primary-black mb-3">
                            Tiếng Anh
                        </h1>
                        <h1 className=" border border-primary-black p-2 bg-primary-blue-50 text-heading-3 font-heading-3 font-bitter text-primary-blue-500">
                            {word}
                        </h1>
                    </div>
                    <div>
                        <h1 className=" text-xs font-bold font-plusjakartasans text-primary-black mb-3">Tiếng Việt</h1>
                        <h1 className=" text-body-1 font-bold font-plusjakartasans text-primary-black">{mean}</h1>
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
            <div className="mx-auto min-w-[70%]  p-12 border-[4px] border-primary-black">
                <div className="">
                    <div className=" mb-10 border-b border-primary-black pb-6">
                        <h1 className="  text-button-2 font-button-2 font-plusjakartasans text-primary-black mb-3">
                            Tiếng Anh
                        </h1>
                        <p className=" max-w-[60vw] text-body-1 font-bold font-plusjakartasans text-primary-black">
                            {example_eng}
                        </p>
                    </div>
                    <div>
                        <h1 className=" text-button-2 font-button-2 font-plusjakartasans text-primary-black mb-3">
                            Phiên dịch
                        </h1>
                        <p className=" max-w-[60vw] text-body-1 font-bold  font-plusjakartasans text-primary-black">
                            {example_vie}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FillInTheBlank = ({
    field,
    result,
    right = false,
    error = false,
    inputValue,
    handleChange,
    sound,
    question,
}) => {
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
                        {/* <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                            <IconSpeakerHigh sizeh="100" sizew="100" color="#14121B" />
                        </div> */}
                        <Sound sound={sound} />
                        <div className="  mb-10 border-[4px] border-secondary-gray w-44 h-44 flex justify-center items-center rounded-[40px] bg-white">
                            <Sound sound={sound} />
                        </div>
                    </div>
                    <div className=" mb-10">
                        <h1 className=" text-caption-1 font-bold font-plusjakartasans text-primary-black mb-3">Câu</h1>
                        {right ? (
                            <h1 className="text-heading-7 font-heading-7 font-plusjakartasans text-semantic-success">
                                {question} : {result}
                            </h1>
                        ) : (
                            <h1
                                className={`text-heading-7 font-heading-7 font-plusjakartasans ${error ? ' text-semantic-danger' : 'text-primary-black'} `}>
                                {question} {error && inputValue}
                            </h1>
                        )}
                        {error && (
                            <>
                                <h1 className=" text-heading-7 mt-3 font-heading-7 font-plusjakartasans text-semantic-success">
                                    {question} : {result}
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

export const PageLoading = () => {
    return (
        <div className=" h-screen justify-center flex flex-col items-center">
            <div class=" relative flex justify-center items-center">
                <div class="absolute animate-spin rounded-full  h-96 w-96 border-t-4 border-b-4 border-purple-500"></div>
                <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" class="rounded-full w-[15vw]" />
            </div>
        </div>
    );
};

export const PopupDeleteList = ({ handleSendIsPopup, lessonid }) => {
    const HandleParentSendIsPopup = () => {
        handleSendIsPopup(false);
    };

    const HandleChilSendIsPopup = (event) => {
        event.stopPropagation();
        handleSendIsPopup(false);
    };

    return (
        <div className="">
            <div className="relative z-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div
                    onClick={HandleParentSendIsPopup}
                    className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className=" z-20  relative w-[20vw] max-h-[60vh] h-[40vh] flex flex-col justify-between  bg-white border-[4px] border-primary-black text-left shadow-xl transition-all  sm:max-w-5xl">
                            <div className=" flex bg-white justify-between items-center px-8 mb-6 py-4 border-b border-black">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-semantic-danger">
                                    Xóa danh sách
                                </h1>
                                <Button onClick={HandleChilSendIsPopup} icon={true} right={true} title="">
                                    <IconClose color="#000000" />
                                </Button>
                            </div>
                            <div className=" mx-auto w-16 h-16 flex justify-center items-center rounded-full bg-semantic-danger">
                                <IconClose color="#fff" />
                            </div>
                            <div className=" flex flex-col justify-center items-center  px-4 gap-3">
                                <h1 className=" text-button-2 font-button-2 font-plusjakartasans text-semantic-danger">
                                    Bạn có có chắc muốn kết thúc phiên học ?
                                </h1>
                            </div>
                            <div className=" flex px-4 border-secondary-gray gap-8 py-4 border-t">
                                <NavLink className={'w-full'} to={`/learn/lesson/${lessonid}`}>
                                    <Button
                                        color={'primary'}
                                        onClick={HandleChilSendIsPopup}
                                        title="Chắn chắn"
                                        className="w-full"></Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
