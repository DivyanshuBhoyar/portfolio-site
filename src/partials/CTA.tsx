import {
  GradientText,
  Newsletter,
  Section,
} from 'astro-portfolio-boilerplate-patched';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Subscribe to my <GradientText>Newsletters</GradientText>
        </>
      }
      description="Coming soon..."
    />
  </Section>
);

export { CTA };
