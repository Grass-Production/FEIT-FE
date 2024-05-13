import { Button, InputSection } from '../../../../components';
import { IconPencilSimple, IconDelete, IconDotsThreeVertical, IconGear } from '../../../../svgs';
import { useEffect, useState } from 'react';
import { getVocabularyByUinit } from '../../../../services/vocabulary';

export const CardCourse = () => {
    return (
        <div>
            <InputSection size={'w-6 h-6'} label="Chọn" />
            <div className=" flex  justify-between">
                <div className=" flex justify-center items-center gap-3 ">
                    <div className="">
                        <img
                            src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464143/feit-static/DevOps.png.png"
                            alt=""
                            className=" w-full"
                        />
                    </div>
                    <div className="">
                        <h1 className=" text-label-1 font-label-1 font-plusjakartasans text-secondary-gray">
                            Khóa học
                        </h1>
                        <h1 className=" text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-400">
                            Lập trình
                        </h1>
                    </div>
                </div>

                <div className=" flex">
                    <Button
                        className=" text-secondary-gray w-full border-none hover:bg-slate-300 rounded-none"
                        icon={true}
                        color={''}
                        right={true}
                        title="">
                        <IconDelete size="28" color="#3C79FE" />
                    </Button>
                    <Button
                        className=" text-secondary-gray w-full border-none hover:bg-slate-300 rounded-none"
                        icon={true}
                        color={'primary'}
                        right={true}
                        title="">
                        <IconGear />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const CardLesson = () => {
    return (
        <div>
            <InputSection label="Chọn" />
            <div className=" flex justify-center items-center gap-1 ">
                <div className=" max-w-24">
                    <img
                        src="https://res.cloudinary.com/df4zm1xjy/image/upload/v1711464143/feit-static/DevOps.png.png"
                        alt=""
                        className=" w-full"
                    />
                </div>
                <div className="">
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                        Lập trình
                    </h1>
                    <h1 className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">Chương</h1>
                </div>
            </div>
            <div className=" gap-3">
                <Button
                    className=" text-secondary-gray w-full border-none hover:bg-slate-300 rounded-none"
                    icon={true}
                    color={'primary'}
                    right={true}
                    title="Xóa">
                    <IconDelete size="28" color="#3C79FE" />
                </Button>
                <Button
                    className=" text-secondary-gray w-full border-none hover:bg-slate-300 rounded-none"
                    icon={true}
                    color={'primary'}
                    right={true}
                    title="Tùy chỉnh">
                    <IconGear />
                </Button>
            </div>
        </div>
    );
};

export const RowVocabulary = ({ word }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <div className=" flex justify-between items-center w-full">
            {isOpen && <div onClick={toggleDropdown} className=" z-10 bg-transparent fixed inset-0"></div>}

            <InputSection
                className={''}
                size={' w-5 h-5'}
                classNameText={'text-body-2 font-body-2 text-secondary-gray font-plusjakartasans'}
                label={word}
            />
            <div className=" relative ">
                <IconDotsThreeVertical onClick={toggleDropdown} className="dropbtn cursor-pointer" />
                {isOpen && (
                    <>
                        <div
                            id=""
                            className=" z-40 w-40 absolute  flex flex-col  bg-white left-1/2 border-x border-b border-primary-black">
                            <Button
                                color={'primary'}
                                className="text-body-2 font-body-2 border-none rounded-none text-secondary-gray font-plusjakartasans"
                                title=" Xóa"
                                icon={true}
                                right={true}>
                                <IconDelete />
                            </Button>
                            <Button
                                color={'primary'}
                                className="text-body-2 font-body-2 border-none rounded-none text-secondary-gray font-plusjakartasans"
                                title="Tùy chỉnh"
                                icon={true}
                                right={true}>
                                <IconGear />
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export const CardUnit = ({ name, idUnit }) => {
    const [vocabulary, setVocabulary] = useState([]);
    useEffect(() => {
        async function GetVocabulary() {
            const res = await getVocabularyByUinit(idUnit);
            setVocabulary(res.vocabulary.Vocabulary);
            console.log('res :', res.vocabulary.Vocabulary);
        }
        GetVocabulary();
    }, []);

    return (
        <>
            <div className=" border border-primary-black px-5 py-2 ">
                <div className=" flex border-b border-primary-black pb-3 mb-5 ">
                    <InputSection
                        className={''}
                        size={' w-6 h-6'}
                        classNameText={'text-heading-7 font-heading-7 font-plusjakartasans'}
                        label={name}
                    />
                    <Button icon={true} left={true} title="">
                        <IconDelete />
                    </Button>
                </div>
                <div className="flex flex-col gap-1 justify-between items-start">
                    {vocabulary != null &&
                        vocabulary.map((v, i) => {
                            return <RowVocabulary key={v._id} word={v.word} />;
                        })}
                </div>
            </div>
        </>
    );
};
