import Chart from 'react-apexcharts';

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

export const PieChart = () => {
    const options = {
        labels: ['A', 'B'], // Thêm nhãn cho các phần của biểu đồ
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
    const series = [80, 20];
    const labels = ['A', 'B', 'C', 'D', 'E'];

    return (
        <div className="donut">
            <Chart options={options} series={series} type="donut" width="100%" />
        </div>
    );
};
