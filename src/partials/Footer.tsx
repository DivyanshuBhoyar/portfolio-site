import { FooterCopyright, Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section className='pb-0'>
    <FooterCopyright site_name={AppConfig.site_name} />
  </Section>
);

export { Footer };
