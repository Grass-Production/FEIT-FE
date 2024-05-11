import { FormEmail, RenderFormForgetPassword } from './component';
import { IconArrowLeft } from '../../svgs';
import { Button } from '../../components';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
export default function ForgetPassword() {
    const [typeForm, setTypeForm] = useState(0);

    const handleChangeTypeForm = (type) => {
        setTypeForm(type);
    };

    const handleBackTypeForm = () => {
        setTypeForm((t) => t - 1);
    };

    return (
        <div>
            <div className=" flex h-screen">
                <div className=" w-1/2 flex items-center h-screen bg-center bg-no-repeat bg-cover bg-[url('')]">
                    {typeForm === 0 && (
                        <img
                            className=" w-full m-auto object-scale-down h-screen "
                            src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464152/feit-static/Qu%C3%AAn%20m%E1%BA%ADt%20kh%E1%BA%A9u.png.png"
                            alt=""
                        />
                    )}
                    {typeForm === 1 && (
                        <img
                            className=" w-full m-auto object-scale-down h-screen"
                            src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464151/feit-static/Nh%E1%BA%ADp%20m%C3%A3%20kh%C3%B4i%20ph%E1%BB%A5c.png.png"
                            alt=""
                        />
                    )}
                    {typeForm === 2 && (
                        <img
                            className=" w-full m-auto object-scale-down h-screen"
                            src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464150/feit-static/Kh%C3%B4i%20ph%E1%BB%A5c%20m%E1%BA%ADt%20kh%E1%BA%A9u.png.png"
                            alt=""
                        />
                    )}
                    {typeForm === 3 && (
                        <img
                            className=" w-full m-auto object-scale-down h-screen"
                            src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464153/feit-static/Th%C3%A0nh%20c%C3%B4ng.png.png"
                            alt=""
                        />
                    )}
                </div>
                <div className=" relative px-52 flex justify-center items-center">
                    {typeForm > 0 && (
                        <Button
                            className=" absolute top-0 left-0 ml-[120px] mt-[120px]"
                            icon={true}
                            left={true}
                            onClick={handleBackTypeForm}
                            title="Quay lại">
                            <IconArrowLeft />
                        </Button>
                    )}
                    {typeForm === 0 && (
                        <NavLink to="/signin">
                            <Button
                                className=" absolute top-0 left-0 ml-[120px] mt-[120px]"
                                icon={true}
                                left={true}
                                onClick={handleBackTypeForm}
                                title="Quay lại">
                                <IconArrowLeft />
                            </Button>
                        </NavLink>
                    )}
                    <div>
                        <RenderFormForgetPassword count={typeForm} sendTypeForm={handleChangeTypeForm} />
                    </div>
                </div>
            </div>
        </div>
    );
}
