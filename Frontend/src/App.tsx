import './App.css'

function App() {
  return (
    <div className='bg-bg-gradient min-h-screen'>
      <div className='flex justify-between items-center h-[81px] box-border p-[24px]'>
        <div className='flex'>
          <img src="../Assets/icons8-brain-64.png" className='w-[32px] h-[32px] mr-[4px]' alt="logo" />
          <div className='text-white font-inter text-[22px] font-medium tracking-tightest'>BigHead</div>
        </div>
        <div className='flex h-[27px] items-center'>
          <div className='text-[16px] mr-[12px] text-white'>Register</div>
          <ButtonPrimary text={"Login"}></ButtonPrimary>
        </div>
      </div>

      <div className='flex justify-center mt-[89px]'>
        <TrustedBy device='mobile'></TrustedBy>
      </div>
      <div className='flex justify-center mt-4'>
        <Tagline></Tagline>
      </div>
      <Image></Image>
    </div>
  )
}

function ButtonPrimary({ text }: { text: string}){
  return <div >
    <button className={`bg-btn-color text-[16px] text-white rounded-[127px] px-5`}>{text}</button>
  </div>
}

function TrustedBy({device}:{device:string}){
  return <div className=' bg-text-gradient p-[1px] rounded-[120px] w-[213px]'>
      <div className='flex justify-between bg-bg-gradient p-[5px] items-center rounded-[126px]'>
        <div className='flex w-[81px]'>
          <img className='h-[27px] w-[27px] rounded-full z-1 ' src="../Assets/avatar.png" />
          <img className='h-[27px] w-[27px] rounded-full z-2 translate-x-[-50%]' src="../Assets/avatar (1).png"  />
          <img className='h-[27px] w-[27px] rounded-full z-3 translate-x-[-100%]' src="../Assets/avatar (2).png"  />
          <img className='h-[27px] w-[27px] rounded-full z-4 translate-x-[-150%]' src="../Assets/avatar (3).png"  />
          <img className='h-[27px] w-[27px] rounded-full z-5 translate-x-[-200%]' src="../Assets/avatar (4).png"  />
        </div>
        <div className='text-[12px] bg-text-gradient text-transparent bg-clip-text tracking-normal'>Trusted by 1000+ users</div>
      </div>
  </div>
}

function Tagline(){
  return <div>
    <span className='font-helvetica text-[52px] font-semibold tracking-tighter text-center bg-text-gradient bg-clip-text text-transparent'>Never Lose An</span>
    <br />
    <div className='flex justify-center items-center'>
      <div className=' font-helvetica text-[52px] font-semibold tracking-tighter text-center bg-text-gradient bg-clip-text text-transparent'>Idea</div>
      <div className='pt-4 font-again tracking-tight text-[46px] text-white ml-3 text-center'>Again!!</div>
    </div>
  </div>
  
}

function Image(){
  return <div className='flex justify-center'>
    <img className='border-[1px] border-solid border-white rounded-[15px] w-[303px] h-[168px] mt-[45px]' src="../Assets/Screenshot 2025-01-15 030622.png" alt="image" />
  </div>
}




export default App
