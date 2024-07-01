import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
        Welcome to the <strong className="text-stone-100">PANGEA VISION</strong>, where our mission is<strong className="text-stone-100">TO ACCELERATE HUMANITY</strong> and mankind.
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
  profileImageSrc: profilepic,
  description: `Pangea, Inc: Accelerating Humanity & Mankind
  Our mission is to develop accessible, inclusive, and innovative solutions using today's resources to advance society and create the industries of tomorrow. We aspire to unify the world through an increasingly interconnected global economy, codenamed Pangea.`,
  aboutItems: [
    { label: 'Location', text: 'Houston, Texas Area', Icon: MapIcon },
    { label: 'Mission', text: 'Accelerating Humanity & Mankind', Icon: AcademicCapIcon },
    { label: 'Culture, Media, and Money', text: 'The Culture Club / Culture Club Media Commerce / BlitzPay', Icon: SparklesIcon },
    { label: 'Industry, Farming, and Food', text: 'Rahra Co / Protein Party Co', Icon: SparklesIcon },
    { label: 'Philanthropy', text: 'Hope United / Roa Foundation', Icon: FlagIcon },
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
  - **BlitzPay.pro:** Advancing financial equity for creators and gig workers by accelerating payment processes.
  - **Alito Champion Conversational AI:** Enhancing the deal flow process for creators, increasing brand deal revenue by 5-10x.
  
  ### Industry, Farming, and Food
  - **Rahra Co / Protein Party Co**
    - Creating the future of food in collaboration with the Heartland team.
    - Providing climate-conscious food solutions that are healthier, more affordable, and more accessible.
  
  ### Philanthropy
  - **Hope United / Roa Foundation**
    - Hope United: Dedicated to unifying communities through philanthropic efforts.
    - Roa Foundation: Supporting global initiatives to foster a better, more connected world.
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
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx' },
];
