import { Link } from "react-router-dom"
import { HeaderMobile, HeaderMain, MainPageButtons, FolderButtons, ScrollTags, Tag, Folders, FolderCardMobile, ContentCardMobile, TagOnCard } from "../ui_components/ui"

interface SideBarProps {
    sidebar: boolean;
    toggleSidebar: () => void;
    logoClickHandler: () => void;
    createFolder: () => void;
}

export function SideBar({ sidebar, toggleSidebar, logoClickHandler,createFolder }: SideBarProps) {
    return <>
        {!sidebar ? <div>
            <div className="flex flex-col items-center fixed w-[15%] mid:w-[10%] h-screen bg-blue2">
                <img onClick={toggleSidebar} className="cursor-pointer mt-[45px] w-[25px] h-[25px]" src="../../Assets/icons8-menu-50.png" alt="menu" />
                <div onClick={createFolder} className="cursor-pointer flex items-center justify-center mt-[40px] w-[63px] mid:w-[100px] h-[42px] rounded-[5px] mb-[33px] ml bg-bgrey">
                    <img className="w-[20px] h-[20px]" src="../../Assets/icons8-folder-50.png" alt="folder" />
                    <img className="w-[20px] h-[20px]" src="../../Assets/icons8-plus-50.png" alt="plus" />
                </div>
                <nav className="flex-1 overflow-y-auto w-full no-scrollbar">
                    <div className="flex flex-col items-center">
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center hover:bg-bgrey mb-[20px] items-center"><img className="w-[28px] h-[32px] " src="../../Assets/icons8-youtube-50.png" alt="" /></div></Link>
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center items-center hover:bg-bgrey mb-[20px]"><img className="invert w-[28px] h-[28px]" src="../../Assets/instagram.png" alt="" /></div></Link>
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center items-center hover:bg-bgrey mb-[20px]"><img className="w-[28px] h-[30px] " src="../../Assets/icons8-airpods-pro-max-50.png" alt="" /></div></Link>
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center items-center hover:bg-bgrey mb-[20px]"><img className="invert w-[28px] h-[26px] " src="../../Assets/twitter.png" alt="" /></div></Link>
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center items-center hover:bg-bgrey mb-[20px]"><img className="w-[28px] h-[30px] " src="../../Assets/icons8-link-50.png" alt="" /></div></Link>
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center items-center hover:bg-bgrey mb-[20px]"><img className="w-[28px] h-[30px] " src="../../Assets/icons8-document-50.png" alt="" /></div></Link>
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center items-center hover:bg-bgrey mb-[20px]"><img className="w-[30px] h-[30px] " src="../../Assets/icons8-plus-50.png" alt="" /></div></Link>
                        <Link to="/"><div className="bg-blue2 flex w-[100px] rounded-[5px] h-[40px] justify-center items-center hover:bg-bgrey mb-[20px]"><img className="w-[28px] h-[30px] " src="../../Assets/icons8-hashtag-50.png" alt="" /></div></Link>
                    </div>
                </nav>
                <div className="flex items-center justify-center w-[63px] mid:w-[100px] h-[42px] rounded-[5px] my-4 bg-bgrey">
                    <img className="invert w-[20px] h-[20px]" src="../../Assets/logout.svg" alt="logout" />
                </div>
            </div>
        </div> :
            <div>
                <div className={`flex flex-col items-center fixed w-[30%] mid:w-[20%] h-screen bg-blue3 z-40 `}>
                    <div className="flex justify-center items-center mt-[45px]">
                        <img onClick={toggleSidebar} className="cursor-pointer w-[25px] h-[25px] mr-4" src="../../Assets/icons8-menu-50.png" alt="menu" />
                        <Link to={"/dashboard"}>
                            <div onClick={logoClickHandler} className="cursor-pointer flex items-center">
                                <img className="w-[35px] h-[35px] mr-[7px]" src="../../Assets/icons8-brain-64.png" alt="logo" />
                                <div className="text-[24px] tracking-tightest font-medium text-white">BigHead</div>
                            </div>
                        </Link>
                    </div>
                    <div onClick={createFolder} className="mt-[40px] mb-[33px]">
                        <MainPageButtons color="bgrey" icon="folder" text="New Folder"></MainPageButtons>
                    </div>

                    <nav className="flex-1 overflow-y-auto w-full no-scrollbar flex items-center">
                        <div className="flex flex-col items-start px-10 w-full">
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="w-[28px] h-[32px] mr-[15px] " src="../../Assets/icons8-youtube-50.png" alt="" />Videos</div></Link>
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="invert w-[28px] h-[28px] mr-[15px]" src="../../Assets/instagram.png" alt="" />Reels/Post</div></Link>
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="w-[28px] h-[30px] mr-[15px] " src="../../Assets/icons8-airpods-pro-max-50.png" alt="" />Music</div></Link>
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="invert w-[28px] h-[26px] mr-[15px] " src="../../Assets/twitter.png" alt="" />Tweets</div></Link>
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="w-[28px] h-[30px] mr-[15px] " src="../../Assets/icons8-link-50.png" alt="" />Links</div></Link>
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="w-[28px] h-[30px] mr-[15px] " src="../../Assets/icons8-document-50.png" alt="" />Documents</div></Link>
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="w-[30px] h-[30px] mr-[15px] " src="../../Assets/icons8-plus-50.png" alt="" />Notes</div></Link>
                            <Link to="/"><div className="bg-blue3 flex w-full px-[20px] rounded-[5px] h-[40px] justify-start items-center hover:bg-blue1 mb-[20px] text-white text-[16px]"><img className="w-[28px] h-[30px] mr-[15px] " src="../../Assets/icons8-hashtag-50.png" alt="" />Tags</div></Link>
                        </div>
                    </nav>

                    <div className="flex items-center justify-center w-[170px] h-[42px] rounded-[5px] my-4 bg-blue2 ml-3">
                        <img className="invert w-[20px] h-[20px] mr-[15px]" src="../../Assets/logout.svg" alt="logout" />
                        <div className="text-[16px] text-white">Logout</div>
                    </div>
                </div>
            </div>
        }
    </>

}