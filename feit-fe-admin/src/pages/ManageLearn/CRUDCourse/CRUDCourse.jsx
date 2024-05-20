import { CardCreateOne } from './component';
import { NavLink } from 'react-router-dom';
import { InputSection } from '../../../components';
import { useState } from 'react';
import { IconArrowUpLeft } from '../../../svgs';
import { Button } from '../../../components';
import { useParams } from 'react-router-dom';

export default function CRUDCourse() {
    const [isCheck, setIsCheck] = useState(false);

    let { idcourse } = useParams();

    const handleRadioChange = (event) => {
        const value = event.target.value;
        setIsCheck(value === 'create');
        console.log(isCheck);
    };

    return (
        <div className="">
            <NavLink to={`/manage/learn/add`}>
                <Button icon={true} title="Trở về" left={true}>
                    <IconArrowUpLeft />
                </Button>
            </NavLink>
            <div className="p-5 border bg-primary-grey border-primary-black flex gap-3">
                <div className=" w-1/2  ">
                    <div className=" border-b border-primary-black pb-2 mb-5">
                        <h1 className=" text-heading-6 font-heading-6 font-plusjakartasans text-primary-black">
                            Khóa học
                        </h1>
                        <p className=" text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                            Bạn có thể chỉnh sửa khóa học hoặc thêm một khóa học bằng cách thủ công hoặc thêm bằng file
                            excel.
                        </p>
                    </div>
                </div>
                <div className=" w-1/2 bg-white">
                    {' '}
                    <CardCreateOne />
                </div>
            </div>
        </div>
    );
}
