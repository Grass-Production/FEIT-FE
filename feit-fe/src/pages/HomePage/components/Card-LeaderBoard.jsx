import { IconChartBar, ArrowRight } from '../../../svgs';
import { Button } from '../../../components';
import { NavLink } from 'react-router-dom';
export const CardLeaderBoard = () => {
    return (
        <div className=" w-3/4">
            <IconChartBar className={'bg-primary-blue-400 rounded mb-2 '} size={'54'} color="#FFFFFF" />
            <h1 className=" text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-2">
                Bảng xếp hạng tuần này
            </h1>
            <p className=" mb-2 text-body-1 font-body-1 font-plusjakartasans text-secondary-gray">
                Hãy cùng xem bảng xếp hạng tuần này của bạn nhé
            </p>
            <NavLink to="/leaderboard">
                <Button icon={true} color={'secondaryicon'} title="Xem" right={true}>
                    <ArrowRight color="#3C79FE" />
                </Button>
            </NavLink>
        </div>
    );
};
