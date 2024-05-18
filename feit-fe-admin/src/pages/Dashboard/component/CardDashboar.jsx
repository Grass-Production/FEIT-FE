import Chart from 'react-apexcharts';
import { useState } from 'react';

import { IconTimer, IconListNumbers, FireSimple, IconBook } from '../../../svgs';

export const CardTime = ({ time = '153' }) => {
    return (
        <div className=" ">
            <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                <IconTimer />
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">Thời gian</h1>
            </div>
            <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                {time} phút
            </h1>
        </div>
    );
};

export const CardScore = ({ score = '1800' }) => {
    return (
        <div className=" ">
            <div className="border-b border-secondary-gray py-2 mb-6">
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                    Tổng số điễm đã đạt
                </h1>
            </div>
            <h1 className=" text-center text-heading-4 font-heading-4 font-plusjakartasans text-primary-blue-800">
                {score}
            </h1>
        </div>
    );
};

export const CardLessonComplete = ({ number = '3' }) => {
    return (
        <div className=" ">
            <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                <IconListNumbers />
                <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                    Chủ đề hoàn thành
                </h1>
            </div>
            <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                {number}
            </h1>
        </div>
    );
};

export const CardStreak = ({ streak = '7' }) => {
    return (
        <div className="">
            <div className=" ">
                <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                    <FireSimple />
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">Streak</h1>
                </div>
                <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                    {streak}
                </h1>
            </div>
        </div>
    );
};
export const CardVocabulareComplete = ({ vocabulary = '50' }) => {
    return (
        <div className="">
            <div className=" ">
                <div className="flex gap-1 justify-center items-center border-b border-secondary-gray py-2 mb-6">
                    <IconBook />
                    <h1 className=" text-heading-7 font-heading-7 font-plusjakartasans text-primary-black">
                        Từ đã học
                    </h1>
                </div>
                <h1 className=" text-center text-heading-5 font-heading-5 font-plusjakartasans text-primary-blue-600">
                    {vocabulary}
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
            <Chart options={options} series={options.series} type="line" height={400} />
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
