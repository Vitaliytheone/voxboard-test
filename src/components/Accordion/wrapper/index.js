import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '../ui';

const AccordionWrap = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

AccordionWrap.propTypes = {

}

export default AccordionWrap
