import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 py-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kedai Manang Section */}
        <div>
          <h3 className="font-semibold text-lg text-blue-500">Kedai Manang</h3>
          <p className="mt-2 text-sm font-regular">
            Kedai kami solusi segala macam perut lapar
          </p>
        </div>

        {/* Servis Section */}
        <div>
          <h3 className="font-semibold text-gray-950 text-lg">Servis</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="#lokasi" className="hover:underline">
                Lokasi
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="#testimoni" className="hover:underline">
                Testimoni
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak Section */}
        <div>
          <h3 className="font-semibold text-gray-950 text-lg">Kontak</h3>
          <ul className="mt-2 text-sm">
            <li>
              <a className="text-regular hover:underline">
                WhatsApp: +62 813-2518-1773
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs font-regular text-gray-500 mt-4">
        © 2024 Kedai Manang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
