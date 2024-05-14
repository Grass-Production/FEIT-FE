import { IconHeart, IconPlus, IconClose, IconList, IconDelete, IconCheckCircle, IconCheck } from '../../../svgs';
import { Button, InputSection, InputField } from '../../../components';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { createMaskList, deleteMaskList } from '../../../services/masklistAPI';

export const CardFavoritesList = ({ vocabulary = '5', name }) => {
    return (
        <div className=" flex h-full  justify-center items-center  border-[4px] bg-gradient-to-r from-[#FDCBF1] via-pink-150 to-[#E6DEE9] border-primary-black px-3 ">
            <div className=" flex flex-col justify-center items-center">
                <IconHeart color="#343330" size="80" />
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans mt-6 text-primary-black">{name}</h1>
                <h1 className=" text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray">
                    {vocabulary} từ vựng
                </h1>
            </div>
        </div>
    );
};

export const PopupCreateList = ({ handleSendIsPopup, sendRender }) => {
    const [valueInput, setValueInput] = useState('');
    const [render, setRender] = useState(0);
    const handleOnChangeInput = (e) => {
        setValueInput(e.target.value);
    };

    const handleCreateMaskList = async () => {
        try {
            const res = await createMaskList({ name_list: valueInput });
            console.log(res);
            const a = 4;
            sendRender((r) => r + 1);
        } catch (error) {
            console.log('message :', error);
        }
    };

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
                                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                                    Thêm danh sách
                                </h1>
                                <Button onClick={HandleChilSendIsPopup} icon={true} right={true} title="">
                                    <IconClose color="#000000" />
                                </Button>
                            </div>
                            <div className=" flex flex-col justify-center items-start  px-4 gap-3">
                                <h1 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black">
                                    Tên danh sách
                                </h1>
                                <InputField
                                    className=" rounded-none border-primary-black w-full border"
                                    value={valueInput}
                                    onChange={handleOnChangeInput}
                                    placeholder={'Nhập tên danh sách'}
                                />
                            </div>
                            <div className=" flex px-4 border-secondary-gray gap-8 py-4 border-t">
                                <Button
                                    color={'primary'}
                                    onClick={HandleChilSendIsPopup}
                                    icon={true}
                                    right={true}
                                    title="Hủy"
                                    className="w-full  py-4">
                                    <IconClose />
                                </Button>
                                <Button
                                    color={'primary'}
                                    title="Thêm"
                                    onClick={handleCreateMaskList}
                                    icon={true}
                                    right={true}
                                    className="w-full py-4 ">
                                    <IconPlus />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CardLoading = () => {
    return (
        <>
            <div className="animate-pulse ">
                <div className=" h-72 relative  bg-gray-300 "></div>
            </div>
        </>
    );
};

export const CardCustomFavoritesList = ({ vocabulary = '5', name, id, handleSetRender }) => {
    const [isPopup, setIsPopup] = useState(false);

    const handleReceiveIsPopup = (value) => {
        setIsPopup(value);
    };
    const handleSetIsPopup = () => {
        setIsPopup(!isPopup);
    };
    return (
        <>
            <div className=" h-72 relative cursor-pointer">
                <div onClick={handleSetIsPopup} className=" z-10 absolute top-2 right-2">
                    <IconDelete />
                </div>
                <NavLink to={`/list/${id}`}>
                    <div className="  flex h-full  justify-center items-center border-[4px] border-primary-black px-3 ">
                        <div className=" flex flex-col justify-center items-center">
                            <IconList color="#000000" size="67" />
                            <h1 className=" text-button-1 font-button-1 font-plusjakartasans mt-6 text-primary-black">
                                {name}
                            </h1>
                            <h1 className="text-caption-1 font-caption-1 font-plusjakartasans text-secondary-gray">
                                27 từ vựng
                            </h1>
                        </div>
                    </div>
                </NavLink>
            </div>
            {isPopup && (
                <PopupDeleteList
                    sendRender={handleSetRender}
                    idmasklist={id}
                    handleSendIsPopup={handleReceiveIsPopup}
                />
            )}
        </>
    );
};

export const PopupDeleteList = ({ handleSendIsPopup, idmasklist, sendRender }) => {
    const HandleParentSendIsPopup = () => {
        handleSendIsPopup(false);
    };

    const HandleChilSendIsPopup = (event) => {
        event.stopPropagation();
        handleSendIsPopup(false);
    };

    const handleDeleteMaskList = async () => {
        try {
            const res = await deleteMaskList(idmasklist);
            console.log(res);
            sendRender((r) => r + 1);
        } catch (error) {
            console.log('message : ', error);
        }
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
                            <div className=" flex flex-col justify-center items-center  px-4 gap-3">
                                <IconDelete color="#FE330B" size="50" />
                                <h1 className=" text-button-2 font-button-2 font-plusjakartasans text-semantic-danger">
                                    Bạn có muốn xóa danh sách không ?
                                </h1>
                            </div>
                            <div className=" flex px-4 border-secondary-gray gap-8 py-4 border-t">
                                <Button
                                    color={'primary'}
                                    onClick={HandleChilSendIsPopup}
                                    icon={true}
                                    right={true}
                                    title="Hủy"
                                    className="w-full py-4 border-[2px] bg-primary-blue-500 !text-white">
                                    <IconClose color="#FEFEFE" />
                                </Button>
                                <Button
                                    color={'primary'}
                                    onClick={handleDeleteMaskList}
                                    title="Xóa"
                                    icon={true}
                                    right={true}
                                    className="w-full py-4 ">
                                    <IconCheck />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
