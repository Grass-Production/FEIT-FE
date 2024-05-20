import {
    IconEmotionDissapointed,
    IconEmotionGood,
    IconEmotionHappy,
    IconEmotionSad,
    IconTelegramLogo,
    IconEmailLogo,
    IconPhone,
    IconMapPin,
    ArrowRight,
} from '../../../svgs';
import { Loading } from '../../../components/Loading/Loading';
import { createFeedback } from '../../../services/feedbackAPI';
import { InputSection, Button, ToastError, ToastSuccess, ToastWarning } from '../../../components';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CardFormFeedback = ({ handleSendLoading }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [content, setContent] = useState('');
    const [feeling, setFeeling] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const [isToastSuccess, setIsToastSuccess] = useState(false);
    const [isToastError, setIsToastError] = useState(false);
    const [isToastWarning, setIsToastWarning] = useState(false);
    const navigate = useNavigate();

    const handleCreateFeedback = async () => {
        if (content === '' || feeling === '' || selectedValue === null) {
            // alert('Điền đủ thông tin');
            setIsToastWarning(true);
            setTimeout(() => setIsToastWarning(false), 2000);
            return;
        }
        try {
            handleSendLoading(true);
            const res = await createFeedback({
                title: 'Example Title',
                content: content,
                feeling: feeling,
                is_love_web: selectedValue,
            });
            setIsToastSuccess(true);
            setTimeout(() => setIsToastSuccess(false), 2000);
            if ((res.status = 'success')) {
                handleSendLoading(false);
                // alert('Gửi Feedback thành công');
                setContent('');
                selectedValue(null);
                setFeeling('');
            }
            console.log(res);
        } catch (error) {
            setIsToastError(true);
            navigate(`/signIn`);
            setTimeout(() => setIsToastError(false), 2000);
        }
    };
    const handleChange = (event) => {
        setSelectedValue(parseInt(event.target.value, 10));
    };
    const handleOnChangeContent = (event) => {
        setContent(event.target.value);
    };
    const handleClick = (index, text) => {
        setActiveIndex(index);
        setFeeling(text);
    };
    const getClassNames = (index) => {
        return `flex flex-col justify-center items-center p-2 border hover:border hover:border-primary-blue-500 hover:bg-white  ${
            activeIndex === index ? 'border border-primary-blue-500 bg-white' : ''
        }`;
    };
    return (
        <>
            {isToastWarning && <ToastWarning message="Vui lòng điển đủ thông tin" />}
            {isToastSuccess && <ToastSuccess message="Gủi Feedback thành công" />}
            {isToastError && <ToastError message="Vui lòng đăng nhập" />}
            <div className=" h-full flex flex-col justify-between">
                <div className=" ">
                    <h1 className=" mb-1 text-heading-3 font-heading-3 font-plusjakartasans text-primary-black">
                        Đóng góp ý kiến
                    </h1>
                    <p className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray ">
                        Hãy cho chúng tôi biết ý kiến đóng góp của bạn để chúng tôi cải thiện ứng dụng của mình nhé !
                    </p>
                </div>
                <div className="">
                    <h1 className=" mb-3 text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                        Cảm xúc của bạn
                    </h1>
                    <div className=" flex w-3/4 justify-between">
                        <div className={getClassNames(0)} onClick={() => handleClick(0, 'disappointed')}>
                            <IconEmotionDissapointed />
                            <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                Thất vọng
                            </h1>
                        </div>
                        <div className={getClassNames(1)} onClick={() => handleClick(1, 'sad')}>
                            <IconEmotionSad />
                            <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                Tạm được
                            </h1>
                        </div>
                        <div className={getClassNames(2)} onClick={() => handleClick(2, 'happy')}>
                            <IconEmotionHappy />
                            <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                Hài lòng
                            </h1>
                        </div>
                        <div className={getClassNames(3)} onClick={() => handleClick(3, 'good')}>
                            <IconEmotionGood />
                            <h1 className=" mt-2 text-caption-1 font-caption-1 font-plusjakartasans text-primary-black">
                                Quá tuyệt
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className="mb-3 text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                        Ý kiến của bạn
                    </h1>
                    <textarea
                        value={content}
                        onChange={handleOnChangeContent}
                        className=" resize-none w-full border border-primary-black px-3 py-4"
                        rows={'8'}
                        name=""
                        id=""
                        placeholder="Nhập ý kiến của bạn"></textarea>
                </div>

                <div className=" ">
                    <h1 className="mb-3 text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                        Bạn sẽ tiếp tục sử dụng website của chúng tớ chứ ?
                    </h1>
                    <div className=" flex justify-between w-2/5 items-start">
                        <InputSection
                            onChange={handleChange}
                            name={'co'}
                            id="1"
                            value={1}
                            sizeRadio={' w-6 h-6'}
                            type="radio"
                            label="Có"
                        />
                        <InputSection
                            onChange={handleChange}
                            name={'co'}
                            id="2"
                            value={0}
                            sizeRadio={' w-6 h-6'}
                            type="radio"
                            label="Không"
                        />
                    </div>
                </div>
                <Button
                    onClick={handleCreateFeedback}
                    className=" w-full"
                    color={'primaryicon'}
                    title="Gửi"
                    icon={true}
                    right={true}>
                    <IconTelegramLogo />
                </Button>
            </div>
        </>
    );
};

export const CardContact = () => {
    return (
        <div className=" ">
            <div className=" ">
                <h1 className=" mb-5 text-heading-3 font-heading-3 font-plusjakartasans text-primary-black">
                    Thông tin liên lạc
                </h1>

                <div className=" flex items-start gap-3 mb-3">
                    <IconEmailLogo size="24" color="#343330" />
                    <div className="">
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray mb-3">
                            Địa chỉ Email
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                            flutentenglish@outlook.com
                        </h1>
                    </div>
                </div>
                <div className=" flex items-start gap-3 mb-3">
                    <IconPhone />
                    <div className="">
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray mb-3">
                            Số điện thoại
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                            0911 532 123
                        </h1>
                    </div>
                </div>
                <div className=" flex items-start gap-3 mb-3">
                    <IconMapPin />
                    <div className="">
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray mb-3">
                            Địa chỉ
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-primary-black">
                            12 Tôn Đức Thắng, Q1, TP. Hồ Chí mình
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CardContribute = () => {
    return (
        <div className=" ">
            <div className=" ">
                <h1 className=" mb-1 text-heading-3 font-heading-3 font-plusjakartasans text-primary-black">
                    Đóng góp ý kiến
                </h1>
                <p className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray ">
                    Hãy cho chúng tôi biết ý kiến đóng góp của bạn để chúng tôi cải thiện ứng dụng của mình nhé !
                </p>
            </div>

            <Button
                className=" text-button-1 font-button-1 font-plusjakartasans text-primary-blue-500"
                color={''}
                title="Tiến hành"
                icon={true}
                right={true}>
                <ArrowRight color="#3C79FE" size="24" />
            </Button>
        </div>
    );
};
