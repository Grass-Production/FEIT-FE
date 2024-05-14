import { Button } from '../../../components';
import { IconArrowLogin, IconUploadSimple } from '../../../svgs';

export const CardImage = ({
    img = 'https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464162/feit-static/Ch%C6%B0%C6%A1ng%208.png.png',
    onClick,
}) => {
    return (
        <div className="flex flex-col justify-center">
            <div className=" mb-14 flex justify-center items-center">
                <img src={img} className=" rounded-[40px]  max-h-52" alt="" />
            </div>
            <label
                for="uploadFile"
                className=" text-button-1 font-button-1 text-primary-black font-plusjakartasans hover:bg-secondary-gray text-center cursor-pointer py-2 px-4  flex justify-center items-center gap-[6px] w-full  ">
                Thay đổi ảnh đại diện
                <IconUploadSimple color="#14121B" />
                <input type="file" id="uploadFile" class="hidden" />
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
                onClick={onClick}
                className={'w-full rounded-none'}
                right={true}
                color={'primaryerror'}>
                <IconArrowLogin color="#FE330B" />
            </Button>
        </div>
    );
};
