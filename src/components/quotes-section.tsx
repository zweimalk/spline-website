import daniel from '../../public/quotes-images/daniel.png';
import karol from '../../public/quotes-images/karol.png';
import piotr from '../../public/quotes-images/piotr.png';
import sylwia from '../../public/quotes-images/sylwia.png';
import { type Quote, QuotesSlider } from './quotes-slider';

const teamQuotes: Quote[] = [
  {
    id: 'piotr-wyderski',
    name: 'Piotr Wyderski',
    role: 'COO',
    quote:
      'Our strength lies in combining technical expertise with a flexible and collaborative approach, ensuring we deliver solutions that truly make a difference.',
    description:
      'With experience in operations and business management, Piotr specializes in optimizing processes, scaling organizations, and building efficient, high-performing teams.',
    imageSrc: piotr.src, // Placeholder - will be updated later
  },
  {
    id: 'daniel-rzeplinski',
    name: 'Daniel Rzepliński',
    role: 'CEO',
    quote:
      'At Spline, we foster a culture of trust and accountability, where every team member has the freedom to innovate and the support to grow.',
    description:
      'Having extensive leadership experience in engineering and business strategy, Daniel drives our vision, ensuring innovation, quality, and long-term value in every partnership.',
    imageSrc: daniel.src, // Placeholder - will be updated later
  },
  {
    id: 'sylwia-gajewska',
    name: 'Sylwia Gajewska',
    role: 'CBO',
    quote:
      'We build lasting partnerships based on trust, transparency, and a shared commitment to delivering excellence.',
    description:
      'An expert in sales strategy and client relations, Sylwia specializes in identifying business opportunities and delivering tailored solutions that meet the evolving needs of the market.',
    imageSrc: sylwia.src, // Placeholder - will be updated later
  },
  {
    id: 'karol-kominek',
    name: 'Karol Kominek',
    role: 'CTO',
    quote:
      'Strong security starts with a proactive approach, ensuring every solution is built with resilience, reliability, and industry-leading standards in mind.',
    description:
      'Passionate about technology and security, Karol combines deep technical expertise with a hands-on approach to ensure Spline delivers secure, high-performance solutions.',
    imageSrc: karol.src, // Placeholder - will be updated later
  },
];

export const QuotesSection = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-12 text-center'>Our Leadership Team</h2>
        <QuotesSlider quotes={teamQuotes} />
      </div>
    </section>
  );
};
