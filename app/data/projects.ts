export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'QGIS'| 'Python';
  imageUrl: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: 'bieszczady',
    title: 'Bieszczadzki Park Narodowy',
    description: 'Jeden z 23 polskich parków narodowych położony w południowej części województwa podkarpackiego. Utworzony w 1973 roku. Jest czwartym co do wielkości parkiem narodowym położonym na terenie Polski. Od 2021 roku wpisany jest na światową listę dziedzictwa UNESCO.',
    category: 'QGIS',
    imageUrl: '/images/bieszczady.jpg',
    tags: ['GIS', 'hipsometria', 'cieniowanie', 'orto']
  },
  {
    id: 'cei',
    title: 'Wskaźnik Oddziaływania Ekologicznego',
    description: 'Współczynnik ten wykonuje się, aby zmierzyć stopień w jakim działalność człowieka wpływa na środowisko. Dzięki temu wskaźnikowi można ocenić, czy wykorzystywane zasoby i produkowane zanieczyszczenia są na poziomie, który przyroda jest w stanie regenerować i neutralizować.',
    category: 'QGIS',
    imageUrl: '/images/CEI.jpg',
    tags: ['GIS', 'dane', 'SQL', 'groupstats', 'pokrycie terenu', 'CEI']
  },
  {
    id: 'gestosc-zaludnienia',
    title: 'Gęstość zaludnienia',
    description: 'Gęstość zaludnienia jest kluczowym czynnikiem kształtującym charakter procesów urbanizacyjnych. Rzeszów odgrywa kluczową rolę w systemie osadniczym województwa podkarpackiego, stanowiąc główny biegun rozwoju gospodarczego opartego na wyspecjalizowanych sektorach. ',
    category: 'QGIS',
    imageUrl: '/images/gestosc_zaludnienia.jpg',
    tags: ['GIS', 'demografia', 'prognoza', 'raster', 'gęstość zaludnienia']
  },
  {
    id: 'przyrost-zabudowy',
    title: 'Przyrost obszaru zabudowy',
    description: 'Porównanie obszarów zabudowy z lat 2014 i 2024, przedstawione na sąsiadujących mapach, nie pozwala na jednoznaczne wskazanie lokalizacji i charakteru zmian przestrzennych. Dlatego kluczowe jest nałożenie na siebie tych warstw i wydobycie ich różnic – zarówno w postaci ubytku, jak i przyrostu obszaru zabudowy. Tego typu podejście umożliwia precyzyjną lokalizację przekształceń przestrzennych oraz ocenę dynamiki urbanizacji w analizowanym dziesięcioleciu.',
    category: 'QGIS',
    imageUrl: '/images/przyrost_zabudowy.jpg',
    tags: ['GIS', 'urbanistyka', 'obszar zabudowy', 'triangulacja Delona', 'BDOT10k']
  },
  {
    id: 'srednia-kondygnacja',
    title: 'Analiza przekształceń zabudowy',
    description: 'W analizie przekształceń zabudowy istotnym aspektem, uzupełniającym ocenę zmian przestrzennych, jest struktura pionowa, rozumiana jako liczba kondygnacji budynków. Ze względu na duże zróżnicowanie wysokościowe charakterystyczne dla terenów miejskich, zastosowano uśrednienie liczby kondygnacji w obrębie pól heksagonalnych, co umożliwiło zobrazowanie dominujących trendów wysokościowych w sposób bardziej syntetyczny.',
    category: 'QGIS',
    imageUrl: '/images/srednia_kondygnacja.jpg',
    tags: ['GIS', 'zabudowa', 'struktura pionowa', 'triangulacja Delona', 'BDOT10k']
  },
  {
    id: 'srodowisko',
    title: 'Środowisko przyrodnicze fragmentu Krakowa',
    description: 'Tego typu mapa, identyfikuje i lokalizuje najcenniejsze oraz najbardziej zagrożone elementy środowiska naturalnego. Wyznacza ona obszary wymagające szczególnej uwagi i ochrony oraz  ramy dla odpowiedzialnej polityki przestrzennej, wskazując, gdzie rozwój urbanistyczny jest niemożliwy lub mocno ograniczony ze względu na ryzyko naturalne lub potrzebę zachowania walorów przyrodniczych.',
    category: 'QGIS',
    imageUrl: '/images/srodowisko.jpg',
    tags: ['GIS', 'środowisko', 'ekologia', 'ochrona i rozwój', 'SUIKZP']
  },
  {
    id: 'struktura',
    title: 'Struktura przestrzenna fragmentu Krakowa',
    description: 'Plany miejscowe  tworzy się w celu ustalenia porządku i zasad rozwoju na danym obszarze. Akta prawa miejscowego, który precyzyjnie określa, co i w jaki sposób można na danej działce zbudować, co ma na celu zapobieganie chaosowi urbanistycznemu i konfliktom między różnymi funkcjami w przestrzeni. Plan ten daje pewność co do przyszłości okolicy, chroniąc np. tereny zielone przed niepożądaną zabudową.',
    category: 'QGIS',
    imageUrl: '/images/struktura.jpg',
    tags: ['GIS', 'plany miejscowe', 'APP', 'SQL']
  },
  {
    id: 'zabka',
    title: 'Zasięg do Żabki w Krakowie',
    description: 'Sieć sklepów Żabka w Krakowie charakteryzuje się bardzo dużą gęstością, zwłaszcza w centralnych dzielnicach miasta, gdzie odległości między poszczególnymi punktami są niewielkie. Oznacza to, że mieszkańcy większości obszaru Krakowa mają sklep tej sieci w zasięgu krótkiego spaceru, co świadczy o silnym nasyceniu rynku i strategii opartej na maksymalnej dostępności dla klienta pieszego.',
    category: 'QGIS',
    imageUrl: '/images/zabka.jpg',
    tags: ['GIS', 'usługi', 'dystans', 'dane', 'geokodowanie', 'interpolacja']
  },
  {
    id: 'opady',
    title: 'Opady atmosferyczne nad Europą',
    description: 'Do wygenerowania obrazu użyto produktu satelitarnego w formacie netCDF. Produkt ten zawierał informacje o opadzie atmosferycznym. Obraz powstał przez napisanie kryptu w python3 i przetworzenie dostępnych danych.',
    category: 'Python',
    imageUrl: '/images/opady.jpg',
    tags: ['Python3', 'opady atmosferyczne', 'netCDF', 'dane satelitarne', 'skrypt']
  },
  {
    id: 'wiatr',
    title: 'Prędkość wiatru nad Europą',
    description: 'Do wygenerowania obrazu przedstawiającego siłę wiatru nad Europą użyto produktu satelitarnego w formacie netCDF. Produkt ten zawierał informacje o prędkości wiatru na różnych poziomach. Obraz powstał przez napisanie kryptu w python3 i przetworzenie dostępnych danych.',
    category: 'Python',
    imageUrl: '/images/wiatr.jpg',
    tags: ['Python3', 'prędkości wiatrów', 'netCDF', 'dane satelitarne', 'skrypt']
  }
];