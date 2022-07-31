import { GradientText, Section } from 'astro-portfolio-boilerplate-patched';

import { Slider2 } from './Slider';

const TechContent = () => {
  return (
    <>
      <Slider2 />
      <ul>
        <li className="py-2">
          <h3 className="text-xl font-medium">Backend</h3>
          <div className="tech-item grad0 ">fastAPI</div>
          <div className="tech-item grad0  ">express</div>
          <div className="tech-item grad0  ">fiber (Go)</div>
          <div className="tech-item  grad0  ">websockets</div>
          <div className="tech-item grad0  ">microservices</div>
          <div className="tech-item grad0  ">graphQL</div>
          <div className="tech-item grad0  ">apollo-server</div>
          <div className="tech-item grad0  ">tRPC</div>
          <div className="tech-item grad0  ">gRPC</div>
          <div className="tech-item grad0  ">jwt</div>
          <div className="tech-item grad0  ">event-bus</div>
          <div className="tech-item grad0  ">fastify-js</div>
          <div className="tech-item grad0  ">REST</div>
          <div className="tech-item grad0  ">aws-lambda</div>
          <div className="tech-item grad0  ">stripe</div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Databases/ ORM</h3>
          <div className="tech-item grad3 ">mongo-db</div>
          <div className="tech-item  grad3 ">postgres</div>
          <div className="tech-item grad3 ">redis</div>
          <div className="tech-item grad3 ">firestore</div>
          <div className="tech-item grad3 px-1  ">mysql</div>
          <div className="tech-item grad3 ">mongoose (ORM)</div>
          <div className="tech-item grad3 ">typeorm (ORM)</div>
          <div className="tech-item grad3 ">prisma (ORM)</div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Cloud/Devops</h3>
          <div className="tech-item  grad2 ">aws</div>
          <div className="tech-item  grad2 ">cloudflare</div>
          <div className="tech-item  grad2 ">firebase</div>
          <div className="tech-item  grad2 ">serverless-framework</div>
          <div className="tech-item  grad2 ">docker</div>
          <div className="tech-item  grad2 ">Kubernetes</div>
          <div className="tech-item  grad2 ">vercel</div>
          <div className="tech-item  grad2 ">digitalocean</div>
          <div className="tech-item  grad2 ">github-actions</div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Frontend</h3>
          <div className="tech-item grad1  ">next-js</div>
          <div className="tech-item grad1  ">react-query</div>
          <div className="tech-item grad1  ">angular</div>
          <div className="tech-item grad1  ">tailwind-css</div>
          <div className="tech-item grad1  ">styled-components</div>
          <div className="tech-item grad1  ">material-ui</div>
          <div className="tech-item grad1  ">mantine-ui</div>
          <div className="tech-item grad1  ">sass</div>
          <div className="tech-item grad1  ">framer-motion</div>
          <div className="tech-item grad1  ">astro-js</div>
          <div className="tech-item grad1  ">flutter</div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Other tools</h3>
          <div className="tech-item  grad4 ">jest</div>
          <div className="tech-item  grad4 ">cypress</div>
          <div className="tech-item  grad4 ">postman</div>
          <div className="tech-item  grad4 ">git</div>
          <div className="tech-item  grad4 ">figma</div>
        </li>
      </ul>
    </>
  );
};

const TechInfo = () => {
  return (
    <Section
      title={
        <>
          <GradientText>Tech</GradientText> I use
        </>
      }
      children={
        <>
          <TechContent />
        </>
      }
    />
  );
};

export { TechInfo };

//
