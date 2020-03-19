let lineData = {
  type: "line",
  value: [
    {
      country: "India",
      percentage: 17.5
  },
  
  {
      country: "USA",
      percentage: 4.24
  },
  {
      country: "Pakistan",
      percentage: 2.82
  },
  {
      country: "Indonasia",
      percentage: 3.41
  },
  {
      country: "brazil",
      percentage: 2.72
  },
  {
      country: "bangladesh",
      percentage: 2.17
  }
  ]
};

let lineChart = draw(lineData);

let barData = {
  type: "bar",
  value: [
    {
      country: "India",
      percentage: 17.5
  },
  
  {
      country: "USA",
      percentage: 4.24
  },
  {
      country: "Pakistan",
      percentage: 2.82
  },
  {
      country: "Indonasia",
      percentage: 3.41
  },
  {
      country: "brazil",
      percentage: 2.72
  },
  {
      country: "bangladesh",
      percentage: 2.17
  }
  ]
};

let barChart = draw(barData);
