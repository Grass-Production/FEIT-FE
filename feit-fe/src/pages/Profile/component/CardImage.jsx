import { Button } from '../../../components';
import { IconArrowLogin, IconUploadSimple } from '../../../svgs';

export const CardImage = ({
    img = 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464162/feit-static/Ch%C6%B0%C6%A1ng%208.png.png',
}) => {
    return (
        <div className="">
            <div className=" mb-14 flex justify-center items-center">
                <img src={img} className=" rounded-[40px]  max-h-52" alt="" />
            </div>
            <Button title="Thay đổi ảnh đại diện" icon={true} right={true} className={'w-full mb-5'} color={'primary'}>
                <IconUploadSimple />
            </Button>
            <Button title="Đăng xuất" icon={true} className={'w-full'} right={true} color={'primaryerror'}>
                <IconArrowLogin color="#FE330B" />
            </Button>
        </div>
    );
};
