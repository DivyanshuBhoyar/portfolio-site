import { GradientText, Section } from 'astro-portfolio-boilerplate-patched';

import { Slider2 } from './Slider';

const TechContent = () => {
  return (
    <>
      <Slider2 />
      <ul>
        <li className="py-2">
          <h3 className="text-xl font-medium">Backend</h3>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 ">
            fastAPI
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            express
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            fiber (Go)
          </div>
          <div className="tech-item  bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            websockets
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            microservices
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            graphQL
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            apollo-server
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            tRPC
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            gRPC
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            jwt
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            event-bus
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            fastify-js
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            REST
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            aws-lambda
          </div>
          <div className="tech-item bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 bg-clip-text ">
            stripe
          </div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Databases/ ORM</h3>
          <div className="tech-item bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            mongo-db
          </div>
          <div className="tech-item  bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            postgres
          </div>
          <div className="tech-item bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            redis
          </div>
          <div className="tech-item bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            firestore
          </div>
          <div className="tech-item bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            mysql
          </div>
          <div className="tech-item bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            mongoose (ORM)
          </div>
          <div className="tech-item bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            typeorm (ORM)
          </div>
          <div className="tech-item bg-gradient-to-tl from-pink-300 via-purple-300 to-indigo-400 bg-clip-text px-1 font-bold text-transparent ">
            prisma (ORM)
          </div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Cloud/Devops</h3>
          <div className="tech-item  bg-green-700 px-1 ">aws</div>
          <div className="tech-item  bg-green-700 px-1 ">cloudflare</div>
          <div className="tech-item  bg-green-700 px-1 ">firebase</div>
          <div className="tech-item  bg-green-700 px-1 ">
            serverless-framework
          </div>
          <div className="tech-item  bg-green-700 px-1 ">docker</div>
          <div className="tech-item  bg-green-700 px-1 ">Kubernetes</div>
          <div className="tech-item  bg-green-700 px-1 ">vercel</div>
          <div className="tech-item  bg-green-700 px-1 ">digitalocean</div>
          <div className="tech-item  bg-green-700 px-1 ">github-actions</div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Frontend</h3>
          <div className="tech-item  bg-green-700 px-1 ">next-js</div>
          <div className="tech-item  bg-green-700 px-1 ">react-query</div>
          <div className="tech-item  bg-green-700 px-1 ">angular</div>
          <div className="tech-item  bg-green-700 px-1 ">tailwind-css</div>
          <div className="tech-item  bg-green-700 px-1 ">styled-components</div>
          <div className="tech-item  bg-green-700 px-1 ">material-ui</div>
          <div className="tech-item  bg-green-700 px-1 ">mantine-ui</div>
          <div className="tech-item  bg-green-700 px-1 ">sass</div>
          <div className="tech-item  bg-green-700 px-1 ">framer-motion</div>
          <div className="tech-item  bg-green-700 px-1 ">astro-js</div>
          <div className="tech-item  bg-green-700 px-1 ">flutter</div>
        </li>
        <li className="py-2">
          <h3 className="text-xl font-medium">Other tools</h3>
          <div className="tech-item  bg-green-700 px-1 ">jest</div>
          <div className="tech-item  bg-green-700 px-1 ">cypress</div>
          <div className="tech-item  bg-green-700 px-1 ">postman</div>
          <div className="tech-item  bg-green-700 px-1 ">git</div>
          <div className="tech-item  bg-green-700 px-1 ">figma</div>
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
