import { useState } from 'react'
import axios from 'axios'

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: 'Заявка на Priority Access'
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      await axios.post('/api/contact/', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: 'Заявка на Priority Access' })
      setTimeout(() => setStatus(''), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-background.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)'
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8 lg:mt-20">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight leading-none drop-shadow-sm">
                <span className="text-white">Clarity starts </span>
                <span className="text-white">here</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide drop-shadow-sm">
                Predict. Prevent. Perform.
              </p>
            </div>

            {/* Description/Clickbait */}
            <div className="max-w-xl">
              <p className="text-base md:text-lg text-white/80 font-light leading-relaxed italic drop-shadow-sm">
                Meet <span className="text-white font-medium not-italic">Horma+ Ring</span>, a wellness ring that provides continuous, non-invasive glucose and hormone monitoring
              </p>
            </div>
          </div>

          {/* Right Column - Priority Access Form */}
          <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 lg:mt-20">
            <div className="glass-transparent-form rounded-3xl p-8">
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-sans font-bold mb-3 text-black">
                  Horma+ Priority Access
                </h3>
                <p className="text-black/70 font-light leading-relaxed text-sm">
                  Be among the first to experience tomorrow's health technology, with personalized insights tailored to your hormonal wellness.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full name"
                    className="w-full px-5 py-3 glass-transparent text-black rounded-xl focus:ring-2 focus:ring-black/20 focus:outline-none transition-all duration-200 font-light placeholder-black/50 text-sm"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email address"
                    className="w-full px-5 py-3 glass-transparent text-black rounded-xl focus:ring-2 focus:ring-black/20 focus:outline-none transition-all duration-200 font-light placeholder-black/50 text-sm"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone number"
                    className="w-full px-5 py-3 glass-transparent text-black rounded-xl focus:ring-2 focus:ring-black/20 focus:outline-none transition-all duration-200 font-light placeholder-black/50 text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 glass-transparent hover:bg-black/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-xl transition-all duration-200 font-medium tracking-wide"
                >
                  {status === 'sending' ? 'Sending...' : 'Reserve'}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="glass-graphite rounded-xl p-3 text-center">
                    <p className="text-black font-light text-sm">
                      ✓ You're on the waitlist!
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="glass rounded-xl p-3 text-center border border-red-500/20">
                    <p className="text-red-600 font-light text-sm">
                      ✗ Error. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

