import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const FilterWrapper = styled.div`
  display: flex;
  padding: ${theme.padding[2]}px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
`;

export const Label = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  border: 1px solid ${theme.colors.green};
  padding: ${theme.padding[2]}px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;
