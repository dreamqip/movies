import type {FC} from 'react';
import Image from "next/future/image";
import wanda from "../../public/wanda.jpeg";

const Hero: FC = () => {
    return (
        <div className="flex items-center md:flex-row flex-col justify-between">
            <h1
                className="
                hero__image
                m-0
                text-7xl
                font-bold
                uppercase
                text-center
                dark:text-white
                md:text-8xl
                xl:text-9xl
                md:dark:text-transparent
                md:text-transparent
                md:bg-right-top
                md:bg-clip-text
                md:text-left
                md:bg-[url('../../public/redcity.webp')]
                md:bg-cover
                lg:relative
                lg:z-10
                "
            >
                Movie <br/> change <br/> the world
            </h1>
            <Image
                src={wanda}
                alt="Wanda Maximoff from MCU"
                width={400}
                height={600}
                placeholder="blur"
                priority={true}
                className="hidden md:block rounded-2xl md:rounded-tr-full md:rounded-bl-full"
            />
        </div>
    );
};

export default Hero;
