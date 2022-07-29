import { GradientText, Section } from 'astro-portfolio-boilerplate-patched';

export const Thanks = () => {
  return (
    <Section
      title={
        <h2>
          <GradientText>Teachers on the Internet</GradientText> I'm much
          grateful to
        </h2>
      }
      children={
        <div className="flex w-full flex-wrap  justify-center ">
          <img src="/assets/images/p-frame2.svg" className="h-72 w-auto" />
          <div className="flex grow basis-96 items-center justify-center  px-2 ">
            <h4 className="text-center">
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Ben Awad</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">The Net Ninja</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Stephen Grider</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Colt Steel</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Dev Ed</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Kevin Powell</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Carey Colby</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Akhil Sharma</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Web Dev Simplified</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">TomDoesTech</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">Codedamn</a>
              </p>
              <p className="mx-3 my-1 inline-block text-lg underline decoration-cyan-500/70 underline-offset-4 ">
                <a href="">NanaTechWorld</a>
              </p>
            </h4>
          </div>
        </div>
      }
    />
  );
};
