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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
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
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
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
