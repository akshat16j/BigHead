import { useRecoilState } from "recoil";
import { Header } from "./LandingPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../App.tsx"
import { usernameState, passwordState, errorMessageState, successMessageState } from "../store/AuthItems";

interface SignUpResponse {
    message: string;
}

export function SignUpPage(){
    const navigate = useNavigate();
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useRecoilState(passwordState);
    const [error, setError] = useRecoilState(errorMessageState);
    const [msg, setMsg] = useRecoilState(successMessageState);
    async function handleSignUp(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        try {
            const res = await axios.post<SignUpResponse>(`${BASE_URL}/api/register`, {username, password})
            if(res.status === 200){
                console.log(res.data.message)
                setMsg("Account created successfully")
                navigate('/login')
            }else{
                console.log(res.data.message)
                setError(res.data.message)
            }
        }catch (err: any) {
            setError(err.response?.data.message || 'An error occurred')
        }
    }
    function handleUsernameChange(e:React.ChangeEvent<HTMLInputElement>){
        setUsername(e.target.value)

    }
    function handlePasswordChange(e:React.ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value)
    }
    return <div className='bg-blue3 min-h-screen'>
        <Header></Header>
        <div className="flex flex-col justify-center items-center">
            <div className="box-border mt-[80px] tablet:mt-[50px] p-[3px] w-[283px] tablet:w-[413px] h-[356px] tablet:h-[511px] bg-text-gradient rounded-[15px]">
                <form onSubmit={handleSignUp}  className=" flex flex-col justify-between items-center rounded-[12px] h-full bg-blue3 px-[30px] py-[30px]">
                    <div className=" font-inter text-white text-[24px] tablet:text-[40px] font-bold mb-[10px] cursor-pointer">Create Account</div>
                    <input onChange={handleUsernameChange} onInput={handleUsernameChange} className=" text-white box-border w-full bg-blue1 py-[6px] tablet:py-[11px] px-[15px] rounded-[12px]" type="text" placeholder="username" />
                    <input onChange={handlePasswordChange} onInput={handlePasswordChange} className=" text-white box-border w-full bg-blue1 py-[6px] tablet:py-[11px] px-[15px] rounded-[12px]" type="text" placeholder="password" />
                    <input type="submit" className="bg-btn-color text-[18px] tablet:text-[24px] w-full  text-white rounded-[12px] px-6 tablet:py-[11px] py-2" value="Create Account"/>
                    <div className="text-white text-[12px]">or continue with</div>
                    <div className="flex w-full justify-between">
                        <div className="cursor-pointer flex justify-center items-center h-[40px] tablet:h-[55px] w-[105px] tablet:w-[160px] bg-white rounded-[12px]">
                            <img className="h-[25px] w-[25px] tablet:w-[38px] tablet:h-[38px]" src="../../Assets/icons8-google-48.png" alt="google" />
                        </div>
                        <div className="cursor-pointer flex justify-center items-center h-[40px] tablet:h-[55px] tablet:w-[160px] w-[105px] bg-white rounded-[12px]">
                            <img className="h-[25px] w-[25px] tablet:w-[38px] tablet:h-[38px]" src="../../Assets/icons8-facebook-logo-50.png" alt="facebook" />
                        </div>
                    </div>
                </form>
            </div>
            {error && <span className="mt-[10px] text-red-400 text-[12px]">{error}</span>}
            {msg && <span className="mt-[10px] text-green-400 text-[12px]">{msg}</span>}
        </div>
    </div>
}

export default SignUpPage