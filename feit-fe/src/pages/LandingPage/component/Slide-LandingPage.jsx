import { Button } from '../../../components';
import { ArrowCircleDown } from '../../../svgs';
export const SlideLandingPage = () => {
    return (
        <div id="home" className="flex items-center justify-between mb-120px">
            <div className=" w-2/3">
                <div className=" pr-10">
                    <h1 className=" mb-1 text-heading-2 bg-primary-black p-3 font-bitter font-heading-2 text-white">
                        FLUENT ENGLISH IT
                    </h1>
                    <p className=" mb-10 text-heading-6 font-heading-6 text-secondary-gray font-plusjakartasans">
                        Nền tảng học tiếng Anh trực tuyến cho chuyên ngành công nghệ thông tin.
                    </p>
                    <Button className=" px-[72px] py-4" title="Khám Phá" color={'primaryicon'} icon={true} right={true}>
                        <ArrowCircleDown />
                    </Button>
                </div>
            </div>
            <div className=" w-1/2">
                <img src="src/assets/images/img-slide-landing.png" alt="" />
            </div>
        </div>
    );
};
