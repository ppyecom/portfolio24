import AboutLetters from '@/components/about/AboutLetters';
import Presentattion from '@/components/presentation/Presentattion';


export default function Home() {
  return (
    <>
      <div className='page-content'>
        <div className='page-content hero'></div>
        <Presentattion />
        <AboutLetters />
    </div>
    </>
  );
}
