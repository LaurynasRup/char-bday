import React from 'react';
import Footer from '../../Components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function ResultPage({ el }) {
  const str = `OOOh ${el}, nicely picked, now tell Poddo G what you picked and enjoy
  the celebrations!!! P.S.And dont forget a couple of monkeys!!!`;
  return (
    <section className="presentPage presentPage--chooose">
      <div className="bgImage">
        <Image src={`/${el}.jpg`} width={360} height={740} />
      </div>
      <div className="presentChooseContent">
        <p className="speechBubble speechBubble--opposite speechBubble--dark">
          {str}
        </p>
        <div className="chabsieSpeak chabsieSpeak--opposite ">
          <Image src="/chabsieSpeak.png" width={78} height={62} />
        </div>
      </div>
      <div className="buttons">
        <Link href="/party2">
          <a className="button">party again</a>
        </Link>
      </div>
      <Footer />
    </section>
  );
}

export const getServerSideProps = async context => {
  const { el } = context.query;
  return {
    props: {
      el,
    },
  };
};
