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
  description: `Pangea, Inc: Accelerating Humanity & Mankind
  Our mission is to develop accessible, inclusive, and innovative solutions using today's resources to advance society and create the industries of tomorrow. We aspire to unify the world through an increasingly interconnected global economy, codenamed Pangea.`,
  aboutItems: [
    {label: 'Location', text: 'Houston, Texas Area', Icon: MapIcon},
    {
      label: 'Mission',
      text: 'Accelerating Humanity & Mankind',
      Icon: AcademicCapIcon,
    },
    {
      label: 'Culture, New Media, and Impact',
      text: 'The Culture Club / Culture Club Media Commerce',
      Icon: SparklesIcon,
    },
    {
      label: 'Data, Creative, and Money',
      text: 'Blitz',
      Icon: SparklesIcon,
    },
    {
      label: 'Productivity, Automation, AI',
      text: 'MYAH AI',
      Icon: FlagIcon,
    },
  ],
};

/**
 * Detailed Mission and Focus Areas
 */
const missionDetails = `
  ## Key Areas of Focus:
  
  ### Culture, Media, and Money
  - **The Culture Club / Culture Club Media Commerce / BlitzPay**
    - Inspiring global culture by working with the world's most creative minds to curate captivating content.
    - Lowering barriers to entry, bringing social and financial equity to creators.
    - Monetizing the middle class of creators at scale with our influencer network and data collection technologies.
    - Inspiring global culture with inclusivity at our core, giving every background, culture, and story an equal playing field.

  ### Blitz
  - Blitz is a software tool designed to make digital collaborations seamless, including payouts, campaigns, and fan-engagement efforts.
  - Users have access to the unlimited Culture Club Creator roster and can create unlimited campaign lists, find rates, and launch campaigns through the software.
  - Blitz simplifies the Accounts Payable process for enterprise clients by initiating payouts to global contractors and entertainers, and offering a line of credit for creators to get paid within 24 hours via PayPal or Stripe.
  - Internally, Blitz enables the Culture Club team to manage campaigns, send offers via SMS & email, and automate invoicing for clients.

  ### MYAH AI
  MYAH is an integrated technology designed to enhance human productivity by automating mundane administrative tasks and adapting to users' preferences based on context.

  - **Current Project Techstack**
    - React.Js Front end
    - Python Backend
    - Language models
    - Postgresql database
    - Github Repository
  
  - **Project Layout:**
    - Email and SMS automation
    - User context framework
    - Google calendar integration
  
  - **Conversations workflow and storage:**
    - Inherit email convos using Gmail API to pull all emails and store them by unique threads.
    - LLM to read emails, attach labels internally (spam, respond, don't respond).
    - Email draft confirmed via SMS.
  
  - **Inherit SMS prompts:**
    - Routing SMS based on user type and context.
    - Store conversation channels as the primary thread between MYAH and the user.
  
  - **Opt-in Workflow:**
    - Users are invited via SMS and must consent to SMS messaging for customer care and security reasons.
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
      text: '@thealexroa',
      href: 'https://www.instagram.com/thealexroa/',
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
    href: 'https://www.instagram.com/thealexroa/',
  },
];
