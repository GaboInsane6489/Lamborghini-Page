import { motion } from 'framer-motion';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const modelos = [
    {
        nombre: "Revuelto",
        año: 2024,
        precio: "$600,000",
        descripcion: "Híbrido V12 con diseño radical y aerodinámica activa.",
        imagen: "/images/lambo1.webp",
    },
    {
        nombre: "Huracán Sterrato",
        año: 2023,
        precio: "$280,000",
        descripcion: "El primer Lamborghini off-road con alma deportiva.",
        imagen: "/images/lamborguini2.jpg",
    },
    {
        nombre: "Aventador SVJ",
        año: 2022,
        precio: "$500,000",
        descripcion: "Máxima expresión del V12 con tracción total.",
        imagen: "/images/lamborguini3.jpg",
    },
    // Puedes agregar más modelos aquí
];

export default function ModelosSection() {
    return (
        <section className="relative z-20 px-6 md:px-12 py-16 bg-black text-white outline-none focus:outline-none">
            {/* Encabezado */}
                <div className="flex justify-between items-center mb-8 outline-none focus:outline-none">
                    <h2 className="text-3xl font-bold tracking-tight outline-none focus:outline-none">Modelos</h2>
                    <a
                        href="/modelos"
                        className="text-sm font-medium text-yellow-400 hover:underline outline-none focus:outline-none"
                    >
                        Descubrir todos los modelos
                    </a>
                </div>

                {/* Carrusel */}
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full outline-none focus:outline-none ring-0 [&_*]:outline-none [&_*]:focus:outline-none"
                >
                    <CarouselContent className="-ml-4 outline-none focus:outline-none">
                        {modelos.map((modelo, index) => (
                            <CarouselItem
                                    key={index}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3 outline-none focus:outline-none"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl overflow-hidden shadow-xl transition-all"
                                >
                                    <img
                                        src={modelo.imagen}
                                        alt={modelo.nombre}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-xl font-semibold">{modelo.nombre}</h3>
                                        <p className="text-sm text-zinc-400">{modelo.descripcion}</p>
                                        <div className="flex justify-between text-sm text-zinc-300">
                                            <span>{modelo.año}</span>
                                            <span>{modelo.precio}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
        </section>
    );
}
