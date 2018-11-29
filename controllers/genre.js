module.exports = (req, res, next) => {
    res.data.path = '/category';
    res.data.context = {
        "language_name": "Español latino",
        "language_iso": "es-MX",
        "site_keywords": {
            "movie_link": "latino/pelicula-completa",
            "home_title": "Películas completas con audio latino"
        },
        "site": {
            "title": "Ver Peliculas Completas de Terror Online Gratis - REPELIS",
            "description": "Películas completas de Terror con audio latino, español, subtituladas, sin cortes, calidad HD en Repelis, el mejor sitio de películas completas, estrenos y trailers de cine.",
            "canonical": "https://www.repelis.biz/categoria/terror/",
            "analytics": "UA-130039796-1",
            "header_links": [{
                    "display_name": "Acción",
                    "link": "/categoria/accion/",
                    "index": 1,
                    "total": 3,
                    "isFirst": true,
                    "isLast": false
                },
                {
                    "display_name": "Terror",
                    "link": "/categoria/terror/",
                    "index": 2,
                    "total": 3,
                    "isFirst": false,
                    "isLast": false
                },
                {
                    "display_name": "Animación",
                    "link": "/categoria/animacion/",
                    "index": 3,
                    "total": 3,
                    "isFirst": false,
                    "isLast": true
                }
            ],
            "footer_links": [{
                    "display_name": "Acción",
                    "link": "/categoria/accion/",
                    "index": 1,
                    "total": 2,
                    "isFirst": true,
                    "isLast": false
                },
                {
                    "display_name": "Terror",
                    "link": "/categoria/terror/",
                    "index": 2,
                    "total": 2,
                    "isFirst": false,
                    "isLast": true
                }
            ],
            "search_action": "/busqueda/"
        },
        "genres": [{
                "id": 1,
                "name": "Acción",
                "hash": "accion",
                "link": "/categoria/accion/",
                "index": 1,
                "total": 19,
                "isFirst": true,
                "isLast": false
            },
            {
                "id": 3,
                "name": "Animación",
                "hash": "animacion",
                "link": "/categoria/animacion/",
                "index": 2,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 2,
                "name": "Aventura",
                "hash": "aventura",
                "link": "/categoria/aventura/",
                "index": 3,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 15,
                "name": "Ciencia Ficción",
                "hash": "ciencia-ficcion",
                "link": "/categoria/ciencia-ficcion/",
                "index": 4,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 4,
                "name": "Comedia",
                "hash": "comedia",
                "link": "/categoria/comedia/",
                "index": 5,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 5,
                "name": "Crimen",
                "hash": "crimen",
                "link": "/categoria/crimen/",
                "index": 6,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 6,
                "name": "Documental",
                "hash": "documental",
                "link": "/categoria/documental/",
                "index": 7,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 7,
                "name": "Drama",
                "hash": "drama",
                "link": "/categoria/drama/",
                "index": 8,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 8,
                "name": "Familia",
                "hash": "familia",
                "link": "/categoria/familia/",
                "index": 9,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 9,
                "name": "Fantasia",
                "hash": "fantasia",
                "link": "/categoria/fantasia/",
                "index": 10,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 18,
                "name": "Guerra",
                "hash": "guerra",
                "link": "/categoria/guerra/",
                "index": 11,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 10,
                "name": "Historia",
                "hash": "historia",
                "link": "/categoria/historia/",
                "index": 12,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 12,
                "name": "Musica",
                "hash": "musica",
                "link": "/categoria/musica/",
                "index": 13,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 16,
                "name": "Pelicula TV",
                "hash": "pelicula-tv",
                "link": "/categoria/pelicula-tv/",
                "index": 14,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 14,
                "name": "Romance",
                "hash": "romance",
                "link": "/categoria/romance/",
                "index": 15,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 13,
                "name": "Suspenso",
                "hash": "suspenso",
                "link": "/categoria/suspenso/",
                "index": 16,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 11,
                "name": "Terror",
                "hash": "terror",
                "link": "/categoria/terror/",
                "index": 17,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 17,
                "name": "Thriller",
                "hash": "thriller",
                "link": "/categoria/thriller/",
                "index": 18,
                "total": 19,
                "isFirst": false,
                "isLast": false
            },
            {
                "id": 19,
                "name": "Western",
                "hash": "western",
                "link": "/categoria/western/",
                "index": 19,
                "total": 19,
                "isFirst": false,
                "isLast": true
            }
        ],
        "featured_genre": {
            "movies": [{
                    "hash": "la-noche-de-halloween",
                    "title": "La noche de Halloween",
                    "overview": "Jamie Lee Curtis retorna a su papel icónico como Laurie Strode, quien llega a su enfrentamiento final con Michael Myers, la figura enmascarada que la ha perseguido desde el momento en que escapó por poco de su fiesta de asesinatos en la noche de Halloween de hace 4 décadas. Esta película, la undécima película de la serie \"Halloween\", ignorará los acontecimientos de todas y cada una de las secuelas precedentes, reanudando cuarenta años tras los acontecimientos de la película original.",
                    "poster_path": "/bXs0zkv2iGVViZEy78teg2ycDBm.jpg",
                    "release_date": "2018-10-18T03:00:00.000Z",
                    "vote_average": 6.5,
                    "release_year": 2018,
                    "release_month": 10,
                    "release_day": 18,
                    "link": "/latino/pelicula-completa/2018/la-noche-de-halloween/",
                    "index": 1,
                    "total": 6,
                    "isFirst": true,
                    "isLast": false
                },
                {
                    "hash": "overlord",
                    "title": "Overlord",
                    "overview": "La víspera del Día D, un conjunto de soldados aliados es mandado a la Francia ocupada para llenar una misión esencial para la victoria. Sobre el terreno, descubren un laboratorio en el que se realizan desatinados ensayos. La capacitación que han recibido no les ha listo para enfrentarse a soldados manipulados genéticamente. Overlord se aúna a la insigne lista de producciones de Bad Robot, la revolucionaria compañía de J. J. Abrams.",
                    "poster_path": "/l76Rgp32z2UxjULApxGXAPpYdAP.jpg",
                    "release_date": "2018-10-10T03:00:00.000Z",
                    "vote_average": 6.9,
                    "release_year": 2018,
                    "release_month": 10,
                    "release_day": 10,
                    "link": "/latino/pelicula-completa/2018/overlord/",
                    "index": 2,
                    "total": 6,
                    "isFirst": false,
                    "isLast": false
                },
                {
                    "hash": "la-monja",
                    "title": "La monja",
                    "overview": "En el momento en que una joven monja se suicida en una abadía de clausura en Rumanía, un sacerdote especialista en posesiones demoniacas y una novicia a puntito de tomar sus votos, son mandados por el Vaticano para investigar. Juntos descubren el profano secreto de la orden. Exponiendo no solo sus vidas sino más bien su fe y hasta sus ánimas, se encaran a una fuerza maléfica en forma de monja mefistofélica, en una abadía que se transforma en un campo de batalla de horror entre los vivos y los condenados.... Spin-off de la película de terror de dos mil dieciseis 'The Conjuring 2'. Producida por Atomic Monster, productora del directivo experto en el género de terror, James Wan.",
                    "poster_path": "/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
                    "release_date": "2018-09-05T03:00:00.000Z",
                    "vote_average": 5.7,
                    "release_year": 2018,
                    "release_month": 9,
                    "release_day": 5,
                    "link": "/latino/pelicula-completa/2018/la-monja/",
                    "index": 3,
                    "total": 6,
                    "isFirst": false,
                    "isLast": false
                },
                {
                    "hash": "12-horas-para-sobrevivir-el-inicio",
                    "title": "12 horas para sobrevivir: El inicio",
                    "overview": "Los Nuevos Progenitores Creadores de América desean reducir las tasas de delincuencia, con lo que deciden poner a prueba a los ciudadanos de una pequeña zona del país a través de un experimento social, dando vía libre a todo género de crímenes a lo largo de una noche. No obstante, la fuerza de estos actos violentos aumenta hasta el momento en que termina traspasando las fronteras establecidas.",
                    "poster_path": "/litjsBoiydO6JlO70uOX4N3WnNL.jpg",
                    "release_date": "2018-07-04T03:00:00.000Z",
                    "vote_average": 5.8,
                    "release_year": 2018,
                    "release_month": 7,
                    "release_day": 4,
                    "link": "/latino/pelicula-completa/2018/12-horas-para-sobrevivir-el-inicio/",
                    "index": 4,
                    "total": 6,
                    "isFirst": false,
                    "isLast": false
                },
                {
                    "hash": "el-legado-del-diablo",
                    "title": "El legado del diablo",
                    "overview": "Cosas extrañas empiezan a acontecer en la casa de los Graham tras la muerte de la abuela y matriarca, que deja en herencia su casa a su hija Annie. Annie Graham, una galerista casada y con 2 hijos, no tuvo una niñez demasiado feliz al lado de su madre, y piensa que la muerte de esta puede hacer que pase página. Mas todo se dificulta cuando su hija menor empieza a ver figuras espectrales, que asimismo comienzan a aparecer ante su hermano.",
                    "poster_path": "/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
                    "release_date": "2018-06-04T03:00:00.000Z",
                    "vote_average": 6.9,
                    "release_year": 2018,
                    "release_month": 6,
                    "release_day": 4,
                    "link": "/latino/pelicula-completa/2018/el-legado-del-diablo/",
                    "index": 5,
                    "total": 6,
                    "isFirst": false,
                    "isLast": false
                },
                {
                    "hash": "un-lugar-en-silencio",
                    "title": "Un lugar en silencio",
                    "overview": "En el año dos mil veinte, unas criaturas enigmáticas con un sentido auditivo excepcional han diezmado a la población mundial. Una familia se oculta en una cabaña y se comunica a través de la lengua de signos para no ser cazados por estos monstruos.",
                    "poster_path": "/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
                    "release_date": "2018-04-03T03:00:00.000Z",
                    "vote_average": 7.2,
                    "release_year": 2018,
                    "release_month": 4,
                    "release_day": 3,
                    "link": "/latino/pelicula-completa/2018/un-lugar-en-silencio/",
                    "index": 6,
                    "total": 6,
                    "isFirst": false,
                    "isLast": true
                },
                {
                    "hash": "12-horas-para-sobrevivir-2",
                    "title": "12 horas para sobrevivir 2",
                    "overview": "El crimen hace estragos en Estados Unidos y las cárceles están llenas. El gobierno decide que una noche al año, durante doce horas, cualquier actividad criminal, incluso el asesinato, será legal. No se puede llamar a la policía, los hospitales no admiten pacientes, los ciudadanos deben arreglárselas solos porque cometer un delito no está castigado. Durante esa noche plagada de peligros, 5 personas que se han quedado fuera de sus casas deciden juntarse para poder enfrentarse mejor a los ciudadanos salvajes que buscan calmar sus ansias de violencia.",
                    "poster_path": "/l1DRl40x2OWUoPP42v8fjKdS1Z3.jpg",
                    "release_date": "2014-07-17T03:00:00.000Z",
                    "vote_average": 6.6,
                    "release_year": 2014,
                    "release_month": 7,
                    "release_day": 17,
                    "link": "/latino/pelicula-completa/2014/12-horas-para-sobrevivir-2/"
                },
                {
                    "hash": "la-noche-de-la-expiacion",
                    "title": "La noche de la expiación",
                    "overview": "Año 2022. En una futura sociedad distópica, el régimen político, llamado Nueva Fundación de los padres de América, ha implantado una medida catárquica ante la violencia campante y las cárceles saturadas: la \"purga anual\", según la cual una noche al año se puede cometer cualquier clase de crimen, incluso el asesinato, sin tener que responder ante la justicia. La violencia se desata durante esas 12 horas, y los individuos se desfogan, imperando la calma el resto del año. Horas antes de que comience la purga anual, el vendedor de sistemas de seguridad James Sandin regresa a su casa en un lujoso suburbio de Los Angeles junto a su esposa María y sus dos hijos, Zoey y Charlie. Lo que no contaba esa famillia es que poco tiempo después de comenzar la noche un extraño llame a la puerta.",
                    "poster_path": "/tGGJOuLHX7UDlTz57sjfhW1qreP.jpg",
                    "release_date": "2013-05-31T03:00:00.000Z",
                    "vote_average": 6.2,
                    "release_year": 2013,
                    "release_month": 5,
                    "release_day": 31,
                    "link": "/latino/pelicula-completa/2013/la-noche-de-la-expiacion/"
                }
            ],
            "genre": {
                "id": 11,
                "name": "Terror",
                "hash": "terror",
                "link": "/categoria/terror/"
            }
        },
        "featured_movies": [{
                "hash": "el-depredador",
                "title": "El depredador",
                "overview": "Desde los límites del espacio hasta los suburbios de las pequeñas urbes, la busca llega a la casa de la reinvención por Shane Black de la saga \"Predator\". Ahora, los cazadores más mortales del cosmos son más fuertes, más inteligentes y más mortales que jamás, y se han mejorado genéticamente con ADN de otras especies. En el momento en que un pequeño accidentariamente desencadena su regreso a la Tierra, solo un conjunto de ex- soldados y una maestra de ciencias van a poder eludir, quizás el fin de la raza humana...",
                "poster_path": "/wMq9kQXTeQCHUZOG4fAe5cAxyUA.jpg",
                "release_date": "2018-09-13T03:00:00.000Z",
                "vote_average": 5.3,
                "release_year": 2018,
                "release_month": 9,
                "release_day": 13,
                "link": "/latino/pelicula-completa/2018/el-depredador/"
            },
            {
                "hash": "the-seven-deadly-sins-prisioneros-del-cielo",
                "title": "The Seven Deadly Sins: Prisioneros del Cielo",
                "overview": "Viajando en busca del ingrediente extraño, \"pez cielo\" Meliodas y Hawk llegan a un palacio que flota sobre las nubes. La gente de allá está ocupada preparando una liturgia, destinada a resguardar su hogar de una fiero bestia que se lúcida una vez cada tres mil años. Mas antes que se complete el ritual, los 6 Caballeros de Negro, un ejército del Clan Diablo, quitan el sello a la bestia y conminan la vida de todos en el Palacio del Cielo.",
                "poster_path": "/lgYGPujZNckyKwQQNwMLmkWoKui.jpg",
                "release_date": "2018-08-18T03:00:00.000Z",
                "vote_average": 5.6,
                "release_year": 2018,
                "release_month": 8,
                "release_day": 18,
                "link": "/latino/pelicula-completa/2018/the-seven-deadly-sins-prisioneros-del-cielo/"
            },
            {
                "hash": "megalodon",
                "title": "Megalodón",
                "overview": "Un sumergible de aguas profundas que es parte de un programa internacional de vigilancia submarina, ha sido atacado por una gran criatura que se creía extinta. Ahora está estropeado en el fondo de la fosa oceánica más profunda del Pacífico con su tripulación atrapada en el interior. El tiempo se termina y, contra los deseos de su hija Suyin (Li Bingbing), un soñador oceanógrafo chino (Winston Adiós) contrata a Jonas Taylor (Jason Statham), un especialista en rescate en aguas profundas. Su misión va a ser salvar a la tripulación y asimismo al océano de una amenaza imparable: un tiburón prehistórico de veintitres metros conocido con el nombre de Megalodón.",
                "poster_path": "/eyWICPcxOuTcDDDbTMOZawoOn8d.jpg",
                "release_date": "2018-08-09T03:00:00.000Z",
                "vote_average": 6,
                "release_year": 2018,
                "release_month": 8,
                "release_day": 9,
                "link": "/latino/pelicula-completa/2018/megalodon/"
            },
            {
                "hash": "el-justiciero-2",
                "title": "El justiciero 2",
                "overview": "Robert McCall,  hace justicia a los explotados y oprimidos, mas ahora se embarca en una infatigable busca de venganza por el planeta cuando se entera de que asesinaron a una novia que tuvo hace mucho.",
                "poster_path": "/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg",
                "release_date": "2018-07-19T03:00:00.000Z",
                "vote_average": 6.2,
                "release_year": 2018,
                "release_month": 7,
                "release_day": 19,
                "link": "/latino/pelicula-completa/2018/el-justiciero-2/"
            },
            {
                "hash": "mision-imposible-6-repercusion",
                "title": "Misión imposible 6: Repercusión",
                "overview": "A veces, hasta las mejores pretensiones pueden volverse contra nosotros. En “MISIÓN: IMPOSIBLE – FALLOUT” nos hallamos a Ethan Hunt (Tom Cruise) y su equipo en el Fondo Monetario Internacional (Alec Baldwin, Simon Pegg, Ving Rhames), conjuntamente con ciertos aliados conocidos (Rebecca Ferguson, Michelle Monaghan) en una carrera contrarreloj tras una misión errada. Henry Cavill, Angela Bassett y Vanessa Kirby asimismo se unen al activo reparto, al tiempo que el directivo Christopher McQuarrie vuelve a ponerse al timón.",
                "poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
                "release_date": "2018-07-13T03:00:00.000Z",
                "vote_average": 7.3,
                "release_year": 2018,
                "release_month": 7,
                "release_day": 13,
                "link": "/latino/pelicula-completa/2018/mision-imposible-6-repercusion/"
            },
            {
                "hash": "ant-man-y-la-avispa",
                "title": "Ant-Man y la avispa",
                "overview": "Tras \"Capitán América: Guerra Civil\", Scott Lang lidia con las consecuencias de sus elecciones como superhéroe y padre. Mientras que lucha por sostener un equilibrio entre su vida hogareña y sus responsabilidades como Ant-Man, se encara a Hope van Dyne y al doctor Hank Pym con una nueva misión urgente. Scott debe regresar a ponerse el traje y aprender a batallar así como La Avispa mientras que el equipo trabaja en conjunto para descubrir secretos del pasado.",
                "poster_path": "/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
                "release_date": "2018-07-04T03:00:00.000Z",
                "vote_average": 6.9,
                "release_year": 2018,
                "release_month": 7,
                "release_day": 4,
                "link": "/latino/pelicula-completa/2018/ant-man-y-la-avispa/"
            },
            {
                "hash": "los-increibles-2",
                "title": "Los increibles 2",
                "overview": "Helen debe liderar una campaña a fin de que los superhéroes retornen, mientras que Bob vive su vida \"normal\" con Violet, Dash y el bebé Jack-Jack. Su misión se marcha a pique cuando aparece un nuevo villano con un refulgente plan que lo amenaza todo. Mas los Parr no se asustarán y menos teniendo a Frozono de su parte.",
                "poster_path": "/x1txcDXkcM65gl7w20PwYSxAYah.jpg",
                "release_date": "2018-06-14T03:00:00.000Z",
                "vote_average": 7.6,
                "release_year": 2018,
                "release_month": 6,
                "release_day": 14,
                "link": "/latino/pelicula-completa/2018/los-increibles-2/"
            },
            {
                "hash": "vengadores-infinity-war",
                "title": "Vengadores: Infinity War",
                "overview": "El todopoderoso Thanos ha despertado con la promesa de arrasar con todo a su paso, portando el Guantelete del Infinito, que le proporciona un poder inestimable. Los únicos capaces de pararle los pies son los Vengadores y el resto de superhéroes de la galaxia, que habrán de estar prestos a sacrificarlo todo por un bien mayor.",
                "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                "release_date": "2018-04-25T03:00:00.000Z",
                "vote_average": 8.3,
                "release_year": 2018,
                "release_month": 4,
                "release_day": 25,
                "link": "/latino/pelicula-completa/2018/vengadores-infinity-war/"
            }
        ],
        "genre": {
            "id": 11,
            "name": "Terror",
            "hash": "terror",
            "link": "/categoria/terror/"
        },
        "pagination": {
            "pages": [{
                    "link": "/categoria/accion/pagina/1/",
                    "is_current": true,
                    "page": 1,
                    "type": "page"
                },
                {
                    "link": "/categoria/accion/pagina/2/",
                    "is_current": false,
                    "page": 2,
                    "type": "page"
                },
                {
                    "link": "/categoria/accion/pagina/3/",
                    "is_current": false,
                    "page": 3,
                    "type": "page"
                },
                {
                    "link": "/categoria/accion/pagina/4/",
                    "is_current": false,
                    "page": 4,
                    "type": "page"
                },
                {
                    "link": "/categoria/accion/pagina/5/",
                    "is_current": false,
                    "page": 5,
                    "type": "page"
                },
                {
                    "type": "ellipsis"
                },
                {
                    "link": "/categoria/accion/pagina/406/",
                    "page": 406,
                    "type": "page"
                },
                {
                    "link": "/categoria/accion/pagina/2/",
                    "type": "next"
                }
            ],
            "current_page": 1,
            "total_items": 6076,
            "total_pages": 406
        },
        "page_movies": [{
                "hash": "all-quiet-on-the-western-front",
                "title": "All Quiet on the Western Front",
                "overview": "A young German soldier's terrifying experiences and distress on the western front during World War I.",
                "poster_path": null,
                "release_date": "2018-12-31T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 31,
                "link": "/latino/pelicula-completa/2018/all-quiet-on-the-western-front/"
            },
            {
                "hash": "between-worlds",
                "title": "Between Worlds",
                "overview": "Joe (Cage) es un camionero que está traumatizado por los recuerdos de su mujer y su hija fallecidas. Conoce a Julie (Potente), una mujer con un don esotérico que intenta ayudar a Joe a encontrar el alma perdida de su hija, Billie (Mitchell), pero todo se complica cuando el que aparece es el espíritu de su mujer.",
                "poster_path": "/7e60ZuGjnW2MFlFsKGjLXt3xlQo.jpg",
                "release_date": "2018-12-21T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 21,
                "link": "/latino/pelicula-completa/2018/between-worlds/"
            },
            {
                "hash": "master-z-ip-man-legacy",
                "title": "Master Z: Ip Man Legacy",
                "overview": "After defeated by Ip Man, Cheung Tin Chi lives a depressed life and stays low profile. While Tin Chi tries to stay out of trouble, he gets himself into a fight with the foreigner Davidson, big boss behind bar district. Tin Chi fights hard with Wing Chun and earns respect.",
                "poster_path": "/7Hy0qn054TBkapuCutQKeebaGJE.jpg",
                "release_date": "2018-12-20T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 20,
                "link": "/latino/pelicula-completa/2018/master-z-ip-man-legacy/"
            },
            {
                "hash": "bumblebee",
                "title": "Bumblebee",
                "overview": "Sexta entrega de la saga 'Transformers', esta vez centrada en el \"hermano pequeño\" de los Autobots, Bumblebee. Tratando de escapar, en el año 1987, Bumblebee encuentra refugio en un depósito de chatarra en una pequeña ciudad en la costa Californiana. Charlie (Hailee Steinfeld), a punto de cumplir 18 años y tratando de encontrar su lugar en el mundo, descubre a Bumblebee, dañado durante una batalla y descompuesto. Cuando Charlie lo revive, aprende rápidamente que éste no es un VW amarillo ordinario.",
                "poster_path": "/sG6n4ei1F0kVQtTs3fAjDghngpa.jpg",
                "release_date": "2018-12-15T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 15,
                "link": "/latino/pelicula-completa/2018/bumblebee/"
            },
            {
                "hash": "dragon-ball-super-broly",
                "title": "Dragon Ball Super: Broly",
                "overview": "La Tierra vive en paz después de que concluyó el Torneo de Fuerza. Luego de darse cuenta que los Universos aún tienen muchos guerreros poderosos, Gokú pasa todos los días entrenando para alcanzar un nivel de pelea mayor.  Un día Gokú y Vegeta enfrentan a un nuevo saiyajin llamado “Broly”, a quien nunca antes han visto. Supuestamente, los saiyajin fueron arrasados durante la destrucción del planeta Vegeta; entonces ¿qué hace uno de ellos en la Tierra?  Este encuentro entre tres saiyajin, que han tenido destinos diferentes, se convierte en una batalla estupenda, con Freezer (que ha vuelto del infierno) atrapado en medio de ellos.",
                "poster_path": "/518jdIQHCZmYqIcNCaqbZuDRheV.jpg",
                "release_date": "2018-12-14T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 14,
                "link": "/latino/pelicula-completa/2018/dragon-ball-super-broly/"
            },
            {
                "hash": "aquaman",
                "title": "Aquaman",
                "overview": "Un icono durante más de 70 años, Aquaman (Jason Momoa) es el Rey de los Siete Mares. Este reacio gobernante de Atlantis se encuentra atrapado entre los constantes estragos causados al mar por los habitantes de la superficie y los atlantes buscando rebelarse. Pese a todo está decidido a proteger el mundo entero.",
                "poster_path": "/ydUpl3QkVUCHCq1VWvo2rW4Sf7y.jpg",
                "release_date": "2018-12-13T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 13,
                "link": "/latino/pelicula-completa/2018/aquaman/"
            },
            {
                "hash": "once-upon-a-deadpool",
                "title": "Once Upon a Deadpool",
                "overview": "A PG-13 cut of Deadpool 2 with extended scenes involving actor Fred Savage.",
                "poster_path": "/dVBxuUYLeqlQ7kA1mIhQtrQkEN1.jpg",
                "release_date": "2018-12-12T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 12,
                "link": "/latino/pelicula-completa/2018/once-upon-a-deadpool/"
            },
            {
                "hash": "spider-man-un-nuevo-universo",
                "title": "Spider-Man: Un nuevo universo",
                "overview": "Trabajando en las sombras para seguir manteniendo su identidad en secreto, las relaciones se volverán más difíciles de compaginar con sus actividades de defensor de la justicia. Última pieza en el rompecabezas sobre la muerte de sus padres, Parker se enfrenta a dilemas personales, traumas de la infancia y descubrimientos que pueden cambiar por completo su percepción de la vida. El peligro no espera y apenas tendrá tiempo para reaccionar cuando se dé cuenta que un grupo de maleantes y villanos han unido fuerzas con el único propósito de verle destruido. Una batalla final que desvelará el destino de miles de personas.",
                "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
                "release_date": "2018-12-08T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 12,
                "release_day": 8,
                "link": "/latino/pelicula-completa/2018/spider-man-un-nuevo-universo/"
            },
            {
                "hash": "revenge-of-the-mask",
                "title": "Revenge of the Mask",
                "overview": "Based on the Dark Horse comic series \"The Mask,\" this movie follows a new character, Alan, who finds there is a thin line between hero and monster.",
                "poster_path": "/icz3bnZ2YIElqRxgARlN67whtvw.jpg",
                "release_date": "2018-11-30T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 11,
                "release_day": 30,
                "link": "/latino/pelicula-completa/2018/revenge-of-the-mask/"
            },
            {
                "hash": "sos",
                "title": "Αιγαίο SOS",
                "overview": "",
                "poster_path": "/dUSWedkvDQHDxfxIbhF3u3KJsb1.jpg",
                "release_date": "2018-11-15T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 11,
                "release_day": 15,
                "link": "/latino/pelicula-completa/2018/sos/"
            },
            {
                "hash": "made-in-chinatown",
                "title": "Made in Chinatown",
                "overview": "Chinese guy \"Vinny\" Chow's haphazard and hilarious efforts to join the Italian Mafia to earn some respect, to get the love of an Italian girl, and to find his identity in the only city in the world where you can be whatever you want. Well.",
                "poster_path": "/girXtpcENzA8Ixtw2KBYK7axBbW.jpg",
                "release_date": "2018-11-10T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 11,
                "release_day": 10,
                "link": "/latino/pelicula-completa/2018/made-in-chinatown/"
            },
            {
                "hash": "viswasam",
                "title": "Viswasam",
                "overview": "coming soon",
                "poster_path": "/nmlnOkgFdXoCTWJNA8RttNMYc3n.jpg",
                "release_date": "2018-11-08T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 11,
                "release_day": 8,
                "link": "/latino/pelicula-completa/2018/viswasam/"
            },
            {
                "hash": "thugs-of-hindostan",
                "title": "Thugs of Hindostan",
                "overview": "After the British company’s officer Clive takes over the kingdom of Mirza, Princess Zafira and Khudabaksh aka Azaad form a band of rebel pirates who swear to defeat the English officer and win their freedom back. The British Company in return, hire the wily thug Firangi track Azaad’s gang and thwart his plans.",
                "poster_path": "/eonEvymAPpXvWvbBu21HYJx8VdS.jpg",
                "release_date": "2018-11-07T03:00:00.000Z",
                "vote_average": 4.7,
                "release_year": 2018,
                "release_month": 11,
                "release_day": 7,
                "link": "/latino/pelicula-completa/2018/thugs-of-hindostan/"
            },
            {
                "hash": "sarkar",
                "title": "Sarkar",
                "overview": "NRI corporate Sundar Ramasamy comes to India to vote, only to learn that his vote has already been cast. While he reclaims his right legally, it also sets in motion a chain of events that eventually lead to him entering the political fray, trying to change the system.",
                "poster_path": "/plaMZ1r11u7D9JTd4vkmhQJlYfa.jpg",
                "release_date": "2018-11-06T03:00:00.000Z",
                "vote_average": 7.5,
                "release_year": 2018,
                "release_month": 11,
                "release_day": 6,
                "link": "/latino/pelicula-completa/2018/sarkar/"
            },
            {
                "hash": "blood-sweat-and-terrors",
                "title": "Blood, Sweat And Terrors",
                "overview": "Película antológica que cuenta con nueve historias de terror, tiroteos y acción empapadas de sangre.",
                "poster_path": "/xkGfOXcqYRlZzwVb2BWZBAaqxDk.jpg",
                "release_date": "2018-11-06T03:00:00.000Z",
                "vote_average": 0,
                "release_year": 2018,
                "release_month": 11,
                "release_day": 6,
                "link": "/latino/pelicula-completa/2018/blood-sweat-and-terrors/"
            }
        ],
        "current_path": "/categoria/accion/"
    };

    return next();
};