import * as d3 from "d3";
import { useRef, useEffect } from "react";
import { GeoObject } from "./MapQuizTypes";

const MapDisplay = ({ filled, empty }: { filled: GeoObject[], empty: GeoObject[] }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 600;
  const height = 600;

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current);

      const merged: GeoJSON.FeatureCollection = {type: "FeatureCollection", features: filled.map(x => x.shape).concat(empty.map(x => x.shape))}
      const projection = d3.geoMercator().fitSize([width, height], merged);
      const pathGenerator = d3.geoPath().projection(projection);

      svg.selectAll('*').remove();

      const drawGeoObjects = (geoObjects: GeoObject[], fill: string) => {
        svg.selectAll()
          .data(geoObjects)
          .enter()
          .append('path')
          .attr('d', d => pathGenerator(d.shape)!)
          .attr('fill', fill)
          .attr('stroke', 'black');
      };

      drawGeoObjects(filled, 'yellow');
      drawGeoObjects(empty, 'none');
    }
  }, [filled, empty]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default MapDisplay;