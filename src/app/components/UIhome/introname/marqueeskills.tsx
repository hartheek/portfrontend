'use client';

import Marquee from 'react-fast-marquee';
import React from 'react';

const skillsRows = [
  ['JAVASCRIPT', 'TYPESCRIPT', 'JAVA', "PYTHON", "SQL", "PHP"],
  ['NODE JS', 'NEST JS', 'REACT JS', 'GRAPHQL', 'REST API'],
  ['POSTGRES', 'MYSQL', 'NEO4J', 'MONGODB', 'SNOWFLAKE', ],
  ['GIT', 'DOCKER', 'JIRA','AWS', 'JENKINS', 'KUBERNETES'],
  ['MATPLOTLIB', 'SEABORN', 'PANDAS', 'POWERBI' ]
];

export default function SkillsMarquee() {
    return (
      <div className="w-full px-4 sm:px-6 md:px-10 py-6">
        <div className="max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
            MY SKILLS
        </h2>

          <div className="rounded-2xl bg-gradient-to-b from-blue-200 to-gray-900 p-4 sm:p-6 md:p-8 shadow-lg space-y-4">
            {skillsRows.map((row, index) => (
              <Marquee
                key={index}
                gradient={false}
                speed={40}
                direction={index % 2 === 0 ? 'left' : 'right'}
                pauseOnHover={true}
              >
                {[...row, ...row].map((skill, i) => (
                  <span
                    key={i}
                    className="text-transparent text-base sm:text-xl md:text-2xl font-bold px-4 sm:px-6 whitespace-nowrap transition-all duration-300 ease-in-out hover:text-3xl"
                    style={{ WebkitTextStroke: '2px white' }}
                  >
                    {skill}
                  </span>
                ))}
              </Marquee>
            ))}
          </div>
        </div>
      </div>
    );
  }