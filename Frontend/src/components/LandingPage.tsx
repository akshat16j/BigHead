import {PrimaryButtonSmall,PrimaryButtonLarge} from "../ui_components/ui.tsx"

export function LandingPage({screenWidth}:{screenWidth:number}){
    return <>
      <div className='bg-blue3 min-h-screen'>
        <Header></Header>
        <div className='box-border px-[30px] tablet:px-[65px] laptop:px-[152px] flex flex-col items-center'>
          <div className='flex justify-center mt-[89px] tablet:mt-[60px]'>
            <TrustedBy></TrustedBy>
          </div>
          <div className='flex justify-center mt-4'>
            <Tagline></Tagline>
          </div>
          <PlainText text='Store all your links and creative inspirations in one place'></PlainText>
          <PrimaryButtonLarge text='Get Started'></PrimaryButtonLarge>
          <Image></Image>
          <SubHeading text='About BigHead' ></SubHeading>
          <PlainText text='BigHead is your digital canvas for capturing, organizing, and nurturing ideas. Our mission is to empower creative minds and boost productivity through seamless note-taking and idea management.'></PlainText>
          <div className="flex flex-col tablet:flex-row">
            <FeaturesCard img='pencil' title='Effortless Note-Making' text='Capture your ideas quickly and easily with our intuitive interface.'></FeaturesCard>
            <FeaturesCard img="layers" title='Smart Organization' text='Automatically categorize and tag your notes for easy retrieval.'></FeaturesCard>
            <FeaturesCard img="smartphone" title='Cross Device Syncing' text='Access your notes from anywhere, on any device, always in sync.'></FeaturesCard>
          </div>
          <SubHeading text='What Our Users Say'></SubHeading>
          <div className='laptop:grid laptop:grid-cols-2 laptop:gap-4 laptop:mb-[60px]'>
            <TestimonialCard pic='0' name="Sarah Johnson" post='Product Manager' text="BigHead has revolutionized the way I manage my projects. It's intuitive, powerful, and keeps all my ideas organized."></TestimonialCard>
            <TestimonialCard pic='1' name='Michael Chen' post='UX Designer' text="As a designer, I need a tool that can keep up with my creative process. Idea Forge does that and more. It's become an essential part of my workflow."></TestimonialCard>
            {screenWidth >= 768  ? <TestimonialCard pic="2" name='Sam Kolder' post="Filmmaker" text="This app is a game-changer for filmmakers like me. It keeps my projects organized and makes brainstorming so much easier!"></TestimonialCard>: null}
            {screenWidth >= 1440  ? <TestimonialCard pic="3" name='Rachel Mary' post="Graphic Designer" text="As a graphic designer, this app has transformed how I organize my ideas. From saving tweets to uploading sketches, everything's in one place—no more lost links or files!"></TestimonialCard>: null}
          </div>
          <PrimaryButtonLarge text='Get Started'></PrimaryButtonLarge>
          <SubHeading text='Get In Touch'></SubHeading>
          <Follow></Follow>
          <Footer></Footer>
        </div>    
      </div>
    </>
  }
  
  function Header(){
    return <div className='flex justify-between items-center h-[81px] tablet:h-[151px] laptop:h-[141px] desktop:h-[154px] box-border p-[24px] tablet:p-[42px] laptop:px-[112px] desktop:px-[140px]'>
      <div className='flex'>
        <img src="../Assets/icons8-brain-64.png" className='w-[32px] tablet:w-[64px] h-[32px] tablet:h-[64px] laptop:h-[72px] laptop:w-[72px] mr-[4px] tablet:mr-[13px]' alt="logo" />
        <div className='text-white font-inter text-[22px] tablet:text-[40px] laptop:text-[44px] font-semibold tracking-tightest'>BigHead</div>
      </div>
      <div className='flex items-center'>
        <div className='text-[16px] tablet:text-[20px] mr-[12px] tablet:mr-[44px] text-white'>Register</div>
        <PrimaryButtonSmall text={"Login"}></PrimaryButtonSmall>
      </div>
    </div>
  }
  
  function TrustedBy(){
    return <div className=' bg-text-gradient p-[1px] rounded-full w-[213px] tablet:w-[370px] '>
        <div className='flex justify-between bg-bg-gradient p-[5px] tablet:p-[12px] items-center rounded-full'>
          <div className='flex w-[81px] tablet:w-[136px] '>
            <img className='h-[27px] tablet:h-[45px]  w-[27px] tablet:w-[45px]  rounded-full z-1 ' src="../Assets/avatar (0).png" />
            <img className='h-[27px] tablet:h-[45px]  w-[27px] tablet:w-[45px]  rounded-full z-2 translate-x-[-50%]' src="../Assets/avatar (1).png"  />
            <img className='h-[27px] tablet:h-[45px]  w-[27px] tablet:w-[45px]  rounded-full z-3 translate-x-[-100%]' src="../Assets/avatar (2).png"  />
            <img className='h-[27px] tablet:h-[45px]  w-[27px] tablet:w-[45px]  rounded-full z-4 translate-x-[-150%]' src="../Assets/avatar (3).png"  />
            <img className='h-[27px] tablet:h-[45px]  w-[27px] tablet:w-[45px]  rounded-full z-5 translate-x-[-200%]' src="../Assets/avatar (4).png"  />
          </div>
          <div className='text-[12px] tablet:text-[18px] tablet:font-bold bg-text-gradient text-transparent bg-clip-text tracking-normal'>Trusted by 1000+ users</div>
        </div>
    </div>
  }
  
  function Tagline(){
    return <div className='mb-5'>
      <div className='text-center'>
        <span className=' font-helvetica text-[52px] tablet:text-[66px] laptop:text-[100px] font-semibold  tracking-tighter text-center bg-text-gradient bg-clip-text text-transparent'>Never Lose An Idea</span>
        <span className='pt-4 font-again tracking-tight text-[46px] tablet:text-[56px] laptop:text-[82px] text-white ml-5 text-center'>Again!!</span>
      </div>
    </div>
    
  }
  
  function Image(){
    return <div className='flex justify-center'>
      <img className='border-[1px] border-solid border-white rounded-[15px] w-[303px] tablet:w-[637px] h-[168px] tablet:h-[353px] laptop:w-[1200px] laptop:h-[630px] desktop:w-[1610px] desktop:h-[910px] mt-[45px] tablet:mt-[89px]' src="../Assets/Screenshot 2025-01-15 030622.png" alt="image" />
    </div>
  }
  
  function SubHeading({text}:{text:string}){
    return <div className='font-helvetica text-[28px] tablet:text-[48px] font-semibold tracking-tighter text-center bg-text-gradient bg-clip-text text-transparent mt-[55px] tablet:mt-[98px] mb-[49px]'>
      {text}
    </div>
  }
  
  function PlainText({text}:{text:string}){
    return <div className='font-inter text-[16px] tablet:text-[22px] laptop:text-[32px] text-white text-center font-light mb-[66px]'>
      {text}
    </div>
  }
  
  function FeaturesCard({title,text,img}:{text:string,title:string,img:string}){
    return <div className='w-[220px] tablet:w-[200px] laptop:w-[358px] h-[180px] tablet:h-[240px] laptop:h-[394px] flex flex-col justify-between items-center text-center bg-blue1 rounded-[15px] box-border p-[10px] mb-[15px] tablet:m-[5px] laptop:m-[30px] tablet:py-[16px] laptop:px-[50px] laptop:py-[37px] '>
      <img src={`../Assets/icons8-${img}-50.png`} className='w-[30px] h-[30px] tablet:w-[60px] tablet:h-[60px] laptop:h-[80px] laptop:w-[80px]'></img>
      <div className='font-inter font-[16px] text-center text-white font-bold laptop:text-[24px]'>{title}</div>
      <div className='font-[14px] laptop:text-[20px] text-white'>{text}</div>
    </div>
  }
  
  function TestimonialCard({name,pic,post,text}:{name:string,pic:string,post:string,text:string}){
    return <div className='box-border p-[25px] tablet:px-[40px] tablet:py-[25px] bg-blue1 flex flex-col justify-between w-[285px] tablet:w-[595px] laptop:w-[560px] h-[230px] tablet:h-[168px] laptop:h-[180px] mb-[40px] rounded-[15px]'>
      <div className='flex justify-start items-center'>
        <img className='w-[40px] tablet:w-[50px] h-[40px] tablet:h-[50px] rounded-full mr-[20px]' src={`../Assets/avatar (${pic}).png`}/>
        <div className='flex flex-col'>
          <div className='text-[20px] tablet:text-[24px] text-white font-bold'>{name}</div>
          <div className='text-[14px] text-white font-thin'>{post}</div>
        </div>
      </div>
      <div className='text-[16px] text-white mt-[10px] font-light'>{`"${text}"`}</div>
    </div>
  }
  
  function Follow(){
    return <div className='flex items-center w-[160px] justify-between '>
      <div className='text-[24px]  text-white'>Follow: </div>
      <img className='w-[20px] h-[20px] invert' src="../Assets/github.png" alt="github" />
      <img className='w-[20px] h-[20px] invert' src="../Assets/twitter.png" alt="twitter" />
      <img className='w-[20px] h-[20px] invert' src="../Assets/instagram.png" alt="instagram" />
    </div>
  }
  
  function Footer(){
    return <div className='h-[200px]'>
  
    </div>
  }

  export default LandingPage