import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      await axios.post('/api/contact/', formData)
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
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
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/contact-background.jpg)' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50"></div>

      <div className="relative z-10 w-full px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="glass-transparent-form rounded-3xl p-12">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-sans font-bold mb-4 text-black">
                Horma+ Priority Access
              </h2>
              <p className="text-black/70 font-light leading-relaxed">
                Be among the first to experience tomorrow's health technology, with personalized insights tailored to your hormonal wellness.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full name"
                  className="w-full px-5 py-3 glass-transparent text-black rounded-xl focus:ring-2 focus:ring-black/20 focus:outline-none transition-all duration-200 font-light placeholder-black/50"
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
                  className="w-full px-5 py-3 glass-transparent text-black rounded-xl focus:ring-2 focus:ring-black/20 focus:outline-none transition-all duration-200 font-light placeholder-black/50"
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
                  className="w-full px-5 py-3 glass-transparent text-black rounded-xl focus:ring-2 focus:ring-black/20 focus:outline-none transition-all duration-200 font-light placeholder-black/50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 glass-transparent hover:bg-black/80 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed text-black rounded-xl transition-all duration-200 font-medium tracking-wide text-lg"
              >
                {status === 'sending' ? 'Sending...' : 'Reserve Your Spot'}
              </button>

              {status === 'success' && (
                <div className="glass-graphite rounded-xl p-4 text-center">
                  <p className="text-black font-light">
                    ✓ You're on the waitlist!
                  </p>
                </div>
              )}
              {status === 'error' && (
                <div className="glass rounded-xl p-4 text-center border border-red-500/20">
                  <p className="text-red-600 font-light">
                    ✗ Error. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

