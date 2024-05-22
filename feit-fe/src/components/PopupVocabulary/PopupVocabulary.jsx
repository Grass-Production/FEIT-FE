import { useState, useEffect } from 'react';
// import { Button, InputSection, Sound, SoundSmall } from '../../../components';
import { Button } from '../Button';
import { InputSection, InputField } from '../Input';
import { Sound } from '../Sound';
import { SoundSmall } from '../Sound';
import 'animate.css';
import { IconSpeakerHigh, IconHeart, IconPlusCircle } from '../../svgs';
import { getMaskList, createMarkVocabulary, createMaskList } from '../../services/masklistAPI';
import { Loading } from '../Loading/Loading';
export const PopUp = ({ OnClose, word, partofspeech, pronunciation, example, sound, idVocabulary }) => {
    const [show, setShow] = useState(false);
    const img =
        'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464162/feit-static/Ch%C6%B0%C6%A1ng%208.png.png';
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
                                <div className=" w-4/5 h-[60%] border-[2px] bg-white border-primary-black px-6 py-3 ">
                                    <h1 className=" mb-3 text-xs font-bold font-plusjakartasans text-primary-black">
                                        Tiếng anh
                                    </h1>
                                    <div className=" flex items-center mb-3 gap-3">
                                        <SoundSmall sound={sound} />
                                        <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-blue-800">
                                            {word}
                                        </h1>
                                    </div>
                                    <div className=" mb-5 ">
                                        <h1 className=" text-caption-1 font-bold font-plusjakartasans text-secondary-gray">
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
                                <div className=" w-4/5 h-full border-[2px] bg-white border-primary-black px-6 py-3 ">
                                    {/* style=
                                    {{
                                        background: `url(${img}) no-repeat center/contain `,
                                    }} */}
                                    <h1 className=" mb-2 text-caption-1 font-bold font-plusjakartasans text-primary-black text-start">
                                        Video, hình ảnh phát âm
                                    </h1>
                                    <CardVideo />
                                </div>
                            </div>
                            <div className=" flex bg-white justify-around px-8 py-4 gap-8 border-t border-secondary-gray">
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
                                    className=" w-full py-4">
                                    <IconPlusCircle />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {show && <SubPopUp idVocabulary={idVocabulary} OnClose={() => setShow(false)} />}
        </div>
    );
};

export const CardVideo = ({ src = 'https://www.youtube.com/embed/2ENmRL7pTSg' }) => {
    return (
        <div className=' h-[90%]'>
            <iframe
                className=" h-full w-full"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    );
};

export const SubPopUp = ({ OnClose, idVocabulary }) => {
    const [loading, setLoading] = useState(true);
    const [maskLists, setMaskLists] = useState([]);
    const [idmaskLists, setIdMaskLists] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isShowInput, setIsShowInput] = useState(false);
    const [render, setRender] = useState(0);
    useEffect(() => {
        const handleGetMaskList = async () => {
            try {
                setLoading(true);
                const res = await getMaskList();
                setMaskLists(res.mark_list.mark_list);
                // if (res.mark_list.mark_list !== null || res.mark_list.mark_list !== '') {
                //     setIsLoading(false);
                // }
                console.log(res);
                if (res.status === 'success') {
                    setLoading(false);
                }
            } catch (error) {
                console.log('message :', error);
            }
        };

        handleGetMaskList();
    }, [render]);

    const handleIsShowInput = () => {
        setIsShowInput(!isShowInput);
    };

    const handleOnChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleCreateMaskList = async () => {
        try {
            setLoading(true);
            const res = await createMaskList({ name_list: inputValue });
            console.log(res);
            setRender((r) => r + 1);
            setInputValue('');
            setIsShowInput(false);
            if (res.status === 'success') {
                setLoading(false);
            }
        } catch (error) {
            console.log('message :', error);
        }
    };

    const handleCheckboxChange = (e) => {
        const { id: checkboxId, checked } = e.target;
        if (checked) {
            setIdMaskLists((prevIds) => [...prevIds, checkboxId]);
        } else {
            setIdMaskLists((prevIds) => prevIds.filter((itemId) => itemId !== checkboxId));
        }
    };

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

    const handleCreateMarkVocabulary = async () => {
        try {
            for (let i = 0; i < idmaskLists.length; i++) {
                setLoading(true);
                const res = await createMarkVocabulary({
                    mark_list_id: idmaskLists[i],
                    vocabulary_id: idVocabulary,
                });
                console.log('them tu', res);
                setLoading(false);
            }
        } catch (error) {
            console.log('message :', error);
        }
    };

    return (
        <>
            {loading === false ? (
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
                                        {maskLists !== null && <>
                                            {maskLists.map((v, i) => (
                                                <InputSection
                                                    onChange={handleCheckboxChange}
                                                    key={v._id}
                                                    label={v.name_list}
                                                    id={v._id}
                                                />
                                            ))}

                                        </>}
                                        {isShowInput && (
                                            <InputField
                                                value={inputValue}
                                                onChange={handleOnChangeInput}
                                                placeholder={'Nhập tên danh sách'}
                                            />
                                        )}
                                    </div>
                                    <div className=" flex bg-white border-t border-secondary-gray p-4 gap-3">
                                        <Button
                                            onClick={handleCreateMarkVocabulary}
                                            color={'primary'}
                                            title="Thêm"
                                            className="w-full py-4 "></Button>
                                        {inputValue != '' ? (
                                            <Button
                                                onClick={handleCreateMaskList}
                                                color={'primary'}
                                                title={'Đồng ý'}
                                                className="w-full py-4 "></Button>
                                        ) : (
                                            <Button
                                                onClick={handleIsShowInput}
                                                color={!isShowInput && 'primary'}
                                                title={isShowInput ? 'Hủy' : 'Tạo danh sách mới'}
                                                className="w-full py-4 "></Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
};

export const Toast = () => { };
