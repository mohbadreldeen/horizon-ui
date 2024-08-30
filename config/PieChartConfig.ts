export default {
    chart: {
        type: 'pie',
        toolbar: {
            show: false,
        },
        height: '300px',
    },
    tooltip: {
        style: {
            fontSize: '12px',
            fontFamily: undefined,
        },
        onDatasetHover: {
            style: {
                fontSize: '12px',
                fontFamily: undefined,
            },
        },
        theme: 'dark',
    },

    fill: {
        type: 'solid',
        colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    },
    legend: {
        show: true,
        position: 'bottom',
    },
    labels: ['Your Fiels', 'System', 'Empty'],
    colors: ['#5E37FF', '#6AD2FF', '#E1E9F8'],
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '20px',
        },
    },
}
