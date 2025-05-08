import { Quiz } from '../utils/types';

export const quizzes: Quiz[] = [
  {
    moduleId: 'greenhouse-effect',
    questions: [
      {
        id: 'gh-q1',
        question: 'What is the main cause of the enhanced greenhouse effect?',
        options: [
          'Volcanic eruptions',
          'Solar activity',
          'Human emissions of greenhouse gases',
          'Natural climate cycles'
        ],
        answer: 2,
        explanation: 'While natural factors play a role in climate, human emissions of greenhouse gases, primarily from burning fossil fuels, are the dominant cause of the enhanced greenhouse effect since the industrial revolution.'
      },
      {
        id: 'gh-q2',
        question: 'Which of these is NOT a major greenhouse gas?',
        options: [
          'Carbon dioxide (CO₂)',
          'Methane (CH₄)',
          'Oxygen (O₂)',
          'Water vapor (H₂O)'
        ],
        answer: 2,
        explanation: 'Oxygen is not a greenhouse gas because it does not absorb infrared radiation. The main greenhouse gases are carbon dioxide, methane, nitrous oxide, and water vapor.'
      },
      {
        id: 'gh-q3',
        question: 'The greenhouse effect is:',
        options: [
          'Entirely harmful to Earth',
          'A natural process that makes Earth habitable',
          'Only caused by human activities',
          'A recent phenomenon that began in the 20th century'
        ],
        answer: 1,
        explanation: 'The greenhouse effect is a natural process that makes Earth habitable by keeping it warm enough to support life. Without it, Earth would be about 33°C (59°F) colder. The problem is the enhanced greenhouse effect from human activities.'
      },
      {
        id: 'gh-q4',
        question: 'Approximately how much has atmospheric CO₂ increased since pre-industrial times?',
        options: [
          'About 10%',
          'About 25%',
          'About 50%',
          'About 100%'
        ],
        answer: 2,
        explanation: 'Atmospheric CO₂ has increased from about 280 parts per million (ppm) in pre-industrial times to over 420 ppm today, which is approximately a 50% increase.'
      }
    ]
  },
  {
    moduleId: 'carbon-cycle',
    questions: [
      {
        id: 'cc-q1',
        question: 'Which process removes carbon dioxide from the atmosphere?',
        options: [
          'Respiration',
          'Combustion',
          'Photosynthesis',
          'Volcanic eruptions'
        ],
        answer: 2,
        explanation: 'Photosynthesis, carried out by plants and phytoplankton, removes CO₂ from the atmosphere by converting it into organic compounds using sunlight energy.'
      },
      {
        id: 'cc-q2',
        question: 'Approximately what percentage of human-emitted CO₂ is absorbed by the oceans?',
        options: [
          'About 10%',
          'About 30%',
          'About 50%',
          'About 70%'
        ],
        answer: 1,
        explanation: 'Oceans absorb approximately 30% of the CO₂ emitted by human activities, which is leading to ocean acidification as the CO₂ dissolves in seawater.'
      },
      {
        id: 'cc-q3',
        question: 'Which carbon reservoir holds the most carbon?',
        options: [
          'Atmosphere',
          'Vegetation',
          'Oceans',
          'Soil'
        ],
        answer: 2,
        explanation: 'The oceans are the largest carbon reservoir, containing about 38,000 gigatons of carbon, which is much more than the atmosphere (~860 Gt), soil (~2,500 Gt), or vegetation (~560 Gt).'
      },
      {
        id: 'cc-q4',
        question: 'Deforestation contributes to climate change primarily by:',
        options: [
          'Releasing stored carbon as trees are cut or burned',
          'Increasing rainfall in certain regions',
          'Cooling local temperatures',
          'Increasing biodiversity loss (which affects climate)'
        ],
        answer: 0,
        explanation: 'When forests are cleared, the carbon stored in trees is released into the atmosphere, usually as CO₂. Additionally, forests act as carbon sinks, so their removal means less CO₂ is absorbed from the atmosphere.'
      }
    ]
  },
  {
    moduleId: 'climate-impacts',
    questions: [
      {
        id: 'ci-q1',
        question: 'Sea levels are rising primarily due to:',
        options: [
          'Increased rainfall',
          'Thermal expansion of water and melting ice',
          'Tectonic plate movements',
          'Tidal changes from lunar gravity'
        ],
        answer: 1,
        explanation: 'Sea levels are rising due to two main factors related to climate change: thermal expansion (as water warms, it expands) and the melting of land ice (glaciers and ice sheets), which adds water to the oceans.'
      },
      {
        id: 'ci-q2',
        question: 'What is ocean acidification?',
        options: [
          'The natural pH cycle of oceans',
          'Pollution from acid rain falling on oceans',
          'Decreasing pH as oceans absorb CO₂',
          'Increasing acidity from underwater volcanoes'
        ],
        answer: 2,
        explanation: 'Ocean acidification occurs as seawater absorbs atmospheric CO₂, which reacts with water to form carbonic acid, lowering the ocean\'s pH. This threatens marine organisms, especially those that build shells or skeletons from calcium carbonate.'
      },
      {
        id: 'ci-q3',
        question: 'Which of these is NOT generally predicted to increase with climate change?',
        options: [
          'Hurricane intensity',
          'Heat waves',
          'Snowfall in all regions',
          'Drought in many regions'
        ],
        answer: 2,
        explanation: 'While some cold regions may initially see increased snowfall due to higher moisture in the atmosphere, overall snowfall is expected to decrease in most regions as temperatures rise. The other options are all predicted to increase with climate change.'
      },
      {
        id: 'ci-q4',
        question: 'Climate change is expected to affect human health through:',
        options: [
          'Heat-related illnesses',
          'Changing patterns of infectious diseases',
          'Impacts on food and water security',
          'All of the above'
        ],
        answer: 3,
        explanation: 'Climate change affects human health in multiple ways, including increased heat-related illnesses, changing patterns of vector-borne diseases (like malaria), and threats to food and water security from changing agricultural conditions and water availability.'
      }
    ]
  },
  {
    moduleId: 'climate-solutions',
    questions: [
      {
        id: 'cs-q1',
        question: 'Which renewable energy source currently provides the largest share of global renewable electricity?',
        options: [
          'Solar power',
          'Wind power',
          'Hydropower',
          'Geothermal power'
        ],
        answer: 2,
        explanation: 'Hydropower is currently the largest renewable electricity source globally, though solar and wind are growing rapidly. Hydropower provides about 16% of global electricity and about 60% of all renewable electricity.'
      },
      {
        id: 'cs-q2',
        question: 'What is a "carbon price"?',
        options: [
          'The market value of carbon fiber materials',
          'The cost of carbon dioxide removal technologies',
          'A fee imposed on greenhouse gas emissions',
          'The natural carbon content of fossil fuels'
        ],
        answer: 2,
        explanation: 'A carbon price puts a cost on greenhouse gas emissions, either through a carbon tax or cap-and-trade system. It&apos;s designed to reflect the environmental damage caused by emissions and incentivize emissions reductions.'
      },
      {
        id: 'cs-q3',
        question: 'Which transportation choice typically has the lowest carbon footprint per passenger-mile?',
        options: [
          'Flying',
          'Driving alone in a gasoline car',
          'Taking a train',
          'Riding a motorcycle'
        ],
        answer: 2,
        explanation: 'Trains, especially electric trains, typically have the lowest carbon footprint per passenger-mile among these options. Flying and driving alone in a gasoline car generally have much higher emissions per passenger-mile.'
      },
      {
        id: 'cs-q4',
        question: 'What is the goal of the Paris Agreement regarding global temperature?',
        options: [
          'Limit warming to 3°C above pre-industrial levels',
          'Limit warming to 2°C, preferably 1.5°C, above pre-industrial levels',
          'Return to pre-industrial temperatures by 2100',
          'Allow warming of up to 4°C while focusing on adaptation'
        ],
        answer: 1,
        explanation: 'The Paris Agreement aims to limit global warming to well below 2°C, preferably to 1.5°C, compared to pre-industrial levels. This goal was set to avoid the most dangerous impacts of climate change.'
      }
    ]
  }
];