import { ClimateStat } from '../utils/types';

export const climateStats: ClimateStat[] = [
  {
    id: 'co2-level',
    name: 'CO₂ Level',
    value: '421',
    unit: 'ppm',
    source: 'NOAA Global Monitoring Laboratory',
    updated: '2025-05-08',
    trend: 'up',
    description: 'Atmospheric carbon dioxide concentration measured at Mauna Loa Observatory.'
  },
  {
    id: 'global-temp',
    name: 'Global Temperature Rise',
    value: '1.1',
    unit: '°C',
    source: 'NASA GISS',
    updated: '2025-04-15',
    trend: 'up',
    description: 'Global temperature increase since pre-industrial times (1850-1900).'
  },
  {
    id: 'sea-level',
    name: 'Sea Level Rise',
    value: '3.6',
    unit: 'mm/year',
    source: 'NASA Satellite Sea Level Observations',
    updated: '2025-03-22',
    trend: 'up',
    description: 'Global mean sea level rise rate, based on satellite altimetry.'
  },
  {
    id: 'arctic-ice',
    name: 'Arctic Sea Ice',
    value: '12.4',
    unit: 'million km²',
    source: 'National Snow and Ice Data Center',
    updated: '2025-05-01',
    trend: 'down',
    description: 'Arctic sea ice extent, showing a declining trend over decades.'
  },
  {
    id: 'extreme-weather',
    name: 'Extreme Weather Events',
    value: '32',
    unit: '%',
    source: 'World Meteorological Organization',
    updated: '2025-01-15',
    trend: 'up',
    description: 'Percentage increase in extreme weather events in the past decade compared to 1980-1990.'
  },
  {
    id: 'deforestation',
    name: 'Annual Forest Loss',
    value: '4.7',
    unit: 'million hectares',
    source: 'Global Forest Watch',
    updated: '2025-02-28',
    trend: 'down',
    description: 'Annual global forest loss, primarily in tropical regions.'
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy Share',
    value: '29',
    unit: '%',
    source: 'International Energy Agency',
    updated: '2025-03-10',
    trend: 'up',
    description: 'Share of renewables in global electricity generation.'
  },
  {
    id: 'emissions-reduction',
    name: 'Required Emissions Reduction',
    value: '45',
    unit: '%',
    source: 'IPCC Special Report on 1.5°C',
    updated: '2025-01-05',
    trend: 'stable',
    description: 'Emissions reduction needed by 2030 (from 2010 levels) to limit warming to 1.5°C.'
  }
];