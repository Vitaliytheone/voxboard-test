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
        <AccordionBody />
        <AccordionBody open />
        <AccordionBody />
      </AccordionWrap>
    </Wrapper>
  );
}

export default App;
