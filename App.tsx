
import React, { useState } from 'react';
import Header from './components/Header';
import VoiceAgent from './components/VoiceAgent';
import ServiceGrid from './components/ServiceGrid';
import ProcessGuides from './components/ProcessGuides';
import WelfareDetails from './components/WelfareDetails';
import { UI_TEXT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');

  const t = UI_TEXT[language];
  const isRtl = language === 'ar' || language === 'ur';

  // Placeholder for missing/empty diplomat photos
  const EMBLEM_URL = "https://upload.wikimedia.org/wikipedia/commons/e/ef/State_emblem_of_Pakistan.svg";

  return (
    <div className={`min-h-screen pb-20 selection:bg-green-200 selection:text-green-900 ${isRtl ? 'arabic-font text-right' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Background & Heritage Infrastructure */}
      <div className="bg-fixed-layer"></div>
      <div className="heritage-overlay">
        <img 
          src="https://images.unsplash.com/photo-1572508589584-94d778209eb9?q=80&w=1000&auto=format&fit=crop" 
          alt="Badshahi Mosque" 
          className="heritage-img top-[5%] left-[-5%] opacity-30" 
        />
        <img 
          src="https://images.unsplash.com/photo-1627834114702-849506721516?q=80&w=1000&auto=format&fit=crop" 
          alt="Lahore Fort" 
          className="heritage-img bottom-[10%] right-[-5%] opacity-20" 
        />
        <img 
          src="https://images.unsplash.com/photo-1624388439600-4786435c24b9?q=80&w=1000&auto=format&fit=crop" 
          alt="Faisal Mosque" 
          className="heritage-img top-[40%] right-[10%] w-[30%] opacity-10" 
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Header language={language} onLanguageChange={setLanguage} />
        
        <main className="mt-8 space-y-20">
          {/* Hero Section */}
          <section className="text-center py-12">
            <div className="inline-block mb-8 animate-pulse">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border-2 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.4)]">
                     <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" 
                        alt="Pakistan Flag Logo" 
                        className="w-16 h-16 rounded-full object-cover"
                    />
                </div>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 text-white hero-text-shadow tracking-tighter">
              {t.title}
            </h1>
            <p className="text-xl md:text-3xl text-green-100 font-bold max-w-4xl mx-auto opacity-95 leading-tight">
              {t.subtitle}
            </p>
          </section>

          {/* Leadership Section - Circular Portraits */}
          <section className="py-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-start">
                
                {/* 1. Quaid-e-Azam (Hat Portrait) */}
                <div className="flex flex-col items-center group">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gold-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] p-1 shadow-2xl relative z-10 overflow-hidden bg-white">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Jinnah_official.jpg/800px-Jinnah_official.jpg" 
                        alt="Quaid-e-Azam Muhammad Ali Jinnah" 
                        className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <h4 className="text-white font-black text-sm md:text-base text-center tracking-tight mb-0.5">Quaid-e-Azam</h4>
                  <p className="text-emerald-400 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.1em] opacity-80">Founder of Pakistan</p>
                </div>

                {/* 2. Nawaz Sharif (Waving Portrait) */}
                <div className="flex flex-col items-center group">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gold-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] p-1 shadow-2xl relative z-10 overflow-hidden bg-white">
                      <img 
                        src="https://pbs.twimg.com/profile_images/1715364177309069312/R-e0_9fL_400x400.jpg" 
                        alt="Mian Muhammad Nawaz Sharif Waving" 
                        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h4 className="text-white font-black text-sm md:text-base text-center tracking-tight mb-0.5">Nawaz Sharif</h4>
                  <p className="text-emerald-400 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.1em] opacity-80">PML-N Leader</p>
                </div>

                {/* 3. Shehbaz Sharif (Hand on Heart Portrait) */}
                <div className="flex flex-col items-center group">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gold-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] p-1 shadow-2xl relative z-10 overflow-hidden bg-white">
                      <img 
                        src="https://www.pmo.gov.pk/assets/images/pm-profile.jpg" 
                        alt="Prime Minister Shehbaz Sharif" 
                        className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/e/e9/Shahbaz_Sharif_official_portrait.jpg" }}
                      />
                    </div>
                  </div>
                  <h4 className="text-white font-black text-sm md:text-base text-center tracking-tight mb-0.5">Shehbaz Sharif</h4>
                  <p className="text-emerald-400 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.1em] opacity-80">Prime Minister</p>
                </div>

                {/* 4. Ambassador (Emblem Placeholder) */}
                <div className="flex flex-col items-center group">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gold-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] p-3 shadow-2xl relative z-10 overflow-hidden bg-white flex items-center justify-center">
                      <img 
                        src={EMBLEM_URL}
                        alt="Ambassador Ahmad Farooq" 
                        className="w-4/5 h-4/5 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                  <h4 className="text-white font-black text-sm md:text-base text-center tracking-tight mb-0.5">Ahmad Farooq</h4>
                  <p className="text-emerald-400 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.1em] opacity-80">Ambassador to KSA</p>
                </div>

                {/* 5. Consul General (Emblem Placeholder) */}
                <div className="flex flex-col items-center group col-span-2 md:col-span-1">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gold-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#D4AF37] p-3 shadow-2xl relative z-10 overflow-hidden bg-white flex items-center justify-center">
                      <img 
                        src={EMBLEM_URL}
                        alt="Consul General Khalid Majid" 
                        className="w-4/5 h-4/5 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                  <h4 className="text-white font-black text-sm md:text-base text-center tracking-tight mb-0.5">Khalid Majid</h4>
                  <p className="text-emerald-400 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.1em] opacity-80">Consul General Jeddah</p>
                </div>

              </div>
            </div>
          </section>

          {/* Voice Interface */}
          <section id="voice-assistant" className="scroll-mt-24 max-w-3xl mx-auto">
            <div className="glass-card rounded-[4rem] p-2 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                <VoiceAgent language={language} />
            </div>
          </section>

          {/* Contact Bar */}
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: '📍', text: t.location, color: 'border-emerald-500/30' },
              { icon: '📞', text: t.contact, color: 'border-gold-accent/30' },
              { icon: '⏰', text: t.hours, color: 'border-emerald-500/30' }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white/5 backdrop-blur-2xl px-8 py-5 rounded-[2rem] shadow-2xl flex items-center space-x-4 border ${item.color} hover:bg-white/10 transition-all duration-300`}>
                <span className="text-3xl">{item.icon}</span>
                <span className="text-white font-black text-sm tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <section className="space-y-12 bg-black/30 backdrop-blur-md p-12 rounded-[5rem] border border-white/10 shadow-inner">
            <h2 className="text-5xl font-black text-white flex items-center tracking-tighter">
              <span className={`inline-block w-4 h-14 bg-emerald-500 ${isRtl ? 'ml-6' : 'mr-6'} rounded-full shadow-[0_0_30px_rgba(16,185,129,0.6)]`}></span>
              {t.servicesTitle}
            </h2>
            <ServiceGrid language={language} />
          </section>

          {/* Welfare & Procedures */}
          <div className="grid grid-cols-1 gap-20">
            <section className="space-y-12">
              <h2 className="text-5xl font-black text-white flex items-center tracking-tighter">
                <span className={`inline-block w-4 h-14 bg-yellow-500 ${isRtl ? 'ml-6' : 'mr-6'} rounded-full shadow-[0_0_30px_rgba(234,179,8,0.6)]`}></span>
                {t.welfareTitle}
              </h2>
              <WelfareDetails language={language} />
            </section>

            <section className="space-y-12">
              <h2 className="text-5xl font-black text-white flex items-center tracking-tighter">
                <span className={`inline-block w-4 h-14 bg-blue-500 ${isRtl ? 'ml-6' : 'mr-6'} rounded-full shadow-[0_0_30px_rgba(59,130,246,0.6)]`}></span>
                {t.howToTitle}
              </h2>
              <ProcessGuides language={language} />
            </section>
          </div>
        </main>
      </div>

      <footer className="mt-40 py-20 bg-black/60 backdrop-blur-3xl text-gray-300 text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/State_emblem_of_Pakistan.svg" 
                alt="Pakistan Emblem" 
                className="h-16 w-auto opacity-70 mb-8 filter brightness-0 invert"
            />
            <p className="font-black text-lg tracking-tight">© {new Date().getFullYear()} Consulate General of Pakistan, Jeddah</p>
            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-emerald-500 font-black opacity-80">Official AI Voice Service • Ministry of Foreign Affairs</p>
            
            <div className="mt-12 flex gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" className="h-6" alt="PK" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" className="h-6" alt="KSA" />
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
