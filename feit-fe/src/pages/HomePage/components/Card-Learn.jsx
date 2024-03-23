import { ArrowRight, FireSimple } from '../../../svgs';
import { Button } from '../../../components';
import { NavLink } from 'react-router-dom';
export const CardLearn = () => {
    return (
        <div className=" w-3/4">
            <FireSimple className={'bg-primary-blue-400 rounded mb-2 '} size={'54'} color="#FFFFFF" />
            <h1 className=" text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-2">
                Bắt đầu học thôi để có streak !
            </h1>
            <p className=" mb-2 text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                Hãy cùng hoàn thành một bài học để có chuỗi streak nào !
            </p>
            <NavLink to="/learn">
                <Button icon={true} color={'secondaryicon'} title="Bắt đầu" right={true}>
                    <ArrowRight color="#3C79FE" />
                </Button>
            </NavLink>
        </div>
    );
};
