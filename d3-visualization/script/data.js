var line = {
  type: "line",
  top: 20,
  bottom: 80,
  left: 30,
  right: 10,
  width: 800,
  height: 500,
  lineColor: "#7FFFD4",
  value: [
    {
      xAxis: "china",
      yAxis: 21.5
    },
    {
      xAxis: "India",
      yAxis: 17.5
    },
    {
      xAxis: "USA",
      yAxis: 4.24
    },
    {
      xAxis: "Pakistan",
      yAxis: 2.82
    },
    {
      xAxis: "Indonasia",
      yAxis: 3.41
    },
    {
      xAxis: "Brazil",
      yAxis: 2.72
    },
    {
      xAxis: "Bangladesh",
      yAxis: 2.17
    }


  ]
};

var lineChart = draw(line);

var column = {
  type: "column",
  top: 20,
  bottom: 80,
  left: 30,
  right: 10,
  width: 800,
  height: 500,
  columnColor: "#29AB87",
  value: [
    {
      xAxis: "china",
      yAxis: 21.5
    },
    {
      xAxis: "India",
      yAxis: 17.5
    },
    {
      xAxis: "USA",
      yAxis: 4.24
    },
    {
      xAxis: "Pakistan",
      yAxis: 2.82
    },
    {
      xAxis: "Indonasia",
      yAxis: 3.41
    },
    {
      xAxis: "Brazil",
      yAxis: 2.72
    },
    {
      xAxis: "Bangladesh",
      yAxis: 2.17
    }
  ]
};

var columnChart = draw(column);

var pie = {
  type: "pie",
  top: 350,
  bottom: 70,
  left: 350,
  right: 10,
  width: 900,
  height: 800,
  inLabel: 130,
  value: [
    {
      xAxis: "china",
      yAxis: 21.5
    },
    {
      xAxis: "India",
      yAxis: 17.5
    },
    {
      xAxis: "USA",
      yAxis: 4.24
    },
    {
      xAxis: "Pakistan",
      yAxis: 2.82
    },
    {
      xAxis: "Indonasia",
      yAxis: 3.41
    },
    {
      xAxis: "Brazil",
      yAxis: 2.72
    },
    {
      xAxis: "Bangladesh",
      yAxis: 2.17
    }
  ]
};

var pieChart = draw(pie);

var bar = {
  type: "bar",
  top: 15,
  bottom: 20,
  left: 60,
  right: 25,
  width: 800,
  height: 500,
  barColor: "#008080",
  value: [
    {
      yAxis: "china",
      xAxis: 21.5
    },
    {
      yAxis: "India",
      xAxis: 17.5
    },
    {
      yAxis: "USA",
      xAxis: 4.24
    },
    {
      yAxis: "Pakistan",
      xAxis: 2.82
    },
    {
      yAxis: "Indonasia",
      xAxis: 3.41
    },
    {
      yAxis: "Brazil",
      xAxis: 2.72
    },
    {
      yAxis: "Bangladesh",
      xAxis: 2.17
    }
  ]
};

var barChart = draw(bar);
