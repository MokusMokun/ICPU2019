var RadarChart_option1 = {
    title: {
        text: '四个维度的公司画像模型',
        subtext: 'reference here'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['某公司'],
        selected: {
            '某公司': false
        }
    },
    radar: [
        {
            indicator: [
                { text: '环境', max: 100 },
                { text: '产业', max: 100 },
                { text: '财务', max: 100 },
                { text: '非财务', max: 100 }
            ],
            center: ['50%', '50%'],
            radius: 240,
            startAngle: 90,
            splitNumber: 5,
            shape: 'circle',
            name: {
                formatter: '{value}',
                textStyle: {
                    color: '#86BC25'
                },
                fontSize: 20
            },
            splitArea: {
                areaStyle: {
                    color:
                        ['rgba(134, 188, 37, 0.1)', 'rgba(134, 188, 37, 0.2)',
                            'rgba(134, 188, 37, 0.3)', 'rgba(134, 188, 37, 0.5)',
                            'rgba(134, 188, 37, 0.7)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(4, 106, 56, 0.5)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(4, 106, 56, 0.5)'
                }
            }
        }
    ],
    series: [
        {
            name: '雷达图',
            type: 'radar',
            tooltip: {
                trigger: 'item'
            },
            itemStyle: {
                emphasis: {
                    lineStyle: {
                        width: 4
                    }
                }
            },
            data: [
                {
                    value: [60, 45, 80, 80, 1500],
                    name: '某公司',
                    areaStyle: {
                        normal: {
                            color: 'rgba(4, 106, 56, 0.5)'
                        }
                    }
                }
            ]
        }
    ]
};