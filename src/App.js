import React from 'react';
import styled from '@xstyled/styled-components';

import { AccordionBody, AccordionWrap } from './components/Accordion';

const Wrapper = styled.div`
  max-width: 600px;
`

function App() {
  return (
    <Wrapper>
      <AccordionWrap>
        <AccordionBody
          title='Nice title...'
        />
        <AccordionBody open />
        <AccordionBody />
        <AccordionBody />
      </AccordionWrap>
    </Wrapper>
  );
}

export default App;
