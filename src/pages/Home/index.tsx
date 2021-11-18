/** Import Component */
import { Footer } from '../../components';

/** Import Assets */
import Header from './assets/header.png';
import Frame1 from './assets/frame1.png';
import Frame2 from './assets/frame2.png';
import Frame3 from './assets/frame3.png';
import Tomat from './assets/tomat.png';

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
        <div className="flex justify-center pt-14 pb-28 space-x-32">
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
                <strong style={{ color: '#3D655F' }}>500k+</strong>
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

      <div className="mx-16">
        <div className="flex justify-between items-center">
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

        <div className="my-12">
          <div className="w-1/4">
            <div className="flex content-center h-60" style={{ backgroundColor: '#FFF2EF' }}>
              <img src={Tomat} alt="Tomat" className="m-auto items-center" />
            </div>
            <div className="my-3 mx-4 space-y-1">
              <p className="font-primary font-bold text-lg" style={{ color: '#3D655F' }}>
                Tomat
              </p>
              <p className="font primary" style={{ color: '#3D655F' }}>
                500gr
              </p>
              <div className="flex items-center py-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png"
                  alt="Star"
                  width={20}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png"
                  alt="Star"
                  width={20}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png"
                  alt="Star"
                  width={20}
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FA_star.svg/1024px-FA_star.svg.png"
                  alt="Star"
                  width={20}
                />
                <p className="font primary text-sm px-1" style={{ color: '#3D655F' }}>
                  4.0
                </p>
              </div>

              <div className="py-2">
                <p className="font-primary text-xs line-through" style={{ color: '#3D655F' }}>
                  Rp 30.000
                </p>
                <p className="font-primary font-bold text-lg" style={{ color: '#7AB356' }}>
                  Rp 50.000
                </p>
              </div>
              <div className="py-2">
                <button
                  className="bg-white font-primary font-bold text-white text-center w-full py-3"
                  style={{ backgroundColor: '#7AB356' }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-7 px-20" style={{ backgroundColor: '#7BB357' }}>
        <div className="flex justify-evenly items-center">
          <p className="font-primary text-white text-lg w-1/4">Berlangganan berbagai penawaran terbaik kami.</p>
          <div className="flex items-center">
            <div className="flex bg-white rounded-l-lg shadow-md py-4 px-3">
              <p className="font-primary text-sm w-80">Masukan email kamu</p>
            </div>
            <button
              className="bg-green-200 rounded-r-lg shadow-md py-4 px-8 text-sm text-white"
              style={{ backgroundColor: '#25282B' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
