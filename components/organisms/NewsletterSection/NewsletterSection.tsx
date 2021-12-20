import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import NewsletterForm from 'components/molecules/NewsletterForm/NewsletterForm';
import React from 'react';

const NewsletterSubscribe = () => {
  return (
    <a target="_blank" rel="noopener noreferrer" href="https://eepurl.com/hPCZ4f">
      <button className="font-medium px-10 py-2 ml-3 md:px-12 rounded-md bg-blue-default transition-all text-coolGray-white hover:bg-blue-light">
        Zapisz się na nasz newsletter!
      </button>
    </a>
  );
};

export default NewsletterSubscribe;

{
  /* <MailchimpSubscribe
url={MAILCHIMP_URL}
render={({ subscribe, status }) => {
  return (
    <NewsletterForm withoutDescription={withoutDescription} onValidated={(formData: EmailFormFields) => subscribe(formData)} status={status} />
  );
}}
/>
);

const MAILCHIMP_URL = 'https://gmail.us20.list-manage.com/subscribe/post?u=37d42ea39057bd19a6e145ae5&amp;id=fe551fe5a1';


*/
}
