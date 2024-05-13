import { useState } from 'react';
import { Button, InputSection, SoundSmall } from '../../../components';
import 'animate.css';
import { IconSpeakerHigh, IconHeart, IconPlusCircle } from '../../../svgs';

export const PopUp = ({ OnClose, work, partofspeech, pronunciation, example, sound }) => {
    const [show, setShow] = useState(false);
    return (
        <div className="">
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative max-h-[95vh] min-h-[90vh] flex flex-col justify-between transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-5xl">
                            <div className=" flex bg-white justify-between items-center px-8 py-4 border-b border-black">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                    Giải thích từ vựng
                                </h1>
                                <Button title="X" onClick={OnClose}></Button>
                            </div>
                            <div className=" flex flex-col justify-center h-[60vh] max-h-[60] gap-3 items-center">
                                <div className="  w-4/5 h-[60%] border-[2px] bg-white border-primary-black px-6 py-3">
                                    <h1 className="  mb-3 text-xs font-bold font-plusjakartasans text-primary-black">
                                        Tiếng anh
                                    </h1>
                                    <div className="  flex items-center mb-3 gap-3">
                                        <SoundSmall sound={sound} />
                                        <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-blue-800 ">
                                            {work}
                                        </h1>
                                    </div>
                                    <div className=" mb-5">
                                        <h1 className="  text-caption-1 font-bold font-plusjakartasans text-secondary-gray">
                                            Loại từ
                                        </h1>
                                        <h1 className=" text-body-3 font-bold font-plusjakartasans text-primary-black">
                                            {partofspeech}
                                        </h1>
                                    </div>
                                    <div className=" mb-5">
                                        <h1 className=" text-caption-1 font-bold font-plusjakartasans text-secondary-gray">
                                            Phiên âm
                                        </h1>
                                        <h1 className=" text-body-3 font-bold font-plusjakartasans text-primary-black">
                                            {pronunciation}
                                        </h1>
                                    </div>
                                    <div className="">
                                        <h1 className="mb-2 text-caption-1 font-bold font-plusjakartasans text-secondary-gray">
                                            Ý nghĩa
                                        </h1>
                                        <h1 className=" text-body-3 font-bold font-plusjakartasans text-primary-black">
                                            {example}
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-4/5 h-full border-[2px] bg-white border-primary-black px-6 py-3">
                                    <h1 className="mb-2 text-caption-1 font-bold font-plusjakartasans text-primary-black text-start">
                                        Video phát âm
                                    </h1>
                                    <CardVideo />
                                    {/* <div className=" mx-auto w-[100%] rounded-3xl bg-gray-500"></div> */}
                                </div>
                            </div>
                            <div className="flex bg-white justify-around px-8 py-4 gap-8 border-t border-secondary-gray">
                                {/* <Button
                                    onClick={OnClose}
                                    icon={true}
                                    right={true}
                                    color={'primary'}
                                    title="Thêm vào yêu thích"
                                    className=" w-1/2 py-4">
                                    <IconHeart />
                                </Button> */}
                                <Button
                                    title="Thêm vào danh sách"
                                    icon={true}
                                    color={'primary'}
                                    right={true}
                                    onClick={() => {
                                        setShow(true);
                                    }}
                                    className="  w-full py-4">
                                    <IconPlusCircle />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {show && <SubPopUp OnClose={() => setShow(false)} />}
        </div>
    );
};

export const CardVideo = ({ src = 'https://www.youtube.com/embed/y14IxVnBEaU' }) => {
    return (
        <div>
            <iframe
                className=" h-fit w-full"
                src={src}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    );
};

export const SubPopUp = ({ OnClose }) => {
    let datas = [
        {
            title: 'Danh sach 1',
        },
        {
            title: 'Danh sach 2',
        },
        {
            title: 'Danh sach 3',
        },
    ];
    const [data, setData] = useState(datas);
    let newdata = 'Hãy nhập tên danh sách';

    function CreateList() {
        datas.push({ title: 'Danh sách 4' });
        console.log(datas);
        setData([...data, newdata]);
    }
    return (
        <div className="">
            <div className="relative z-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative w-[60vh] max-h-[60vh] min-h-[60vh] flex flex-col justify-between transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:max-w-5xl">
                            <div className=" flex bg-white justify-between items-center px-8 mb-6 py-4 border-b border-black">
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                    Lưu từ vựng vào danh sách
                                </h1>
                                <Button title="X" onClick={OnClose}></Button>
                            </div>

                            <div className=" flex flex-col justify-start items-start h-[50vh] px-4 max-h-[60] gap-3">
                                <InputSection id="1" label="Danh sách yêu thích" />
                                {data.map((a, i) => (
                                    <InputSection key={i} label={a.title} id={a.title} />
                                ))}
                            </div>
                            <div className=" flex bg-white  border-t">
                                <Button
                                    onClick={CreateList}
                                    color={'primary'}
                                    title="Tạo danh sách mới"
                                    className="w-full py-4 rounded-b-lg rounded-t-none"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Toast = () => {};
