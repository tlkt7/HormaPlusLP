export default function Story() {
  const stories = [
    {
      name: "Beksultan Urazbekov",
      role: "CEO & Co-Founder",
      story: "My Father a man who never ate sweets, maintained a healthy lifestyle, and had no obvious risk factors was diagnosed with Type 2 diabetes at a late stage. Chronic stress that silently disrupted his metabolic health over years. This diagnosis came as a shock and it became clear to me that <span class='font-extrabold text-white'>reactive medicine isn't enough we need proactive, continuous monitoring to catch invisible changes before they become irreversible.</span>",
      image: "/ceo-story.jpg"
    },
    {
      name: "Ibrahhim Tlektes",
      role: "CTO & Co-Founder",
      story: "I experienced firsthand how invisible hormonal shifts can erode even the strongest 8-year love union. We simply couldn't see the full picture by relying on one-off tests. Two years after that turning point, I have dedicated this past year to developing a system that captures health in motion, <span class='font-extrabold text-white'>helping to preserve harmony and a deep understanding of a person.</span>",
      image: "/cto-story.jpg"
    }
  ]

  return (
    <section id="story" className="relative min-h-screen flex items-center py-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
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
              className="relative h-[600px] rounded-3xl overflow-hidden group glass-transparent-form"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${story.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                <p className="text-white/80 text-sm mb-4 font-light">{story.role}</p>
                <p className="text-white/90 leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: story.story }}></p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl md:text-2xl text-black/80 font-light leading-relaxed max-w-4xl mx-auto italic glass-transparent-form rounded-2xl p-8">
            We built Horma+ to bridge this gap continuous, predictive insights that empower proactive health decisions
          </p>
        </div>
      </div>
    </section>
  )
}
