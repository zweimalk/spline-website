import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

interface ContactPersonProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  imageSrc: string;
  imageAlt?: string;
}

/**
 * ContactCard - Displays a single contact person's information
 */
const ContactCard = ({
  name,
  title,
  email,
  phone,
  imageSrc,
  imageAlt = `${name} profile picture`,
}: ContactPersonProps) => {
  return (
    <div className="flex items-center gap-6 rounded-xl p-4 md:p-6">
      <div className="h-36 w-24 shrink-0 overflow-hidden rounded-md">
        <Image src={imageSrc} alt={imageAlt} width={96} height={133} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="tracking-wide">{title}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center ">
              <EnvelopeIcon />
            </div>
            <Link href={`mailto:${email}`}>{email}</Link>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center ">
              <PhoneIcon />
            </div>
            <Link href={`tel:${phone}`}>{phone}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ContactPeople - Displays a grid of contact persons
 */
export const ContactPeople = () => {
  const contactPersons: ContactPersonProps[] = [
    {
      name: "Anna Owsińska",
      title: "HR Senior Recruiter",
      email: "anna.owsinska@spline.pl",
      phone: "+48 789 115 181",
      imageSrc: "/images/ania_owsinska.png",
    },
    {
      name: "Sylwia Gajewska",
      title: "Sales & Operations Director",
      email: "sylwia.gajewska@spline.pl",
      phone: "+48 451 599 338",
      imageSrc: "/images/sylwia_gajewska.png",
    },
  ];

  return (
    <div className="py-8">
      <div className="grid gap-6 md:grid-cols-2">
        {contactPersons.map((person) => (
          <ContactCard key={person.email} {...person} />
        ))}
      </div>
    </div>
  );
};
