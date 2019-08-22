
var PieChart_5_5_option = {
    title: {
        text: '粤港澳大湾区创新机构行业分布',
        subtext: '来源:《粤港澳大湾区协同创新发展报告（2018）》',
        textStyle: {
            fontSize: 50,
            lineHeight: 50
        },
        subtextStyle: {
            fontSize: 25,
            color: 'rgba(0,0,0,1)'
        },
        x: 'center'
    },
    grid: {
        left: '30%',
        right: '3%',
        bottom: '3%',
        top: '20%',
        containLabel: true
    },
    textStyle: {
        fontSize: 17
    },
    tooltip: {
        trigger: 'item',
        formatter: "({a}) <br/>{b} : {d}%",
        textStyle: {
            fontSize: 25,
        }
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top: '20%',
        right: '10%',
        data: ['计算机和其他电子设备制造业', '信息传输，软件和信息技术服务业', '交通运输业',
            '电气机械和器材制造业', '高等院校', '化学原料及化学制品制造业', '其他'],
    },
    series: [
        {
            name: '创新行业百分比',
            type: 'pie',
            radius: '75%',
            center: ['50%', '60%'],
            data: [
                { value: 21.96, name: '计算机和其他电子设备制造业' },
                { value: 7.84, name: '信息传输，软件和信息技术服务业' },
                { value: 3, name: '交通运输业' },
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