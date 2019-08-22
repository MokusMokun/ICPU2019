var YBarChart_option0 = {
    title: {
        text: '三个产业的因子重要性',
        subtext: '数据来源于192个上市公司',
        textStyle: {
            fontSize: 40,
            lineHeight: 50
        },
        subtextStyle: {
            fontSize: 25,
            color: 'rgba(0,0,0,1)'
        },
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        fontSize: 30,
    },
    textStyle: {
        fontSize: 20
    },
    legend: {
        top: '12%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        height: '600',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            textStyle: {
                fontSize: 18
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['资产总计相对年初增长率(TotastYTDgrrt)', '正面舆论比率(Positive)', '股东权益周转率(Equart)', '存货周转率(Invtrtrrat)', '固定资产周转率(Fixassrat)',
            '流动资产周转率(Currat)', 'Logo绿色程度(Green)',
            '经营现金净流量(NOCF)', '净利润(Netprf)', '息税前利润(EBIT)',
            '每股现金及现金等价物余额(CCEPS)', '息税折旧摊销前利润(EBITDA)'],
        axisLabel: {
            textStyle: {
                fontSize: 18
            }
        }
    },
    series: [
        {
            type: 'bar',
            data: [1.51, 2.31, 2.37, 2.46, 2.70, 3.06, 3.43, 3.73, 4.44, 5.74, 7.79, 14.51]
        }
    ]
};

var YBarChart_option1 = {
    title: {
        text: '三个产业的因子重要性对比',
        textStyle: {
            fontSize: 40,
            lineHeight: 50
        },
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        fontSize: 25,
    },
    textStyle: {
        fontSize: 20
    },
    legend: {
        data: ['软件信息', '交通运输', '电子制造'],
        top: '12%',
        selected: {
            '软件信息':false,
            '交通运输':false,
            '电子制造':false
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        height: '600',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            textStyle: {
                fontSize: 18
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['存货周转率(Invtrtrrat)', '应收账款周转率(ARTrat)', '负面舆情率(Na)',
            '负面/中性舆情比率(Na/Ne)', '每股收益(BasicEPS)',
            '固定资产周转率(Fixassrat)', '营业周期(Opencyc)', '稀释每股收益增长率(EPSgrrt)',
            '息税折旧摊销前利润(EBITDA)', 'Logo绿色程度(Green)'],
        nameTextStyle: {
            fontSize: 40,
        },
        axisLabel: {
            textStyle: {
                fontSize: 18
            }
        }
    },
    series: [
        {
            name: '软件信息',
            type: 'bar',
            data: [1.24, 1.25, 7.11, 1.27, 1.28, 8.61, 1.46, 13.02, 5.31, 1.29]
        },
        {
            name: '交通运输',
            type: 'bar',
            data: [6.60, 7.61, 2.25, 0.39, 8.16, 0.4, 21.06, 0.41, 0.44, 21.12]
        },
        {
            name: '电子制造',
            type: 'bar',
            data: [4.08, 0.93, 0.94, 4.67, 0.95, 0.96, 4.95, 0.97, 32.84, 0.98]
        },
    ]
};

var BarChart_5_4_option = {
    title: {
        text: '大湾区主要行业人才数字化程度',
        subtext: '来源:《粤港澳大湾区数字经济与人才发展研究报告（2019.2）》',
        textStyle: {
            fontSize: 40,
            lineHeight: 50
        },
        subtextStyle: {
            fontSize: 25,
            color: 'rgba(0,0,0,1)'
        },
        x: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        formatter: "{b}: {c}%",
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        fontSize: 25,
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
                '软件服务', '旅游度假', '零售', '交通运输', '教育', '媒体通信'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                textStyle: {
                    fontSize: 18
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                formatter: function (value) {
                    return value + '%'
                },
                textStyle: {
                    fontSize: 18
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