import Hero from '@/components/shared/hero/Hero';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <main className="mt-[60px] ">
      <Hero />
    </main>
  );
}
