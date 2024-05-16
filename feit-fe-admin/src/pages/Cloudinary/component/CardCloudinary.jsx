import PaginationItem from '@mui/material/PaginationItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconFolderSimple } from '../../../svgs';

export const CardView = ({ children, sendPage, count }) => {
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        setPage(value);
        console.log(value);
        if (value > 1) {
            sendPage(`?page=${value}`);
        } else {
            sendPage('');
        }
    };
    const folders = [
        {
            name: 'feit-audio-vocabulary',
        },
        {
            name: 'feit-lesson',
        },
        {
            name: 'feit-quiz',
        },
        {
            name: 'feit-static',
        },
        {
            name: 'feit-exam',
        },
        {
            name: 'feit-user',
        },
    ];
    return (
        <div className="">
            <div className=" border-[4px] border-primary-black shadow-card-home bg-white px-10 py-8">
                <div className="">
                    <div className=" mb-8 border-b border-primary-black pb-3">
                        <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                            Tập tin
                        </h1>
                        <h1 className=" text-body-2 font-body-2 font-plusjakartasans text-secondary-gray">6 tập tin</h1>
                    </div>
                    <div className="grid grid-cols-4 gap-10">
                        {folders.map((v, i) => {
                            return <Folders name={v.name} id={i} key={i} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Folders = ({ name, id }) => {
    return (
        <NavLink to={`/cloudinary/${id}`}>
            <div className="border-[2px] hover:bg-neutral-grey cursor-pointer gap-1 flex justify-start items-center border-primary-black px-3 py-1">
                <IconFolderSimple />
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">{name}</h1>
            </div>
        </NavLink>
    );
};

export const CardItem = ({ data }) => {
    return (
        <>
            {data.map((v, i) => {
                return (
                    <div key={i} className=" border-b border-primary-black px-3 pt-3 pb-4">
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Client IP</h1>
                            </div>
                            <div className="">
                                <h1>{v.client_ip}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Method</h1>
                            </div>
                            <div className="">
                                <h1>{v.method}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Status code</h1>
                            </div>
                            <div className="">
                                <h1>{v.status_code}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Body size</h1>
                            </div>
                            <div className="">
                                <h1>{v.status_code}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Path</h1>
                            </div>
                            <div className="">
                                <h1>{v.path}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Latency</h1>
                            </div>
                            <div className="">
                                <h1>{v.latency}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Error</h1>
                            </div>
                            <div className="">
                                <h1>{v.error}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Thời gian hoạt động</h1>
                            </div>
                            <div className="">
                                <h1>{v.activity_time}</h1>
                            </div>
                        </div>
                        <div className=" flex justify-start">
                            <div className=" w-1/4">
                                <h1>Thời gian hết hạn</h1>
                            </div>
                            <div className="">
                                <h1>{v.expire_at}</h1>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

// export const PopupCreateList = ({ handleSendIsPopup }) => {
//     const HandleParentSendIsPopup = () => {
//         handleSendIsPopup(false);
//     };

//     const HandleChilSendIsPopup = (event) => {
//         event.stopPropagation();
//         handleSendIsPopup(false);
//     };

//     return (
//         <div className="">
//             <div className="relative z-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
//                 <div
//                     onClick={HandleParentSendIsPopup}
//                     className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

//                 <div className="fixed inset-0 z-10 bg-gray-500 bg-opacity-75 transition-opacity w-screen overflow-y-auto">
//                     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//                         <div className=" z-20  relative w-[20vw] max-h-[60vh] h-[40vh] flex flex-col justify-between  bg-white border-[4px] border-primary-black text-left shadow-xl transition-all  sm:max-w-5xl">
//                             <div className=" flex bg-white justify-between items-center px-8 mb-6 py-4 border-b border-black">
//                                 <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
//                                     Thêm danh sách
//                                 </h1>
//                                 <Button onClick={HandleChilSendIsPopup} icon={true} right={true} title="">
//                                     <IconClose color="#000000" />
//                                 </Button>
//                             </div>
//                             <div className=" flex flex-col justify-center items-start  px-4 gap-3">
//                                 <h1 className=" text-label-2 font-label-2 font-plusjakartasans text-primary-black">
//                                     Tên danh sách
//                                 </h1>
//                                 <InputField
//                                     className=" rounded-none border-primary-black w-full border"
//                                     value={valueInput}
//                                     onChange={handleOnChangeInput}
//                                     placeholder={'Nhập tên danh sách'}
//                                 />
//                             </div>
//                             <div className=" flex px-4 border-secondary-gray gap-8 py-4 border-t">
//                                 <Button
//                                     color={'primary'}
//                                     onClick={HandleChilSendIsPopup}
//                                     icon={true}
//                                     right={true}
//                                     title="Hủy"
//                                     className="w-full  py-4">
//                                     <IconClose />
//                                 </Button>
//                                 <Button
//                                     color={'primary'}
//                                     title="Thêm"
//                                     onClick={handleCreateMaskList}
//                                     icon={true}
//                                     right={true}
//                                     className="w-full py-4 ">
//                                     <IconPlus />
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
