import type {FC} from 'react';
import Image from "next/image";
import wanda from "../../../public/wanda.jpeg";
import {Device} from "../Device";

const Hero: FC = () => {
    return (
        <div className="flex items-center md:flex-row flex-col justify-between">
            <h1 className="hero__image">
                Movie <br/> change <br/> the world
            </h1>
            <Device desktop>
                <Image
                    src={wanda}
                    alt="Wanda Maximoff from MCU"
                    width={400}
                    height={600}
                    placeholder="blur"
                    priority={true}
                    className="rounded-2xl md:rounded-tr-full md:rounded-bl-full"
                />
            </Device>
        </div>
    );
};

export default Hero;
