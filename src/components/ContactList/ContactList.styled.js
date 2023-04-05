import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.gap[3]};
  padding: ${theme.padding[2]}px;
  background-color: ${theme.colors.white};
`;

export const Item = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  gap: ${theme.gap[3]};
`;

export const DeleteButton = styled.button`
  background-color: ${theme.colors.green};
  padding: 10px 20px;
  color: ${theme.colors.white};
  border-radius: 10px;
  transition: transform 300ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
