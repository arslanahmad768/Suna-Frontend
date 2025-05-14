import { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: 'Learn how LixiChat handles your data',
};

export default function PrivacyPage() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Privacy Policy</h1>
      <div className='bg-card p-6 rounded-lg shadow-md border'>
        <div className='prose dark:prose-invert max-w-none'>
          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            1. Information We Collect
          </h2>
          <ul className='list-disc pl-6 mb-8 space-y-2'>
            <li>
              <strong>Account Information:</strong> Name, email, and any billing
              data for premium services.
            </li>
            <li>
              <strong>Usage Data:</strong> Logs of interactions, prompts, and
              tool usage.
            </li>
            <li>
              <strong>Device Information:</strong> Browser type, IP address, and
              system metadata.
            </li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            2. How We Use Your Data
          </h2>
          <ul className='list-disc pl-6 mb-8 space-y-2'>
            <li>To provide intelligent and contextual responses.</li>
            <li>To maintain service performance and user experience.</li>
            <li>To inform you about new features or updates.</li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            3. Data Sharing
          </h2>
          <p className='mb-8'>
            We do not sell or rent your data. Some third-party tools (e.g.,
            Gumroad for payments) are used under strict privacy and
            confidentiality terms.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            4. Security
          </h2>
          <p className='mb-8'>
            We implement appropriate security controls to protect user data,
            including encrypted transmission and secure storage.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            5. Your Rights
          </h2>
          <p className='mb-4'>You have the right to:</p>
          <ul className='list-disc pl-6 mb-8 space-y-2'>
            <li>Access or delete your data.</li>
            <li>Request data corrections.</li>
            <li>Opt out of marketing or promotional messages.</li>
          </ul>
          <p className='mb-8'>
            For any such requests, contact us at{' '}
            <a href='mailto:contact@lixichat.com' className='text-primary'>
              contact@lixichat.com
            </a>
            .
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            6. Policy Updates
          </h2>
          <p>
            You will be notified via the Website in case of significant updates
            to this policy.
          </p>
        </div>
      </div>
    </div>
  );
}
