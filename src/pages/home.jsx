import '../components/home.css';
import ImageCover from '../assets/dokter-cover.png';
import CardPenyakit from '../components/CardPenyakit';
import Testimonial from '../components/testimonial';

import umum from '../assets/penyakit/umum.png';
import anak from '../assets/penyakit/Anak.png';
import jiwa from '../assets/penyakit/jiwa.png';
import kandungan from '../assets/penyakit/kandungan.png';
import otak from '../assets/penyakit/otak.png';
import penyakitDalam from '../assets/penyakit/penyakit Dalam.png';
import bedahUmum from '../assets/penyakit/BedahUmum.png';
import jantung from '../assets/penyakit/jantung.png';
import mata from '../assets/penyakit/mata.png';
import ortopedi from '../assets/penyakit/ortopedi.png';
import paru from '../assets/penyakit/paru.png';
import tht from '../assets/penyakit/tht.png';
import CardDokter from '../components/cardDokter';
import Blog from '../components/blog';


const CariDokter = () => {
  const penyakitData = [
    { imageSrc: umum, jenisSakit: 'Umum' },
    { imageSrc: anak, jenisSakit: 'Anak' },
    { imageSrc: kandungan, jenisSakit: 'Kandungan' },
    { imageSrc: otak, jenisSakit: 'Otak' },
    { imageSrc: penyakitDalam, jenisSakit: 'Penyakit Dalam' },
    { imageSrc: jiwa, jenisSakit: 'Jiwa' },
    { imageSrc: bedahUmum, jenisSakit: 'Bedah Umum' },
    { imageSrc: jantung, jenisSakit: 'Jantung' },
    { imageSrc: mata, jenisSakit: 'Mata' },
    { imageSrc: ortopedi, jenisSakit: 'Ortopedi' },
    { imageSrc: tht, jenisSakit: 'THT' },
    { imageSrc: paru, jenisSakit: 'Paru' },
  ];

  const slicedPenyakitData = penyakitData.slice(0, 6);
  const remainingPenyakitData = penyakitData.slice(6);

  return (
    <div className="cariDokter">
      <div className="row cariDokter-content">
        <div className="col-sm-10">
          <h3 className="cariDokter-title">Cari Dokter umum atau Spesialis</h3>
        </div>
        <div className="col-sm-2 text-end">
          <a href="/cariDokter" className="btn btn-success">
            Lihat Semuanya
          </a>
        </div>
      </div>
      <div className="row mb-4">
        {slicedPenyakitData.map((penyakit, index) => (
          <CardPenyakit
            key={index}
            imageSrc={penyakit.imageSrc}
            jenisSakit={penyakit.jenisSakit}
          />
        ))}
      </div>
      <div className="row">
        {remainingPenyakitData.map((penyakit, index) => (
          <CardPenyakit
            key={index}
            imageSrc={penyakit.imageSrc}
            jenisSakit={penyakit.jenisSakit}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="banner-cover">
              <div className="card-body">
                <h5 className="banner-title">Dapatkan Konsultasi Kesehatan</h5>
                <p className="banner-text">Dengan mudah, cepat, dan aman</p>
                <a href="/cariDokter" className="btn btn-success">
                  Cari Dokter
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 text-center">
            <img src={ImageCover} alt="Gambar" width={500} height={437} />
          </div>
        </div>
      </div>

    <CariDokter />
    <CardDokter />
    <Testimonial />
    <Blog />

    </>
  );
};

export default Home;
