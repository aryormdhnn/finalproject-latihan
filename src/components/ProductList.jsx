import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './productlist.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { penyakit } = useParams();

  useEffect(() => {
    const data = [
      // Daftar produk untuk setiap penyakit
      // Sesuaikan dengan data produk yang Anda miliki
      // Misalnya, jika penyakit adalah 'umum', berikan daftar produk untuk penyakit umum
      {
        image: 'https://i.ibb.co/xLftknV/obat1.png',
        name: 'Sangobion 10 Kapsul',
        penyakit: 'umum',
        price: 'Rp. 100.000',
      },
      {
        image: 'https://i.ibb.co/xLftknV/obat1.png',
        name: 'Produk 2',
        penyakit: 'umum',
        price: 'Rp. 100.000',
      },
      {
        image: 'https://i.ibb.co/xLftknV/obat1.png',
        name: 'Produk 3',
        penyakit: 'umum',
        price: 'Rp. 100.000',
      },
      {
        image: 'https://i.ibb.co/xLftknV/obat1.png',
        name: 'Produk 4',
        penyakit: 'umum',
        price: 'Rp. 100.000',
      },
      {
        image: 'https://i.ibb.co/xLftknV/obat1.png',
        name: 'Produk 5',
        penyakit: 'mata',
        price: 'Rp. 100.000',
      },
    {
      image: 'https://i.ibb.co/xLftknV/obat1.png',
      name: 'Produk 3',
      penyakit: 'umum',
      price: 'Rp. 100.000',
    },
    {
      image: 'https://i.ibb.co/xLftknV/obat1.png',
      name: 'Produk 4',
      penyakit: 'umum',
      price: 'Rp. 100.000',
    },
    {
      image: 'https://i.ibb.co/xLftknV/obat1.png',
      name: 'Produk 5',
      penyakit: 'mata',
      price: 'Rp. 100.000',
    },
    ];

    // Filter daftar produk berdasarkan penyakit yang dipilih
    const filteredProducts = data.filter((product) => product.penyakit === penyakit);

    setProducts(filteredProducts);
  }, [penyakit]);

  return (
    <div className="obat">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="rekomendasi-title">{penyakit}</h3>
        </div>
      </div>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-sm-3">
            <div className="card-obat">
              <div className="card-body">
                <img src={product.image} alt="Gambar" className="product-image" />
                <h5 className="card-title">{product.name}</h5>
                <p className="card-price">{product.price}</p>
                <a href="/cart" className="btn btn-success btn-product">
                  Tambahkan Ke Keranjang
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
