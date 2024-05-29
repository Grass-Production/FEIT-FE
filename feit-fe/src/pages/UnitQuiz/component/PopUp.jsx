import { useState } from 'react';
import { Button } from '../../../components';
import 'animate.css';

export const PopUp = ({ OnClose }) => {
    return (
        <div className="">
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative max-h-[95vh] min-h-[90vh] flex flex-col justify-between transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-5xl">
                            <div className=" flex justify-between items-center px-8 py-4 border-b border-black">
                                <h1>Giải thích từ vựng</h1>
                                <Button></Button>
                            </div>
                            <div className=" flex justify-around items-center">
                                <div className=" w-2/5">
                                    <h1 className=" mb-3">Tiếng anh</h1>
                                    <div className=" flex justify-start items-center gap-3 mb-10">
                                        <div className="w-16 h-16 rounded-full  bg-gray-500"></div>
                                        <h1 className=" text-Dmd font-medium">Algorithm</h1>
                                    </div>
                                    <div className=" mb-8">
                                        <h1 className=" mb-3 font-medium text-lg">Loại từ</h1>
                                        <h1 className=" text-Hsm font-medium">Danh từ (Noun)</h1>
                                    </div>
                                    <div className=" mb-8">
                                        <h1 className="mb-3 font-medium text-lg">Phiên âm</h1>
                                        <h1 className=" text-Hsm font-medium">/ˈæl.ɡə.rɪ.ðəm/</h1>
                                    </div>
                                    <div className="">
                                        <h1 className="mb-3 font-medium text-lg">Ý nghĩa</h1>
                                        <h1 className=" text-Hsm font-medium">
                                            Một tập hợp các bước để giải quyết một vấn đề cụ thể hoặc thực hiện một
                                            nhiệm vụ cụ thể.
                                        </h1>
                                    </div>
                                </div>
                                <div className=" w-2/5">
                                    <h1 className=" mb-3 font-medium text-lg text-end">Video phát âm</h1>
                                    <div className=" mx-auto w-[25rem] h-[25rem] rounded-sm bg-gray-500"></div>
                                </div>
                            </div>
                            <div className=" flex justify-around px-8 py-4 gap-3 border-t">
                                <Button onClick={OnClose} title="Đóng" className=" w-full"></Button>
                                <Button title="Thêm vào danh sách" className=" w-full"></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
