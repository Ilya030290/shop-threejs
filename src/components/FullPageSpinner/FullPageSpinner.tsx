import Spinner from '../../elements/spinner';

export default function FullPageSpinner() {
  return (
    <div className="w-full h-screen fixed z-10 top-0 flex flex-col items-center justify-center bg-white">
      <Spinner />
    </div>
  );
}
