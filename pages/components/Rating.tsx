import Button from './Button';
import Image from 'next/image';
import { Overpass } from 'next/font/google';

const overpass = Overpass({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-overpass',
});

const Rating = () => {
  return (
    <form className="w-96 h-98 p-9 bg-gradient-to-r from-slate-900 to-slate-700 text-left rounded-lg flex flex-col">
      <div>
        <div className="bg-gray-800 w-12 h-12 rounded-full flex flex-col justify-center align-middle pl-4">
          <Image
            src="/images/icon-star.svg"
            alt="star"
            width={16}
            height={16}
          />
        </div>
      </div>
      <h1 className={`text-3xl leading-loose ${overpass.variable}`}>
        How did we do?
      </h1>
      <p className="leading-relaxed text-base text-gray-400  ">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="py-8">
        <Button number={1} />
        <Button number={2} />
        <Button number={3} />
        <Button number={4} />
        <Button number={5} />
      </div>
      <button className=" py-3 bg-orange-600 rounded-full text-base tracking-widest hover:bg-white hover:text-orange-600">
        SUBMIT
      </button>
    </form>
  );
};

export default Rating;
