import ConnectIcon from 'assets/icons/ConnectIcon.svg';
import Image from 'next/image';

const SectionCTA: React.FC = () => (
  <div className="h-full flex items-center justify-center flex-col-reverse md:flex-row px-5 md:px-3">
    <div className="flex flex-col items-start py-10 px-4 md:py-20 lg:py-26">
      <h1 className="text-5xl md:text-6xl mb-8 font-extrabold tracking-tight xl:text-7xl 2xl:mb-20">Lorem ipsum dolor sit amet</h1>
      <p className="text-lg md:text-xl 2xl:text-2xl max-w-3xl text-justify md:text-left">
        lorem ipsum dolor sit am lorem Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil omnis optio
        cupiditate ullam cupiditate ullam cupiditate ullam cupiditate ullam
      </p>
      <div className="mt-8 md:mt-10 2xl:mt-20 flex flex-col md:flex-row content-start w-full md:w-auto">
        <div className="inline-flex rounded-md shadow">
          <button className="inline-flex items-center w-full justify-center text-m px-10 py-5 sm:px-16 md:px-12 2xl:px-20 border border-transparent xl:text-xl font-medium rounded-md text-emerald-dark hover:bg-emerald-dark transition-all hover:text-coolGray-white hover:border-emerald-dark">
            Get started
          </button>
        </div>
        <div className="mt-4 md:mt-0 md:ml-5 inline-flex rounded-md shadow">
          <button className="inline-flex text-coolGray-white relative w-full items-center justify-center text-m px-10 py-5 sm:px-16 md:px-12 2xl:px-20 xl:text-xl  font-medium rounded-md bg-blue-default hover:bg-blue-light  transition-all">
            Learn more
          </button>
        </div>
      </div>
    </div>
    <div className="md:ml-10">
      <Image src={ConnectIcon} width={600} height={600} alt={'Connect people icon'} />
    </div>
  </div>
);

export default SectionCTA;

//xl
// <div className="h-full flex items-center justify-center flex-col-reverse md:flex-row px-5 md:px-3">
//   <div className="flex flex-col items-start py-10 px-4">
//     <h1 className="text-7xl mb-8 font-extrabold tracking-tight">Lorem ipsum dolor sit amet</h1>
//     <p className="text-2xl max-w-3xl">
//       lorem ipsum dolor sit am lorem Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil omnis optio
//       cupiditate ullam cupiditate ullam cupiditate ullam cupiditate ullam
//     </p>
//     <div className="mt-10  flex content-start">
//       <div className="inline-flex rounded-md shadow">
//         <button className="inline-flex items-center justify-center text-xl px-20 py-5 border border-transparent font-medium rounded-md text-emerald-dark hover:bg-emerald-dark transition-all hover:text-coolGray-white hover:border-emerald-dark">
//           Get started
//         </button>
//       </div>
//       <div className="ml-5 inline-flex rounded-md shadow">
//         <button className="inline-flex text-coolGray-white relative items-center justify-center text-xl px-20 py-5 font-medium rounded-md bg-blue-default hover:bg-blue-light  transition-all">
//           Learn more
//         </button>
//       </div>
//     </div>
//   </div>
//   <div className="md:ml-10">
//     <Image src={ConnectIcon} width={600} height={600} alt={'Connect people icon'} />
//   </div>
// </div>;
