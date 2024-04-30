import { Header } from '../../layouts';
import { privateRouter } from '../../context';
import { CardStatistic, CardCrud, CardView, CardItem } from './component';
export default function Course() {
    return (
        <div className="">
            <div className=" mb-7">
                <CardCrud />
            </div>
            <CardView>
                <CardItem />
            </CardView>
        </div>
    );
}
