import { CardImage, CardInformation } from './component';
import { Button } from '../../components';
import { IconPencilSimpleLine } from '../../svgs';
import { useEffect } from 'react';
import { getInforUser } from '../../services/userAPI';
export default function Profile() {
    useEffect(() => {
        async function getUser() {
            const res = await getInforUser(
                'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTI2ODU2ODYsImlhdCI6MTcxMjY4NDc4NiwibmJmIjoxNzEyNjg0Nzg2LCJzdWIiOiI2NjExNDJjZTA5MThjZDg0OTkyZTRhODcifQ.5yHAarA4YjY2KA4VrNSVltLTfC8GGAC8HIW2GX3o_2TNAGVGYzL3YKpjQLg9VlVyIMReiHGROwhdq6dbb5Wa4A',
            );
            console.log(res);
        }
    }, []);
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
                        <CardImage />
                    </div>
                    <div className="shadow-card-home rounded-[20px] bg-white w-2/4 border-[4px] px-6 py-12 border-secondary-gray">
                        <CardInformation />
                    </div>
                </div>
            </div>
        </div>
    );
}
