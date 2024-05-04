import { CardImage, CardInformation } from './component';
import { Button } from '../../components';
import { IconPencilSimpleLine } from '../../svgs';
import { useEffect, useState } from 'react';
import { getInforUser } from '../../services/userAPI';
import { logout } from '../../services/userAPI';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [inforUser, setInforUser] = useState({
        full_name: '',
        email: '',
        phone: '',
        specialize: '',
        avatar_url: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem('access_token');

            if (token) {
                const res = await getInforUser();
                if (res) {
                    setInforUser(res);
                }
                console.log(res);
            }
        }
        getUser();
    }, []);
    console.log(inforUser);
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
                <div className=" bg-[#FFFFFF] w-full h-[30vh] rounded-xl flex justify-end items-baseline">
                    <Button
                        title="Thay đổi ảnh bìa"
                        color={'tertiary'}
                        className=" mt-16 mr-32"
                        icon={true}
                        right={true}>
                        <IconPencilSimpleLine />
                    </Button>
                </div>
                <div className=" flex justify-center mt-[-8%] gap-8 ">
                    <div className="shadow-card-home rounded-[20px] bg-white border-[4px] px-6 py-12 border-secondary-gray">
                        <CardImage onClick={handleLogout} img={inforUser.avatar_url} />
                    </div>
                    <div className="shadow-card-home rounded-[20px] bg-white w-2/4 border-[4px] px-6 py-12 border-secondary-gray">
                        <CardInformation
                            name={inforUser.full_name}
                            email={inforUser.email}
                            phone={inforUser.phone}
                            specialize={inforUser.specialize}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
