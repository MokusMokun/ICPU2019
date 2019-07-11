//YBarChart1
function drawYBarChart1() {
    var dom = document.getElementById("BarChartY1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = '世界人口总量 - 条形图';

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

//PieChart1
function drawPieChart1() {
    var dom = document.getElementById("PieChart1");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;

    option = PieChart1_option;

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
    app.title = '风险评估';

    option = RadarChart_option1;

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }
}

//ChartScatter3D
function drawScatter3D() {
    var dom = document.getElementById("Scatter3D");
    var myChart = echarts.init(dom);
    var app = {};
    option = null;
    app.title = 'RGB';

    option = Scatter3D_option;
    myChart.setOption(option);

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
    app.title = '风险因子模型';

    option = TreeMap_option1;

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
        case "PieChart1":
            delayDraw(drawPieChart1);
            break;
        case "BarChartY1":
            delayDraw(drawYBarChart1);
            break;
        case "RadarChart1":
            delayDraw(drawRadarChart1);
            break;
        case "TreeMap1":
            delayDraw(drawTreeMap1);
            break;
        case "Scatter3D":
            delayDraw(drawScatter3D);
            break;
        case "BarChart_5_4":
            delayDraw(drawBarChart_5_4);
            break;
        case "PieChart_5_5":
            delayDraw(drawPieChart_5_5);
            break;
    }
});

