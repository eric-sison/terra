'use client';

import dynamic from 'next/dynamic';

const MapClient = dynamic(
  () => import('@terra/components/TerraMap').then((component) => component.TerraMap),
  { ssr: false }
);

export default function Index() {
  return (
    <div className="h-screen w-screen">
      <MapClient />
    </div>
  );
}
