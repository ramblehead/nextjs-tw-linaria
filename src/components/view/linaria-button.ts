// Hey Emacs, this is -*- coding: utf-8 -*-

import { styled } from '@linaria/react';

export const LinariaButton = styled.button`
  all: unset;
  -webkit-tap-highlight-color: transparent;
  border-radius: theme(space.5);
  cursor: pointer;
  height: theme(space.10);
  padding-left: theme(space.3);
  padding-right: theme(space.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.25s ease-in-out, box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out, color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;

  @apply shadow;

  color: theme(colors.stone.700);
  background-color: theme(colors.sky.100);

  &:hover {
    background-color: theme(colors.sky.200);
  }

  &:active {
    background-color: theme(colors.sky.300);
  }

  &:focus {
    box-shadow: 0 0 0 2px theme(colors.sky.500);
  }
`;
