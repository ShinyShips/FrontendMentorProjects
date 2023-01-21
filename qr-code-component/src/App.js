import "./index.css";

function App() {
  return (
    <div className='w-screen h-[100%] bg-[#D6E2F0]'>
      <div className='flex w-full h-full justify-center items-center'>
        <div className="relative h-fit w-fit max-h-fit min-w-min max-w-[352px] bg-white rounded-3xl font-Outfit drop-shadow-sm">
          <div>
            <img src='/images/image-qr-code.png' alt='qrCode'  className='relative w-80 m-4 rounded-xl'/>
          </div>
          <div className='relative w-full mx-5 max-w-fit'>
            <div className='flex text-center mx-2 font-bold text-2xl text-[#1F3251]'>
              Improve your front-end skills by building projects
            </div>
            <div className='relative w-full max-w-fit mt-4 mb-10 mx-2 justify-center text-center text-[17px] font-normal text-[#7B879D]'>
              Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
