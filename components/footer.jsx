export default function Footer() {
    return (
      <div className="mt-20 bg-primary-700">
        <div className="mx-auto ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-2xl font-semibold text-white">payoprint.id</h2>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">Company</h2>
              <ul className="text-white">
                <li className="mb-4">
                  <a href="#tentang" className="hover:underline">
                    Tentang kami
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#kontak" className="hover:underline">
                    Kontak
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Karir
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">Layanan</h2>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <a href="https://app.payoprint.id" className="hover:underline">
                    Printing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://app.payoprint.id" className="hover:underline">
                    Alat tulis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white">Kontak</h2>
              <ul className="font-medium text-white">
                <li className="mb-4">
                  <a href="https://api.whatsapp.com/send/?phone=6281532930863&text&type=phone_number&app_absent=0" className="hover:underline">
                    Telepon : 6281532930863
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  