import React from 'react';
import { Crown, Sparkles } from 'lucide-react';
import { ReasonCard } from './components/ReasonCard';
import { SigmaGame } from './components/SigmaGame';
import { reasons } from './data/reasons';

function App() {
  // Replace this URL with your Adrian image URL
  const adrianImageUrl = "https://i.imgur.com/IJLEYw5.jpeg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533134486753-c833f0ed4866?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-7xl font-bold text-white mb-6 animate-fade-in">
            Why Adrian is 
            <span className="line-through text-red-500"> Not </span>
             a Sigma
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            An extensive analysis of why our beloved Adrian falls short of the sigma grindset
          </p>
          <SigmaGame adrianImageUrl={adrianImageUrl} />
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>

        <section className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
            <Crown className="text-yellow-400" />
            The Final Verdict
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300">
              While Adrian might excel at being a regular human being, the sigma status
              remains eternally out of reach. But hey, that's probably for the best -
              who wants to be a sigma when you can just be yourself?
            </p>
          </div>
        </section>

        <div className="text-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 
              transition-colors rounded-full text-white font-semibold"
          >
            <Sparkles size={20} />
            Back to Reality
          </button>
        </div>
      </main>

      <footer className="bg-black/20 backdrop-blur-sm py-6 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>Created with rage and absolutely infinite sigma energy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;