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
            {/* Kim jestem */}
            <h2 className="text-2xl font-semibold mb-4 text-black">Kim jestem?</h2>
            <p className="text-gray-700 mb-6">
              Nazywam się <strong>Aleksandra Trojnar</strong>. Jestem absolwentką Uniwersytetu Rolniczego w Krakowie na kierunku Gospodarka Przestrzenna. 
              Zdobyłam tytuł inżyniera o specjalności Rozwój Regionalny oraz magistra w specjalności Geoinformacja.
            </p>

            {/* Doświadczenie */}
            <h2 className="text-2xl font-semibold mb-4 text-black">Doświadczenie</h2>
            <p className="text-gray-700 mb-6">
              Miałam okazję pracować w <strong>GISON-ie</strong>, gdzie głównie zajmowałam się wektoryzacją istniejących planów miejscowych, 
              udostępnianiem warstw na geoportalach gminnych, przetwarzaniem plików oraz wsparciem przy aktualizacji map cyfrowych.
            </p>

            {/* Edukacja */}
            <h2 className="text-2xl font-semibold mb-4 text-black">Edukacja</h2>
            <p className="text-gray-700 mb-6">
              <strong>Uniwersytet Rolniczy w Krakowie</strong><br />
              • Inżynier: Gospodarka Przestrzenna, specjalność Rozwój Regionalny<br />
              • Magister: Gospodarka Przestrzenna, specjalność Geoinformacja
            </p>

            {/* Narzędzia */}
            <h2 className="text-2xl font-semibold mb-4 text-black">Narzędzia i umiejętności</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">QGIS</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">ArcGIS Pro</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Geoxa Editor</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">AutoCAD</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Microstation V8i</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Agisoft Metashape</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">R</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Canva</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">GIMP</span>
            </div>

            {/* Co potrafię */}
            <h2 className="text-2xl font-semibold mb-4 text-black">Obszary specjalizacji</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Analizy danych przestrzennych</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tworzenie map tematycznych</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Automatyzacja pracy w QGIS</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Wektoryzacja planów miejscowych</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Tworzenie narzędzi GIS</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Geoportale gminne</span>
            </div>

            {/* Zainteresowania */}
            <h2 className="text-2xl font-semibold mb-4 text-black">Poza pracą</h2>
            <p className="text-gray-700 mb-6">
              W wolnym czasie zajmuję się <strong>fotografią</strong>, uwielbiam <strong>podróże</strong> i fascynuje mnie <strong>architektura</strong>. 
              Te pasje często łączę z moją pracą, dokumentując przestrzeń i zmiany w krajobrazie.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}