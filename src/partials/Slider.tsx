import { HeroSocial } from 'astro-portfolio-boilerplate-patched';
// import Marquee from 'react-easy-marquee';

// const Slider2 = () => {
//   return (
//     <Marquee
//       duration={9000}
//       reverse={true}
//       height="3rem"
//       className="rounded-md"
//       background="#152030 "
//     >
//       <HeroSocial src="/assets/images/i-angularjs.png" alt="Twitter icon" />
//       <HeroSocial src="/assets/images/i-postgresql.png" alt="Postgres icon" />
//       <HeroSocial src="/assets/images/i-mongodb.png" alt="Mongodb icon" />
//       <HeroSocial src="/assets/images/i-redis.png" alt="Redis icon" />
//       <HeroSocial src="/assets/images/i-aws.png" alt="Twitter icon" />
//       <HeroSocial src="/assets/images/i-cloudflare.png" alt="Twitter icon" />
//       <HeroSocial
//         src="/assets/images/i-google-firebase-console.png"
//         alt="firebase icon"
//       />
//       <HeroSocial src="/assets/images/i-docker.png" alt="Twitter icon" />
//       <HeroSocial src="/assets/images/i-tailwindcss.png" alt="Twitter icon" />
//       <HeroSocial src="/assets/images/i-webrtc.png" alt="webrtc" />
//       <HeroSocial src="/assets/images/i-linux.png" alt="Twitter icon" />
//     </Marquee>
//   );
// };

const Slider2 = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee whitespace-nowrap py-4">
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-angularjs.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-postgresql.png"
          alt="Postgres icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-mongodb.png"
          alt="Mongodb icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-redis.png"
          alt="Redis icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-aws.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-cloudflare.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-gfc.png"
          alt="firebase icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-docker.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-tailwindcss.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-webrtc.png"
          alt="webrtc"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-linux.png"
          alt="Twitter icon"
        />
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-angularjs.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-postgresql.png"
          alt="Postgres icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-mongodb.png"
          alt="Mongodb icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-redis.png"
          alt="Redis icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-aws.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-cloudflare.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-gfc.png"
          alt="firebase icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-docker.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-tailwindcss.png"
          alt="Twitter icon"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-webrtc.png"
          alt="webrtc"
        />
        <HeroSocial
          className="mx-2 inline"
          src="/assets/images/i-linux.png"
          alt="Twitter icon"
        />
      </div>
    </div>
  );
};

export { Slider2 };
