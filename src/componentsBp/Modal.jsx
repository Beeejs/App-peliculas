import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ModalVideo({data}) {
  const [show, setShow] = useState(false);
  const IMG_PATH = 'https://image.tmdb.org/t/p/original';
    const {
    title,
    poster_path,
    videos,
  } = data;
  

  const findTrailer = () =>{
    return videos ? videos.results.find(video => video.type === 'Trailer') : null
  }


  return (
    <>
      {
        <div className='w-[500px] bg-[#1a1a1a] p-5 backdrop-opacity-1 cursor-pointer' onClick={() => setShow(true)}>
          <img className='w-[500px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]' src={IMG_PATH + poster_path} alt={`IMG-${title}`}/>
        </div>
      }

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size='lg'
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className='bg-redNt !border-b-[3px]' closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
            <h3 className='font-unbounded !font-extrabold text-white'>Trailer</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-[#010001] rounded-sm'> 
          <div className='flex justify-center items-center w-full'>
            {
              findTrailer() ? 
              <iframe className='w-full h-[400px]' src={`https://www.youtube.com/embed/${findTrailer().key}`} title='iframer-trailer'/>
              :
              <h2 className='font-montserrat text-lg text-white'>No se encuentra disponible! <i className="fa-regular fa-face-frown"></i></h2>
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalVideo