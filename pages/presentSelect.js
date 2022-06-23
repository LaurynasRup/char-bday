import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../Components/Footer';

export default function presentSelect() {
  return (
    <section className="presentPage">
      <div className="presentSelectContent">
        <p className="speechBubble">
          Hello there lady mate, its your birthday today insnit!!!
        </p>
        <div className="chabsieSpeak">
          <Image src="/chabsieSpeak.png" width={78} height={62} />
        </div>
      </div>
      <div className="buttons">
        <Link href="/presentChoose">
          <a className="button">get present</a>
        </Link>
        <Link href="/party">
          <a className="button">small party</a>
        </Link>
      </div>
      <Footer />
    </section>
  );
}
