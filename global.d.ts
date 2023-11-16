import { SourceHTMLAttributes } from 'react';

declare global {
  interface HTMLSourceElement extends SourceHTMLAttributes<HTMLSourceElement> {
    width: string,
    height: string
  }
}
