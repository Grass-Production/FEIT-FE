import { Outlet } from 'react-router-dom';
import { CardStatistic } from './component';
import { HeaderRouter } from '../../layouts';
export default function ManageLearn() {
    return (
        <div className="">
            <>
                <div className=" mb-7">
                    <HeaderRouter />
                </div>
                <div className=" mb-7">
                    <CardStatistic />
                </div>
                <Outlet />
            </>
        </div>
    );
}
