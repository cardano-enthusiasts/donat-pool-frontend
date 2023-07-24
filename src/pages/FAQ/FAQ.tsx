import { useEffect } from 'react';

import { Service } from 'layouts';
import { DropdownSection } from 'shared/components';

import { ColorTitle, Title } from './FAQ.styled';

const FAQ = () => {
  useEffect(() => {
    document.title = 'FAQ';
  }, []);
  return (
    <Service>
      <Title>
        Donat.Pool <ColorTitle>FAQ</ColorTitle>
      </Title>
      <DropdownSection />
    </Service>
  );
};

export default FAQ;
