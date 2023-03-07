import styled from '@emotion/styled';
import { Field as Input } from 'formik';

export const Field = styled(Input)`
  margin: 0 0 10px 0;
  padding: 4px 10px;
  background: linear-gradient(90deg, #056272 50%, #02745d 100%);
  font-size: 20px;
  font-weight: 900;
  color: #9dfaf1;
  ::placeholder {
    color: #6daca6;
  }
`;
