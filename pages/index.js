import Image from 'next/image';
import Link from 'next/link';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <section className="homepage">
      <h1>Welcome to Chabuddy G Birthday room</h1>
      <Link href="/presentSelect">
        <a className="button">enter</a>
      </Link>
      <div className="chabsies">
        <div className="chabsie1">
          <Image src="/chabsie.png" width={57} height={48} />
        </div>
        <div className="chabsie2">
          <Image src="/chabsie.png" width={57} height={48} />
        </div>
      </div>
      <Footer />
    </section>
  );
}
