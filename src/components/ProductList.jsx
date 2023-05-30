import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const {penyakit} = useParams();

    useEffect(() => {
        const data = [
            // Daftar produk untuk setiap penyakit Sesuaikan dengan data produk yang Anda
            // miliki Misalnya, jika penyakit adalah 'umum', berikan daftar produk untuk
            // penyakit umum
            {   
                image: 'https://i.ibb.co/xLftknV/obat1.png',
                name: 'Sangobion 10 Kapsul',
                penyakit: 'umum',
                price : 'Rp. 100.000'

            }, {
                name: 'Produk 2',
                penyakit: 'umum'
            }, {
                name: 'Produk 3',
                penyakit: 'umum'
            }, {
                name: 'Produk 4',
                penyakit: 'umum'
            }, {
                name: 'Produk 5',
                penyakit: 'umum'
            },
            // ...
        ];

        // Filter daftar produk berdasarkan penyakit yang dipilih
        const filteredProducts = data.filter(product => product.penyakit === penyakit);

        setProducts(filteredProducts);
    }, [penyakit]);

    return (
        <div className="dokterRekomendasi">
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="rekomendasi-title">{penyakit}</h3>
                </div>
            </div>
            <div className="row">
                {
                    products.map((product, index) => (
                        <div key={index} className="col-sm-3">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <img
                                                src={product.image}
                                                alt="Gambar"
                                                className="dokter-image"/>
                                        </div>
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-price">{product.price}</p>
                                            <Button> tambah coy</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>

        </div>
    );
};

export default ProductList;