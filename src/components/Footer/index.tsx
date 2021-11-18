import Logo from './assets/logo.png';
import Facebook from './assets/facebook.png';
import Twitter from './assets/twitter.png';
import Pinterest from './assets/pinterest.png';
import Linkedin from './assets/linkedin.png';
import Thumbler from './assets/thumbler.png';

const Footer = () => {
  return (
    <>
      <div className="mt-20 mx-16 space-y-3">
        <img src={Logo} alt="Logo" width={150} height={150} className="my-7" />
        <p className="font-primary font-medium text-sm" style={{ color: '#3D655F' }}>
          Adress : Bandung, Jawa Barat, Indonesia
        </p>
        <p className="font-primary font-medium text-sm" style={{ color: '#3D655F' }}>
          Email : support@clover.com
        </p>
        <p className="font-primary font-medium text-sm" style={{ color: '#3D655F' }}>
          Phone : (62) 12345-67890
        </p>
      </div>

      <div className="mx-16 divide-y divide-gray-200 divide-solid">
        <span />
        <div className="flex justify-between items-center my-10 py-5">
          <div>
            <p className="font-primary font-medium text-sm" style={{ color: '#3D655F' }}>
              © 2022 Clover.
            </p>
            <p className="font-primary font-medium text-sm" style={{ color: '#3D655F' }}>
              All Rights Reserved
            </p>
          </div>
          <div className="flex space-x-10">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Pinterest} alt="Pinterest" />
            <img src={Linkedin} alt="Linkedin" />
            <img src={Thumbler} alt="Thumbler" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
