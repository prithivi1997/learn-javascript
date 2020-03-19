const draw = (data) => {
  const margin = {
    top: 10,
    right: 10,
    bottom: 30,
    left: 100
  };
  const graphWidth = 800 - margin.left - margin.right;
  const graphHeight = 500 - margin.top - margin.bottom;
  const svg = d3
    .select(".canvas")
    .append("svg")
    .attr("width", graphWidth + margin.left + margin.right)
    .attr("height", graphHeight + margin.top + margin.bottom);

  const graph = svg
    .append("g")
    .attr("width", graphWidth)
    .attr("height", graphHeight)
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  const yScale = drawLinearAxis(
    0,
    d3.max(data.value, (d) => d.percentage),
    graphHeight,
    0,
    graph
  );
  const xScale = drawBandAxis(
    data.value.map((d) => d.country),
    0,
    graphWidth,
    graph,
    graphHeight
  );
  switch (data.type) {
    case "line":
      drawLine(xScale, yScale, data.value, "country", "percentage", graph);
      break;
    case "bar":
      drawBar(
        xScale,
        yScale,
        graph,
        data.value,
        "country",
        "percentage",
        graphHeight,
        xScale.bandwidth
      );

    default:
      break;
  }
};
