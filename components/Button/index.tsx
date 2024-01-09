'use client';

import styled from '@emotion/styled';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  link: string;
}

const Button = ({ children, link }: ButtonProps) => (
  <Link href={link && link}>
    <StyledButton>{children}</StyledButton>
  </Link>
);

export default Button;

const StyledButton = styled.button`
  padding: 16px 23px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};
  border-radius: 50px;
  font-size: 2rem;
  background: none;
  color: ${({ theme }) => theme.colors.secondary.main};
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary.main};
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;
