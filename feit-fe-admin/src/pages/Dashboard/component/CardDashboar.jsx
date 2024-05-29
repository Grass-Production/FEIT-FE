import Chart from 'react-apexcharts';
import { useState } from 'react';

import {
    IconTimer,
    IconListNumbers,
    FireSimple,
    IconBook,
    IconGraduationCap,
    IconArrowUpRight,
    IconUsers,
    IconHardDrive,
    IconList,
    IconCloud,
} from '../../../svgs';

export const CardTime = ({ quantityExam = '153' }) => {
    return (
        <div className="   py-16  px-12 flex justify-center items-end gap-3">
            <div className="">
                <IconList size="40" />
                <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                    {quantityExam}
                </h1>
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                    Số lượng bài kiểm tra
                </h1>
            </div>
        </div>
    );
};

export const CardScore = ({ quantitylearns = '1800' }) => {
    return (
        <div className="   py-16  px-12 flex justify-center items-end gap-3">
            <div className="">
                <IconBook color="#858585" size="40" />
                <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                    {quantitylearns}
                </h1>
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                    Số lượng bài học
                </h1>
            </div>
        </div>
    );
};

export const CardLessonComplete = ({ curent = '3', max }) => {
    return (
        <div className="   py-16  px-12 flex justify-center items-end gap-3">
            <div className="">
                <IconHardDrive color="#858585" size="40" />
                <div className=" mt-1 relative w-[15vw] h-2 bg-primary-blue-50 rounded-full">
                    <div className=" bg-primary-blue-500  top-0 rounded-full w-1/2 h-full "></div>
                </div>
                <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                    {curent} GB / {max} GB
                </h1>
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                    Dung lượng hệ thống
                </h1>
            </div>
        </div>
    );
};

export const CardStreak = ({ users = '7' }) => {
    return (
        <div className="   py-16  px-12 flex justify-center items-end gap-3">
            <div className="">
                <IconUsers size="40" />
                <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">{users}</h1>
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                    Số lượng truy cập
                </h1>
            </div>
        </div>
    );
};
export const CardVocabulareComplete = ({ curent = '50', max }) => {
    return (
        <div className="   py-16  px-12 flex justify-center items-end gap-3">
            <div className="">
                <IconCloud color="#858585" size="40" />
                <div className=" mt-1 relative w-[15vw] h-2 bg-primary-blue-50 rounded-full">
                    <div className=" bg-primary-blue-500  top-0 rounded-full w-1/2 h-full "></div>
                </div>
                <h1 className=" text-heading-3 font-heading-3 font-plusjakartasans text-primary-blue-600">
                    {curent} GB / {max} GB
                </h1>
                <h1 className=" text-button-1 font-button-1 font-plusjakartasans text-secondary-gray">
                    Dung lượng hệ thống
                </h1>
            </div>
        </div>
    );
};

export const LineChart = () => {
    const [data, setData] = useState([
        { name: 'Tháng 1', value: 80 },
        { name: 'Tháng 2', value: 90 },
        { name: 'Tháng 3', value: 95 },
        { name: 'Tháng 4', value: 129 },
        { name: 'Tháng 5', value: 202 },
        { name: 'Tháng 6', value: 300 },
        { name: 'Tháng 7', value: 420 },
        { name: 'Tháng 8', value: 530 },
        { name: 'Tháng 9', value: 660 },
        { name: 'Tháng 10', value: 780 },
        { name: 'Tháng 11', value: 820 },
        { name: 'Tháng 12', value: 920 },
    ]);

    const options = {
        chart: {
            type: 'line',
            height: 350,
            background: '#35696B',
        },
        grid: {
            yaxis: {
                lines: {
                    show: false, // Bỏ đường kẻ ngang
                },
            },
        },
        series: [
            {
                name: 'Số người dùng',
                data: data.map((item) => item.value),
                color: '#fff',
            },
        ],
        xaxis: {
            categories: data.map((item) => item.name),
            labels: {
                style: {
                    colors: '#fff', // Màu chữ của nhãn trục x
                },
            },
        },
        markers: {
            size: 8,
        },
        yaxis: {
            max: 1000,
            min: 50,
            labels: {
                style: {
                    colors: '#fff', // Màu chữ của nhãn trục y
                },
            },
        },
        annotations: {
            xaxis: [
                {
                    x: 'Tháng 1',
                    type: 'line', // Vị trí của đường kẻ dọc (tên của cột đầu tiên)
                    borderColor: '#fff', // Màu của đường kẻ dọc
                    label: {
                        style: {
                            color: '#fff',
                            background: '#000',
                        },
                    },
                },
            ],
        },
    };

    return (
        <div className=" bg-[#35696B]">
            <Chart options={options} series={options.series} type="line" height={480} />
        </div>
    );
};

export const BarChart = () => {
    const options = {
        chart: {
            id: 'basic-bar',
            animations: {
                speed: 300,
            },
        },
        xaxis: {
            categories: ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'],
        },
    };

    const series = [
        {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70],
        },
    ];

    return (
        <div className="chart-container">
            <Chart options={options} series={series} type="bar" width="100%" />
        </div>
    );
};

export const PieChart = ({ labelsChart, percent, colorAray }) => {
    const options = {
        // labels: ['Người trái ngành', 'Đang đi làm', 'Sinh viên'], // Thêm nhãn cho các phần của biểu đồ
        labels: labelsChart,
        colors: colorAray,
        // colors: ['#E7EEFF', '#5C8FFE', '#05256B'],
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true, // Hiển thị nhãn
                        name: {
                            offsetY: -10, // Điều chỉnh vị trí của nhãn
                        },
                        value: {
                            offsetY: 5, // Điều chỉnh vị trí của giá trị
                        },
                        total: {
                            show: true, // Hiển thị tổng giá trị
                            label: 'Total', // Nhãn cho tổng giá trị
                        },
                    },
                },
            },
        },
    };
    const series = percent;
    // const series = [48, 38, 14];

    const labels = ['A', 'B', 'C', 'D', 'E'];

    return (
        <div className="donut">
            <Chart options={options} series={series} type="donut" width="350px" height={'350px'} />
        </div>
    );
};
