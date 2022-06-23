import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Footer from '../Components/Footer';
import { useRouter } from 'next/router';

export default function Party2() {
  const mp3 = useRef();
  const container = useRef();
  const router = useRouter();

  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [endMessage, setEndMessage] = useState(false);

  const playMusic = () => {
    mp3.current.play();
    setPlaying(true);
  };

  const endMusic = () => {
    setPlaying(false);
    setEnded(true);
  };

  return (
    <section
      className={
        playing
          ? 'homepage homepage--party homepage--party-playing'
          : 'homepage homepage--party'
      }
    >
      {ended && (
        <>
          <p className="ended-text">Enjoy your birthday AT LEAST - MAX</p>
          <div className="chabsie-abs1-static">
            <Image src="/chabsie.png" width={57} height={48} />
          </div>
          <div className="chabsie-abs2-static">
            <Image src="/chabsie.png" width={57} height={48} />
          </div>
          <div className="chabsie-abs3-static">
            <Image src="/chabsie.png" width={57} height={48} />
          </div>
          <div className="party-team">
            <div className="steves--static">
              <Image src="/steves.png" width={117} height={107} />
            </div>
            <div className="beats--static">
              <Image src="/beats.png" width={112} height={97} />
            </div>
            <div className="grindah-static">
              <Image src="/grindah.png" width={146} height={131} />
            </div>
          </div>
        </>
      )}

      <div className="chabsie chabsie--abs1">
        <Image src="/chabsie.png" width={57} height={48} />
      </div>
      <div className="chabsie chabsie--abs2">
        <Image src="/chabsie.png" width={57} height={48} />
      </div>
      <div className="chabsie chabsie--abs3">
        <Image src="/chabsie.png" width={57} height={48} />
      </div>
      <div className="party-team">
        <div className="steves">
          <Image src="/steves.png" width={117} height={107} />
        </div>
        <div className="beats">
          <Image src="/beats.png" width={112} height={97} />
        </div>
        <div className="grindah">
          <Image src="/grindah.png" width={146} height={131} />
        </div>
      </div>
      {!ended && (
        <button className="button button--party" onClick={playMusic}>
          party
        </button>
      )}
      <Footer />
      <audio src="/kr.mp3" ref={mp3} onEnded={endMusic} />
    </section>
  );
}
