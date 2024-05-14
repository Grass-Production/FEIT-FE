import { NavLink } from 'react-router-dom';
import { CardFavoritesList, PopupCreateList, CardCustomFavoritesList, CardLoading } from './component';
import { IconHeart, IconPlusCircle, IconCheckCircle } from '../../svgs';
import { useEffect, useState } from 'react';
import { getMaskList } from '../../services/masklistAPI';
export default function List() {
    const [maskLists, setMaskLists] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const [isPopup, setIsPopup] = useState(false);

    const [render, setRender] = useState(0);

    const handleReceiveIsPopup = (value) => {
        setIsPopup(value);
    };

    const handleSetRender = (value) => {
        setRender(value);
    };

    const handleSetIsPopup = () => {
        setIsPopup(!isPopup);
    };

    useEffect(() => {
        const handleGetMaskList = async () => {
            try {
                const res = await getMaskList();
                setMaskLists(res.mark_list.mark_list);
                if (res.mark_list.mark_list !== null || res.mark_list.mark_list !== '') {
                    setIsLoading(false);
                }
                console.log(res.mark_list.mark_list);
            } catch (error) {
                console.log('message :', error);
            }
        };
        handleGetMaskList();
    }, [render]);

    return (
        <div className=" px-10">
            <>
                <h1 className=" mt-7 text-center text-heading-6 font-plusjakartasans font-heading-6 text-primary-black mb-8">
                    Danh sách của bạn {render}
                </h1>
                <div className="grid grid-cols-6 gap-4">
                    <div onClick={handleSetIsPopup} className=" h-72 cursor-pointer">
                        <div className=" flex h-full  justify-center items-center border-[4px] border-dashed  border-secondary-gray px-3 ">
                            <div className=" flex flex-col justify-center items-center">
                                <IconPlusCircle color="#96999C" size="67" />
                                {/* <h1 className=" text-button-1 font-button-1 font-plusjakartasans mt-6 text-primary-black">
                                    Danh sách yêu thích
                                </h1> */}
                                <h1 className=" mt-7 text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                                    Thêm danh sách
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className=" h-72">
                        <NavLink to="/list/favoritelist">
                            <CardFavoritesList />
                        </NavLink>
                    </div>

                    {isLoading ? (
                        <CardLoading />
                    ) : (
                        <>
                            {maskLists.map((v) => {
                                return (
                                    <div key={v._id} className=" h-72">
                                        <CardCustomFavoritesList
                                            handleSetRender={handleSetRender}
                                            name={v.name_list}
                                            id={v._id}
                                        />
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            </>
            {isPopup && <PopupCreateList sendRender={handleSetRender} handleSendIsPopup={handleReceiveIsPopup} />}
        </div>
    );
}
