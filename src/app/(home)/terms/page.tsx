import { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `Terms of Service - ${siteConfig.name}`,
  description: 'LixiChat terms and conditions',
};

export default function TermsPage() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Terms of Service</h1>
      <div className='bg-card p-6 rounded-lg shadow-md border'>
        <div className='prose dark:prose-invert max-w-none'>
          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            1. About Us
          </h2>
          <p className='mb-8'>
            LixiChat is operated by HBS Management, a company registered in
            Marrakech, Morocco. Address: PLACE LA LIBERTÉ ANGLE AV MY EL HASSAN
            ET AV MED V RES BERDAI IMM B APPT 2 GUELIZ MARRAKECH Email:
            contact@lixichat.com
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            2. Use of Services
          </h2>
          <ul className='list-disc pl-6 mb-8 space-y-2'>
            <li>You must be at least 18 years old to use LixiChat.</li>
            <li>
              You agree to use our services for lawful purposes and in
              compliance with all applicable laws.
            </li>
            <li>
              LixiChat is intended for professional and educational tasks,
              including research, summarization, and automation.
            </li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            3. Technology Notice
          </h2>
          <p className='mb-8'>
            LixiChat is autonomous AI agent
            framework licensed under the Apache 2.0 License. While we adapt and
            improve the open-source base, all rights remain with their
            respective authors.
          </p>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            4. User Accounts
          </h2>
          <ul className='list-disc pl-6 mb-8 space-y-2'>
            <li>
              You are responsible for maintaining the confidentiality of your
              login credentials.
            </li>
            <li>
              LixiChat reserves the right to suspend accounts for misuse, abuse,
              or violations of these Terms.
            </li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            5. Intellectual Property
          </h2>
          <ul className='list-disc pl-6 mb-8 space-y-2'>
            <li>
              All branding, original prompts, and SaaS functionality are the
              intellectual property of HBS Management or its licensors.
            </li>
            <li>
              Users may not resell, replicate, or distribute the service without
              prior written consent.
            </li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            6. Limitations of Liability
          </h2>
          <p className='mb-8'>
            LixiChat is provided "as is," without warranties of any kind. We are
            not liable for:
          </p>
          <ul className='list-disc pl-6 mb-8 space-y-2'>
            <li>Errors in outputs or generated responses.</li>
            <li>
              Any business, academic, or legal consequences from relying on
              LixiChat's responses.
            </li>
          </ul>

          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            7. Changes to Terms
          </h2>
          <p>
            We may update these Terms from time to time. Significant changes
            will be announced directly on the Website.
          </p>
        </div>
      </div>
    </div>
  );
}
