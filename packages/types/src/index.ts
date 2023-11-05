import { ChangeEvent, MouseEvent as ReactMouseEvent } from 'react';

export type InputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => void;

export type ButtonOnClickHandler = (
  event: ReactMouseEvent<HTMLButtonElement, MouseEvent>
) => void;
