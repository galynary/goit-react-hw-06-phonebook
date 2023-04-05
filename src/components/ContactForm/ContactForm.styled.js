import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.gap[3]}px;
  top: 50%;
  left: 50%;
  padding: ${theme.padding[2]}px;
  margin-bottom: 50px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${theme.gap[1]}px;
`;

export const Input = styled.input`
  border: 1px solid ${theme.colors.green};
  padding: ${theme.padding[2]}px;
  border-radius: 10px;
`;
export const Button = styled.button`
  width: 100%;
  background-color: ${theme.colors.green};
  padding: ${theme.padding[2]}px;
  border-radius: 10px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  font-size: ${theme.typography.medium};
  border: none;
`;
