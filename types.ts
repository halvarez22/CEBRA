import type { ComponentType, SVGProps } from 'react';

export interface Service {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: string;
  title: string;
  description: string;
}

export interface Insight {
  image: string;
  category: string;
  title:string;
}

export interface HeroCard {
  title: string;
  description: string;
}