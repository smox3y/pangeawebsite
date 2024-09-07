import {FC, memo} from 'react';

import {aboutData, missionData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const { description, aboutItems } = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="grid grid-cols-1 gap-y-4 text-center">
        <div className="col-span-1 flex justify-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
            {/* Add any relevant image or leave as is */}
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-6 text-center">
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">The Pangean Mission</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base whitespace-pre-line">
              {description}
            </p>
            <div className="prose prose-sm text-gray-300 sm:prose-base">
              {missionData}
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className="text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;