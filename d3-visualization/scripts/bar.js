const drawBar = (xScale, yScale, parentGroup, data, xScaleAttrcountry, yScaleAttrcountry, barMaxHeight, barWidth) => {
    const rects = parentGroup.selectAll("rect").data(data);

    rects
        .enter()
        .append("rect")
        .attr("width", barWidth)
        .attr("height", d => barMaxHeight - yScale(d[yScaleAttrcountry]))
        .attr("fill", "green")
        .attr("x", d => xScale(d[xScaleAttrcountry]))
        .attr("y", d => yScale(d[yScaleAttrcountry]));
};