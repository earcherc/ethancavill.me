import Socials from './socials';
import Name from './name';

export default function Landing() {
  return (
    <div className="h-screen-60 flex flex-col justify-center text-center">
      <div className="flex flex-col flex-grow justify-center">
        <Name />
      </div>

      <Socials />
    </div>
  );
}
