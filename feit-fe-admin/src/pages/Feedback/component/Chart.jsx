import Chart from 'react-apexcharts';
import { useState } from 'react';
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
