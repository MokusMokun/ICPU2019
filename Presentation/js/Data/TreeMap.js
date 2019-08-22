var environment_factor_data = {
    "name": "外部环境",
    "children": [
        {
            "name": "经济气候",
            "children": [
                {
                    "name": "全国经济增长地位",
                    "children": [
                        { "name": "Local GDP Growth/National Average" },
                    ]
                },
                {
                    "name": "全球经济增长地位",
                    "children": [
                        { "name": "Local GDP Growth/Global Average", "value": 3534 },
                    ]
                },
            ]
        },
        {
            "name": "市场开放度",
            "children": [
                {
                    "name": "贸易流通",
                    "children": [
                        { "name": "The trade-weighted average tariff rate" },
                        { "name": "Nontariff barriers (NTBs)" },
                        { "name": "Time to export" },
                        { "name": "Cost to export" },
                        { "name": "Time to import" },
                        { "name": "Cost to import" }
                    ]
                },
                {
                    "name": "资本流动",
                    "children": [
                        { "name": "National treatment of foreign investment" },
                        { "name": "Foreign investment code" },
                        { "name": "Restrictions on land ownership" },
                        { "name": "Sectoral investment restrictions" },
                        { "name": "Expropriation of investments without fair compensation" },
                        { "name": "Foreign exchange controls" },
                        { "name": "Capital controls" },
                        { "name": "Extent of government regulation of financial services" },
                        { "name": "Degree of state intervention in banks and other financial firms through direct and indirect ownership" },
                        { "name": "Government influence on the allocation of credit" },
                        { "name": "Extent of financial and capital market development" },
                        { "name": "Openness to foreign competition" },
                        { "name": "Degree of Capital Account Openness" },
                    ]
                },
                {
                    "name": "劳动力流动",
                    "children": [
                        { "name": "Ratio of minimum wage to the average value added per worker" },
                        { "name": "Hindrance to hiring additional workers" },
                        { "name": "Rigidity of hours" },
                        { "name": "Difficulty of firing redundant employees" },
                        { "name": "Legally mandated notice period" },
                        { "name": "Mandatory severance pay" },
                        { "name": "Policy incentivising labour mobility" },
                    ]
                },
            ]
        },
        {
            "name": "监管合规",
            "children": [
                {
                    "name": "合规确定性",
                    "children": [
                        { "name": "Publicised law & govt data" },
                        { "name": "Right to information" },
                        { "name": "Government regulations are effectively enforced" },
                        { "name": "Government regulations are applied and enforced without improper influence" },
                        { "name": "Administrative proceedings are conducted without unreasonable delay" },
                        { "name": "The Government does not expropriate without adequate compensation" },
                        { "name": "Due process is respected in administrative proceedings" },
                    ]
                },
                {
                    "name": "法治程度",
                    "children": [
                        { "name": "Public trust in politicians" },
                        { "name": "Irregular payments and bribes" },
                        { "name": "Transparency of government policymaking" },
                        { "name": "Absence of corruption" },
                        { "name": "Perceptions of corruption" },
                        { "name": "Governmental and civil service transparency" },
                        { "name": "Government powers are effectively limited by the legislature" },
                        { "name": "Government powers are effectively limited by the judiciary" },
                        { "name": "Government powers are effectively limited by independent auditing and review" },
                        { "name": "Government officials are sanctioned for misconduct" },
                        { "name": "Government powers are subject to non-governmental checks" },
                        { "name": "Transition of power is subject to the law" },
                    ]
                },
                {
                    "name": "企业监管规定",
                    "children": [
                        { "name": "Extent of disclosure" },
                        { "name": "Extent of director liability" },
                        { "name": "Ease of shareholder suits" },
                        { "name": "Extent of shareholder rights" },
                        { "name": "Extent of ownership and control" },
                        { "name": "Extent of corporate transparency" },
                    ]
                }]
        },
        {
            "name": "法律法制",
            "children": [
                {
                    "name": "有形资产保护",
                    "children": [
                        { "name": "Physical property right" },
                        { "name": "Ease of Property Registration Procedure" },
                        { "name": "Strength of investor protection" },
                        { "name": "Risk of expropriation" },
                        { "name": "Quality of land administration" }]
                },
                {
                    "name": "无形资产保护",
                    "children": [
                        { "name": "Patent Terms of Protection" },
                        { "name": "Trademark Terms of Protection" },]
                },
                {
                    "name": "纠纷处理",
                    "children": [
                        { "name": "Judicial independence" },
                        { "name": "Quality of the judicial process" },
                        { "name": "Favoritism in decisions of government officials" },
                        { "name": "Time (days) to enforce contract" },
                    ]
                }]
        },
        {
            "name": "税务税负",
            "children": [
                {
                    "name": "税收优惠",
                    "children": [
                        { "name": "Presence of Tax Incentive" },
                    ]
                },
                {
                    "name": "税负",
                    "children": [
                        { "name": "Payments (number per year)" },
                        { "name": "Time (hours per year)" },
                        { "name": "Total tax and contribution rate (% of profit)" },
                        { "name": "Postfiling" }]
                }]
        }
    ]

};

var industry_factor_data = {
    "name": "产业层",
    "children": [
        { "name": "数字行业人才分布" },
        { "name": "供应商议价能力" },
        { "name": "高水平人才行业分布" },
        { "name": "劳动力行业分布" },
        { "name": "是否为周期性行业" },
        { "name": "行业数字化程度" },
        { "name": "行业集中度" },
    ]
}

var factor_data = {
    "name": "风险",
    "children": [
        environment_factor_data,
        industry_factor_data,
        {
            "name": "内部财务层",
            "children": [
                {
                    "name": "股票指标",
                    "children": [
                        { "name": "每股收益(元/股)_BasicEPS" },
                        { "name": "每股净资产(元/股)_NAPS" },
                        { "name": "每股营业总收入(元/股)_ToloperevPS" },
                        { "name": "每股营业利润(元/股)_OpeprfPS" },
                        { "name": "每股息税前利润(元/股)_EBITPS" },
                        { "name": "每股未分配利润(元/股)_UndivprfPS" },
                        { "name": "每股留存收益(元/股)_RetearPS" },
                        { "name": "每股经营活动现金流量(元/股)_OpeCFPS" },
                        { "name": "每股净现金流量(元/股)_CFPS" },
                        { "name": "每股企业自由现金流量(元/股)_EntfcfPS" },

                    ]
                },
                {
                    "name": "盈利能力",
                    "children": [
                        { "name": "净资产收益率(平均)(%)_AvgROE" },
                        { "name": "资产净利率(%)_ROA" },
                        { "name": "投入资本回报率(%)_ROIC" },
                        { "name": "销售净利率(%)_Netprfrt" },
                        { "name": "销售毛利率(%)_Gincmrt" },
                        { "name": "销售成本率(%)_Salcostrt" },
                        { "name": "营业利润/营业总收入_OpeprTOR" },
                        { "name": "销息税前利润/营业总收入(%)_EBITTOR" },
                        { "name": "营业总成本/营业总收入(%)_TopecostTOR" },
                        { "name": "销售费用率(%)_Opeexprt" },
                        { "name": "管理费用率(%)_Admexprt" },
                        { "name": "财务费用率(%)_Finexprt" },
                        { "name": "资产减值损失/营业总收入_AstimpaTOR" },
                        { "name": "净利润_Netprf" },
                        { "name": "息税前利润_EBIT" },
                        { "name": "息税折旧摊销前利润_EBITDA" },
                        { "name": "成本费用利润率(%)_Totprfcostrt" },

                    ]
                },
                {
                    "name": "偿债能力",
                    "children": [
                        { "name": "流动比率(%)_Currt" },
                        { "name": "速动比率(%)_Qckrt" },
                        { "name": "超速动比率(%)_Supqckrt" },
                        { "name": "产权比率(%)_Dbequrt" },
                        { "name": "股东权益/负债合计_Equtotlia" },
                        { "name": "股东权益/带息债务(%)_Equintdb" },
                        { "name": "有形净值债务率(%)_Dbtanequrt" },
                        { "name": "有形净值/净债务(%)_Tanastndb" },
                        { "name": "经营净现金流量/负债合计_NOCFtotlia" },
                        { "name": "长期负债与营运资金比率(NULL)_Ldbwrkcap" },
                        { "name": "现金流动负债比_OpeCcurdb" },

                    ]
                },
                {
                    "name": "资本结构",
                    "children": [
                        { "name": "资产负债率(%)_Dbastrt" },
                        { "name": "长期借款/总资产(%)_Ldbass" },
                        { "name": "股东权益/全部投入资本(%)_Equtotcap" },
                        { "name": "带息债务/全部投入资本(%)_Intdbtotcap" },
                        { "name": "流动负债/负债合计(%)_Curtotlia" },
                        { "name": "非流动负债/负债合计(%)_Noncurtotlia" },
                        { "name": "股东权益比率(%)_Equass" },
                        { "name": "营运资金(元)_Wrkcap" },
                        { "name": "长期负债/股东权益_Ldbequ" },
                    ]
                },
                {
                    "name": "收益质量",
                    "children": [
                        { "name": "经营活动净收益／利润总额(%)_OPItprf" },
                        { "name": "经营活动净收益／利润总额(TTM)(%)_OPItprfTTM" },
                        { "name": "对联营合营公司投资收益/利润总额(%)_Invretassoctprf" },
                        { "name": "价值变动净收益／利润总额(%)_Valchgtprf" },
                        { "name": "营业外收支净额／利润总额(%)_Noopenitprf" },
                        { "name": "净利润/营业总收入(%)_NPTOIDP" },
                        { "name": "净利润/利润总额(%)_NPTPDP" },
                        { "name": "利润总额/息税前利润(%)_TPEBITDDP" },
                        { "name": "息税前利润/营业总收入(%)_EBITTOIDDP" },
                    ]
                },
                {
                    "name": "现金流量",
                    "children": [
                        { "name": "销售商品劳务收入现金/营业收入(%)_SalesevOpeincm" },
                        { "name": "销售现金比率(%)_Casrtsale" },
                        { "name": "经营现金净流量/经营净收益(%)_NOCFONI" },
                        { "name": "资本支出/折旧和摊销_CapexpDM" },
                        { "name": "现金及其等价物净增加额(元)_CCEinc" },
                        { "name": "经营现金净流量(元)_NOCF" },
                        { "name": "自由现金流量(元)_FreeCF" },
                        { "name": "净利润现金含量(元)_Netprfcascvr" },
                        { "name": "营业收入现金含量(%)_Opeincmcashcvr" },
                        { "name": "总资产现金回收率(%)_OpeCass" },
                        {
                            "name": "分红能力",
                            "children": [
                                { "name": "每股现金及现金等价物余额(元/股)_CCEPS" },
                                { "name": "留存盈余比率(%)_Retearrt" },
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "内部非财务层",
            "children": [
                {
                    "name": "股权结构",
                    "children": [
                        { "name": "股权集中度5" },
                        { "name": "股权制衡度Z_指数" },
                    ]
                },
                {
                    "name": "成长能力",
                    "children": [
                        { "name": "每股收益增长率(%)_EPSgrrt" },
                        { "name": "营业收入3年复合增长率()_OperaInc3GrRt" },
                        { "name": "营业利润增长率(%)_Opeprfgrrt" },
                        { "name": "利润总额增长率(%)_Totprfgrrt" },
                        { "name": "净利润增长率(%)_Netprfgrrt" },
                        { "name": "归属母公司的净利润过去五年平均增幅(%)_NPPCavggrrt" },
                        { "name": "经营活动现金流量净额增长率(%)_NOCFgrrt" },
                        { "name": "净资产收益率(摊薄)增长率(%)_ROAgrrt" },
                        { "name": "净资产增长率(%)_Netassgrrt" },
                        { "name": "总资产增长率(%)_Totassgrrt" },
                        { "name": "股东权益相对年初增长率(%)_EquYTDgrrt" },
                        { "name": "资产总计相对年初增长率(%)_TotastYTDgrrt" },
                        { "name": "可持续增长率(%)_Susgrrt" },

                    ]
                },
                { "name": "欺诈历史" },
                {
                    "name": "运营能力",
                    "children": [
                        { "name": "营业周期(天/次)_Opecyc" },
                        { "name": "存货周转率(次)_Invtrtrrat" },
                        { "name": "应收账款周转率(次)_ARTrat" },
                        { "name": "流动资产周转率(次)_Currat" },
                        { "name": "固定资产周转率(次)_Fixassrat" },
                        { "name": "股东权益周转率(次)_Equrat" },
                        { "name": "总资产周转率(次)_Totassrat" },
                    ]
                },
                { "name": "企业文化" },
                {
                    "name": "社会舆论",
                    "children": [
                        { "name": "积极新闻舆情_Positive" },
                        { "name": "消极新闻舆情_Nagative" },
                        { "name": "消极/积极_Na/P" },
                        { "name": "消极/中立_Na/Ne" },

                    ]
                },
                { "name": "主营业务" },
            ]
        }
    ]
};

var TreeMap1_option = {
    title: {
        text: '画像因子',
        textStyle: {
            fontSize: 30,
        },
        x: 'center'
    },
    textStyle: {
        fontSize: 20
    },
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [
        {
            type: 'tree',

            data: [factor_data],

            top: '20%',
            left: '7%',
            bottom: '1%',
            right: '20%',

            symbolSize: 10,

            label: {
                normal: {
                    position: 'left',
                    verticalAlign: 'middle',
                    align: 'right',
                    fontSize: 16
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
};