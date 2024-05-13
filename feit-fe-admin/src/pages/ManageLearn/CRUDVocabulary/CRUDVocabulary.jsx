import { CardUpdate, CardCreateOne } from './component';
import { NavLink } from 'react-router-dom';
import { InputSection } from '../../../components';
import { useState } from 'react';
import { IconArrowUpLeft } from '../../../svgs';
import { Button } from '../../../components';
import { createLessonFile } from '../../../services/lessonAPI';
import { useParams } from 'react-router-dom';

export default function CRUDVocabulary() {
    const [isCheck, setIsCheck] = useState(false);
    let { idlesson } = useParams();

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsCheck(value === 'create');
        console.log(isCheck);
    };

    return (
        <div className="">
            <NavLink to={`/managelearn/lessondetails/${idlesson}`}>
                <Button icon={true} title="Trở về" left={true}>
                    <IconArrowUpLeft />
                </Button>
            </NavLink>
            <div className="p-5 border bg-primary-grey border-primary-black flex gap-3">
                <div className=" w-1/2  ">
                    <div className=" border-b border-primary-black pb-2 mb-5">
                        <h1 className=" text-heading-6 font-heading-6 font-plusjakartasans text-primary-black">
                            Chủ đề
                        </h1>
                        <p className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                            Bạn có thể chỉnh sửa chủ đề hoặc thêm một chủ đề bằng cách thủ công hoặc thêm bằng file
                            excel.
                        </p>
                    </div>
                    <div className=" flex justify-start items-center gap-7">
                        <InputSection
                            size={' w-6 h-6'}
                            className={' w-1/4 text-label-2 font-label-2 font-plusjakartasans text-primary-black'}
                            label="Sửa"
                            id="Updatee"
                            value="update"
                            name="Setting"
                            type="radio"
                            Checked={true}
                            onChange={handleRadioChange}
                        />
                        <InputSection
                            size={' w-6 h-6'}
                            className={' w-full text-label-2 font-label-2 font-plusjakartasans text-primary-black'}
                            label="Thủ công / Thêm bằng file"
                            id="Create"
                            name="Setting"
                            onChange={handleRadioChange}
                            value="create"
                            type="radio"
                        />
                    </div>
                </div>
                <div className=" w-1/2 bg-white">{isCheck ? <CardCreateOne /> : <CardUpdate />}</div>
            </div>
        </div>
    );
}
