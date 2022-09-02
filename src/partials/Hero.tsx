import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-portfolio-boilerplate-patched';

import { HeroTechBanner } from './HeroTechBanner';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <div className="font-2xl font-extrabold tracking-wide">
          Hi there, I'm <GradientText>Divyanshu Bhoyar</GradientText> 👋
        </div>
      }
      description={
        <>
          I build things on{' '}
          <span className="text-cyan-500 hover:underline">
            the web, full stack.
          </span>{' '}
          Focus on scalable web apps, built with best practices and latest tech.{' '}
          <br />
          <span className="text-cyan-500 hover:underline">
            I am a student
          </span>{' '}
          from Nagpur, MH India.
        </>
      }
      avatar={
        <img
          className="frame h-72 w-auto"
          src="/assets/images/p-frame.png"
          alt="Avatar image"
          loading="eager"
        />
      }
      socialButtons={<HeroTechBanner />}
    />
  </Section>
);

export { Hero };
