const drawLine = (xScale, yScale, data, xScaleAttrcountry, yScaleAttrcountry, parentGroup) => {
    const line = d3.line()
        .x(function (d) {
            return xScale(d[xScaleAttrcountry]);
        })
        .y(function (d) {
            return yScale(d[yScaleAttrcountry]);
        });

    const path = parentGroup.append("path");

    path
        .data([data])
        .attr("fill", "none")
        .attr("stroke", "green")
        .attr("stroke-width", 2)
        .attr("class", "line")
        .attr("d", line);
};