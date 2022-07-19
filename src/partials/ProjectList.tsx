import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Ticket Sale Web App:  Microservices"
        description="A scalable e-commerce app built with distributed microservices. Implements event bus, concurrency controls and test driven developement."
        link="https://github.com/DivyanshuBhoyar/ticktet-ecomm-microsvc"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Microservices</Tags>
            <Tags color={ColorTags.LIME}>Concurrency</Tags>
            <Tags color={ColorTags.SKY}>Typescript</Tags>
            <Tags color={ColorTags.ROSE}>NATS Streaming</Tags>
            <Tags color={ColorTags.TEAL}>Test Driven</Tags>
          </>
        }
      />
      <Project
        name="Realtime Chat: AWS Lambda"
        description="An entirely serverless chat application. Built on AWS lambda integrated with AWS API gateway"
        link="https://github.com/DivyanshuBhoyar/aws-lamda-chat"
        img={{ src: '/assets/images/project-fire.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>API Gateway</Tags>
            <Tags color={ColorTags.EMERALD}>Serverless</Tags>
            <Tags color={ColorTags.YELLOW}>Websockets</Tags>
          </>
        }
      />
      <Project
        name="Concurrent downloader"
        description="A simple golang CLI program to download files. Divides a file into multiple subparts, and downloads concurrently."
        link="https://github.com/DivyanshuBhoyar/go-dl-concurrency"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.YELLOW}>Golang</Tags>
            <Tags color={ColorTags.INDIGO}>Concurrency</Tags>
            <Tags color={ColorTags.ROSE}>HTTP</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
