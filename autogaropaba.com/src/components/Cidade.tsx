import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Configurar o elemento raiz para o modal
Modal.setAppElement('#root');

const garopabaImages = [
    {
        src: '/assets/foto-garopaba-sc_por_raul-rodrigues-zeferino-m5J0rk_4TeA-unsplash.jpg',
        alt: 'Praia de Garopaba ao pôr do sol - Fotografia de Raul Rodrigues Zeferino',
        title: 'Garopaba ao Pôr do Sol'
    },
    {
        src: '/assets/foto-garopaba-sc_por_pedro-kummel-VSwFHRUg8aU-unsplash.jpg',
        alt: 'Vista panorâmica da Praia da Ferrugem em Garopaba - Fotografia de Pedro Kummel',
        title: 'Praia da Ferrugem'
    },
    {
        src: '/assets/foto-garopaba-sc_por_pedro-kummel-ryGu_SPR1rs-unsplash.jpg',
        alt: 'Paisagem natural de Garopaba - Fotografia de Pedro Kummel',
        title: 'Paisagem Natural'
    },
    {
        src: '/assets/foto-garopaba-sc_por_paulo-freitas-SqZuDwGOQFY-unsplash.jpg',
        alt: 'Centro histórico de Garopaba - Fotografia de Paulo Freitas',
        title: 'Centro Histórico'
    },
    {
        src: '/assets/foto-garopaba-sc_por_ivan-cheremisin-qnU5k4fLpd4-unsplash.jpg',
        alt: 'Trilhas ecológicas de Garopaba - Fotografia de Ivan Cheremisin',
        title: 'Trilhas Ecológicas'
    },
    {
        src: '/assets/foto-garopaba-sc_por_ivan-cheremisin-ihdcAg7MVrM-unsplash.jpg',
        alt: 'Lagoa de Garopaba com vegetação nativa - Fotografia de Ivan Cheremisin',
        title: 'Lagoa de Garopaba'
    },
    {
        src: '/assets/foto-garopaba-sc_por_ivan-cheremisin-4o4z--__Q2o-unsplash.jpg',
        alt: 'Atardecer em Garopaba Santa Catarina - Fotografia de Ivan Cheremisin',
        title: 'Atardecer Garopaba'
    },
    {
        src: '/assets/foto-garopaba-sc_por_claudia-back-83Fr00tILOg-unsplash.jpg',
        alt: 'Praia com ondas em Garopaba SC - Fotografia de Claudia Back',
        title: 'Praia com Ondas'
    },
    {
        src: '/assets/foto-garopaba-sc_por_diego-bruning-05.jpg',
        alt: 'Garopaba - Fotografia de Diego Bruning',
        title: 'Garopaba 05'
    },
    {
        src: '/assets/foto-garopaba-sc_por_diego-bruning-04.jpg',
        alt: 'Garopaba - Fotografia de Diego Bruning',
        title: 'Garopaba 04'
    },
    {
        src: '/assets/foto-garopaba-sc_por_diego-bruning-03.jpg',
        alt: 'Garopaba - Fotografia de Diego Bruning',
        title: 'Garopaba 03'
    },
    {
        src: '/assets/foto-garopaba-sc_por_diego-bruning-02.jpg',
        alt: 'Garopaba - Fotografia de Diego Bruning',
        title: 'Garopaba 02'
    },
    {
        src: '/assets/foto-garopaba-sc_por_diego-bruning-01.jpg',
        alt: 'Garopaba - Fotografia de Diego Bruning',
        title: 'Garopaba 01'
    }
];

export function Cidade() {
    const swiperRef = useRef(null);
    const imagesLoaded = useRef(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    useEffect(() => {
        // Pré-carregar imagens após o carregamento da página
        const loadImages = async () => {
            if (imagesLoaded.current) return;

            await Promise.all(
                garopabaImages.map(
                    (img) =>
                        new Promise<boolean>((resolve) => {
                            const image = new Image();
                            image.onload = () => resolve(true);
                            image.onerror = () => resolve(false);
                            image.src = img.src;
                        })
                )
            );
            imagesLoaded.current = true;
        };

        // Aguardar o carregamento da página
        if (document.readyState === 'complete') {
            loadImages();
        } else {
            window.addEventListener('load', loadImages);
            return () => window.removeEventListener('load', loadImages);
        }
    }, []);

    return (
        <section className="py-20 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Garopaba: Nossa Casa, Seu Destino
                    </h2>
                    <div className="h-1 w-24 bg-red-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-400">
                        A Bruning tem orgulho de fazer parte da história de Garopaba, uma cidade encantadora do litoral catarinense. Aqui, tradição, natureza e hospitalidade se encontram para criar experiências inesquecíveis tanto para moradores quanto para visitantes.
                    </p>
                </div>

                {/* Carrossel de Imagens com Swiper */}
                <div className="mb-12">
                    <style>{`
                    .swiper-pagination-bullet {
                      background-color: #71717a;
                      opacity: 0.8;
                    }
                    .swiper-pagination-bullet-active {
                      background-color: #dc2626;
                      opacity: 1;
                    }
                    .swiper-button-next,
                    .swiper-button-prev {
                      background-color: rgba(220, 38, 38, 0.8);
                      padding: 8px;
                      width: 44px;
                      height: 44px;
                      border-radius: 9999px;
                      color: white;
                    }
                    .swiper-button-next:hover,
                    .swiper-button-prev:hover {
                      background-color: rgba(220, 38, 38, 1);
                    }
                    .swiper-button-next::after,
                    .swiper-button-prev::after {
                      font-size: 20px;
                    }
                  `}</style>
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        slidesPerView="auto"
                        spaceBetween={16}
                        centeredSlides={true}
                        dir="rtl"
                        className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl"
                    >
                        {garopabaImages.map((image, index) => (
                            <SwiperSlide
                                key={index}
                                style={{ width: 'auto', maxWidth: '600px', height: '400px' }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    title={image.title}
                                    className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                    loading="lazy"
                                    onClick={() => setSelectedImageIndex(index)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                {/* Texto descritivo */}
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                        Garopaba é famosa por suas praias paradisíacas como a Praia da Ferrugem, Praia do Silveira e Praia de Garopaba, perfeitas para o surfe, banho de mar e momentos em família. O centro histórico, a Igreja Matriz, as trilhas ecológicas e a Lagoa de Garopaba também são pontos turísticos imperdíveis.
                    </p>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                        Se você está de passagem ou mora na cidade, convidamos você a conhecer a Bruning. Somos apaixonados por Garopaba e dedicados a oferecer o melhor em funilaria e estética automotiva. Venha tomar um café conosco e descubra como podemos cuidar do seu carro enquanto você aproveita tudo o que Garopaba tem a oferecer!
                    </p>
                    <span className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-red-700 transition">
                        Esperamos por você em Garopaba!
                    </span>
                </div>
            </div>

            {/* Modal de Imagem em Tela Cheia */}
            <Modal
                isOpen={selectedImageIndex !== null}
                onRequestClose={() => setSelectedImageIndex(null)}
                contentLabel="Imagem em tela cheia"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    content: {
                        position: 'relative',
                        top: 'auto',
                        left: 'auto',
                        right: 'auto',
                        bottom: 'auto',
                        width: '100%',
                        maxWidth: '90vw',
                        height: 'auto',
                        maxHeight: '90vh',
                        padding: '0',
                        border: 'none',
                        borderRadius: '8px',
                        backgroundColor: 'transparent',
                        overflow: 'visible'
                    }
                }}
            >
                <div className="relative w-full flex flex-col items-center justify-center">
                    <button
                        onClick={() => setSelectedImageIndex(null)}
                        className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors z-10"
                        aria-label="Fechar modal"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {selectedImageIndex !== null && (
                        <>
                            <img
                                src={garopabaImages[selectedImageIndex].src}
                                alt={garopabaImages[selectedImageIndex].alt}
                                title={garopabaImages[selectedImageIndex].title}
                                className="w-auto h-[85vh] object-contain rounded-lg"
                            />

                            <p className="text-center text-gray-300 mt-6 text-lg font-semibold">
                                {garopabaImages[selectedImageIndex].title}
                            </p>
                        </>
                    )}
                </div>
            </Modal>
        </section>
    );
}