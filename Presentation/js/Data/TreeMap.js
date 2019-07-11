var tree_data1 = {
    "name": "总体评估",
    "children": [
        {
            "name": "环境评估",
            "children": [
                { "name": "环境因子1" },
                { "name": "环境因子2" },
                { "name": "环境因子3" },
                { "name": "环境因子4" },
                { "name": "环境因子5" },
                { "name": "环境因子6" },
                { "name": "环境因子1" },
                { "name": "环境因子2" },
                { "name": "环境因子3" },
                { "name": "环境因子4" },
                { "name": "环境因子5" },
                { "name": "环境因子6" },
            ]
        },
        {
            "name": "产业评估",
        }, 
        {
            "name": "内部财务评估",
        }, 
        {
            "name": "内部非财务评估",
        },
    ]
}

var TreeMap_option1 = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',

            data: [tree_data1],

            top: '1%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            symbolSize: 12,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 15
                }
            },

            leaves: {
                label: {
                    normal: {
                        position: 'right',
                        verticalAlign: 'middle',
                        align: 'left'
                    }
                }
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
        }
    ]
}