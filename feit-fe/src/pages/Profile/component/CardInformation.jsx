import { Button, InputField } from '../../../components';

import { IconArrowLogin, IconCheckCircle, IconPencil } from '../../../svgs';

export const CardInformation = ({
    name = 'Đoàn Đình Hoàng',
    email = 'hoang@gmail.com',
    phone = '0792900210',
    position = 'Người trái ngành',
}) => {
    return (
        <div className="">
            <form>
                <div className=" flex mb-7 justify-between items-center">
                    <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-primary-black">Họ và tên</h1>
                    <InputField placeholder={name} className={' w-4/5'} />
                </div>

                <div className=" flex mb-7 justify-between items-center">
                    <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-primary-black">Email</h1>
                    <InputField placeholder={email} className={' w-4/5'} />
                </div>

                <div className=" flex mb-7 justify-between items-center">
                    <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-primary-black">Bạn là</h1>
                    <InputField placeholder={position} className={' w-4/5'} />
                </div>

                <div className=" flex justify-between mb-[60px] items-center">
                    <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-primary-black">SDT</h1>
                    <InputField placeholder={phone} className={' w-4/5'} />
                </div>
                <div className=" flex gap-12">
                    <Button title="Chỉnh sửa" icon={true} className=" w-full py-2" right={true} color={'primary'}>
                        <IconPencil />
                    </Button>
                    <Button title="Lưu" icon={true} className=" w-full py-2" right={true} disabled={true}>
                        <IconCheckCircle />
                    </Button>
                </div>
            </form>
        </div>
    );
};
