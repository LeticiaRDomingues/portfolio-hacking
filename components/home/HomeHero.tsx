import AnimationCube from "@/components/home/AnimationCube"
import CTAButton from "@/components/CTAButton";

const NAV_HEIGHT = "10px";

export default function HomeHero() {
    return (
        <section className="grid grid-cols-2 gap-8 px-16" style={{ minHeight: `calc(115vh - ${NAV_HEIGHT})` }}>
            <div className="flex flex-col justify-center">
                <div>
                    <h1 className="text-7xl leading-[0.95] pb-5 text-zinc-100">Breaking web apps <br /> one lab at a time.</h1>
                    <p className="text-zinc-300 leading-relaxed max-w-xl">Building secure web experiences through code, offensive thinking <br /> and practical execution.</p>
                </div>

                <div className="my-9 hover:scale-102">
                    <CTAButton className="text-lg py-3 px-8 rounded-2xl
                    bg-cyan-600 text-zinc-300 font-medium hover:bg-cyan-500 hover:text-zinc-200
                    hover:-translate-y-1 transition-all duration-300 shadow-lg 
                    shadow-cyan-300/20" href="/projects" label="Explore Projects" />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <AnimationCube />
            </div>
        </section >
    )
}