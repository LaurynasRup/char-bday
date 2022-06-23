import React from 'react';
import Footer from '../Components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function presentChoose() {
  return (
    <section className="presentPage presentPage--choose">
      <div className="presentChooseContent">
        <p className="speechBubble speechBubble--opposite">
          Alright then, Poddo G will take you to one of these locations for 2
          nights isnit! pick one, hahahaha!!
        </p>
        <div className="chabsieSpeak chabsieSpeak--opposite ">
          <Image src="/chabsieSpeak.png" width={78} height={62} />
        </div>
      </div>
      <div className="buttons">
        {['Berlin', 'Paris', 'Lisbon', 'Madrid', 'Edinburgh', 'Vienna'].map(
          el => (
            <Link href={`/presentResult/${el}`}>
              <a className="button">{el}</a>
            </Link>
          )
        )}
      </div>
      <Footer />
    </section>
  );
}
