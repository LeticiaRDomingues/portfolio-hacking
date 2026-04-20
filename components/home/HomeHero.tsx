import AnimationCube from "@/components/home/AnimationCube"
import CTAButton from "@/components/CTAButton"



export default function HomeHero() {
    return (
        <section className="grid min-h-[calc(100svh-5rem)] grid-cols-1 gap-10 px-4 pt-16 pb-10 sm:px-6 sm:pt-20 lg:min-h-[calc(100svh+10rem)] md:grid-cols-2 md:px-10 md:pt-0 lg:px-16">
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="pb-5 text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-zinc-100">
                        Breaking web apps <br className="hidden sm:block" /> one lab<br className="block sm:hidden" /> at a time.
                    </h1>

                    <p className="max-w-xl text-base sm:text-lg text-zinc-300 leading-snug tracking-tighter font-mono">
                        Building secure web experiences through code, offensive thinking
                        <br className="block sm:hidden" /> and practical execution.
                    </p>
                </div>

                <div className="my-8">
                    <CTAButton
                        className="text-base sm:text-lg py-3 px-6 sm:px-8 rounded-2xl
                        bg-cyan-600 text-zinc-300 font-medium hover:bg-cyan-500 hover:text-zinc-200
                        hover:-translate-y-1 transition-all duration-300 shadow-lg 
                        shadow-cyan-300/20"
                        href="/projects"
                        label="Explore Projects"
                    />
                </div>
            </div>

            <div className="hidden md:flex justify-center items-center">
                <AnimationCube />
            </div>
        </section>
    )
}