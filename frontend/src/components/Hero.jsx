export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Добро пожаловать в{' '}
            <span className="text-primary-600">Horma</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Современное решение для вашего бизнеса. Быстро, надежно, эффективно.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium">
              Начать
            </button>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition font-medium">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
