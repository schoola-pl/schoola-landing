import MailchimpSubscribe, { EmailFormFields } from 'react-mailchimp-subscribe';
import NewsletterForm from 'components/molecules/NewsletterForm/NewsletterForm';

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = 'https://gmail.us20.list-manage.com/subscribe/post?u=37d42ea39057bd19a6e145ae5&amp;id=fe551fe5a1';

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status }) => {
        return <NewsletterForm onValidated={(formData: EmailFormFields) => subscribe(formData)} status={status} />;
      }}
    />
  );
};

export default NewsletterSubscribe;
