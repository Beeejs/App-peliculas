import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoad() {
  return (
    <>
      <section className='flex justify-center items-center h-screen'>
        <div className='grid justify-center content-center text-center'>
        <Spinner animation="border" role="status" className='!w-[150px] !h-[150px] text-redNt'/>
        <span className='mt-3 text-whiteTnue font-montserrat text-lg'>Loading...</span>
        </div>
      </section>
    </>
  );
}

export default SpinnerLoad;