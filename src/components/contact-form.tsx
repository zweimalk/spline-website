"use client";

import { AnyFieldApi, useForm } from "@tanstack/react-form";

// interface ContactFormData {
//   nameAndSurname: string;
//   phoneNumber: string;
//   email: string;
//   message: string;
//   gdprConsent: boolean;
// }

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-red-500 text-sm">{field.state.meta.errors.join(", ")}</em>
      ) : null}
      {field.state.meta.isValidating ? <span className="text-gray-500 text-sm">Validating...</span> : null}
    </>
  );
};

export const ContactForm = () => {
  const form = useForm({
    defaultValues: {
      nameAndSurname: "",
      phoneNumber: "",
      email: "",
      message: "",
      gdprConsent: false,
    },
    onSubmit: async (values) => {
      try {
        console.log("Form submitted:", values);
      } catch (error: unknown) {
        console.error("Error submitting form:", error instanceof Error ? error.message : "Unknown error");
      }
    },
  });

  return (
    <form className="flex flex-col space-y-6">
      <div className="space-y-4">
        <form.Field
          name="nameAndSurname"
          validators={{
            onChange: ({ value }) =>
              !value ? "Name is required" : value.length < 2 ? "Name must be at least 2 characters" : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type="text"
                placeholder="Name and surname"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="w-full border-b border-gray-300 bg-transparent pb-2 outline-none placeholder:text-gray-500 focus:border-gray-900"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name="phoneNumber"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Phone number is required"
                : !/^\+\d{1,4}\s?\d{4,14}$/.test(value)
                ? "Invalid phone number format (e.g. +48 781395604)"
                : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type="tel"
                placeholder="Phone number (e.g. +48 781395604)"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="w-full border-b border-gray-300 bg-transparent pb-2 outline-none placeholder:text-gray-500 focus:border-gray-900"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Email is required"
                : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                ? "Invalid email address"
                : undefined,
          }}
        >
          {(field) => (
            <div>
              <input
                type="email"
                placeholder="E-mail"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="w-full border-b border-gray-300 bg-transparent pb-2 outline-none placeholder:text-gray-500 focus:border-gray-900"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onChange: ({ value }) =>
              !value ? "Message is required" : value.length < 10 ? "Message must be at least 10 characters" : undefined,
          }}
        >
          {(field) => (
            <div>
              <textarea
                placeholder="Message"
                rows={6}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                className="w-full border-b border-gray-300 bg-transparent pb-2 outline-none placeholder:text-gray-500 focus:border-gray-900"
              />
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Field
          name="gdprConsent"
          validators={{
            onChange: ({ value }) => (!value ? "You must accept the GDPR consent" : undefined),
          }}
        >
          {(field) => (
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                checked={field.state.value}
                onChange={(e) => field.handleChange(e.target.checked)}
                onBlur={field.handleBlur}
                className="mt-1 h-4 w-4 rounded border-gray-300"
              />
              <p className="text-sm text-gray-600">
                I confirm that I have been provided with the following information regarding the processing of personal
                data pursuant to Art. 13 of Regulation 2016/679 of the European Parliament and of the EU Council of
                27/04/2016 on the protection of natural persons with regard to the processing of personal data and on
                the free movement of such data, and repealing Directive 95/46/EC, hereinafter referred to as
                &quot;GDPR&quot;
              </p>
              <FieldInfo field={field} />
            </div>
          )}
        </form.Field>

        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="flex w-24 items-center justify-between rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
            >
              {isSubmitting ? "..." : "Send"}
              <span className="ml-2">→</span>
            </button>
          )}
        </form.Subscribe>
      </div>
    </form>
  );
};
