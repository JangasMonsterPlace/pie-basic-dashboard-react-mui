import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@mui/material';

export default function BarChart({ data, chartId, options }) {
  const barChartRef = useRef(null);
  const { chartHeight, chartWidth, chartMargin } = options;
  const theme = useTheme();

  const x = d3
    .scaleBand()
    .domain(d3.range(data.length))
    .range([chartMargin.left, chartWidth - chartMargin.right])
    .padding(0.1);

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([chartHeight - chartMargin.bottom, chartMargin.top]);

  const xAxis = (g) => {
    g.attr('transform', `translate(0,${chartHeight - chartMargin.bottom})`)
      .call(d3.axisBottom(x).tickFormat((i) => data[i].name))
      .attr('font-size', '20px');
  };
  const yAxis = (g) => {
    g.attr('transform', `translate(${chartMargin.left},0)`)
      .call(d3.axisLeft(y).ticks(null, data.format))
      .attr('font-size', '20px');
  };

  useEffect(() => {
    d3.select(`#${chartId}`).remove();
    const svg = d3
      .select(barChartRef.current)
      .append('svg')
      .attr('id', `${chartId}`)
      .attr('width', chartWidth - chartMargin.left - chartMargin.right)
      .attr('height', chartHeight - chartMargin.top - chartMargin.bottom)
      .attr('viewBox', `0 0 ${chartWidth} ${chartHeight}`)
      .classed("svg-content-responsive", true)


    svg
      .append('g')
      .attr('fill', theme.palette.primary.main)
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('class', 'bar-chart__bar')
      .attr('x', (d, i) => x(i))
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => y(0) - y(d.value))
      .attr('width', x.bandwidth())
      .attr('fill-opacity', 0.2)
      .attr('stroke', theme.palette.primary.main)
      .attr('stroke-width', '2px')
      .on('mouseover', (e, d) => {
        d3.select(e.srcElement).attr('fill-opacity', 1);
      })
      .on('mouseout', (e, d) => {
        d3.select(e.srcElement).attr('fill-opacity', 0.3);
      });

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);
  });
  return <div className='svg-container' ref={barChartRef}></div>;
}
