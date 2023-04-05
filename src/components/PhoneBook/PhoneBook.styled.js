import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: ${theme.padding[2]}px;
  margin-top: 100px;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.black};
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: ${theme.typography.title};
  text-align: center;
  margin-bottom: ${theme.marginbottom[2]};
`;

export const ContactTitle = styled.h2`
  font-size: ${theme.typography.title};
  text-align: center;
  margin-bottom: ${theme.marginbottom[2]};
`;
