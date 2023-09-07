import React from 'react';
import Image from 'next/image';
import { ImageWrapper, Text, Wrapper } from './styles';

export default function BannerHero() {
  return (
    <Wrapper>
      <Text>
        <div className='content'>
          <div className='content__container'>
            <p className='content__container__text'>Hello</p>

            <ul className='content__container__list'>
              <li className='content__container__list__item'>world!</li>
              <li className='content__container__list__item'>users!</li>
              <li className='content__container__list__item'>friends!</li>
              <li className='content__container__list__item'>everybody!</li>
            </ul>
          </div>
        </div>
        <h2>Eu sou um Desenvolvedor Front-end</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </Text>
      <ImageWrapper>
        <Image
          className='Memoji'
          layout='responsive'
          width={400}
          height={400}
          src='/MyMemoji.png'
          alt='teste'
        />
        <Image
          src='/Icons/cssIcon.svg'
          className='svgIcon css'
          width={20}
          height={20}
          alt='teste'
        />
        <Image
          src='/Icons/jsIcon.svg'
          className='svgIcon js'
          width={20}
          height={20}
          alt='teste'
        />
        <Image
          src='/Icons/reactIcon.svg'
          className='svgIcon react'
          width={20}
          height={20}
          alt='teste'
        />
      </ImageWrapper>
    </Wrapper>
  );
}
