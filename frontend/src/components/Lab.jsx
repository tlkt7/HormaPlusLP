export default function Lab() {
  const plans = [
    {
      name: "Horma+ Core",
      features: [
        "Glucose tracking",
        "Sleep analysis",
        "Basic hormonal insights"
      ]
    },
    {
      name: "Horma+ Balance",
      features: [
        "Everything in Core",
        "Menstrual cycle tracking",
        "Stress & cortisol monitoring",
        "Personalized recommendations"
      ]
    },
    {
      name: "Horma+ Prime",
      features: [
        "Everything in Balance",
        "Advanced hormone panel",
        "Metabolic age tracking",
        "1-on-1 health coaching",
        "Priority lab processing"
      ]
    }
  ]

  return (
    <section id="lab" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/lab-background.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 w-full px-4 py-20">
        <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[80vh]">
          <div className="text-center flex-grow flex flex-col justify-center mb-16">
            <h2 className="text-5xl md:text-6xl font-sans font-bold mb-6 text-white drop-shadow-lg">
              Horma Lab+
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Comprehensive lab testing packages tailored to your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="glass-transparent-form rounded-2xl p-6 hover:scale-105 transition-transform duration-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-black">{plan.name}</h3>
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-black/80 text-sm font-light">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
