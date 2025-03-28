'use client';

import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { Button } from './button';
const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className='text-red-500 text-sm'>{field.state.meta.errors.join(', ')}</em>
      ) : null}
      {field.state.meta.isValidating ? <span className='text-zinc-500 text-sm'>Validating...</span> : null}
    </>
  );
};

export const ContactForm = () => {
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
        console.log('Form submitted:', values);
        form.reset();
      } catch (error: unknown) {
        console.error('Error submitting form:', error instanceof Error ? error.message : 'Unknown error');
      }
    },
  });

  return (
    <form
      className='flex flex-col space-y-6 mt-4'
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        void form.handleSubmit();
      }}
    >
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
                className='w-full border-b border-zinc-900 dark:border-zinc-50 bg-transparent pb-2 outline-none placeholder:text-zinc-500 focus:border-zinc-900 dark:focus:border-zinc-50'
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
                className='w-full border-b border-zinc-900 dark:border-zinc-50 bg-transparent pb-2 outline-none placeholder:text-zinc-500 focus:border-zinc-900 dark:focus:border-zinc-50'
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
                className='w-full border-b border-zinc-900 dark:border-zinc-50 bg-transparent pb-2 outline-none placeholder:text-zinc-500 focus:border-zinc-900 dark:focus:border-zinc-50'
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
                className='w-full border-b border-zinc-900 dark:border-zinc-50 bg-transparent pb-2 outline-none placeholder:text-zinc-500 focus:border-zinc-900 dark:focus:border-zinc-50 resize-none'
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
            <div className='flex items-start gap-2'>
              <input
                type='checkbox'
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
                onBlur={field.handleBlur}
                className='mt-1 h-4 w-4 rounded border-zinc-900'
              />
              <div className='flex flex-col gap-2'>
                <p className='text-sm text-zinc-600'>
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
            <Button
              color='dark/white'
              type='submit'
              disabled={!canSubmit}
              className='flex items-center justify-between'
            >
              {isSubmitting ? '...' : 'Send'}
              <div className='flex items-center justify-center w-6 h-6 ml-8'>
                <ArrowRightIcon className='font-bold' />
              </div>
            </Button>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
};
