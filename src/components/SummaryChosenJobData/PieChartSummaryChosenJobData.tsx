import React, { FC, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@emotion/react';

interface IProps {
  data: any;
  options: any;
  chartId: string;
}


const PieChartSummaryChosenJobData: FC<IProps> = ({ data, chartId, options }) => {
  console.log(data);
  
  const pieChart = useRef(null);
  const { chartHeight, chartWidth, chartMargin } = options;
  const theme = useTheme();
  const radius = Math.min(chartWidth, chartHeight) / 2 - chartMargin;

  const color = d3.scaleOrdinal().range(d3.schemeSet2);

  const pie = d3.pie().value(function (d) {
    return d[1];
  });
  const data_ready = pie(Object.entries(data));
  const arcGenerator = d3.arc().innerRadius(100).outerRadius(radius);

  useEffect(() => {
    d3.select(`#${chartId}`).remove();
    const svg = d3
      .select(pieChart.current)
      .append('svg')
      .attr('id', chartId)
      .attr('width', chartWidth - chartMargin - chartMargin)
      .attr('height', chartHeight - chartMargin - chartMargin)
      .attr('viewBox', `0 0 ${chartWidth} ${chartHeight}`)
      .classed("svg-content-responsive", true)

      .append('g')
      .attr(
        'transform',
        'translate(' + chartWidth / 2 + ',' + chartHeight / 2 + ')'
      );

    svg
      .selectAll('mySlices')
      .data(data_ready)
      .join('path')
      .attr('d', arcGenerator)
      .attr('fill', function (d) {
        return color(d.data[0]);
      })
      .attr('stroke', 'black')
      .style('stroke-width', '2px')
      .attr('fill-opacity', 0.3)
      .style('transition', '0.5s')
      .on('mouseover', function (e, d, i) {
        d3.select(e.srcElement).attr('fill-opacity', 0.8);
        // d3.select(e.srcElement).attr('transform', 'scale(1.1)');
      })
      .on('mouseout', function (e, d) {
        d3.select(e.srcElement).attr('fill-opacity', 0.3);
        // d3.select(e.srcElement).attr('transform', 'scale(1)');
        // d3.select(e.srcElement).selectAll('text')
      });

    // Now add the annotation. Use the centroid method to get the best coordinates
    svg
      .selectAll('mySlices')
      .data(data_ready)
      .join('text')
      .text(function (d) {
        return d.data[0];
      })
      .attr('transform', function (d) {
        return `translate(${arcGenerator.centroid(d)})`;
      })
      .style('text-anchor', 'middle')
      .style('font-size', 17)
      .style('pointer-events', 'none');

  });
  return <div ref={pieChart}></div>;
}

export default PieChartSummaryChosenJobData;