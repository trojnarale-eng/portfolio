'use client';

import Image from 'next/image'
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  const [state, handleSubmit] = useForm("xreajgkg");
  
  if (state.succeeded) {
    return (
      <main className="min-h-screen relative">
        {/* Tło */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/tlo.jpg"
            alt="Tło"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Treść */}
        <div className="container mx-auto px-4 py-16 relative">
          <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
            Kontakt
          </h1>
          <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-black">Dziękuję za wiadomość! ✨</h2>
            <p className="text-gray-700 mb-6">Odezwę się najszybciej jak to możliwe.</p>
            <a href="/contact" className="text-blue-600 hover:underline">Wyślij kolejną wiadomość</a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen relative">
      {/* Tło */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/tlo.jpg"
          alt="Tło"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Treść */}
      <div className="container mx-auto px-4 py-16 relative">
        <h1 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
          Kontakt
        </h1>

        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-8">
          {/* Dane kontaktowe */}
          <div className="space-y-6 mb-8">
            {/* Email */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <FaEnvelope className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-black">Email</h3>
                <a href="mailto:trojnar.ale@gmail.com" className="text-gray-700 hover:text-blue-600">
                  trojnar.ale@gmail.com
                </a>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <FaPhone className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-black">Telefon</h3>
                <a href="tel:+48798412029" className="text-gray-700 hover:text-blue-600">
                  +48 798 412 029
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <FaLinkedin className="text-2xl text-blue-600" />
              <div>
                <h3 className="font-semibold text-black">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/aleksandra-trojnar-9a81ba334/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  linkedin.com/in/aleksandra-trojnar
                </a>
              </div>
            </div>
          </div>

          {/* Formularz */}
          <div className="pt-8 border-t border-gray-200">
            <h2 className="text-xl font-semibold mb-4 text-black">Wyślij wiadomość</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1">
                  Imię i nazwisko
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}