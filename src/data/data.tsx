import {AcademicCapIcon, FlagIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import {About, ContactSection, ContactType, Hero, HomepageMeta, Social} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'PANGEA',
  description: 'ACCELERATING HUMANITY AND MANKIND',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I SEE ONE WORLD.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Welcome to the <strong className="text-stone-100">PANGEA VISION</strong>, where our mission is
        <strong className="text-stone-100"> TO ACCELERATE HUMANITY</strong> and mankind.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://calendly.com/thealexroa/meeting-with-alex',
      text: 'Schedule A Meeting',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `Pangea Omninational Corporation is a venture fund and incubator committed to Accelerating Humanity & Mankind.

Pangea exists to foster accessible, inclusive, and impactful solutions across emerging industries, advancing society while establishing the industries of tomorrow. As a collaborative hub, we unify projects under one mission: an interconnected global economy to enhance human potential.

### Investment Areas
Culture, New Media, and Social Impact:
The Culture Club and Culture Club Media Commerce work with global creators to curate inclusive, captivating content and establish new standards for social and financial equity across the creator economy.

Digital Economy and Collaboration Tools:
Blitz is a software tool that streamlines digital collaborations, handling payouts, campaigns, and fan engagement. Designed to empower creators and brands, Blitz provides an integrated solution for campaign management, invoicing, and rapid payment options.

Productivity, Automation, and AI:
MYAH AI, a pioneering virtual assistant, manages your daily life by coordinating contacts, automating communications, and organizing schedules, bringing the power of AI to individuals and businesses alike.

`,
  aboutItems: [
    { label: 'Location', text: 'Houston, Texas Area', Icon: MapIcon },
    {
      label: 'Mission',
      text: 'Accelerating Humanity & Mankind through Impactful Ventures',
      Icon: AcademicCapIcon,
    },
    {
      label: 'Culture & New Media',
      text: 'The Culture Club / Culture Club Media Commerce',
      Icon: SparklesIcon,
    },
    {
      label: 'Digital Economy & Collaboration',
      text: 'Blitz',
      Icon: SparklesIcon,
    },
    {
      label: 'Productivity & AI',
      text: 'MYAH AI',
      Icon: FlagIcon,
    },
  ],
};

/**
 * Detailed Mission
 */
const missionDetails = `
  Pangea is actively shaping the industries of tomorrow through visionary projects that challenge the status quo and drive humanity forward.
`;

export const missionData = missionDetails;

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'alex@thecultureclub.us',
      href: 'mailto:alex@thecultureclub.us',
    },
    {
      type: ContactType.Instagram,
      text: '@iseeoneworld',
      href: 'https://www.instagram.com/iseeoneworld/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: 'LinkedIn',
    Icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/thealexroa/',
  },
  {
    label: 'Instagram',
    Icon: InstagramIcon,
    href: 'https://www.instagram.com/iseeoneworld/',
  },
];
