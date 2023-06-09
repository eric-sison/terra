'use client';

import dynamic from 'next/dynamic';

export const MapClient = dynamic(
  () => import('@terra/components/mapping/TerraMap').then((component) => component.TerraMap),
  { ssr: false }
);
