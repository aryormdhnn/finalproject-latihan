import '../components/home.css'
import ImageCover from '../assets/dokter-cover.png'

export const home = () => {
    return (
      <div className="container banner">
      <div className="row">
        <div className="col-sm-6">
          <div className="banner">
            <div className="card-body">
              <h5 className="banner-title">Dapatkan Konsultasi Kesehatan</h5>
              <p className="banner-text">Dengan mudah, cepat, dan aman</p>
              <a href="/cariDokter" className="btn btn-primary">Cari Dokter</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={ImageCover} alt="Gambar" width={437} height={390} />
        </div>
      </div>
    </div>
    )
}

export default home