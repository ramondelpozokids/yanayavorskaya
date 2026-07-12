import React from 'react';
import { SchemaOrg } from '../seo/SchemaOrg';
import { SeoMeta } from '../seo/SeoMeta';

/**
 * Componente oficial para la página "Sobre mí / Bio".
 * Incluye exactamente el texto innegociable de la Página 1 de la Orden de Trabajo
 * ampliado con las secciones humanas e introspectivas solicitadas en la Página 9.
 */
export const BioPage: React.FC = () => {
  return (
    <>
      <SeoMeta
        title="Sobre mí | Biografía y Filosofía Artística"
        description="Conoce la trayectoria, las influencias y el proceso creativo íntimo de la artista contemporánea Yana Yavorskaya en su estudio de Madrid."
        url="https://yanayavorskaya.com/sobre-mi"
      />
      <SchemaOrg type="Person" />

      <article className="max-w-5xl mx-auto px-6 py-16 md:py-24 bg-[#FCFCFA] text-[#1A1A1A]">
        {/* Cabecera / Hero Minimalista */}
        <header className="mb-16 md:mb-24 border-b border-neutral-200 pb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-serif block mb-3">
            Estudio & Biografía
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight font-light text-neutral-900 leading-tight mb-8">
            Yana Yavorskaya
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 font-serif font-light max-w-3xl leading-relaxed">
            «Pintar es un acto de escucha interior en el que la materia, el silencio y el tiempo construyen un puente sensible con quien contempla la obra.»
          </p>
        </header>

        {/* Sección Principal con Imagen y TEXTO EXACTO (Pág. 1 Orden de Trabajo) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
                alt="Yana Yavorskaya en su estudio de Madrid"
                className="w-full h-full object-cover grayscale contrast-105 hover:scale-102 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="mt-4 text-xs tracking-wider text-neutral-400 font-mono text-center">
              Yana Yavorskaya — Estudio de Madrid, 2026
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 font-serif text-lg md:text-xl text-neutral-800 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-serif font-normal text-neutral-900 mb-6 border-l-2 border-neutral-900 pl-4 py-1">
              Mi camino a través del arte
            </h2>

            {/* TEXTO EXACTO DE LA ORDEN DE TRABAJO - PÁGINA 1 */}
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-neutral-900">
              Pintar nunca ha sido solo una forma de crear imágenes. Para mí, siempre ha sido una manera de expresar emociones, de encontrar calma en los momentos difíciles y de transformar experiencias en color.
            </p>

            <p>
              Cada obra nace de una historia, de un instante vivido o de una emoción que merece permanecer. Trabajo con paciencia, dejando que cada pincelada encuentre su lugar, porque creo que el arte auténtico no se puede acelerar.
            </p>

            <p>
              A lo largo de los años he descubierto que una pintura puede hacer mucho más que decorar una pared. Puede despertar recuerdos, transmitir serenidad o crear una conexión especial con quien la contempla. Esa es la verdadera razón por la que sigo pintando.
            </p>

            <p>
              Mi inspiración proviene de la naturaleza, de las personas y de la belleza que a menudo pasa desapercibida en la vida cotidiana. Intento capturar esos pequeños detalles que nos invitan a detenernos unos segundos y mirar el mundo con otros ojos.
            </p>

            <p>
              Cada cuadro que comparto lleva una parte de mí. Espero que, al contemplarlo, también encuentre un lugar en tu historia y despierte una emoción única, porque el arte cobra vida cuando alguien se identifica con él.
            </p>
          </div>
        </div>

        {/* Sección de Profundización Humana (Pág. 9 Orden de Trabajo) */}
        <div className="border-t border-neutral-200 pt-16 md:pt-24 space-y-20">
          
          {/* Los comienzos */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
            <div className="md:col-span-4">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                01 — Los Primeros Trazos
              </h3>
              <h4 className="text-2xl font-serif text-neutral-900">
                Cómo empezó a pintar
              </h4>
            </div>
            <div className="md:col-span-8 space-y-4 font-sans text-neutral-700 text-base md:text-lg leading-relaxed font-light">
              <p>
                Mis primeros recuerdos están impregnados del olor a trementina y cera de abejas en la antigua casa familiar. Antes de aprender las reglas formales de la perspectiva en las academias y talleres, ya entendía que el color era un lenguaje paralelo y mucho más honesto que las palabras para describir el mundo interior.
              </p>
              <p>
                Aquel juego de infancia se convirtió con los años en una necesidad vital insustituible. Empecé dibujando al carbón las sombras de los árboles de invierno proyectadas sobre los muros blancos; pronto descubrí en el óleo y el lino el vehículo capaz de detener el vértigo del tiempo y otorgarle un cobijo duradero a nuestras vivencias.
              </p>
            </div>
          </section>

          {/* Qué significa el arte para ella */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
            <div className="md:col-span-4">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                02 — Filosofía & Sentido
              </h3>
              <h4 className="text-2xl font-serif text-neutral-900">
                Qué significa el arte para ella
              </h4>
            </div>
            <div className="md:col-span-8 space-y-4 font-sans text-neutral-700 text-base md:text-lg leading-relaxed font-light">
              <p>
                Para mí, el arte contemporáneo es ante todo una disciplina de honestidad y resistencia frente a la fugacidad del mundo hiperconectado. No busco el aplauso fácil ni el impacto visual efímero; concibo el cuadro como una zona de silencio recuperado.
              </p>
              <p>
                Cuando alguien adquiere una de mis obras para instalarla en su hogar o en su despacho, no se lleva un objeto estático; adquiere una atmósfera viviente que dialoga día tras día con la luz cambiante del sol y con el estado emocional de quien la habita.
              </p>
            </div>
          </section>

          {/* Influencias */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
            <div className="md:col-span-4">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                03 — Referentes & Mirada
              </h3>
              <h4 className="text-2xl font-serif text-neutral-900">
                Cuáles son sus influencias
              </h4>
            </div>
            <div className="md:col-span-8 space-y-4 font-sans text-neutral-700 text-base md:text-lg leading-relaxed font-light">
              <p>
                Me nutro constantemente del diálogo entre la austeridad plástica del informalismo europeo y la delicadeza geométrica del minimalismo moderno. Maestros como Giorgio Morandi me enseñaron la santidad de los tonos apagados y las geometrías silenciosas; Antoni Tàpies y Eduardo Chillida me inculcaron la devoción por la materia rústica y la gravedad del gesto; y la pintura de Mark Rothko me demostró que una superficie cromática puede ser una experiencia espiritual inmersiva.
              </p>
              <p>
                Más allá de la historia del arte, mi mayor maestra sigue siendo la propia naturaleza en sus transiciones estacionales: las nieblas matinales de Castilla, las auroras invernales en la costa y el asfalto mojado de Madrid bajo los faroles de la medianoche.
              </p>
            </div>
          </section>

          {/* Proceso creativo / Anatomía del cuadro */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline bg-neutral-50 p-8 md:p-12 border border-neutral-200">
            <div className="md:col-span-4">
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">
                04 — El Taller & La Materia
              </h3>
              <h4 className="text-2xl font-serif text-neutral-900">
                Cómo nace un cuadro y su proceso creativo
              </h4>
            </div>
            <div className="md:col-span-8 space-y-4 font-sans text-neutral-700 text-base md:text-lg leading-relaxed font-light">
              <p>
                La génesis de cada obra en mi estudio de Madrid sigue un ritmo pausado, artesanal y reflexivo. Todo comienza con la selección del lino belga o el panel de abedul de alta densidad. Me gusta preparar y tensar manualmente mis propios bastidores, asegurando que la tensión y el grano respondan con exactitud al carácter de la serie.
              </p>
              <p>
                Las primeras capas son casi siempre arquitectónicas y estructurales: trazos largos de grafito puro, incisiones con espátula o bloques de pigmento mineral acrílico mate. Una vez establecida la columna vertebral del cuadro, llega el tiempo de las veladuras al óleo amasado con aceites y resinas naturales.
              </p>
              <p>
                Entre una veladura y la siguiente pueden pasar semanas de secado y contemplación en silencio. En ese periodo, la obra dicta sus propias necesidades: a veces me pide lijar la superficie para revelar la memoria del color inferior; otras veces exige un empaste rasgado y contundente en el margen superior. Solo cuando el cuadro alcanza un punto de equilibrio cromático y silencio interior en el que no falta ni sobra un solo gramo de pigmento, considero que ha culminado su viaje compositivo y está listo para encontrar su lugar en el mundo.
              </p>
            </div>
          </section>

        </div>

        {/* Pie de página con invitación a la Galería o Contacto */}
        <footer className="mt-20 pt-12 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h5 className="font-serif text-xl text-neutral-900">¿Deseas visitar el estudio o conocer las obras disponibles?</h5>
            <p className="text-sm text-neutral-500 mt-1 font-sans">Sesiones privadas para coleccionistas con cita previa en Madrid.</p>
          </div>
          <a
            href="/obras"
            className="inline-block px-8 py-4 bg-neutral-900 text-white font-sans text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all duration-300 shadow-sm"
          >
            Explorar Galería Premium
          </a>
        </footer>
      </article>
    </>
  );
};
