"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'



const Introduction = () => {
    return (
        <div className="z-20 justify-center items-center w-full bg-darkBg/60">
            <div className="z-20 grid items-center justify-center h-full px-40 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="300" height="300" alt="Avatar" />
                <div className=" justify-center items-center max-w-md">
                    <h1 className="mb-5 flex flex-col text-2xl leading-tight justify-center text-center md:text-left md:text-4xl md:mb-10">On the way to a<br />
                        <TypeAnimation
                            sequence={[
                                "optimized future",
                                1000,
                                "guided future",
                                1000,
                                "automated future",
                                1000,
                                "happy future",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    Hello everyone, Im Sam and Im very excited to know that you read this, now a little information about me, I live in Colombia, I am a university student. I have great ability to communicateand I have a B2 level in English.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 flex py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Proyects
                        </a>
                        <a href="https://join.skype.com/invite/aTZBMQFCEdkQ"
                            className="px-3 py-2 flex my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Talk
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;