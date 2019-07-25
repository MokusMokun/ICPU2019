var PieChart1_option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '直达', selected: true },
                { value: 679, name: '营销广告' },
                { value: 1548, name: '搜索引擎' }
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [
                { value: 335, name: '直达' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1048, name: '百度' },
                { value: 251, name: '谷歌' },
                { value: 147, name: '必应' },
                { value: 102, name: '其他' }
            ]
        }
    ]
};

var PieChart_5_5_option = {
    title: {
        text: '粤港澳大湾区创新机构行业分布',
        subtext: '《粤港澳大湾区协同创新发展报告（2018）》',
        textStyle: {
            fontSize: 50,
            lineHeight: 50
        },
        subtextStyle: {
            fontSize: 20
        },
        x: 'center'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '20%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "({a}) <br/>{b} : {d}%"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top: '20%',
        data: ['计算机和其他电子设备制造业', '信息传输，软件和信息技术服务业', '交通运输业',
            '电气机械和器材制造业', '高等院校', '化学原料及化学制品制造业', '其他']
    },
    series: [
        {
            name: '创新行业百分比',
            type: 'pie',
            radius: '65%',
            center: ['50%', '60%'],
            data: [
                { value: 21.96, name: '计算机和其他电子设备制造业' },
                { value: 7.84, name: '信息传输，软件和信息技术服务业' },
                { value: 1.76, name: '交通运输业' },
                { value: 22.55, name: '电气机械和器材制造业' },
                { value: 8.04, name: '高等院校' },
                { value: 6.67, name: '化学原料及化学制品制造业' },
                { value: 31.18, name: '其他' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            color:
                ['#c23531', '#2f4554', '#61a0a8', '#d48265',
                    '#91c7ae', '#749f83', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
        }
    ]
};