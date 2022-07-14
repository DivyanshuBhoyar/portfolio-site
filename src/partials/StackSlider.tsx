import { HeroSocial } from "astro-boilerplate-components";
import Marquee from "react-easy-marquee";

const StackSlider = () => {
  return <div className="flex gap-3 flex-col w-full">
    <Slider1 />
    <Slider2 />
  </div>;
};

export { StackSlider };


export const Slider1 = () => {
  return (
    <div className="flex gap-3 rounded-md  ">
      {/* langs */}
      <HeroSocial
        src="/assets/images/i-python.png"
        alt="Python icon"
      />
      <HeroSocial
        src="/assets/images/i-golang.png"
        alt="Go icon"
      />
      <HeroSocial
        src="/assets/images/i-typescript.png"
        alt="TS icon"
      />
      {/* backend */}
      <HeroSocial
        src="/assets/images/i-nodejs.png"
        alt="Nodejs icon"
      />
      <HeroSocial
        src="/assets/images/i-graphql.png"
        alt="Graphql icon"
      />
      {/* databases */}

      {/* frontend */}
      <HeroSocial
        src="/assets/images/i-react.png"
        alt="React icon"
      />
      <HeroSocial
        src="/assets/images/i-next.js.png"
        alt="Twitter icon"
      />
      <HeroSocial
        src="/assets/images/i-angularjs.png"
        alt="Twitter icon"
      />
      <HeroSocial
        src="/assets/images/i-tailwindcss.png"
        alt="Twitter icon"
      />

    </div>
  )
}

const Slider2 = () => {
  return (
    <Marquee duration={9000} reverse={true} height="3rem" className="rounded-md" background="#111827
    " >
      {/* databases */}
      < HeroSocial
        src="/assets/images/i-postgresql.png"
        alt="Postgres icon"
      />
      <HeroSocial
        src="/assets/images/i-mongodb.png"
        alt="Mongodb icon"
      />
      <HeroSocial
        src="/assets/images/i-redis.png"
        alt="Redis icon"
      />
      {/* cloud */}
      <HeroSocial
        src="/assets/images/i-aws.png"
        alt="Twitter icon"
      />
      <HeroSocial
        src="/assets/images/i-cloudflare.png"
        alt="Twitter icon"
      />
      <HeroSocial
        src="/assets/images/i-google-firebase-console.png"
        alt="Twitter icon"
      />
      {/* devops */}
      <HeroSocial
        src="/assets/images/i-docker.png"
        alt="Twitter icon"
      />
      <HeroSocial
        src="/assets/images/i-kubernetes.png"
        alt="Twitter icon"
      />
      <HeroSocial
        src="/assets/images/i-linux.png"
        alt="Twitter icon"
      />

    </Marquee >
  )
}