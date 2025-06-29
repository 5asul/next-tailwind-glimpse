
import React, { useState, useEffect } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';

interface AvatarConfig {
  show_orbital_elements: boolean;
  orbital_speed_1: number;
  orbital_speed_2: number;
  show_floating_particles: boolean;
  show_animated_border: boolean;
  avatar_url?: string;
}

const ProfessionalAvatar = () => {
  const [config, setConfig] = useState<AvatarConfig>({
    show_orbital_elements: true,
    orbital_speed_1: 20,
    orbital_speed_2: 15,
    show_floating_particles: true,
    show_animated_border: true
  });

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const { data, error } = await supabase
          .from('avatar_config')
          .select('*')
          .single();

        if (data && !error) {
          setConfig({
            show_orbital_elements: data.show_orbital_elements,
            orbital_speed_1: data.orbital_speed_1,
            orbital_speed_2: data.orbital_speed_2,
            show_floating_particles: data.show_floating_particles,
            show_animated_border: data.show_animated_border,
            avatar_url: data.avatar_url
          });
        }
      } catch (error) {
        console.error('Error fetching avatar config:', error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <div className="relative mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
      <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40">
        {/* Enhanced Glassmorphism container with gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 dark:from-white/10 dark:via-white/5 dark:to-white/2 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl" />
        
        {/* Multi-layered animated border */}
        {config.show_animated_border && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 via-purple-500 to-emerald-400 p-1 animate-spin" style={{ animationDuration: '4s' }}>
            <div className="w-full h-full rounded-full bg-background/90 backdrop-blur-sm" />
          </div>
        )}
        
        {/* Inner glow effect */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-sky-200/20 to-purple-200/20 dark:from-sky-400/10 dark:to-purple-400/10" />
        
        {/* Avatar */}
        <div className="absolute inset-3">
          <Avatar className="w-full h-full shadow-inner">
            <AvatarImage 
              src={config.avatar_url || "/placeholder.svg"} 
              alt="Ahmed Mubarak"
              className="object-cover"
            />
            <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-sky-400 to-purple-600 text-white">
              AM
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Enhanced status indicator */}
        <div className="absolute -bottom-2 -right-2">
          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg animate-pulse border-2 border-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-white rounded-full animate-ping" />
              Available for Hire
            </div>
          </Badge>
        </div>

        {/* Enhanced floating particles with different colors */}
        {config.show_floating_particles && (
          <>
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-sky-400 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-3 -left-1 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-1 -right-2 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
          </>
        )}
        
        {/* Orbital elements */}
        {config.show_orbital_elements && (
          <>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: `${config.orbital_speed_1}s` }}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-sky-300 rounded-full opacity-60" />
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: `${config.orbital_speed_2}s`, animationDirection: 'reverse' }}>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-purple-300 rounded-full opacity-60" />
            </div>
          </>
        )}
      </div>

      {/* Professional title with enhanced styling */}
      <div className="text-center mt-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <div className="inline-block px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-full border border-white/20">
          <p className="text-sm font-medium text-muted-foreground">
            Crafting Digital Excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalAvatar;
