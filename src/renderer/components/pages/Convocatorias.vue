<template>
    <div class="content">
        <vue-scrollbar classes="my-scrollbar" ref="Scrollbar">
            <div class="inner-page">
                <ul class="content-switcher">
                    <li @click="c_menu=0">
                        <a href="#" :class="{'is-active' : c_menu==0 }">Convocatoria 2018</a>
                    </li><li @click="c_menu=1">
                    <a href="#" :class="{'is-active' : c_menu==1 }">Convocatoria 2019</a>
                </li><li @click="c_menu=2">
                    <a href="#" :class="{'is-active' : c_menu==2 }">Convocatoria Inglés</a>
                </li>
                </ul>
                <div :class="{'hidden' : c_menu!=0 }">
                    <h2 class="text-red">Convocatoria XXVI Evento Crisol de la Nacionalidad Cubana 2018.</h2>
                    <p>La Casa de la Nacionalidad Cubana convoca a participar en el XXVI Evento Teórico Crisol de la Nacionalidad Cubana que cada año sesiona del 17 al 20 de octubre en la ciudad de Bayamo, provincia Granma. Esta edición estará dedicada a los 150 años del inicio de la Guerra de Independencia y a la interpretación pública del Himno Nacional.  </p>
                    <p>El tema central versará sobre los <em>Procesos de liberación nacional y los vínculos histórico-culturales de las naciones en Iberoamérica y el Caribe.</em> </p>
                    <p>El debate en comisiones se regirá por las siguientes temáticas: </p>
                    <ul>
                        <li>1. Perspectiva histórica y contemporánea sobre los estudios de formación nacional.</li>
                        <li>2. Significación histórica, artística, literaria y patrimonial de las gestas independentistas en Cuba, el Caribe e Iberoamérica.</li>
                        <li>3. Pensamiento iberoamericano, caribeño y cubano.</li>
                        <li>4. Prácticas culturales y comunitarias en el contexto de la nación.</li>
                        <li>6. Ciudades históricas. Conservación y preservación del patrimonio cultural en las naciones.</li>
                        <li>7. Identidad y globalización en los estudios culturológicos, históricos y sociales.</li>
                        <li>8. Patrimonio natural y prácticas de sostenibilidad ecológica.</li>
                        <li>9. Expresiones artísticas y literarias en el debate de lo nacional.</li>
                    </ul>
                    <p>Se convoca además al <em>III Taller Identidad nacional y procesos de socialización</em>,con el propósito de intercambiar y reflexionar sobre esta importante temática y sus aportes a la identidad cultural cubana. Este taller contará con el coauspicio del Consejo de las Ciencias Sociales y Humanísticas en Granma. </p> 
                    <h2 class="text-red">Organización del evento.</h2>
                    <p>El programa científico se desarrollará a través de conferencias centrales, paneles y ponencias. Se solicita la propuesta de conformación de paneles temáticos, así como la sugerencia de diferentes formas de presentación: Documento PDF, Power Point, poster, video u otras. </p>
                    <p>Los interesados en participar enviarán el resumen de su trabajo en formato digital con un máximo de extensión de 250 palabras que contenga los siguientes aspectos: </p>
                    <ul>
                        <li>•	Objetivo</li>
                        <li>•	Situación actual del tema, resultados y aportes.</li>
                    </ul>
                    <p>Deberán consignarse además nombres y apellidos de los autores, carnet de identidad, grados científicos, institución a la que pertenecen y correo electrónico. </p>
                    <p>Los trabajos se remitirán al Comité Científico del evento a la dirección electrónica cnc@crisol.cult.cu y serán recepcionados hasta el 31 de julio de 2018. La aceptación de las propuestas implicará el envío de los trabajos completos con un máximo de extensión de 20 cuartillas, en formato Word y Arial 12 y se recibirán hasta el 10 de septiembre de 2018. Sólo se aceptarán hasta dos autores por ponencia, de los cuales uno asistirá al evento. </p>
                    <p>El pago de hospedaje, alimentación y transporte será independiente a la cuota de inscripción que  se efectuará en el momento de la acreditación. </p>

                    <h2 class="text-red">Cuota de inscripción: </h2>
                    <ul>
                        <li>•	Para extranjeros: 100 CUC.</li>
                        <li>•	Para estudiantes extranjeros: 50 CUC.</li>
                        <li>•	Para los participantes nacionales: 100 MN.</li>
                    </ul>

                    <h2 class="text-red">La cuota de inscripción incluye: </h2>
                    <ul>
                        <li>•	Participación en el evento teórico Crisol de la Nacionalidad Cubana.</li>
                        <li>•	Certificado de participación acreditativo del evento teórico.</li>
                        <li>•	Programa general impreso.</li>
                        <li>•	Transportación interna.</li>
                        <li>•	Disfrute del Coctel de Bienvenida.</li>
                        <li>•	Asistencia al Acto por la rememoración del Himno de Bayamo.</li>
                        <li>•	Recorrido por sitios históricos.</li>
                        <li>•	Participación en la Gala por el Día de la Cultura Cubana, el 20 de Octubre.</li>
                    </ul>

                    <h2 class="text-red">Para participantes extranjeros: </h2>
                    <p>La cuota de inscripción se pagará en el momento de la acreditación e incluye: </p>
                    <ul>
                        <li>•	Credencial y programa impreso.</li>
                        <li>•	Carpeta de Acreditación.</li>
                        <li>•	Participación en el evento teórico Crisol de la Nacionalidad Cubana.</li>
                        <li>•	Participación en entrevistas con medios de prensa.</li>
                        <li>•	Servicio de protocolo permanente, incluyendo traducción si se necesita.</li>
                        <li>•	Invitaciones para espectáculos artísticos.</li>
                        <li>•	Coctel de Bienvenida. </li>
                    </ul>

                    <p>Al margen de estos derechos, los participantes podrán optar por ofertas comerciales con fines turísticos y culturales en cualquier zona de la Isla, haciendo mayor énfasis en los productos turístico-culturales de la provincia Granma, para explorar senderos históricos naturales que conforman los Parques Nacionales Sierra Maestra y Desembarco del Granma. </p>
                    <h2 class="text-red">Para la oferta comercial o Paquete de Viajes: </h2>
                    <p>Debe contactar con nuestro turoperador oficial, la Agencia de Turismo Cultural Paradiso, que pone a su disposición paquetes preferenciales que incluyen boletería, hospedaje, transportación interna, alimentación y opciones culturales pre y post evento. </p>
                    <h2 class="text-red">Para su reserva o más información contacte a: </h2>
                    <ul>
                        <li>Lic. Sury Sosa Jiménez, representante de la Agencia de Viajes Paradiso, en Granma. </li>
                        <li>Teléfonos: 53 23 411844  ó  0152871194.</li>
                        <li>E-mail: paradisogr@scgr.artex.cu</li>
                    </ul>
                    <p>Los participantes tendrán además la oportunidad de disfrutar e interactuar con proyectos artísticos de excelencia en diferentes instituciones culturales y áreas caracterizadas. Sucederán ferias de libros, artesanía y productos tradicionales  de la cultura culinaria; exposiciones personales y colectivas de artes plásticas; presentaciones de órganos y de bandas de concierto; puestas en escena de obras teatrales; foro interactivo y muestras audiovisuales en plazas, comunidades, universidades, escuelas, centros culturales y espacios públicos. <p>

                    <h2 class="text-red">Para mayor información: </h2>
                    <ul>
                        <li>Casa de la Nacionalidad Cubana</li>
                        <li>E-mail: cnc@crisol.cult.cu</li>
                        <li>Sitio web: www.crisol.cult.cu</li>
                        <li>Teléfono: 42 4833</li>
                    </ul>

                </div>
                <div :class="{'hidden' : c_menu!=1 }">
                    <h2 class="text-red">Convocatoria al XXVII Evento Crisol de la Nacionalidad Cubana 2019</h2>
                    <p>La Casa de la Nacionalidad Cubana convoca a participar en el XXVII Evento Teórico Crisol de la Nacionalidad Cubana que cada año sesiona del 17 al 20 de octubre en la ciudad de Bayamo, provincia Granma. Esta edición estará dedicada al Bicentenario del natalicio de Carlos Manuel de Céspedes, Padre de la Patria, iniciador de las luchas independentistas en Cuba en 1868.  </p>
                    <p>El tema central versará sobre <em>Los padres fundadores de las naciones en Iberoamérica y el Caribe. </em></p>
                    <p>El debate en comisiones se regirá por las siguientes temáticas:  	</p>
                    <p>Perspectiva histórica y contemporánea sobre los estudios de formación nacional.</p>
                    <ul>
                        <li>1.	Significación histórica, artística, literaria y patrimonial de las Gestas Independentistas en Cuba, el Caribe e Iberoamérica.</li>
                        <li>2.	Pensamiento iberoamericano, caribeño y cubano.</li>
                        <li>3.	Ciudades históricas. Conservación y preservación del patrimonio cultural en las naciones.</li>
                        <li>4.	Expresiones artísticas y literarias en el debate de lo nacional.</li>
                        <li>5.	Prácticas y procesos socioculturales en contextos sociocomunitarios.</li>
                        <li>6.	Identidad y globalización en los estudios culturológicos, históricos y sociales.</li>
                    </ul>
                    <p>Convoca además al IV  Taller “La construcción del ser cubano y sus relaciones con el Caribe: identidades, historia y cultura”, con el propósito de intercambiar y reflexionar sobre la transculturación en el pasado precolombino  y en los procesos de formación nacional en el Caribe e Iberoamérica. El mismo contará con el coauspicio del Consejo de las Ciencias Sociales y Humanísticas en Granma. </p>
                    <h2 class="text-red">Organización del evento.</h2>
                    <p>El programa científico se desarrollará a través de conferencias centrales, paneles y ponencias. Se solicita la propuesta de conformación de paneles temáticos, así como la sugerencia de diferentes formas de presentación: Documento PDF, Power Point, poster, video u otras. </p>

                    <p>Los interesados en participar enviarán el resumen de su trabajo en formato digital con un máximo de extensión de 250 palabras en el que contenga los siguientes aspectos: </p>
                    <ul>
                        <li>•	Objetivo</li>
                        <li>•	Situación actual del tema, resultados y aportes.</li>
                    </ul>

                    <p>
                        En el mismo deberán consignar: nombre(s) y apellidos, carnet de identidad, grado científico, institución a que pertenecen y correo electrónico. </p>
                    <p>Los trabajos se remitirán al Comité Científico del evento a la siguiente dirección: cnc@crisol.cult.cu. Serán recepcionados hasta el 31 de julio de 2019. La aceptación de las propuestas implicará el envío de los trabajos completos con un máximo de extensión de 20 cuartillas, en formato Word y Arial 12 los cuales se recibirán hasta el 10 de septiembre de 2019. Sólo se aceptará hasta dos autores por ponencia, de los cuales uno asistirá al evento. </p>
                    <p>El pago de hospedaje, alimentación y transporte será independiente a la cuota de inscripción que  se efectuará en el momento de la acreditación. </p>

                    <h2 class="text-red">Cuota de inscripción: </h2>
                    <ul>
                        <li>• Para extranjeros: 100 CUC</li>
                        <li>• Para estudiantes extranjeros: 50 CUC</li>
                        <li>• Para los participantes nacionales: 100 MN</li>
                    </ul>

                    <h2 class="text-red">La misma incluye: </h2>
                    <ul>
                        <li>•	Participación en el evento teórico Crisol de la Nacionalidad Cubana</li>
                        <li>•	Certificado de participación acreditativo del evento teórico</li>
                        <li>•	Programa General impreso.</li>
                        <li>• Transportación interna.</li>
                        <li>• Disfrute del Coctel de Bienvenida.</li>
                        <li>• Asistencia al Acto por la rememoración del Himno de Bayamo.</li>
                        <li>•	Recorrido por sitios históricos.</li>
                        <li>• Participación en la Gala por el Día de la Cultura Cubana (20 de Octubre)</li>
                    </ul>

                    <h2 class="text-red">Para participantes extranjeros: </h2>
                    <p>La cuota de inscripción se pagará en el momento de la acreditación, la misma incluye: </p>
                    <ul>
                        <li>•	Credencial y Programa impreso.</li>
                        <li>•	Carpeta de Acreditación.</li>
                        <li>•	Participación en el evento teórico Crisol de la Nacionalidad Cubana</li>
                        <li>•	Participación en entrevistas con medios de prensa.</li>
                        <li>•	Servicio de protocolo permanente incluyendo traducción si se necesita</li>
                        <li>•	Invitaciones para espectáculos artísticos.</li>
                        <li>•	Cóctel de Bienvenida.</li>
                    </ul>

                    <p>Al margen de estos derechos, los participantes podrán optar por ofertas comerciales con fines turísticos culturales en cualquier zona de la Isla, haciendo mayor énfasis en los productos turístico culturales de la provincia Granma, para explorar senderos históricos naturales que conforman los Parques Nacionales Sierra Maestra y Desembarco del Granma. </p>
                    <h2 class="text-red">Para la oferta comercial o Paquete de Viajes: </h2>
                    <p>Debe contactar con nuestro turoperador oficial, la Agencia de Turismo Cultural Paradiso, que pone a su disposición paquetes preferenciales que incluyen: boletería, hospedaje, transportación interna, alimentación y opciones culturales  pre y post  evento. </p>
                    <h2 class="text-red">Para su reserva o más información contacte a: </h2>
                    <ul>
                        <li>Lic. Sury Sosa Jiménez. Representante de la Agencia de Viajes Paradiso en Granma.</li>
                        <li>Teléfonos: 53 23 411844  ó  0152871194. </li>
                        <li>Email: paradisogr@scgr.artex.cu</li>
                    </ul>
                    <p>Los participantes tendrán además la  oportunidad de disfrutar e interactuar con  proyectos artísticos de excelencia en diferentes instituciones culturales y  áreas caracterizadas. Sucederán ferias de libros, artesanía y productos tradicionales  de la cultura culinaria; exposiciones personales y colectivas de artes plásticas, presentaciones de órganos, bandas de concierto, puestas de obras teatrales, foro interactivo y muestras audiovisuales en plazas, comunidades, universidades, escuelas, centros culturales y espacios públicos. </p>

                    <h2 class="text-red">Para mayor información: </h2>
                    <ul>
                        <li>Casa de la Nacionalidad Cubana</li>
                        <li>E-mail: cnc@crisol.cult.cu</li>
                        <li>Sitio web: www.crisol.cult.cu</li>
                        <li>Teléfono: 2342 4833</li>
                    </ul>
                </div>
                <div :class="{'hidden' : c_menu!=2 }">
                    <h2 class="text-red">Notification of the 27th Event of Cuban Nationality </h2>
                    <p>The House of Cuban Nationality officially announces the 27th Theory Event of Cuban Nationality to be held annually from October 17th to 20th in Bayamo, Granma. This year it will be dedicated to the 200th Anniversary of the birth of motherland´s founding father, Carlos Manuel de Céspedes, who was the leader of the independence fight begun in 1868. It also announces the 4th Workshop on “Formation of Cuban beings and their connection with the Caribbean, regarding identity, history and culture”. It will be aimed at debate and reflection about transcultural issues, taking into consideration pre-Columbian times and national formation processes in Iberoamerica and the Caribbean. This one will be under the auspices of Granma´s Board of Social  and Humanistic Sciences.</p>

                    <p>Main theme will be related to <em>Founding fathers of Iberoamerica and the Caribbean.</em> </p>
                    <h2 class="text-red">Topics for debate: </h2>
                    <ul>
                        <li>1.	Historical and contemporary perspective on national formation studies.</li>
                        <li>2.	Historical, artistic, literary and hereditary significance of wars for independence in Cuba, Iberoamerica and the Caribbean.</li>
                        <li>3.	Cuban, Iberoamerican and Caribbean thinking.</li>
                        <li>4.	Historical cities and preservation of cultural heritage.</li>
                        <li>5.	National art and literature.</li>
                        <li>6.	Sociocultural phenomenon inside communities.</li>
                        <li>7.	Cultural, historical and social studies regarding identity and globalization issues.</li>
                    </ul>
                    <h2 class="text-red">Event  framework </h2>

                    <p>Abstracts will have no more than 250 words. They should state the  paper´s objective, subject´s current state, contribution, and results. They should be sent to the event´s Scientific Committee through the House of Cuban Nationality´s email address cnc@crisol.cult.cu before July 31st, 2019. </p>

                    <p>Personal data should be sent along with abstracts, providing the following information: </p>
                    <ul>
                        <li>•	Full name</li>
                        <li>•	Identification  number (ID)</li>
                        <li>•	Scientific degree</li>
                        <li>•	Work place</li>
                        <li>•	Email address</li>
                    </ul>

                    <p>Approval will imply receiving full papers with no more than 20 pages in Microsoft Office Word format with Arial 12 font before September 10th, 2019. Two authors maximum are allowed, in which case only one will attend the event. </p>

                    <p>The event´s scientific program will be fulfilled  through  lectures, presentations, and  panels according to subject. Papers will be required to have PDF Document  format, Microsoft Power Point slides, posters, or videos. </p>

                    <h2 class="text-red">Registration  fee (to be paid when getting credentials at the event´s opening) </h2>
                    <ul>
                        <li>•	For foreign participants: 100 CUC</li>
                        <li>•	For foreign students: 50 CUC</li>
                    </ul>
                    <p>This payment will not be inclusive of lodging, food supply or transportation. </p>


                    <h2 class="text-red">Credentials will allow: </h2>
                    <ul>
                        <li>•	Participation in the 27th Theory Event of Cuban Nationality</li>
                        <li>•	Attending the welcoming ceremony</li>
                        <li>•	Getting a copy of  the event´s full program</li>
                        <li>•	Getting a folder containing office material and  souvenirs</li>
                        <li>•	Getting interviewed by the press</li>
                        <li>•	Having 24-hour  protocol service (plus interpreting service  if needed)</li>
                        <li>•	Getting invitations to attend shows. </li>
                    </ul>


                    <p>Participants will have the opportunity to learn about artistic proyects from different cultural institutions.They will also have the possibility to enjoy book, local crafts and traditional cuisine fairs, as well as art exhibits, organ music listening, concerts, and plays. Videos about regional culture will be played at public squares, communities, universities, schools, cultural  centers and public areas. </p>

                    <p>They will also have access to tourist information around the island, being Sierra Maestra National Park and Desembarco del Granma National Park strongly recommended not only  for their proximity to Bayamo, but for both their natural and historical worth as well. To get a value pack, participants should contact  Paradiso  Tourist  Agency  for offers that include travelling tickets, lodging, transportation, meals, and leisure activities to enjoy before and after the event. Such activities include trekking, city tours, visits to museums, and trips to some other eastern provinces. </p>
                    <h2 class="text-red">For further information, please contact: </h2>
                    <ul>
                        <li>BA. Sury Sosa Jiménez, Paradiso  Tourist  Agency´s  representative in Granma.</li>
                        <li>Phone numbers: 53 23 411844  /  53 52871194 </li>
                        <li>Email: paradisogr@scgr.artex.cu </li>
                    </ul>

                    <h2 class="text-red">For general information, please contact:</h2>
                    <ul>
                    <li>House of Cuban Nationality</li>
                    <li>Phone number: 53 23 424833 </li>
                    <li>Email: cnc@crisol.cult.cu</li>
                    <li>Web site: www.crisol.cult.cu</li>
                    </ul>

                    <a href="http://www.crisol.cult.cu/index.php/lo-nuestro/eventos/1289-evento-teorico-crisol-de-la-nacionalidad-cubana.html">
                        http://www.crisol.cult.cu/index.php/lo-nuestro/eventos/1289-evento-teorico-crisol-de-la-nacionalidad-cubana.html
                    </a>

                </div>
            </div>
        </vue-scrollbar>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                c_menu: 0,
            }
        }
    }
</script>
<style>
    ul.content-switcher{
        list-style: none;
    }
    ul.content-switcher li{
        list-style: none;
        margin: 0;
        display: inline-block;
        width: 33.333333333%;
        text-align: center;
    }
    ul.content-switcher li a{
        font-weight: bold;
        font-family: "Times New Roman";
        font-size: .8em;
        list-style: none;
        margin: 0;
        padding: 15px 0;
        display: block;
        color: #999999;
        text-decoration: none;
        text-transform: uppercase;
        border-bottom: 2px solid #999999;
    }
    ul.content-switcher li a.is-active{
        color: #362383;
        border-bottom: 3px solid #362383;
    }
</style>