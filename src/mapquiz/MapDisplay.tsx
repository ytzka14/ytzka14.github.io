import * as d3 from "d3-geo";
import { useRef, useEffect } from "react";
import { GeoObject } from "./MapQuizTypes";

const MapDisplay = ({ filled, empty }: { filled: GeoObject[], empty: GeoObject[] }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      if (!context) return;

      const allFeatures = [...filled, ...empty].map(obj => obj.shape);
      const featureCollection: GeoJSON.FeatureCollection = {
        type: 'FeatureCollection',
        features: allFeatures,
      };

      const pathGenerator = d3.geoPath().context(context);
      const bounds = pathGenerator.bounds(featureCollection);
      const width = bounds[1][0] - bounds[0][0];
      const height = bounds[1][1] - bounds[0][1];
      const scale = 0.95 / Math.max(width / canvas.width, height / canvas.height);
      const [translateX, translateY] = [
        (canvas.width - scale * (bounds[1][0] + bounds[0][0])) / 2,
        (canvas.height - scale * (bounds[1][1] + bounds[0][1])) / 2,
      ];
      
      const projection = d3
        .geoMercator()
        .scale(scale) // Adjust this scale factor as needed
        .translate([translateX, translateY]);

      pathGenerator.projection(projection);

      context.clearRect(0, 0, canvas.width, canvas.height);

      const drawGeoObjects = (geoObjects: GeoObject[], fill: string) => {
        geoObjects.forEach(geoObject => {
          context.beginPath();
          pathGenerator(geoObject.shape);
          context.fillStyle = fill;
          context.fill();
          context.strokeStyle = 'black';
          context.stroke();
        });
      };

      drawGeoObjects(filled, 'yellow');
      drawGeoObjects(empty, 'none');
    }
  }, [filled, empty]);

  return <canvas ref={canvasRef} width={800} height={800}></canvas>;
};

export default MapDisplay;