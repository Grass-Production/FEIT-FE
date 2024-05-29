import { ArrowRight, IconChartLine } from '../../../svgs';
import { Button } from '../../../components';
export const CardStatistic = () => {
    return (
        <div className=" w-3/4">
            <IconChartLine className={'bg-primary-blue-400 rounded mb-2 '} size={'54'} color="#FFFFFF" />
            <h1 className=" text-heading-7 font-plusjakartasans font-heading-7 text-primary-black mb-2">
                Thống kê của bạn
            </h1>
            <Button icon={true} color={'secondaryicon'} title="Khám phá" right={true}>
                <ArrowRight color="#3C79FE" />
            </Button>
        </div>
    );
};
