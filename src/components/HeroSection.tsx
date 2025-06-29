
import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; 
import { Shield, Zap, Award, Rocket } from 'lucide-react';
import ProfessionalAvatar from './ProfessionalAvatar';
import AnimatedTechStack from './AnimatedTechStack';
import ClientStats from './ClientStats';
import EnhancedCallToAction from './EnhancedCallToAction';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [init, setInit] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsClient(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particles loaded callback
  }, []);

  const particlesOptions: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repel",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repel: { distance: 120, duration: 0.6 },
          push: { quantity: 3 },
        },
      },
      particles: {
        color: { 
          value: ["#0ea5e9", "#8b5cf6", "#10b981", "#f59e0b"] 
        },
        links: {
          color: "#0ea5e9",
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 50,
        },
        opacity: { 
          value: { min: 0.2, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false
          }
        },
        shape: { 
          type: ["circle", "triangle", "star"]
        },
        size: { 
          value: { min: 1, max: 4 },
          animation: {
            enable: true,
            speed: 2,
            sync: false
          }
        },
      },
      detectRetina: true,
      background: {
        color: {
          value: 'transparent'
        }
      }
    }),
    []
  );

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50/80 via-white to-purple-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900/20 text-foreground relative overflow-hidden transition-all duration-700"
    >
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/20 via-transparent to-purple-100/20 dark:from-sky-900/10 dark:via-transparent dark:to-purple-900/10" />
      
      {/* Particles Background */}
      {isClient && init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particlesOptions}
          className="absolute top-0 left-0 w-full h-full z-0"
        />
      )}

      {/* Animated Tech Stack */}
      <AnimatedTechStack />

      {/* Main Content */}
      <div className="text-center m-3 animate-fade-in-up relative z-10 max-w-5xl mx-auto px-4">
        {/* Professional Avatar */}
        <ProfessionalAvatar />

        {/* Main Heading with enhanced typography */}
        <div className="mb-6">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-foreground leading-tight">
            <span className="block mb-2 bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 dark:from-white dark:via-sky-200 dark:to-white bg-clip-text text-transparent">
              {t('hero.greeting')}
            </span>
            <span 
              className="inline-block bg-gradient-to-r from-sky-500 via-purple-600 to-emerald-500 bg-clip-text text-transparent overflow-hidden whitespace-nowrap border-r-[0.15em] border-r-sky-500 animate-typing-name align-bottom"
            >
              {t('hero.name')}
            </span>
          </h1>
        </div>

        {/* Enhanced Subtitle */}
        <div className="mb-6">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-sky-600 to-purple-600 dark:from-sky-400 dark:to-purple-400 bg-clip-text text-transparent">
            {t('hero.title')}
          </p>
          <div className="flex justify-center items-center gap-2 text-lg md:text-xl text-muted-foreground">
            <span>•</span>
            <span>{t('hero.subtitle1')}</span>
            <span>•</span>
            <span>{t('hero.subtitle2')}</span>
            <span>•</span>
            <span>{t('hero.subtitle3')}</span>
          </div>
        </div>

        {/* Enhanced Description with better formatting */}
        <div className="mb-8 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl mb-4 text-muted-foreground leading-relaxed font-medium">
            {t('hero.description1')}
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80">
            {t('hero.description2')}
          </p>
        </div>

        {/* Client Stats */}
        <ClientStats />

        {/* Enhanced Call to Action */}
        <div className="mt-12">
          <EnhancedCallToAction />
        </div>

        {/* Enhanced Trust Indicators with professional developer icons */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <div className="inline-block px-6 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
            <p className="text-sm font-medium text-muted-foreground mb-3">{t('hero.trustedBy')}</p>
            <div className="flex justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm flex-wrap">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <Shield className="w-4 h-4" />
                <span className="font-semibold">{t('hero.secureCode')}</span>
              </div>
              <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400">
                <Zap className="w-4 h-4" />
                <span className="font-semibold">{t('hero.fastDelivery')}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Award className="w-4 h-4" />
                <span className="font-semibold">{t('hero.qualityFirst')}</span>
              </div>
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Rocket className="w-4 h-4" />
                <span className="font-semibold">{t('hero.scalableSolutions')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
