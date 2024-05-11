import { IconArrowLeft } from '../../svgs';
import { Button } from '../../components';
import { NavLink } from 'react-router-dom';
export default function VerifyCode() {
    return (
        <div className="">
            <div className="">
                <NavLink to="/signup">
                    <Button className=" absolute ml-[120px] mt-[120px]" icon={true} left={true} title="Quay lại">
                        <IconArrowLeft />
                    </Button>
                </NavLink>
                <div className="h-screen m-auto flex justify-center items-center">
                    <div className=" shadow-card-home border-[4px] border-primary-black px-14 py-14">
                        <div className=" border-b pb-2 border-secondary-gray mb-10">
                            <h1 className=" mb-1 text-center text-heading-6 font-heading-6 font-plusjakartasans text-primary-black">
                                Xác nhận đăng ký
                            </h1>
                            <h3 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                                Chúng tôi đã gửi mã xác nhận về email của bạn, vui lòng kiểm tra email của bạn
                            </h3>
                        </div>

                        <div class="flex justify-center gap-10 mb-10">
                            <input
                                class="w-10 h-10 text-center border border-primary-black shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                type="text"
                                maxlength="1"
                                pattern="[0-9]"
                                inputmode="numeric"
                                autocomplete="one-time-code"
                                required
                            />
                            <input
                                class="w-10 h-10 text-center border border-primary-black hadow-sm focus:border-teal-500 focus:ring-teal-500"
                                type="text"
                                maxlength="1"
                                pattern="[0-9]"
                                inputmode="numeric"
                                autocomplete="one-time-code"
                                required
                            />
                            <input
                                class="w-10 h-10 text-center border border-primary-black hadow-sm focus:border-teal-500 focus:ring-teal-500"
                                type="text"
                                maxlength="1"
                                pattern="[0-9]"
                                inputmode="numeric"
                                autocomplete="one-time-code"
                                required
                            />
                            <input
                                class="w-10 h-10 text-center border border-primary-black hadow-sm focus:border-teal-500 focus:ring-teal-500"
                                type="text"
                                maxlength="1"
                                pattern="[0-9]"
                                inputmode="numeric"
                                autocomplete="one-time-code"
                                required
                            />
                            <input
                                class="w-10 h-10 text-center border border-primary-black hadow-sm focus:border-teal-500 focus:ring-teal-500"
                                type="text"
                                maxlength="1"
                                pattern="[0-9]"
                                inputmode="numeric"
                                autocomplete="one-time-code"
                                required
                            />
                            <input
                                class="w-10 h-10 text-center border border-primary-black hadow-sm focus:border-teal-500 focus:ring-teal-500"
                                type="text"
                                maxlength="1"
                                pattern="[0-9]"
                                inputmode="numeric"
                                autocomplete="one-time-code"
                                required
                            />
                        </div>
                        <Button title="Xác nhận" className=" w-full" color={'tertiaryicon'}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
