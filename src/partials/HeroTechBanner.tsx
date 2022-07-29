import { HeroSocial } from 'astro-portfolio-boilerplate-patched';

export const HeroTechBanner = () => {
  return (
    <div className="mt-5 mb-2 flex gap-3 rounded-md ">
      {/* langs */}
      <HeroSocial src="/assets/images/i-python.png" alt="Python icon" />
      <HeroSocial src="/assets/images/i-golang.png" alt="Go icon" />
      <HeroSocial src="/assets/images/i-typescript.png" alt="TS icon" />

      {/* backend */}
      {/* <HeroSocial src="/assets/images/i-nodejs.png" alt="Nodejs icon" /> */}
      <HeroSocial src="/assets/images/i-graphql.png" alt="Graphql icon" />
      {/* databases */}

      {/* frontend */}
      <HeroSocial src="/assets/images/i-react.png" alt="React icon" />

      {/* Cloud */}
      <HeroSocial src="/assets/images/i-kubernetes.png" alt="Twitter icon" />
      <HeroSocial src="/assets/images/i-serverless.svg" alt="Twitter icon" />
    </div>
  );
};
