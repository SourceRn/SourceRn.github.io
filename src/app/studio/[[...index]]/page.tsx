'use client';
import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity/sanity.config';
import { notFound } from 'next/navigation';

export default function StudioPage() {
  if (process.env.NODE_ENV === 'production') return notFound(); // 404 en prod
  return <NextStudio config={config} />;
}
