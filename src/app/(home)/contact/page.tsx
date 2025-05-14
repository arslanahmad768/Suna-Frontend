import { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `Contact - ${siteConfig.name}`,
  description: 'Get in touch with the LixiChat team',
};

export default function ContactPage() {
  return (
    <div className='container mx-auto px-4 py-8 max-w-4xl'>
      <h1 className='text-4xl font-bold mb-8 text-center'>Contact Us</h1>

      <div className='grid md:grid-cols-2 gap-8 mb-12'>
        <div className='bg-card p-6 rounded-lg shadow-md border'>
          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            Get in Touch
          </h2>
          <form className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-1'>
                Name
              </label>
              <input
                type='text'
                id='name'
                className='w-full px-4 py-2 border rounded-lg bg-background'
                placeholder='Your name'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 border rounded-lg bg-background'
                placeholder='your@email.com'
              />
            </div>
            <div>
              <label htmlFor='message' className='block mb-1'>
                Message
              </label>
              <textarea
                id='message'
                rows={5}
                className='w-full px-4 py-2 border rounded-lg bg-background'
                placeholder='Your message...'
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-lg transition'
            >
              Send Message
            </button>
          </form>
        </div>

        <div className='bg-card p-6 rounded-lg shadow-md border'>
          <h2 className='text-2xl font-semibold mb-4 text-primary'>
            Contact Information
          </h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-medium mb-2'>Email</h3>
              <p>contact@lixichat.com</p>
            </div>
            <div>
              <h3 className='font-medium mb-2'>Address</h3>
              <p>
                PLACE LA LIBERTÉ ANGLE AV MY EL HASSAN ET AV MED V RES BERDAI
                IMM B APPT 2 GUELIZ MARRAKECH
              </p>
            </div>
            <div>
              <h3 className='font-medium mb-2'>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM (GMT)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
