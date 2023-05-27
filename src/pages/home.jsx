import '../components/home.css'
import ImageCover from '../assets/dokter-cover.png'
import CardPenyakit from '../components/cardPenyakit';
import iconPenyakitUmum from '../assets/penyakit/umum.png'

export const home = () => {
    return (
        <> < div className = "banner" > <div className="row">
            <div className="col-sm-6">
                <div className="banner-cover">
                    <div className="card-body">
                        <h5 className="banner-title">Dapatkan Konsultasi Kesehatan</h5>
                        <p className="banner-text">Dengan mudah, cepat, dan aman</p>
                        <a href="/cariDokter" className="btn btn-primary">Cari Dokter</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <img src={ImageCover} alt="Gambar" width={437} height={390}/>
            </div>
        </div>
    </div>

    <div className="cariDokter">
        <div className="row cariDokter-content">
            <div className="col-sm-10">
                <h3 className="cariDokter-title">Cari Dokter umum atau Spesialis</h3>
            </div>
            <div className="col-sm-2 text-end">
                <a href="/cariDokter" className="btn btn-primary">Lihat Semuanya</a>
            </div>
        </div>
        <div className="row">
            <CardPenyakit imageSrc={iconPenyakitUmum} jenisSakit="umum"/>
            <CardPenyakit imageSrc="gambar_sakit_2.jpg" jenisSakit="Jenis Sakit 2"/>
            <CardPenyakit imageSrc="gambar_sakit_3.jpg" jenisSakit="Jenis Sakit 3"/>
            <CardPenyakit imageSrc="gambar_sakit_3.jpg" jenisSakit="Jenis Sakit 3"/>
            <CardPenyakit imageSrc="gambar_sakit_3.jpg" jenisSakit="Jenis Sakit 3"/>
            <CardPenyakit imageSrc="gambar_sakit_3.jpg" jenisSakit="Jenis Sakit 3"/>
        </div>
    </div>

</>

    )
}

export default home