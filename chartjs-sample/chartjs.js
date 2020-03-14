Chart.defaults.global.defaultFontFamily = "Times New Roman";
Chart.defaults.global.defaultFontSize = 30;
Chart.defaults.global.defaultFontColor = "black";

//bar chart
var bar = document.getElementById("barchart").getContext("2d");
var barChart = new Chart(bar, {
  type: "bar",
  data: {
    labels: [
      "china",
      "india",
      "U.S",
      "rusia",
      "europe",
      
      
    ],
    datasets: [
      {
        label: "population",
        data: [
          800,
          700,
          650,
          450,
          400,
          200,
          
        ],
        backgroundColor: [
          "red",
          "pink",
          "green",
          "grey",
          "blue",
          
        ]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "country population 2019 in bar-chart",
      fontSize: 30
    }
  }
});

// line chart
var Line = document.getElementById("linechart").getContext("2d");
var lineChart = new Chart(Line, {
  type: "line",
  responsive: "false",
  data: {
    labels: [
      "2015",
      "2016",
      "2017",
      "2018",
      "2019"
    ],
    datasets: [
      {
        label: "india population",
        data: [1411, 1706, 2226, 2967,3035],
        backgroundColor: "green"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "india population 2019 in line-chart",
      fontSize: 30
    }
  }
});