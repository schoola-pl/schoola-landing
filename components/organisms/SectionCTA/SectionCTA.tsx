import ConnectIcon from 'assets/icons/ConnectIcon.svg';
import Image from 'next/image';

const SectionCTA: React.FC = () => (
  <div className="grid grid-cols-2">
    <div className="relative top-52 left-12 col-span-1">
      <div className="flex flex-col items-start py-6 px-4">
        <h1 className="text-7xl py-6 font-extrabold tracking-tight">Lorem ipsum dolor sit amet</h1>
        <p className="text-2xl py-10 max-w-3xl">
          lorem ipsum dolor sit am lorem Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil omnis optio
          cupiditate ullam cupiditate ullam cupiditate ullam cupiditate ullam
        </p>
        <div className="mt-10  flex content-start">
          <div className="inline-flex rounded-md shadow">
            <button className="inline-flex items-center justify-center text-xl px-20 py-5 border border-transparent font-medium rounded-md text-emerald-dark hover:bg-emerald-dark transition-all hover:text-coolGray-white hover:border-emerald-dark">
              Get started
            </button>
          </div>
          <div className="ml-5 inline-flex rounded-md shadow">
            <button className="inline-flex text-coolGray-white relative items-center justify-center text-xl px-20 py-5 font-medium rounded-md bg-blue-default hover:bg-blue-light  transition-all">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="relative top-20 ml-20">
        <Image src={ConnectIcon} width={600} height={600} alt={'Connect people icon'} />
      </div>
    </div>
  </div>
);

export default SectionCTA;
