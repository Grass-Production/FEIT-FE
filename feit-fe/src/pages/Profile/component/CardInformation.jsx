import { Button, InputField } from '../../../components';

import { IconArrowLogin, IconCheckCircle, IconPencil } from '../../../svgs';

export const CardInformation = ({
    name = 'Đoàn Đình Hoàng',
    email = 'hoang@gmail.com',
    phone = '0792900210',
    specialize = 'Người trái ngành',
}) => {
    return (
        <div className="">
            <h1 className=" mb-3 text-heading-7 font-heading-7 font-plusjakartasans text-secondary-gray border-b border-secondary-gray pb-1">
                Thông tin cá nhân
            </h1>
            <form>
                <div className=" flex flex-col mb-7 justify-between items-start">
                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                        Họ và tên <strong className=" text-semantic-danger">*</strong>
                    </h1>
                    <InputField placeholder={name} className={' w-full rounded-none !border-primary-black'} />
                </div>

                <div className=" flex flex-col mb-7 justify-between items-start">
                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                        Email <strong className=" text-semantic-danger">*</strong>
                    </h1>
                    <InputField placeholder={email} className={' w-full rounded-none !border-primary-black'} />
                </div>

                <div className=" flex flex-col mb-7 justify-between items-start">
                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                        Bạn là <strong className=" text-semantic-danger">*</strong>
                    </h1>
                    <InputField placeholder={specialize} className={' w-full rounded-none !border-primary-black'} />
                </div>

                <div className=" flex flex-col justify-between mb-[60px] items-start">
                    <h1 className=" text-label-2 mb-2 font-label-2 font-plusjakartasans text-primary-black">
                        Số điện thoại <strong className=" text-semantic-danger">*</strong>
                    </h1>
                    <InputField placeholder={phone} className={' w-full rounded-none !border-primary-black'} />
                </div>
                <div className=" flex flex-col gap-12">
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
