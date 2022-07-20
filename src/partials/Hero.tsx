import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

import { StackSlider } from './StackSlider';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Divyanshu Bhoyar</GradientText> 👋
        </>
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
          className="frame h-80 w-64"
          src="/assets/images/frame-me.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={<StackSlider />}
    />
  </Section>
);

export { Hero };
