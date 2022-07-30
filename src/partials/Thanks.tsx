import {
  GradientText,
  Section,
  ThanksName,
} from 'astro-portfolio-boilerplate-patched';

import { teachers } from '@/utils/teachers';

export const Thanks = () => {
  return (
    <Section
      title={
        <h2>
          <GradientText>Teachers on the Internet</GradientText> I'm much
          grateful🙏 to
        </h2>
      }
      children={
        <div className="flex w-full flex-wrap  justify-center ">
          <img src="/assets/images/p-frame2.svg" className="h-72 w-auto" />
          <div className="flex grow basis-96 items-center justify-center  px-2 ">
            <h4 className="text-center">
              {teachers.map((t) => (
                <ThanksName name={t.name} href={t.href} />
              ))}
            </h4>
          </div>
        </div>
      }
    />
  );
};
