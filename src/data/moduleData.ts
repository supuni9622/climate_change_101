import { Module } from '../utils/types';

export const modules: Module[] = [
  {
    id: 'greenhouse-effect',
    title: 'The Greenhouse Effect',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/3025236/pexels-photo-3025236.jpeg',
    description: 'Understand how greenhouse gases trap heat and affect global temperature.',
    progress: 0,
    content: `
      # The Greenhouse Effect

      The greenhouse effect is a natural process that warms the Earth's surface. When the Sun's energy reaches the Earth's atmosphere, some of it is reflected back to space and the rest is absorbed and re-radiated by greenhouse gases.

      ## How it works

      1. **Solar radiation** reaches the Earth's atmosphere - some is reflected back to space.
      2. **The surface absorbs** most of the energy, warming the Earth.
      3. **Heat is radiated** from Earth towards space.
      4. **Greenhouse gases trap** this heat in the atmosphere, warming the planet.

      ## Key greenhouse gases
      
      - Carbon dioxide (CO₂)
      - Methane (CH₄)
      - Nitrous oxide (N₂O)
      - Fluorinated gases

      ## Human impact

      Since the Industrial Revolution, human activities have increased atmospheric CO₂ by more than 45%, from 280 ppm to over 420 ppm today. This enhanced greenhouse effect is the main driver of climate change.
    `,
    stats: [
      { statId: 'co2-level', context: 'Current atmospheric CO₂ concentration' },
      { statId: 'global-temp', context: 'Global temperature increase since pre-industrial times' }
    ]
  },
  {
    id: 'carbon-cycle',
    title: 'The Carbon Cycle',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg',
    description: 'Explore how carbon moves through the atmosphere, oceans, and biosphere.',
    progress: 0,
    content: `
      # The Carbon Cycle

      The carbon cycle is a biogeochemical cycle in which carbon is exchanged between the Earth's oceans, atmosphere, ecosystems, and geosphere.

      ## Key processes

      1. **Photosynthesis**: Plants absorb CO₂ and convert it to oxygen and carbon compounds.
      2. **Respiration**: Animals and plants release CO₂ into the atmosphere.
      3. **Ocean absorption**: Oceans absorb about 30% of atmospheric CO₂.
      4. **Fossil fuel combustion**: Releases carbon stored over millions of years into the atmosphere.
      5. **Decomposition**: Releases carbon from dead organisms back into the soil and atmosphere.

      ## Carbon reservoirs

      - Atmosphere: ~860 gigatons of carbon
      - Oceans: ~38,000 gigatons
      - Soil: ~2,500 gigatons
      - Plants: ~560 gigatons
      - Fossil fuels: ~1,000+ gigatons

      ## Human disruption

      Human activities have disrupted the natural carbon cycle by burning fossil fuels, deforestation, and land use changes, leading to an excess of CO₂ in the atmosphere.
    `,
    stats: [
      { statId: 'co2-level', context: 'Current atmospheric CO₂ concentration' },
      { statId: 'deforestation', context: 'Annual forest loss contributing to carbon cycle disruption' }
    ]
  },
  {
    id: 'climate-impacts',
    title: 'Climate Change Impacts',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/1694642/pexels-photo-1694642.jpeg',
    description: 'Learn about the environmental, social, and economic impacts of climate change worldwide.',
    progress: 0,
    content: `
      # Climate Change Impacts

      Climate change affects ecosystems, societies, and economies worldwide in numerous ways.

      ## Environmental impacts

      1. **Rising sea levels**: Threatening coastal communities and habitats
      2. **Extreme weather**: More frequent and intense storms, floods, and droughts
      3. **Ecosystem disruption**: Changing habitats and species extinction
      4. **Ocean acidification**: Damaging marine ecosystems, especially coral reefs

      ## Social impacts

      1. **Food security**: Changing growing seasons and agricultural productivity
      2. **Human health**: Heat-related illnesses, changing disease patterns
      3. **Migration**: Climate refugees from uninhabitable regions
      4. **Water scarcity**: Affecting drinking water and sanitation

      ## Economic impacts

      1. **Property damage**: From extreme weather events
      2. **Agricultural losses**: Crop failures and livestock impacts
      3. **Infrastructure costs**: Adapting to new climate conditions
      4. **Energy demands**: Changing heating and cooling requirements
    `,
    stats: [
      { statId: 'sea-level', context: 'Current sea level rise rate' },
      { statId: 'extreme-weather', context: 'Increase in extreme weather events' }
    ]
  },
  {
    id: 'climate-solutions',
    title: 'Climate Solutions',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
    description: 'Discover technological, policy, and individual solutions to address climate change.',
    progress: 0,
    content: `
      # Climate Solutions

      Addressing climate change requires actions at individual, community, national, and global levels.

      ## Energy transition

      1. **Renewable energy**: Solar, wind, hydro, and geothermal power
      2. **Energy efficiency**: Better buildings, transportation, and industrial processes
      3. **Energy storage**: Batteries and other technologies to support renewables
      4. **Smart grids**: Modernizing electricity distribution

      ## Policy approaches

      1. **Carbon pricing**: Making pollution costly through taxes or cap-and-trade
      2. **Regulations**: Emissions standards and energy efficiency requirements
      3. **Subsidies**: Supporting clean energy and sustainable practices
      4. **International agreements**: Global cooperation like the Paris Agreement

      ## Individual actions

      1. **Transportation**: Using public transit, electric vehicles, or active transport
      2. **Diet**: Reducing meat consumption, especially beef
      3. **Energy use**: Improving home efficiency and using renewable energy
      4. **Consumer choices**: Buying durable products and reducing waste
    `,
    stats: [
      { statId: 'renewable-energy', context: 'Current global renewable energy share' },
      { statId: 'emissions-reduction', context: 'Required emissions reduction to meet Paris Agreement goals' }
    ]
  }
];