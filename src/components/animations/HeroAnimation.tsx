import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { cityData, City } from '../../data/cityData';
import Globe from 'react-globe.gl';
import { motion } from 'framer-motion';

interface Connection {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string;
  isHub: boolean;
}

const HeroAnimation: React.FC = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const globeRef = useRef<any>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Theme-based colors
  const markerFillMain = isDarkTheme 
    ? "rgba(0, 200, 255, 0.9)" 
    : "rgba(2, 132, 199, 0.9)";
  
  const markerFillSecondary = isDarkTheme 
    ? "rgba(0, 144, 255, 0.8)" 
    : "rgba(56, 189, 248, 0.8)";
  
  const connectionLineColor = isDarkTheme 
    ? "rgba(0, 144, 255, 0.6)" 
    : "rgba(14, 165, 233, 0.6)";
  
  const bgColor = isDarkTheme 
    ? "#020617" 
    : "#f0f9ff";

  // Generate connections between cities
  const arcsData = useMemo(() => {
    const connections: Connection[] = [];
    
    // Connect all cities to each other (create a network)
    for (let i = 0; i < cityData.length; i++) {
      for (let j = i + 1; j < cityData.length; j++) {
        // Determine if this is a Nairobi connection
        const isNairobiConnection = cityData[i].isHub || cityData[j].isHub;
        
        connections.push({
          startLat: cityData[i].lat,
          startLng: cityData[i].lng,
          endLat: cityData[j].lat,
          endLng: cityData[j].lng,
          color: isNairobiConnection ? markerFillMain : connectionLineColor,
          isHub: isNairobiConnection
        });
      }
    }
    
    return connections;
  }, [markerFillMain, connectionLineColor]);

  // Auto-rotate the globe
  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      
      // Set initial position to focus on Africa
      globeRef.current.pointOfView({ lat: 5, lng: 20, altitude: 2.5 }, 1000);
    }
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden rounded-xl"
      style={{ background: bgColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Globe
        ref={globeRef}
        width={containerRef.current?.offsetWidth || 800}
        height={containerRef.current?.offsetHeight || 600}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundColor={bgColor}
        atmosphereColor={isDarkTheme ? "rgba(0, 144, 255, 0.4)" : "rgba(14, 165, 233, 0.3)"}
        atmosphereAltitude={0.15}
        
        // City markers
        pointsData={cityData}
        pointLat="lat"
        pointLng="lng"
        pointColor={d => (d as City).isHub ? markerFillMain : markerFillSecondary}
        pointAltitude={0.02}
        pointRadius={d => (d as City).isHub ? 0.5 : 0.3}
        pointLabel={d => (d as City).name}
        pointsMerge={true}
        
        // Connections between cities
        arcsData={arcsData}
        arcStartLat="startLat"
        arcStartLng="startLng"
        arcEndLat="endLat"
        arcEndLng="endLng"
        arcColor="color"
        arcDashLength={d => (d as Connection).isHub ? 0.8 : 0.4}
        arcDashGap={d => (d as Connection).isHub ? 0.4 : 0.2}
        arcDashAnimateTime={d => (d as Connection).isHub ? 4000 : 6000}
        arcStroke={d => (d as Connection).isHub ? 0.5 : 0.3}
        arcsTransitionDuration={1000}
      />
    </motion.div>
  );
};

export default HeroAnimation;
