import { CardImage, CardInformation } from './component';
import { Button, InputField } from '../../components';
import { IconPencilSimpleLine, IconCheckCircle, IconPencil, IconArrowLogin, IconUploadSimple } from '../../svgs';
import { useEffect, useState } from 'react';
import { getInforUser } from '../../services/userAPI';
import { logout } from '../../services/userAPI';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../services/userAPI';
export default function Profile() {
    const [inforUser, setInforUser] = useState({
        full_name: '',
        phone: '',
        specialize: '',
    });
    const navigate = useNavigate();

    const [selectedAvatar, setSelectedAvatar] = useState(null);

    const [selectedCover, setSelectedCover] = useState(null);

    const [imageUrlCover, setImageUrlCover] = useState(null);
    const [imageUrlAvatar, setImageUrlAvatar] = useState(null);

    const [formInput, setFormInput] = useState({
        _id: inforUser._id,
        full_name: inforUser.full_name,
        avatar_url: inforUser.avatar_url,
        cover_url: inforUser.cover_url,
        phone: inforUser.phone,
    });

    const handleCoverChange = (event) => {
        const file = event.target.files[0];
        setSelectedCover(file);
        console.log('file', file);
        const imageUrl = URL.createObjectURL(file);
        setImageUrlCover(imageUrl);
    };

    const UpdateUser = async () => {
        const res = await updateUser({
            _id: inforUser._id,
            full_name: formInput.full_name,
            avatar_url: imageUrlAvatar,
            cover_url: imageUrlCover,
            phone: formInput.phone,
        });
        console.log(res);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInput({ ...formInput, [name]: value });
    };
    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        setSelectedAvatar(file);
        const imageUrl = URL.createObjectURL(file);
        setImageUrlAvatar(imageUrl);
        console.log('file', file);
    };
    console.log('avata , ', selectedAvatar);
    console.log('cvoer , ', selectedCover);
    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem('access_token');

            if (token) {
                const res = await getInforUser();
                if (res) {
                    setInforUser(res.user);
                    setFormInput({
                        _id: res.user._id,
                        full_name: res.user.full_name,
                        avatar_url: res.user.avatar_url,
                        cover_url: res.user.cover_url,
                        phone: res.user.phone,
                    });
                }
                console.log(res);
            }
        }
        getUser();
    }, []);

    const handleLogout = async () => {
        const res = await logout();
        if (res.status === 'success') {
            localStorage.removeItem('access_token');
            navigate(`/`);
            window.location.reload();
        }
        console.log(res.status);
    };
    return (
        <div className=" px-10 pt-7  ">
            <div className="">
                <h1 className=" text-center text-heading-3 font-heading-3 font-bitter text-primary-black">
                    Thông tin tài khoản
                </h1>
                <div
                    className=" relative bg-[#FFFFFF] w-full h-[30vh] border-[4px] border-primary-black flex justify-end items-baseline mb-5"
                    style={{
                        background: `url(${imageUrlCover}) no-repeat center/contain `,
                    }}>
                    <label
                        for="cover"
                        className=" absolute top-12 right-12 w-fit text-button-1 font-button-1 text-primary-black font-plusjakartasans hover:bg-secondary-gray text-center cursor-pointer py-2 px-4  flex justify-center items-center gap-[6px]   ">
                        Thay đổi ảnh đại diện
                        <IconPencilSimpleLine color="#14121B" />
                        <input onChange={handleCoverChange} accept="image/*" type="file" id="cover" class="hidden" />
                    </label>
                </div>
                <div className=" flex justify-start h-[50vh]  gap-8 ">
                    <div className="shadow-card-home flex justify-center flex-col w-1/3 bg-white border-[4px] px-6  border-primary-black">
                        <div className="flex flex-col justify-center items-center">
                            <div
                                className=" mb-14 h-60 w-full flex justify-center items-center"
                                style={{
                                    background: `url(${imageUrlAvatar}) no-repeat center/contain `,
                                }}>
                                {/* <img src={imageUrlAvatar} className=" rounded-[40px] w-full  max-h-52" alt="" /> */}
                            </div>
                            <label
                                for="avatar"
                                accept="image/*"
                                className=" text-button-1 font-button-1 text-primary-black font-plusjakartasans hover:bg-secondary-gray text-center cursor-pointer py-2 px-4  flex justify-center items-center gap-[6px] w-full  ">
                                Thay đổi ảnh đại diện
                                <IconUploadSimple color="#14121B" />
                                <input onChange={handleAvatarChange} type="file" id="avatar" class="hidden" />
                            </label>
                            <Button
                                title="Cài đặt tài khoản"
                                icon={true}
                                right={true}
                                className={'w-full mb-5 hover:bg-secondary-gray rounded-none'}
                                color={'tertiary'}>
                                <IconUploadSimple />
                            </Button>
                            <Button
                                title="Đăng xuất"
                                icon={true}
                                onClick={handleLogout}
                                className={'w-full rounded-none'}
                                right={true}
                                color={'primaryerror'}>
                                <IconArrowLogin color="#FE330B" />
                            </Button>
                        </div>
                    </div>

                    <div className="shadow-card-home w-full overflow-scroll bg-white border-[4px] px-6 py-12 border-primary-black">
                        <div className="">
                            <h1 className=" mb-3 text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray border-b border-secondary-gray pb-1">
                                Thông tin cá nhân
                            </h1>
                            <div>
                                <div className=" flex flex-col mb-7 justify-between items-start">
                                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                                        Họ và tên <strong className=" text-semantic-danger">*</strong>
                                    </h1>
                                    <InputField
                                        name={'full_name'}
                                        value={formInput.full_name}
                                        onChange={handleInputChange}
                                        placeholder={inforUser.full_name}
                                        className={' w-full rounded-none !border-primary-black'}
                                    />
                                </div>

                                <div className=" flex flex-col mb-7 justify-between items-start">
                                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                                        Email <strong className=" text-semantic-danger">*</strong>
                                    </h1>
                                    <InputField
                                        value={inforUser.email}
                                        status={'true'}
                                        placeholder={inforUser.email}
                                        className={' w-full rounded-none !border-primary-black'}
                                    />
                                </div>

                                <div className=" flex flex-col mb-7 justify-between items-start">
                                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                                        Bạn là <strong className=" text-semantic-danger">*</strong>
                                    </h1>
                                    <InputField
                                        placeholder={inforUser.specialize}
                                        className={' w-full rounded-none !border-primary-black'}
                                    />
                                </div>

                                <div className=" flex flex-col justify-between mb-[60px] items-start">
                                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                                        Số điện thoại <strong className=" text-semantic-danger">*</strong>
                                    </h1>
                                    <InputField
                                        value={formInput.phone}
                                        name={'phone'}
                                        onChange={handleInputChange}
                                        placeholder={inforUser.phone}
                                        className={' w-full rounded-none !border-primary-black'}
                                    />
                                </div>
                                <div className=" flex flex-col gap-12">
                                    <Button
                                        title="Chỉnh sửa"
                                        icon={true}
                                        className=" w-full py-2"
                                        right={true}
                                        color={'primary'}>
                                        <IconPencil />
                                    </Button>
                                    <Button
                                        onClick={UpdateUser}
                                        title="Lưu"
                                        icon={true}
                                        className=" w-full py-2"
                                        right={true}>
                                        <IconCheckCircle />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
