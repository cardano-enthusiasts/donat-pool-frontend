import styled from 'styled-components';

import { fieldStyles, h3 } from 'shared/styles/mixins';

const Wrapper = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  ${fieldStyles}
`;

const Title = styled.h3`
  ${h3};
  margin: 0 0 5px 0;
`;

const StyledTextArea = styled.textarea`
  ${fieldStyles};
  max-width: 600px;
`;

export { Wrapper, StyledInput, Title, StyledTextArea };
