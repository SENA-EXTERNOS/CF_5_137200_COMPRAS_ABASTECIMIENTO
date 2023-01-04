export default {
  global: {
    componenteFormativo: 'Técnicas de clasificación de proveedores',
    descripcionCurso:
      'Este componente busca que el aprendiz adquiera conocimientos relacionados con las técnicas de clasificación de proveedores y los tipos que existen, para comprender sus características, los métodos para llevarlo a cabo, la importancia de la capacidad financiera en este proceso, los tiempos de respuesta y conocer sobre las buenas prácticas de manufactura. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Clasificación de proveedores',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de clasificación de proveedores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Clasificación de proveedores',
      referencia:
        'Restrepo Suárez, R. (2016). Evaluación y clasificación de proveedores: metodología y caso de estudio en una ensambladora de motocicletas [Doctoral dissertation]. Universidad EAFIT.',
      tipo: 'PDF',
      link:
        'https://repository.eafit.edu.co/bitstream/handle/10784/11456/Rodrigo_RestrepoSuarez_2016.pdf ',
    },
    {
      tema: 'Clasificación de proveedores',
      referencia:
        'Alcaraz, J. L. G., Iniesta, A. A., & Macías, A. A. M. (2013). Selección de proveedores basada en análisis dimensional. Contaduría y administración, 58(3), p. 249-278.',
      tipo: 'PDF',
      link:
        'https://reader.elsevier.com/reader/sd/pii/S0186104213712294?token=5659839EAB8C64E492761C06A575A7A25410A78D376F6979BBA2A9F8C66DE2953586B345D0E557C5115970D4735924BF&originRegion=us-east-1&originCreation=20220831162135 ',
    },
    {
      tema: 'Técnicas de clasificación de proveedores',
      referencia:
        'González, A. G., & Ríos, R. G. (2003). Aplicación de las técnicas multicriteriales en la evaluación y selección de proveedores. Ingeniería Industrial, 24(2), p. 2. ',
      tipo: 'PDF',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4786742 ',
    },
    {
      tema: 'Técnicas de clasificación de proveedores',
      referencia:
        'Flint, P. (2004). La Negociación Empresarial. Esan ediciones.',
      tipo: 'PDF',
      link:
        'https://repositorio.esan.edu.pe/bitstream/handle/20.500.12640/2942/MaterialDidactico4Negociacion.pdf?sequence=1&isAllowed=y',
    },
  ],
  glosario: [
    {
      termino: 'AHP',
      significado:
        'técnica que consiste en realizar una selección de proveedores, entre varias alternativas, de acuerdo a sus características o variables de manera jerárquica, para luego compararlas con las demás.',
    },
    {
      termino: 'Calidad',
      significado:
        'estado, propiedades y características de los artículos, productos o materias primas ofrecidos por la empresa o los proveedores.',
    },
    {
      termino: 'Clasificar',
      significado:
        'Hace referencia a las acciones que se llevan a cabo para ordenar y filtrar una actividad determinada.',
    },
    {
      termino: 'Manufactura',
      significado:
        'Es el resultado de convertir materias primas en un producto elaborado por medio de un proceso industrial. De ese modo, se obtienen los bienes terminados, listos para su venta en los distintos mercados (Galán, 2018).',
    },
    {
      termino: 'Parámetros',
      significado:
        'Es un elemento de un sistema que permite clasificar y poder evaluar algunas de sus características, como el rendimiento, la amplitud o la condición (Arias, 2020).',
    },
    {
      termino: 'Perfil',
      significado:
        'características que evidentes de una empresa o proveedor, que le pueden dar un estatus administrativo y comercial y que dan cuenta del nivel de calidad de sus servicios, procesos, productos, etc.',
    },
    {
      termino: 'Proveedores',
      significado:
        'Es toda persona, tanto natural como jurídica, que se encarga de suministrar todos los productos, materias primas y servicios que el cliente requiera.',
    },
    {
      termino: 'Seleccionar',
      significado:
        'Hace referencia a la acción de elegir un objeto, cosa o situación determinada según las necesidades de la persona que la ejecuta.',
    },
    {
      termino: 'Suministros',
      significado:
        'Es la dotación de un bien, el cual debe pasar por todo un proceso para ir desde el productor hasta el consumidor o beneficiario final (Westreicher, 2020).',
    },
    {
      termino: 'Técnicas',
      significado:
        'Es la aplicación de una serie de ciencias, conocimientos y métodos establecidos por personas que han realizado diferentes experimentos, hasta encontrar la solución.',
    },
  ],
  referencias: [
    {
      referencia: 'Arias, E. R. (2020). <em>Parámetro</em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/parametro.html      ',
    },
    {
      referencia: 'Galán, J. S. (2018). <em>Manufactura</em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/manufactura.html ',
    },
    {
      referencia:
        'INVIMA. (2020). <em>Buenas prácticas de manufactura</em>. INVIMA. ',
      link:
        'https://www.invima.gov.co/buenas-practicas-de-manufactura-bpm-sinonimo-de-responsabilidad-e-inocuidad-en-los-alimentos#:~:text=Las%20Buenas%20Pr%C3%A1cticas%20de%20Manufactura,las%20operaciones%20mencionadas%20cumplan%20con ',
    },
    {
      referencia: 'Westreicher, G. (2020). <em>Suministro</em>. Economipedia.',
      link: 'https://economipedia.com/definiciones/suministro.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
