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
        phone: '',
        specialize: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        async function getUser() {
            const token = localStorage.getItem('access_token');

            if (token) {
                const res = await getInforUser();
                if (res) {
                    setInforUser(res.user);
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
                <div className=" bg-[#FFFFFF] w-full h-[30vh] border-[4px] border-primary-black flex justify-end items-baseline mb-5">
                    <Button
                        title="Thay đổi ảnh bìa"
                        color={'tertiary'}
                        className=" mt-16 mr-32"
                        icon={true}
                        right={true}>
                        <IconPencilSimpleLine />
                    </Button>
                </div>
                <div className=" flex justify-start h-[50vh]  gap-8 ">
                    <div className="shadow-card-home w-1/3 bg-white border-[4px] px-6  border-primary-black">
                        <CardImage onClick={handleLogout} />
                    </div>
                    <div className="shadow-card-home w-full overflow-scroll bg-white border-[4px] px-6 py-12 border-primary-black">
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
