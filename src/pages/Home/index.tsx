import Header from './assets/header.png';

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
    </div>
  );
};

export default Home;
