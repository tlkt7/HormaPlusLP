export default function Stats() {
  const stats = [
    {
      value: "589M",
      label: "Living with diabetes worldwide"
    },
    {
      value: "332M",
      label: "Affected by depression globally"
    },
    {
      value: "936M",
      label: "At OSA risk, mostly undiagnosed"
    },
    {
      value: "14-25%",
      label: "Women face menstrual irregularities"
    },
    {
      value: "850M",
      label: "Struggle with sleep issues"
    }
  ]

  return (
    <section id="stats" className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Stat */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-sans font-bold mb-8 text-white">
            1.7B
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto">
            with hormonal or metabolic imbalances don't get regular monitoring
          </p>
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
    </section>
  )
}
