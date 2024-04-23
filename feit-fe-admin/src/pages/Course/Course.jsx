import { Header } from '../../layouts';
import { Outlet } from 'react-router-dom';
import { privateRouter } from '../../context';
import { CardStatistic, CardCrud, CardView, CardItem } from './component';
export default function Course() {
    return (
        <div className="">
            <div className=" mb-7">
                <CardStatistic />
            </div>
            <div className=" mb-7">
                <CardCrud />
            </div>
            <CardView>
                <CardItem />
            </CardView>
        </div>
    );
}
