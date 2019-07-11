var YBarChart_option1 = {
    title: {
        text: '因子影响性',
        subtext: 'reference here'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['三个行业', '交通运输', '电子制造', '软件信息'],
        selected: {
            '三个行业': false,
            '交通运输': false,
            '电子制造': false,
            '软件信息': false
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['factor', 'factor', 'factor', 'factor', 'factor',
            'factor', 'factor', 'factor', 'factor', 'factor']
    },
    series: [
        {
            name: '三个行业',
            type: 'bar',
            data: [5, 6, 10, 11, 12, 15, 19, 24, 35, 60]
        },
        {
            name: '交通运输',
            type: 'bar',
            data: [10, 6, 17, 23, 12, 5, 9, 14, 25, 32]
        },
        {
            name: '电子制造',
            type: 'bar',
            data: [5, 6, 7, 13, 2, 11, 8, 24, 35, 52]
        },
        {
            name: '软件信息',
            type: 'bar',
            data: [15, 9, 10, 13, 7, 35, 39, 24, 34, 11]
        }
    ]
};

var BarChart_5_4_option = {
    title: {
        text: '大湾区主要行业人才数字化程度',
        subtext: '《粤港澳大湾区数字经济与人才发展研究报告（2019.2）》',
        textStyle: {
            fontSize: 40,
            lineHeight: 50
        },
        subtextStyle: {
            fontSize: 20
        },
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        formatter: "{b}: {c}%",
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['制造', '消费品', 'ICT', '金融',
                '公司服务', '旅游度假', '零售', '交通运输', '教育', '媒体通信'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: function (value) {
                    return value + '%'
                }
            }
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: '50%',
            data: [22.59, 15.3, 84.45, 19.37, 19.46,
                11.77, 14.31, 13.57, 20.28, 20.57]
        }
    ]
};