import React from 'react';
import Image from 'next/image';
import { ImageWrapper, Text, Wrapper } from './styles';

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
      <ImageWrapper>
        <Image
          layout='responsive'
          width={400}
          height={400}
          src='/IconBanner.png'
          alt='teste'
        />
        <Image
          src='/Icons/cssIcon.svg'
          className='svgIcon css'
          width={40}
          height={40}
          alt='teste'
        />
        <Image
          src='/Icons/jsIcon.svg'
          className='svgIcon js'
          width={40}
          height={40}
          alt='teste'
        />
        <Image
          src='/Icons/reactIcon.svg'
          className='svgIcon react'
          width={40}
          height={40}
          alt='teste'
        />
      </ImageWrapper>
    </Wrapper>
  );
}
