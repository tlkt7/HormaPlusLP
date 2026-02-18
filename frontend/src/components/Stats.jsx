export default function Stats() {
  const stats = [
    {
      value: "589M",
      label: "adults live with diabetes"
    },
    {
      value: "332M",
      label: "live with depression"
    },
    {
      value: "936M",
      label: "adults worldwide at risk of / living with OSA"
    },
    {
      value: "14-25%",
      label: "of women experience menstrual irregularities"
    },
    {
      value: "850M",
      label: "people struggle with sleep issues"
    }
  ]

  return (
    <section id="stats" className="relative min-h-screen flex items-center py-20 px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/stats-background.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-between min-h-[80vh]">
          {/* Main Stat */}
          <div className="text-center flex-grow flex flex-col justify-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light leading-tight text-white max-w-6xl mx-auto">
              <span className="font-bold">1.7B</span> with hormonal or metabolic imbalances <span className="font-bold">don't get regular monitoring</span> and lack predictive insights
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-transparent rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-200"
            >
              <div className="text-3xl md:text-4xl font-bold mb-3 text-white">
                {stat.value}
              </div>
              <div className="text-sm text-white/70 font-light leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
