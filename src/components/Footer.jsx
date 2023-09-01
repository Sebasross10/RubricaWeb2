import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="footer-title mt-2 mb-4 pb-2">
                Contáctanos
              </div>
              <p>
                Josttin Perez y Sebastian De La Rosa
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <div className="footer-title mt-2 mb-4 pb-2">
                Redes Sociales
              </div>
              <div>
                <img
                  style={{ width: "40px", margin: "1rem" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png"
                  alt="Instagram"
                />
                <img
                  style={{ width: "40px", margin: "1rem" }}
                  src="https://www.facebook.com/images/fb_icon_325x325.png"
                  alt="Facebook"
                />
                <img
                  style={{ width: "40px", margin: "1rem" }}
                  src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"
                  alt="Twitter"
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer-title mt-2 mb-4 pb-2">
                Acerca de Nosotros
              </div>
              <p className="white-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
