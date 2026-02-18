export default function Features() {
  const features = [
    {
      title: 'Быстрая работа',
      description: 'Оптимизированная производительность для лучшего опыта',
      icon: '⚡'
    },
    {
      title: 'Безопасность',
      description: 'Современные стандарты защиты ваших данных',
      icon: '🔒'
    },
    {
      title: 'Поддержка 24/7',
      description: 'Всегда готовы помочь вам в любое время',
      icon: '💬'
    }
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Наши возможности
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Все что нужно для успешного старта вашего проекта
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
