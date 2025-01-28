import { Header } from "./LandingPage";

export function LoginPage(){
    return <div className='bg-blue3 min-h-screen'>
        <Header></Header>
        <div className="flex justify-center">
            <div className="box-border mt-[80px] tablet:mt-[50px] p-[3px] w-[283px] tablet:w-[413px] h-[356px] tablet:h-[511px] bg-text-gradient rounded-[15px]">
                <div className=" flex flex-col justify-between items-center rounded-[12px] h-full bg-blue3 px-[30px] py-[30px]">
                    <div className=" font-inter text-white text-[24px] tablet:text-[40px] font-bold mb-[10px]">Login</div>
                    <input className=" box-border w-full bg-blue1 py-[6px] tablet:py-[11px] px-[15px] rounded-[12px]" type="text" placeholder="username" />
                    <input className=" box-border w-full bg-blue1 py-[6px] tablet:py-[11px] px-[15px] rounded-[12px]" type="text" placeholder="password" />
                    <button className="bg-btn-color text-[18px] tablet:text-[24px] w-full  text-white rounded-[12px] px-6 tablet:py-[11px] py-2">Login</button>
                    <div className="text-white text-[12px]">or continue with</div>
                    <div className="flex w-full justify-between">
                        <div className="cursor-pointer flex justify-center items-center h-[40px] tablet:h-[55px] w-[105px] tablet:w-[160px] bg-white rounded-[12px]">
                            <img className="h-[25px] w-[25px] tablet:w-[38px] tablet:h-[38px]" src="../../Assets/icons8-google-48.png" alt="google" />
                        </div>
                        <div className="cursor-pointer flex justify-center items-center h-[40px] tablet:h-[55px] tablet:w-[160px] w-[105px] bg-white rounded-[12px]">
                            <img className="h-[25px] w-[25px] tablet:w-[38px] tablet:h-[38px]" src="../../Assets/icons8-facebook-logo-50.png" alt="facebook" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default LoginPage