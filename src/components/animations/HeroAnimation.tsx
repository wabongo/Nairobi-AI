import React, { useEffect, useRef, useMemo } from 'react';
import Globe from 'react-globe.gl';
import { City, cityData } from '../../data/cityData';

// Define the Connection type for arcs
interface Connection {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  isHub: boolean;
}

const HeroAnimation: React.FC = () => {
  const globeRef = useRef<any>(); // react-globe.gl uses any due to lack of strict TS types
  const isDarkTheme = true; // Hardcoded; could be a prop if needed

  // Theme-based colors
  const markerFillMain = isDarkTheme ? '#00C8FF' : '#0284C7';
  const markerFillSecondary = isDarkTheme ? '#0090FF' : '#38BDF8';
  const connectionLineColor = isDarkTheme
    ? 'rgba(0, 144, 255, 0.6)'
    : 'rgba(14, 165, 233, 0.6)';
  const bgColor = isDarkTheme ? '#020617' : '#f0f9ff';

  // Generate connections only to hubs (optimized for performance)
  const arcsData = useMemo<Connection[]>(() => {
    const connections: Connection[] = [];
    const hubs = cityData.filter((city: City) => city.isHub); // Nairobi in this case

    // Connect each non-hub city to hubs
    cityData.forEach((city: City) => {
      if (!city.isHub) {
        hubs.forEach((hub: City) => {
          connections.push({
            startLat: city.lat,
            startLng: city.lng,
            endLat: hub.lat,
            endLng: hub.lng,
            color: connectionLineColor,
            isHub: true,
          });
        });
      }
    });

    return connections;
  }, [connectionLineColor]);

  // Auto-rotate globe, set initial view, and disable zoom
  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3; // Slower for performance
      controls.enableZoom = false; // Disable zooming with scroll wheel
      globeRef.current.pointOfView({ lat: 5, lng: 20, altitude: 2.5 }, 1000); // Focus on Africa
    }
  }, []);

  return (
    <div
      className="w-full h-[600px] overflow-hidden rounded-xl"
    >
      <Globe
        ref={globeRef}
        width={600}
        height={600}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0, 0, 0, 0)"
        
        // City markers
        pointsData={cityData}
        pointLat="lat"
        pointLng="lng"
        pointColor={(d: unknown) => (d as City).isHub ? markerFillMain : markerFillSecondary}
        pointAltitude={0.01} // Reduced for performance
        pointRadius={(d: unknown) => (d as City).isHub ? 0.4 : 0.2}
        pointsMerge={true}
        
        // Connections
        arcsData={arcsData}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcDashLength={0.4} // Static value for simplicity
        arcDashGap={0.2}
        arcDashAnimateTime={5000} // Unified animation time
        arcStroke={0.3}
      />
    </div>
  );
};

export default HeroAnimation;