import Link from 'next/dist/client/link';
import React from 'react';
import Image from 'next/image';
import Team from 'assets/icons/Team.svg';
import Sprint from 'assets/icons/Sprint.svg';

const team = [
  {
    name: 'Teodor Wolski',
    role: 'Front-end developer & Leader',
    description: 'Lorem ipsum dolor sit',
    img: 'https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.6435-1/c0.18.200.200a/p200x200/186173524_1497571507248720_2353136923100118796_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9gEzuHg3gzwAX-78ve7&_nc_ht=scontent.fwaw7-1.fna&oh=dbfc4c293aa4e95849f35a84335df844&oe=61D1826D',
    socials: {
      github: 'https://github.com/TeodorWolski',
      twitter: null,
      facebook: 'https://www.facebook.com/profile.php?id=100009876557188',
      instagram: 'https://www.instagram.com/wolskiteodor/'
    }
  },
  {
    name: 'Jakub Michał Fedoszczak',
    role: 'Front-end developer',
    description:
      'Nastoletni pasjonata programowania, bezpieczeństwa w sieci i samorozwoju. Rozwijający się również w kierunku biznesu, zarządzania oraz automatyzacji.',
    img: 'https://avatars.githubusercontent.com/u/77537823?v=4',
    socials: {
      github: 'https://github.com/JakubLog',
      twitter: 'https://twitter.com/JFedoszczak',
      facebook: 'https://www.facebook.com/jakublogg',
      instagram: 'https://www.instagram.com/jakub_fedoszczak__/'
    }
  },
  {
    name: 'Kuba Junak',
    role: 'Marketing & SEO Manager',
    description: 'Lorem ipsum dolor sit',
    img: 'https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.6435-1/p200x200/86971366_560816111178711_639843044979376128_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=GrptFGgX_zwAX-ewT0A&_nc_ht=scontent.fwaw7-1.fna&oh=d20205c113448adc789fc02f6ad97ca5&oe=61D38181',
    socials: {
      github: null,
      twitter: null,
      facebook: 'https://www.facebook.com/Kubajunak.JJ',
      instagram: 'https://www.instagram.com/kuba__junak/'
    }
  },
  {
    name: 'Daniel Novyk ',
    role: 'Marketing Manager',
    description: 'Lorem ipsum dolor sit',
    img: 'https://scontent.fwaw7-1.fna.fbcdn.net/v/t39.30808-1/p200x200/230432367_1249529202171525_6067988580644517225_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=qo9R3jGWyEsAX_QI02Y&_nc_ht=scontent.fwaw7-1.fna&oh=e52f65465792efe2de39043f0d5ce5dd&oe=61B13102',
    socials: {
      github: null,
      twitter: null,
      facebook: 'https://www.facebook.com/daniel.novyk.1',
      instagram: 'https://www.instagram.com/daniel_zz_/'
    }
  },
  {
    name: 'Veronika Latala',
    role: 'Marketing Manager',
    description: 'Lorem ipsum dolor sit',
    img: 'https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=4MbBEWsUWU0AX8YCvUy&_nc_ht=scontent.fwaw7-1.fna&oh=5b207360ce8071f79890b403046e685c&oe=61D14C78',
    socials: {
      github: null,
      twitter: null,
      facebook: 'https://www.facebook.com/veronica.latala.1',
      instagram: null
    }
  }
];

const about = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 relative" style={{ minHeight: 'calc(100vh - 78px)' }}>
        <div className="bg-amber-dark">
          <img
            className="w-screen h-full object-cover object-top opacity-60"
            src="https://st2.depositphotos.com/1037987/5934/i/950/depositphotos_59345825-stock-photo-group-of-high-school-students.jpg"
            alt=""
          />
        </div>
        <div className="flex bg-gray-100 p-10">
          <div className="mb-auto mt-auto ">
            <h1 className="text-5xl md:text-6xl uppercase relative z-10">
              Schoola<span className="text-emerald-dark">.</span> Team
            </h1>
            <p className="font-semibold mb-5 text-xl md:text-2xl text-emerald-dark opacity-80 relative z-10">
              Pracujemy dla dobra naszych rówieśników
            </p>
            <p className="pr-10 md:pr-20 text-justify md:text-left relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis lacinia nibh. Integer sagittis, tortor eu lacinia feugiat, nisl
              velit placerat massa, nec suscipit orci turpis at metus. Duis mollis libero vitae magna cursus porta. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Aliquam et consectetur urna.
            </p>
            <div className="opacity-0 absolute right-8 bottom-8 md:opacity-50">
              <Image src={Sprint} width={600} height={500} alt={'Team SVG'} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen px-4 md:grid md:grid-cols-2 sm:px-6 lg:px-4 py-12 bg-amber-light relative">
        <div className="text-center pb-12 md:pl-10">
          <h2 className="text-base font-bold text-indigo-600 md:text-left">
            Chcemy razem zmienić świat na lepsze, w tym szkoły<span className="text-emerald-dark">.</span>
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 md:text-left">
            Oto nasz niesamowity zespół<span className="text-emerald-dark">.</span>
          </h1>
          <article>
            <p className="px-5 my-3 md:py-8 md:px-8 md:mt-6 text-justify md:leading-relaxed md:bg-white md:mr-10 md:border-emerald-dark md:border-l-4 text-lg relative z-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis lacinia nibh. Integer sagittis, tortor eu lacinia feugiat, nisl
              velit placerat massa, nec suscipit orci turpis at metus. Duis mollis libero vitae magna cursus porta. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Aliquam et consectetur urna. Sed est velit, ultrices eu rutrum eget, tristique
              sit amet dui. Morbi eu nunc vulputate dolor dignissim tincidunt. Proin et ligula porttitor, egestas ipsum quis, sagittis enim.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vulputate interdum turpis eu
              iaculis. Quisque orci felis, elementum non congue sed, pulvinar et ante. Nullam ligula nisi, bibendum vitae rutrum vitae, sagittis ac
              nulla. Proin pretium augue sit amet vestibulum eleifend. Curabitur non massa erat. Fusce dapibus massa sit amet nulla fermentum
              interdum.
            </p>
          </article>
          <div className="opacity-0 absolute left-10 bottom-8  md:opacity-50">
            <Image src={Team} width={600} height={500} alt={'Team SVG'} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 px-10 md:gap-8 md:px-0 md:pr-10">
          {team.map((person) => (
            <div
              tabIndex={1}
              className="w-full bg-amber-dark rounded-lg text-coolGray-light drop-shadow-lg md:opacity-90 md:transition-opacity hover:opacity-100 focus:opacity-100 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-2/5 h-80">
                <img className="object-center object-cover w-full h-full" src={person.img} alt={`${person.name}'s photo`} />
              </div>
              <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                <p className="text-xl text-gray-700 font-bold">{person.name}</p>
                <p className="text-base text-gray-400 font-normal">{person.role}</p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">{person.description}</p>
                <div className="flex justify-start space-x-2">
                  {person.socials.facebook && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <Link href={person.socials.facebook}>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </span>
                  )}
                  {person.socials.instagram && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <Link href={person.socials.instagram}>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153
                4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012
                2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772
                1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643
                0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0
                01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902
                4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2
                11.685 2h.63zm-.081 1.802h-.468c-2.456
                0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748
                1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058
                3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344
                1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207
                1.858-.344.466-.182.8-.398
                1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097
                3.097 0 00-.748-1.15 3.098 3.098 0
                00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110
                10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2
                1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </span>
                  )}
                  {person.socials.twitter && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <Link href={person.socials.twitter}>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </Link>
                    </span>
                  )}
                  {person.socials.github && (
                    <span tabIndex={1} className="cursor-pointer text-gray-500 opacity-70 transition-opacity hover:opacity-100">
                      <Link href={person.socials.github}>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            fill-rule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
                1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
                2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988
                1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
                1.705.115
                2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0
                3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0
                .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default about;