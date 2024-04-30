import { IconGraduationCap, IconBookOpenText, IconBook, IconTextAUnderline, IconArrowUpRight } from '../../../svgs';

export const CardStatistic = ({
    quantityCourse = '2',
    quantityLesson = '10',
    quantityUnit = '300',
    quantityVocabulary = '3000',
}) => {
    return (
        <div className=" shadow-card-home px-10 py-7 border-[4px] border-primary-black bg-foundation-yellow-400">
            <div className=" border-b border-primary-black pb-2 mb-4">
                <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-black">
                    Thống kê tổng quát
                </h1>
            </div>
            <div className="flex w-full justify-between">
                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
                        <IconGraduationCap />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityCourse}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Khóa học
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div>
                </div>

                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
                        <IconBookOpenText />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityLesson}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Chủ đề
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div>
                </div>

                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
                        <IconBook color="#858585" size="40" />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityUnit}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Chương
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div>
                </div>

                <div className=" border w-[24%] bg-white py-16 border-primary-black px-12 flex justify-center items-end gap-3">
                    <div className="">
                        <IconTextAUnderline />
                        <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                            {quantityVocabulary}
                        </h1>
                        <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                            Từ vựng
                        </h1>
                    </div>
                    <div className="">
                        <IconArrowUpRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
