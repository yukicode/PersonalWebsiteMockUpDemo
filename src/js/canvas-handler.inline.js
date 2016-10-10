var initChart = (function () {
    var data = function () {
        this.labels = [];
        this.datasets = [{
            label: "Training",
            backgroundColor: 'rgba(17, 153, 195, 0.4)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [],
        }, {
                label: "Projects",
                backgroundColor: 'rgba(17, 153, 195, 0.2)',
                borderColor: 'rgba(54, 162, 235, 0.8)',
                borderWidth: 1,
                data: [],
            }];
    };
    //add personal data to the dataset
    var languageChartData = new data();
    languages.forEach(function (entry) {
        languageChartData.labels.push(entry.name);
        languageChartData.datasets[0].data.push(entry.courses);
        languageChartData.datasets[1].data.push(entry.projects);
    });
    frameworks.forEach(function (entry) {
        languageChartData.labels.push(entry.name);
        languageChartData.datasets[0].data.push(entry.courses);
        languageChartData.datasets[1].data.push(entry.projects);
    });

    //set graph color and font size
    Chart.defaults.global.defaultFontColor = "#2d3c49";
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;   
    Chart.defaults.global.defaultFontSize = width > 640? 20 : 12;

    //set canvas
    var ctx1 = document.getElementById("language-chart");
    var languageBarChart = new Chart(ctx1, {
        type: 'horizontalBar',
        borderWidth: 1,
        data: languageChartData,
        yAxisID: "Skill level by courses and porjects",
        options: {
            title: {
                display: true,
                text: 'Languages and Frameworks',
            },
            scales: {
                xAxes: [{
                    stacked: true,
                    display: false,
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: false,
                    },
                }]
            },
        }
    });

})();