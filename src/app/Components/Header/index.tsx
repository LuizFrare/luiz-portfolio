// Importe as bibliotecas necessárias
import React from 'react';
import Link from 'next/link';
import { HeaderWrapper } from './styles';
import { HeaderProps } from './types';

// Crie o componente de header
export default function Header(props: HeaderProps) {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          {props.links.map((linkProps, index) => (
            <li key={`link-${index}`}>
              <Link {...linkProps}>{linkProps.children}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderWrapper>
  );
}
