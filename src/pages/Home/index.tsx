import Header from './assets/header.png';
import Frame1 from './assets/frame1.png';
import Frame2 from './assets/frame2.png';
import Frame3 from './assets/frame3.png';

const Home = () => {
  return (
    <div>
      <div className="flex justify-between items-center mx-16">
        <div className="w-1/2 space-y-14">
          <h1 className="font-primary text-7xl font-bold leading-tight" style={{ color: '#3D655F' }}>
            Sayuran dan buah Segar.
          </h1>
          <p className="font-primary font-medium text-xl" style={{ color: '#ACAEAF' }}>
            Kami hadir untuk anda yang ingin hidup lebih sehat dengan mengkonsumsi makanan organik
          </p>
          <div className="flex justify-between items-center rounded-lg shadow-lg py-3 px-5 w-4/5">
            <p className="font-primary font-medium" style={{ color: '#ACAEAF' }}>
              Cari menu disini
            </p>
            <button
              className="font-primary font-medium text-white py-2 px-10 rounded-md"
              style={{ backgroundColor: '#7AB257' }}
            >
              Cari
            </button>
          </div>
        </div>
        <div className="flex justify-end w-1/2">
          <img src={Header} alt="Header" />
        </div>
      </div>

      <div className="rounded-md mx-16 my-24" style={{ backgroundColor: '#F3F8EE' }}>
        <h1
          className="font-primary font-bold text-4xl w-1/2 text-center leading-tight pt-28 m-auto"
          style={{ color: '#3D655F' }}
        >
          Pilihan terbaik untuk makanan organik.
        </h1>
        <div className="flex justify-center pt-14 pb-28 space-x-12">
          <div className="flex items-center">
            <img src={Frame1} alt="Produk" />
            <div>
              <span>
                <strong style={{ color: '#3D655F' }}>50+</strong>
                <p style={{ color: '#ACAEAF' }}>Variasi produk</p>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <img src={Frame2} alt="Mitra" />
            <div>
              <span>
                <strong style={{ color: '#3D655F' }}>500K+</strong>
                <p style={{ color: '#ACAEAF' }}>Mitra Kami</p>
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <img src={Frame3} alt="Negara" />
            <div>
              <span>
                <strong style={{ color: '#3D655F' }}>100+</strong>
                <p style={{ color: '#ACAEAF' }}>Negara pengekspor</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mx-16">
        <div className="flex items-center space-x-10">
          <h1 className="font-primary font-bold text-xl" style={{ color: '#3D655F' }}>
            Produk Mitra
          </h1>
          <p className="font-primary text-sm cursor-pointer hover:underline" style={{ color: '#3D655F' }}>
            See all &rarr;
          </p>
        </div>
        <div className="flex space-x-5">
          <div className="text-white py-1 px-3" style={{ backgroundColor: '#D6D7D7' }}>
            <p>&larr;</p>
          </div>
          <div className="text-white py-1 px-3" style={{ backgroundColor: '#7AB257' }}>
            <p>&rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
