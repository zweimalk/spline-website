import type * as React from 'react';
import { SplineLogo } from '../icons';

interface EmailTemplateProps {
  nameAndSurname: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nameAndSurname,
  phoneNumber,
  email,
  message,
}) => (
  <div>
    <div className='flex justify-center items-center'>
      <SplineLogo className='w-10 h-10' />
    </div>
    <h1>Kontakt z formularza</h1>
    <p>Imię i nazwisko: {nameAndSurname}</p>
    <p>Telefon: {phoneNumber}</p>
    <p>Email: {email}</p>
    <p>Wiadomość: {message}</p>
  </div>
);
