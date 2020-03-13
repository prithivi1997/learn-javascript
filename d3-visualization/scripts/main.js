d3.json("data/population.json").then(data => {
    const margin = {
        top: 30,
        right: 30,
        bottom: 50,
        left: 150
    };
    const graphWidth = 900 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;
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
        d3.max(data, d => d.percentage),
        graphHeight,
        0,
        graph
    );
    const xScale = drawBandAxis(
        data.map(d => d.country),
        0,
        graphWidth,
        graph,
        graphHeight
    );

    drawBar(
        xScale,
        yScale,
        graph,
        data,
        "country",
        "percentage",
        graphHeight,
        xScale.bandwidth
    );
});

d3.json("data/gdp.json").then(data => {
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
        d3.max(data, d => d.gdp),
        graphHeight,
        0,
        graph
    );
    const xScale = drawBandAxis(
        data.map(d => d.year),
        0,
        graphWidth,
        graph,
        graphHeight
    );

    drawLine(xScale, yScale, data, "year", "gdp", graph);
});