"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'



const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full px-60 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="400" height="400" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">On the way to a<br />
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
                    Hello everyone, Im Sam and Im very excited to know that you read this, now a little information about me, I live in Colombia, I am a university student. I have great ability to communicate with other people and work as a team and I have a B2 level in English and I would like to learn more and more for this.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Proyects
                        </a>
                        <a href="https://join.skype.com/invite/aTZBMQFCEdkQ"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Talk to Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;