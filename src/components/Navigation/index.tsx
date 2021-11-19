import { Link } from 'react-router-dom';

import Logo from './assets/logo.png';
import Shop from './assets/shop.png';
import Location from './assets/location.png';

const Navigation = (props: any) => {
  return (
    <div className="mt-5">
      <div className="w-full fixed z-10 py-5 px-16 bg-white shadow-md shadow-gray-500 top-0">
        <div className="flex items-center">
          <div className="flex justify-start w-1/3">
            <img src={Logo} alt="Clover Logo" width={90} height={90} />
          </div>
          <div className="w-1/3">
            <div className="flex py-2 px-2 font-primary text-xs rounded-md" style={{ backgroundColor: '#F3F8EE' }}>
              <img src={Location} alt="Location" className="px-2" />
              <p style={{ color: '#ACAEAF' }}>
                Dikirim ke <strong style={{ color: '#7AB356' }}>Pilih Alamat {'&'} Tanggal Pengiriman</strong>
              </p>
            </div>
          </div>
          <div className="flex justify-end space-x-7 w-1/3">
            <img src={Shop} alt="Shop" />
            <Link to="/login">
              <button
                className="py-1 px-7 rounded-full text-white font-bold font-primary text-sm"
                style={{ backgroundColor: '#7AB356' }}
              >
                  Login
              </button>
            </Link>
            <button
              className="py-1 px-7 rounded-full font-bold font-primary text-sm"
              style={{ color: '#7AB356', borderColor: '#7AB356', borderWidth: '1px' }}
            >
              Daftar
            </button>
          </div>
        </div>
      </div>

      <div className="my-24">{props.component}</div>
    </div>
  );
};

export default Navigation;
