var RadarChart_option2_beixun = {
    title: {
        text: '北讯25个维度的画像',
    },
    tooltip: {
        trigger: 'axis',
    },
    radar: [
        {
            indicator: [
                { text: '经济气候', max: 1, color: 'red' },
                { text: '市场开放度', max: 1, color: 'red' },
                { text: '监管合规', max: 1, color: 'red' },
                { text: '法律法制', max: 1, color: 'red' },
                { text: '税务税负', max: 1, color: 'red' },
                { text: '数字行业人才分布', max: 1, color: '#43B02A' },
                { text: '创新机构行业分布占比', max: 1, color: '#43B02A' },
                { text: '高水平人才行业分布', max: 1, color: '#43B02A' },
                { text: '劳动力行业分布', max: 1, color: '#43B02A' },
                { text: '是否为周期性行业', max: 1, color: '#43B02A' },
                { text: '行业数字化程度', max: 1, color: '#43B02A' },
                { text: '行业集中度', max: 1, color: '#43B02A' },
                { text: '现金流量', max: 1, color: '#00A3E0' },
                { text: '收益质量', max: 1, color: '#00A3E0' },
                { text: '资本结构', max: 1, color: '#00A3E0' },
                { text: '偿债能力', max: 1, color: '#00A3E0' },
                { text: '盈利能力', max: 1, color: '#00A3E0' },
                { text: '股票指标', max: 1, color: '#00A3E0' },
                { text: '主营业务', max: 1, color: '#ED8B00' },
                { text: '社会舆论', max: 1, color: '#ED8B00' },
                { text: '企业文化', max: 1, color: '#ED8B00' },
                { text: '运营能力', max: 1, color: '#ED8B00' },
                { text: '欺诈历史', max: 1, color: '#ED8B00' },
                { text: '成长能力', max: 1, color: '#ED8B00' },
                { text: '股权结构', max: 1, color: '#ED8B00' },
            ],
            center: ['50%', '50%'],
            radius: 200,
            startAngle: 90,
            splitNumber: 5,
            shape: 'circle',
            name: {
                formatter: '{value}',
                textStyle: {
                    color: '#86BC25'
                },
                fontSize: 15
            },
            splitArea: {
                areaStyle: {
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
            },
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
                    value: [
                        0.87, 0.83, 0.59, 0.78, 0.57, //外部环境
                        0.399, 0.06, 0.127, 0.029, 1, 0.845, 0.329, //产业层
                        0.332, 0.662, 0.516, 0.164, 0.477, 0.436, //内部财务层
                        0.125, 0.357, 0.297, 0.039, 0, 0.356, 0.318 //内部非财务层
                    ],
                    name: '北讯集团股份有限公司',
                    areaStyle: {
                        normal: {
                            color: 'rgba(4, 106, 56, 0.5)'
                        }
                    }
                }
            ],
            color: 'red',
        }
    ]
};

var RadarChart_option2_shunfeng = {
    title: {
        text: '顺丰25个维度的画像',
    },
    tooltip: {
        trigger: 'axis',
    },
    radar: [
        {
            indicator: [
                { text: '经济气候', max: 1, color: 'red' },
                { text: '市场开放度', max: 1, color: 'red' },
                { text: '监管合规', max: 1, color: 'red' },
                { text: '法律法制', max: 1, color: 'red' },
                { text: '税务税负', max: 1, color: 'red' },
                { text: '数字行业人才分布', max: 1, color: '#43B02A' },
                { text: '创新机构行业分布占比', max: 1, color: '#43B02A' },
                { text: '高水平人才行业分布', max: 1, color: '#43B02A' },
                { text: '劳动力行业分布', max: 1, color: '#43B02A' },
                { text: '是否为周期性行业', max: 1, color: '#43B02A' },
                { text: '行业数字化程度', max: 1, color: '#43B02A' },
                { text: '行业集中度', max: 1, color: '#43B02A' },
                { text: '现金流量', max: 1, color: '#00A3E0' },
                { text: '收益质量', max: 1, color: '#00A3E0' },
                { text: '资本结构', max: 1, color: '#00A3E0' },
                { text: '偿债能力', max: 1, color: '#00A3E0' },
                { text: '盈利能力', max: 1, color: '#00A3E0' },
                { text: '股票指标', max: 1, color: '#00A3E0' },
                { text: '主营业务', max: 1, color: '#ED8B00' },
                { text: '社会舆论', max: 1, color: '#ED8B00' },
                { text: '企业文化', max: 1, color: '#ED8B00' },
                { text: '运营能力', max: 1, color: '#ED8B00' },
                { text: '欺诈历史', max: 1, color: '#ED8B00' },
                { text: '成长能力', max: 1, color: '#ED8B00' },
                { text: '股权结构', max: 1, color: '#ED8B00' },
            ],
            center: ['50%', '50%'],
            radius: 200,
            startAngle: 90,
            splitNumber: 5,
            shape: 'circle',
            name: {
                formatter: '{value}',
                textStyle: {
                    color: '#86BC25'
                },
                fontSize: 15
            },
            splitArea: {
                areaStyle: {
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
                    value: [
                        0.87, 0.83, 0.59, 0.78, 0.57, //外部环境
                        0.022, 0.032, 0.044, 0.048, 0, 0.136, 0.399, //产业层
                        0.356, 0.705, 0.424, 0.254, 0.543, 0.705, //内部财务层
                        0.125, 0.686, 0, 0.167, 0, 0.457, 0.509 //内部非财务层
                    ],
                    name: '顺丰控股股份有限公司',
                    areaStyle: {
                        normal: {
                            color: 'rgba(4, 106, 56, 0.5)'
                        }
                    }
                }
            ],
            color: 'black'
        }
    ]
};

var RadarChart_option1 = {
    tooltip: {
        trigger: 'axis',
        fontSize: 25
    },
    legend: {
        data: ['公司A', '公司B'],
        selected: {
            '公司A': false,
            '公司B': false
        },
    },

    radar: [
        {
            indicator: [
                { text: '环境', max: 1 },
                { text: '产业', max: 1 },
                { text: '财务', max: 1 },
                { text: '非财务', max: 1 }
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
                fontSize: 30
            },
            splitArea: {
                areaStyle: {
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
                    value: [0.728, 0.59, 0.431, 0.213],
                    name: '公司A',
                    areaStyle: {
                        normal: {
                            color: 'rgba(4, 106, 56, 0.5)'
                        }
                    },
                },
                {
                    value: [0.728, 0.097, 0.62, 0.78],
                    name: '公司B',
                    areaStyle: {
                        normal: {
                            color: 'rgba(4, 106, 56, 0.5)'
                        }
                    },
                }
            ],
        }
    ]
};

var RadarChart_option2 = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data: ['某公司'],
    },
    radar: [
        {
            indicator: [
                { text: '经济气候', max: 1, color: 'red' },
                { text: '市场开放度', max: 1, color: 'red' },
                { text: '监管合规', max: 1, color: 'red' },
                { text: '法律法制', max: 1, color: 'red' },
                { text: '税务税负', max: 1, color: 'red' },
                { text: '数字行业人才分布', max: 1, color: '#43B02A' },
                { text: '创新机构行业分布占比', max: 1, color: '#43B02A' },
                { text: '高水平人才行业分布', max: 1, color: '#43B02A' },
                { text: '劳动力行业分布', max: 1, color: '#43B02A' },
                { text: '是否为周期性行业', max: 1, color: '#43B02A' },
                { text: '行业数字化程度', max: 1, color: '#43B02A' },
                { text: '行业集中度', max: 1, color: '#43B02A' },
                { text: '现金流量', max: 1, color: '#00A3E0' },
                { text: '收益质量', max: 1, color: '#00A3E0' },
                { text: '资本结构', max: 1, color: '#00A3E0' },
                { text: '偿债能力', max: 1, color: '#00A3E0' },
                { text: '盈利能力', max: 1, color: '#00A3E0' },
                { text: '股票指标', max: 1, color: '#00A3E0' },
                { text: '主营业务', max: 1, color: '#ED8B00' },
                { text: '社会舆论', max: 1, color: '#ED8B00' },
                { text: '企业文化', max: 1, color: '#ED8B00' },
                { text: '运营能力', max: 1, color: '#ED8B00' },
                { text: '欺诈历史', max: 1, color: '#ED8B00' },
                { text: '成长能力', max: 1, color: '#ED8B00' },
                { text: '股权结构', max: 1, color: '#ED8B00' },
            ],
            center: ['50%', '50%'],
            radius: 280,
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
            },
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
                    value: [
                        0.5, 0.6, 0.5, 0.7, 0.27, //外部环境
                        0.4, 0.6, 0.7, 0.3, 0.4, 0.8, 0.3, //产业层
                        0.3, 0.6, 0.5, 0.1, 0.4, 0.6, //内部财务层
                        0.5, 0.7, 0.9, 0.2, 0.3, 0.4, 0.8 //内部非财务层
                    ],
                    name: '某公司',
                    areaStyle: {
                        normal: {
                            color: 'rgba(4, 106, 56, 0.5)'
                        }
                    }
                }
            ],
            color: 'darkblue',
        }
    ]
};