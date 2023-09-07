import React from 'react';
import Image from 'next/image';
import { Text, Wrapper } from './styles';

export default function BannerHero() {
  return (
    <Wrapper>
      <Text>
        <h1>Olá, eu sou o Luiz!</h1>
        <h2>Desenvolvedor Front-end</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </Text>
      <Image
        layout='responsive'
        width={400}
        height={400}
        src='/memoji.png'
        alt='teste'
      />
    </Wrapper>
  );
}
