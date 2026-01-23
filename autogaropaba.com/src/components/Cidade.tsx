import { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { X } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { garopabaImages } from '../data/images';

// Configurar o elemento raiz para o modal
Modal.setAppElement('#root');

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
                                <figure>
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        title={image.title}
                                        className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                                        loading="lazy"
                                        onClick={() => setSelectedImageIndex(index)}
                                    />
                                    <figcaption className="sr-only">{image.title}</figcaption>
                                </figure>
                                <script type="application/ld+json">
                                    {JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "ImageObject",
                                        "name": image.title,
                                        "contentUrl": `${import.meta.env.VITE_SITE_URL}${image.src}`,
                                        "description": image.alt
                                    })}
                                </script>
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