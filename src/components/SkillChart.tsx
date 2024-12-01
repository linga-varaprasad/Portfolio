import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Skill } from '../types';

interface SkillChartProps {
  skills: Skill[];
}

const SkillChart: React.FC<SkillChartProps> = ({ skills }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const margin = { top: 20, right: 20, bottom: 30, left: 120 };
    const width = svgRef.current.clientWidth - margin.left - margin.right;
    const height = skills.length * 40;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);

    const y = d3.scaleBand()
      .domain(skills.map(d => d.name))
      .range([0, height])
      .padding(0.1);

    // Color scale
    const color = d3.scaleOrdinal()
      .domain(skills.map(d => d.category))
      .range(d3.schemeSet3);

    // Add bars
    svg.selectAll(".bar")
      .data(skills)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("y", d => y(d.name)!)
      .attr("height", y.bandwidth())
      .attr("fill", d => color(d.category))
      .attr("rx", 6)
      .attr("ry", 6)
      .attr("width", 0)
      .transition()
      .duration(1000)
      .attr("width", d => x(d.level));

    // Add skill names
    svg.selectAll(".skill-label")
      .data(skills)
      .enter()
      .append("text")
      .attr("class", "skill-label")
      .attr("y", d => y(d.name)! + y.bandwidth() / 2)
      .attr("x", -10)
      .attr("text-anchor", "end")
      .attr("alignment-baseline", "middle")
      .text(d => d.name)
      .style("font-size", "14px")
      .style("fill", "currentColor");

    // Add skill level labels
    svg.selectAll(".level-label")
      .data(skills)
      .enter()
      .append("text")
      .attr("class", "level-label")
      .attr("y", d => y(d.name)! + y.bandwidth() / 2)
      .attr("x", d => x(d.level) + 5)
      .attr("alignment-baseline", "middle")
      .style("font-size", "14px")
      .style("fill", "currentColor")
      .style("opacity", 0)
      .transition()
      .duration(1000)
      .style("opacity", 1)
      .text(d => `${d.level}%`);

  }, [skills]);

  return (
    <div className="w-full overflow-x-auto">
      <svg ref={svgRef} className="w-full" />
    </div>
  );
};

export default SkillChart;