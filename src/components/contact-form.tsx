'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className='text-red-500 text-sm'>{field.state.meta.errors.join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? (
        <span className='text-gray-3 dark:text-gray-1 text-sm'>Validating...</span>
      ) : null}
    </>
  );
};

export const ContactForm = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const form = useForm({
    defaultValues: {
      nameAndSurname: '',
      phoneNumber: '',
      email: '',
      message: '',
      gdprConsent: false,
    },
    onSubmit: async (values) => {
      try {
        if (!captchaValue) {
          throw new Error('Please complete the captcha');
        }

        // Include captcha token in your form submission
        console.log('Form submitted:', { ...values, captchaToken: captchaValue });
        setCaptchaValue(null);
        setShowCaptcha(false);
        form.reset();
      } catch (error: unknown) {
        console.error('Error submitting form:', error instanceof Error ? error.message : 'Unknown error');
      }
    },
  });

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Check if form is valid before showing captcha
    if (form.state.canSubmit) {
      setShowCaptcha(true);
    } else {
      void form.handleSubmit();
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    if (value) {
      void form.handleSubmit();
    }
  };

  return (
    <form className='flex flex-col space-y-6 mt-4' onSubmit={handleInitialSubmit}>
      <div className='space-y-4'>
        <form.Field
          name='nameAndSurname'
          validators={{
            onSubmit: ({ value }) =>
              !value ? 'Name is required' : value.length < 2 ? 'Name must be at least 2 characters' : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type='text'
                placeholder='Name and surname'
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className='w-full border-b border-gray-2 dark:border-gray-5 bg-transparent pb-2 outline-none placeholder:text-gray-4 dark:placeholder:text-gray-3 focus:border-gray-2 dark:focus:border-gray-5'
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name='phoneNumber'
          validators={{
            onSubmit: ({ value }) =>
              !value
                ? 'Phone number is required'
                : !/^\+\d{1,4}\s?\d{4,14}$/.test(value)
                  ? 'Invalid phone number format (e.g. +48 781395604)'
                  : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type='tel'
                placeholder='Phone number (e.g. +48 781395604)'
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className='w-full border-b border-gray-2 dark:border-gray-5 bg-transparent pb-2 outline-none placeholder:text-gray-4 dark:placeholder:text-gray-3 focus:border-gray-2 dark:focus:border-gray-5'
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name='email'
          validators={{
            onSubmit: ({ value }) =>
              !value
                ? 'Email is required'
                : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                  ? 'Invalid email address'
                  : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type='email'
                placeholder='E-mail'
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className='w-full border-b border-gray-2 dark:border-gray-5 bg-transparent pb-2 outline-none placeholder:text-gray-4 dark:placeholder:text-gray-3 focus:border-gray-2 dark:focus:border-gray-5'
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name='message'
          validators={{
            onSubmit: ({ value }) =>
              !value ? 'Message is required' : value.length < 10 ? 'Message must be at least 10 characters' : undefined,
          }}
        >
          {(field) => (
            <div>
              <textarea
                placeholder='Message'
                rows={8}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className='w-full border-b border-gray-2 dark:border-gray-5 bg-transparent pb-2 outline-none placeholder:text-gray-4 dark:placeholder:text-gray-3 focus:border-gray-2 dark:focus:border-gray-5 resize-none'
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name='gdprConsent'
          validators={{
            onSubmit: ({ value }) => (!value ? 'You must accept the GDPR consent' : undefined),
          }}
        >
          {(field) => (
            <div className='flex items-start gap-10 border-b border-gray-2 dark:border-gray-5'>
              <input
                type='checkbox'
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
                onBlur={field.handleBlur}
                className='mt-1 h-4 w-4 rounded border-gray-2 dark:border-gray-5'
              />
              <div className='flex flex-col gap-2  pb-6'>
                <p className='text-xs text-gray-5 dark:text-gray-1 text-left'>
                  I confirm that I have been provided with the following information regarding the processing of
                  personal data pursuant to Art. 13 of Regulation 2016/679 of the European Parliament and of the EU
                  Council of 27/04/2016 on the protection of natural persons with regard to the processing of personal
                  data and on the free movement of such data, and repealing Directive 95/46/EC, hereinafter referred to
                  as &quot;GDPR&quot;
                </p>
                <FieldInfo field={field} />
              </div>
            </div>
          )}
        </form.Field>

        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <div className='flex flex-col items-start gap-4'>
              {showCaptcha && (
                <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} onChange={handleCaptchaChange} />
              )}

              <button
                disabled={!canSubmit}
                className='cursor-pointer mt-8 md:mt-10 flex items-center gap-x-4 bg-foreground text-background px-5 py-3 xl:px-4 xl:py-2 rounded-lg tracking-wider leading-[150%] xl:text-[15px] font-semibold'
                onClick={() => {
                  document.getElementById('contact-card')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {isSubmitting ? '...' : 'Send'}
                <div className='flex items-center justify-center w-6 h-6 xl:w-7 xl:h-7 ml-2'>
                  <ArrowRightIcon className='font-bold' />
                </div>
              </button>
            </div>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
};
