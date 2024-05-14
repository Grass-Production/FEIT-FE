import { Link } from 'react-router-dom';
import { FacebookLogo, InstagramLogo, IconEmailLogo, LogoFEIT } from '../svgs';

export const Footer = () => {
    return (
        <div className=" border-t border-secondary-gray">
            <div className="pl-120px pt-6 flex items-start justify-between">
                <div className="  w-1/2">
                    <div className="">
                        <LogoFEIT />
                    </div>
                    <div className=" flex gap-3">
                        <FacebookLogo />
                        <InstagramLogo />
                        <EmailLogo />
                    </div>
                </div>
                <div className=" w-1/2">
                    <div className=" border-b mb-6 border-secondary-gray">
                        <Link
                            to="/"
                            className="block text-heading-7 pb-4 font-heading-7 font-bitter text-secondary-gray">
                            1. Trang chủ
                        </Link>
                    </div>
                    <div className=" border-b mb-6 border-secondary-gray">
                        <a
                            href="#intro"
                            className=" text-heading-7 block pb-4 font-heading-7 font-bitter text-secondary-gray">
                            2. Giới thiệu
                        </a>
                    </div>

                    <div className=" border-b mb-6 border-secondary-gray">
                        <a
                            href="#feat"
                            className=" text-heading-7 block pb-4 font-heading-7 font-bitter text-secondary-gray">
                            3. Chức năng
                        </a>
                    </div>

                    <div className=" border-b border-secondary-gray">
                        <a
                            href="#story"
                            className=" text-heading-7 block pb-4 font-heading-7 font-bitter text-secondary-gray">
                            4. Câu chuyện
                        </a>
                    </div>
                </div>
            </div>
            <h1 className=" text-center py-6 text-caption-1 text-primary-black font-caption-1 font-plusjakartasans">
                Designed by FEIT
            </h1>
        </div>
    );
};
