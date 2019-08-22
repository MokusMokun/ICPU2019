//YBarChart0
function drawYBarChart0() {
    var dom = document.getElementById("BarChartY0");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = YBarChart_option0;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//YBarChart1
function drawYBarChart1() {
    var dom = document.getElementById("BarChartY1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = YBarChart_option1;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//BarChart_5_4
function drawBarChart_5_4() {
    var dom = document.getElementById("BarChart_5_4");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = BarChart_5_4_option;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//PieChart_5_5
function drawPieChart_5_5() {
    var dom = document.getElementById("PieChart_5_5");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '嵌套环形图';

    option = PieChart_5_5_option;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//RadarChart1
function drawRadarChart1() {
    var dom = document.getElementById("RadarChart1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '4维风险评估';

    option = RadarChart_option1;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//RadarChart2
function drawRadarChart2() {
    var dom = document.getElementById("RadarChart2");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '25维风险评估';

    option = RadarChart_option2;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//RadarChart2_beixun
function drawRadarChart2_beixun() {
    var dom = document.getElementById("RadarChart2_beixun");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '25维风险评估';

    option = RadarChart_option2_beixun;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//RadarChart2_shunfeng
function drawRadarChart2_shunfeng() {
    var dom = document.getElementById("RadarChart2_shunfeng");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '25维风险评估';

    option = RadarChart_option2_shunfeng;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//TreeMap1
function drawTreeMap1() {
    var dom = document.getElementById("TreeMap1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'Tree map';

    option = TreeMap1_option;

    myChart.setOption(option);;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//清除div内的内容
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}


//延迟绘制
function delayDraw(drawFunc) {
    setTimeout(function () {
        drawFunc()
    }, 300)
}

//初始化
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    width: "100%",
    height: "100%",
    transition: 'convex' // none/fade/slide/convex/concave/zoom
});

//切换监听
Reveal.addEventListener('slidechanged', function (event) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    console.log(event.currentSlide.dataset.title);
    var title = event.currentSlide.dataset.title;
    switch (title) {
        case "3dChart1":
            draw3DChart1();
            break;
        case "BarChartY0":
            delayDraw(drawYBarChart0);
            break;
        case "BarChartY1":
            delayDraw(drawYBarChart1);
            break;
        case "RadarChart1":
            delayDraw(drawRadarChart1);
            break;
        case "RadarChart2":
            delayDraw(drawRadarChart2);
            break;
        case "RadarChart2_beixun":
            delayDraw(drawRadarChart2_beixun);
            break;
        case "RadarChart2_shunfeng":
            delayDraw(drawRadarChart2_shunfeng);
            break;
        case "TreeMap1":
            drawTreeMap1();
            break;
        case "BarChart_5_4":
            delayDraw(drawBarChart_5_4);
            break;
        case "PieChart_5_5":
            delayDraw(drawPieChart_5_5);
            break;
    }
});

