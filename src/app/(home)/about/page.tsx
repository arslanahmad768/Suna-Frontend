import { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `About - ${siteConfig.name}`,
  description: 'Learn more about LixiChat and our technology',
};

export default function AboutPage() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About LixiChat</h1>

      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <div className='bg-card p-6 rounded-lg shadow-md border'>
          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            Our Technology
          </h2>
          <p className='mb-4'>
            LixiChat is an open-source autonomous AI
            agent framework licensed under the Apache 2.0 License.
          </p>
          <p>
            While we adapt and improve the open-source base, all rights remain
            with their respective authors.
          </p>
        </div>

        <div className='bg-card p-6 rounded-lg shadow-md border'>
          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            Our Mission
          </h2>
          <p className='mb-4'>
            LixiChat is designed to enhance productivity through AI-powered
            assistance for professional and educational tasks.
          </p>
          <p>
            We focus on research, summarization, and automation to help users
            work smarter.
          </p>
        </div>
      </div>

      <div className='bg-card p-6 rounded-lg shadow-md border'>
        <h2 className='text-2xl font-semibold mb-4 text-primary'>
          Company Information
        </h2>
        <div className='space-y-4'>
          <p>
            <strong>Company:</strong> HBS Management
          </p>
          <p>
            <strong>Location:</strong> PLACE LA LIBERTÉ ANGLE AV MY EL HASSAN ET
            AV MED V RES BERDAI IMM B APPT 2 GUELIZ MARRAKECH
          </p>
          <p>
            <strong>Email:</strong> contact@lixichat.com
          </p>
          <p>
            <strong>Founded:</strong> 2025
          </p>
        </div>
      </div>
    </div>
  );
}
