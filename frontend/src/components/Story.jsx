export default function Story() {
  const stories = [
    {
      name: "Beksultan Urazbekov",
      role: "CEO & Co-Founder",
      story: "My father developed Type 2 diabetes due to chronic stress and irregular lifestyle. I watched him struggle with daily monitoring and felt powerless. That personal pain became my mission to make health tracking effortless and continuous.",
      image: "/ceo-story.jpg"
    },
    {
      name: "Ibrahhim Tlektes",
      role: "CTO & Co-Founder",
      story: "In my 8-year relationship, I noticed how hormonal shifts affected my partner's mood, energy, and well-being cycles that were invisible but profoundly real. I realized technology could bridge this gap, helping to preserve harmony and a deep understanding of a person.",
      image: "/cto-story.jpg"
    }
  ]

  return (
    <section id="story" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-black">
            Our Story
          </h2>
          <p className="text-black/70 text-lg font-light max-w-2xl mx-auto">
            Born from personal experiences that shaped our mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={index}
              className="relative h-[600px] rounded-3xl overflow-hidden group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                <p className="text-white/80 text-sm mb-4 font-light">{story.role}</p>
                <p className="text-white/90 leading-relaxed font-light">
                  {story.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-black/80 font-light leading-relaxed max-w-4xl mx-auto italic">
            We built Horma+ to bridge this gap continuous, predictive insights that empower proactive health decisions
          </p>
        </div>
      </div>
    </section>
  )
}
