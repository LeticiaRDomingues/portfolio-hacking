const NAV_HEIGHT = "20px";

export default function HomeHero() {
    return (
        <section className="grid grid-cols-2 gap-8 px-16" style={{ minHeight: `calc(100vh - ${NAV_HEIGHT})` }}>
            <div className="flex flex-col justify-center">
                <h1 className="text-7xl leading-[0.95] pb-5 text-zinc-100">Breaking web apps <br /> one lab at a time.</h1>
                <p className="text-xl pl-3 text-zinc-400"> Ethical hacking, development and real-world problem solving.</p>
            </div>
            <div className="flex justify-center items-center">
                Animação
            </div>
        </section>
    )
}