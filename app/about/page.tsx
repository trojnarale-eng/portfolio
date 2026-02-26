import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen relative">
      {/* Tło takie samo jak na głównej */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/tlo.jpg"
          alt="Tło"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Treść */}
      <div className="container mx-auto px-4 py-16 relative">
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          O mnie
        </h1>

        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-8">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-semibold mb-4 text-black">Kim jestem?</h2>
            <p className="text-gray-700 mb-6">
              Wpisz tutaj swoje imię, nazwisko i krótkie wprowadzenie o sobie.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-black">Doświadczenie</h2>
            <p className="text-gray-700 mb-6">
              Opisz swoje doświadczenie zawodowe, projekty, nad którymi pracowałaś,
              umiejętności techniczne (GIS, fotografia, grafika).
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-black">Edukacja</h2>
            <p className="text-gray-700 mb-6">
              Wymień swoje wykształcenie, kursy, certyfikaty.
            </p>

            <h2 className="text-2xl font-semibold mb-4 text-black">Narzędzia, których używam</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">QGIS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ArcGIS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Photoshop</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Illustrator</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}