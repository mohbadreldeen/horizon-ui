export default {
    chart: {
        foreColor: '#000',
        id: 'basic-bar',
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 13,
            left: 0,
            blur: 10,
            opacity: 0.1,
            color: '#4318FF',
        },
    },
    colors: ['#4318FF', '#39B8FF'],
    markers: {
        size: 0,
        colors: 'white',
        strokeColors: '#7551FF',
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        showNullDataPoints: true,
    },
    tooltip: {
        theme: 'dark',
    },
    stroke: {
        curve: 'smooth',
        type: 'line',
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997],
        categories: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
        labels: {
            style: {
                colors: '#A3AED0',
                fontSize: '12px',
                fontWeight: '500',
            },
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },

    grid: {
        show: false,
        column: {
            color: ['#7551FF', '#39B8FF'],
            opacity: 0.5,
        },
    },
}
