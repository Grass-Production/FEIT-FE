import { NavLink } from 'react-router-dom';
import { LoadingProgressBar, Button } from '../../../components';

export const UnitCard = ({ img = '/src/assets/images/img-card.jpg', name = 'Chương 1', percent, lessonid, unitid }) => {
    return (
        <div className=" p-6 border border-secondary-gray hover:bg-background-able bg-background-disable active:bg-background-disable hover:border-primary-blue-400 active:border-primary-blue-400 rounded-[40px]">
            <div className=" ">
                <div
                    className={`  max-h-72 bg-no-repeat bg-contain bg-center bg-[url(${img})] h-[25vh] overflow-hidden rounded-lg `}></div>
                <h1 className="truncate overflow-hidden whitespace-nowrap mt-3 text-center text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-3">
                    {name}
                </h1>
                <p className=" text-center mb-2 text-body-2 font-body-2 text-secondary-gray font-plusjakartasans">
                    Đã học 0 / 0 bài học
                </p>
                <LoadingProgressBar className={'mb-2 h-2'} percent={percent} />
                <NavLink to={`/learn/lesson/${lessonid}/unit/${unitid}`}>
                    <Button icon={false} className=" w-full py-6" title="Bắt đầu" color={'primary'}></Button>
                </NavLink>
            </div>
        </div>
    );
};

export const UnitCardLoad = () => {
    return (
        <div className="">
            <div className="">
                <div className=" h-80 bg-gray-300  overflow-hidden rounded-lg mb-3 "></div>
            </div>
        </div>
    );
};
