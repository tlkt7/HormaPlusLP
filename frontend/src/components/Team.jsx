export default function Team() {
  const team = [
    {
      name: "Urazbekov Bexultan",
      role: ["Chief Executive Officer", "Co-founder"],
      photo: "/team-bexultan.jpg",
      hasPhoto: true
    },
    {
      name: "Sagimbekov Adil",
      role: ["Chief Design Officer", "Co-founder"],
      photo: "/team-adil.jpg",
      hasPhoto: true
    },
    {
      name: "Tlektes Ibrahhim",
      role: "Chief Technology Officer, Co-founder",
      photo: "/team-ibrahim.jpg",
      hasPhoto: true
    },
    {
      name: "Burbayeva Kamila",
      role: "Endocrinologist",
      hasPhoto: false
    },
    {
      name: "Sakenova Aygerim",
      role: "Gynecologist-Obstetrician",
      hasPhoto: false
    }
  ]

  return (
    <section id="team" className="relative min-h-screen flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/team-background.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50"></div>

      <div className="relative z-10 w-full px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-sans font-bold mb-4 text-black drop-shadow-sm">
              Our Team
            </h2>
            <p className="text-black/70 text-lg font-light">
              Experts united by a passion for transforming health monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-transparent-form rounded-2xl p-6 hover:scale-105 transition-transform duration-200 text-center"
              >
                {member.hasPhoto ? (
                  <div 
                    className="w-full aspect-square rounded-xl mb-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.photo})` }}
                  ></div>
                ) : (
                  <div className="w-full aspect-square rounded-xl mb-4 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-6xl">⚕️</span>
                  </div>
                )}
                <h3 className="text-lg font-bold text-black mb-1">{member.name}</h3>
                <p className="text-black/70 text-sm font-light">
                  {Array.isArray(member.role) ? (
                    <>
                      <span>{member.role[0]}</span>
                      <br />
                      <span>{member.role[1]}</span>
                    </>
                  ) : (
                    member.role
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Team Philosophy */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-black/90 font-light leading-relaxed mb-4">
              We believe in the safe, non-invasive, and effective power of our biometric 
              <br />
              intelligence so deeply, we use it ourselves every day.
            </p>
            <p className="text-xl md:text-2xl text-black/90 font-bold leading-relaxed">
              We don't just track problems, we catch them before they exist!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
