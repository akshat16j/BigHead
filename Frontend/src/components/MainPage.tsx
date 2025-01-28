import { useState } from "react"
import { Link } from "react-router-dom"

export function MainPage({ screenWidth }: { screenWidth: number }) {
    const [sidebar, setSideBar] = useState(false)
    return <div >
        {screenWidth < 768 ? <div className='bg-blue2 min-h-screen'>
            <HeaderMobile></HeaderMobile>
            <ScrollTags></ScrollTags>
            <div className="box-border px-[16px]">
                <div className="pt-[126px] relative mt-[10px] text-[20px] text-white font-semibold mb-[10px]">All Notes</div>
                <Folders></Folders>
                <div className="flex flex-col items-center">
                    <ContentCardMobile name="Color Grading bhjb hdjhsj jjhjjd jkjbjhj ghug Tutorial" ></ContentCardMobile>
                    <ContentCardMobile name="Color Grading Tutorial"></ContentCardMobile>
                </div>
            </div></div>

            :

            <div className="bg-blue2 min-h-screen w-full overflow-y-auto">
                {!sidebar ? <div>
                    <div className="flex flex-col items-center fixed w-[15%] mid:w-[10%] h-screen bg-blue2">
                        <img className="mt-[45px] w-[25px] h-[25px]" src="../../Assets/icons8-menu-50.png" alt="menu" />
                        <div className="flex items-center justify-center mt-[40px] w-[63px] mid:w-[100px] h-[42px] rounded-[5px] mb-[33px] ml bg-bgrey">
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
                        <div className="flex flex-col items-center fixed w-[30%] h-screen bg-blue3">
                            <div className="flex justify-center items-center mt-[45px]">
                                <img className="w-[25px] h-[25px] mr-4" src="../../Assets/icons8-menu-50.png" alt="menu" />
                                <div className="flex items-center">
                                    <img className="w-[35px] h-[35px] mr-[7px]" src="../../Assets/icons8-brain-64.png" alt="logo" />
                                    <div className="text-[24px] tracking-tightest font-medium text-white">BigHead</div>
                                </div>
                            </div>
                            
                            <div className="mt-[40px] mb-[33px]">
                                <MainPageButtons color="bgrey" icon="folder" text="New Folder"></MainPageButtons>
                            </div>

                            <nav className="flex-1 overflow-y-auto w-full no-scrollbar">
                                <div className="flex flex-col items-start px-4">
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

                <div className="ml-[15%] mid:ml-[10%] box-border relative h-screen overflow-y-auto">
                    <div className="sticky top-0 z-50 bg-blue2 pt-[35px] px-[24px] h-[90px]">
                        <HeaderMain screenWidth={screenWidth} sidebar={sidebar}></HeaderMain>
                    </div>
                    <div className="px-[24px]">
                        <div className="mt-[33px] text-[24px] text-white font-semibold mb-[25px]">All Notes</div>
                        <div className="grid grid-cols-3 gap-5 tablet:grid-cols-3 mid:grid-cols-5 laptop:grid-cols-7 tablet:gap-5 mb-[25px] ">
                            <MainPageButtons color="bgrey" icon="folder" text="Folder1"></MainPageButtons>
                            <MainPageButtons color="bgrey" icon="folder" text="Folder1"></MainPageButtons>
                            <MainPageButtons color="bgrey" icon="folder" text="Folder1"></MainPageButtons>
                            <MainPageButtons color="bgrey" icon="folder" text="Folder1"></MainPageButtons>
                            <MainPageButtons color="bgrey" icon="folder" text="Folder1"></MainPageButtons>
                            <MainPageButtons color="bgrey" icon="folder" text="Folder1"></MainPageButtons>
                            <MainPageButtons color="bgrey" icon="folder" text="Folder1"></MainPageButtons>
                        </div>
                        <div className="grid grid-cols-2 gap-5  tablet:grid-cols-2 mid:grid-cols-3 laptop:grid-cols-4 tablet:gap-8 ">
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                            <ContentCardMobile name="color grading tutorial"></ContentCardMobile>
                        </div>
                    </div>
                </div>
            </div>
        }


    </div>
}
function HeaderMobile() {
    return <div className='flex z-10 top-0 bg-blue3 justify-between fixed w-full items-center h-[70px] tablet:h-[151px] laptop:h-[141px] desktop:h-[154px] box-border p-[24px] tablet:p-[42px] laptop:px-[112px] desktop:px-[140px]'>
        <Link to="/" className='flex cursor-pointer'>
            <img src="../Assets/icons8-brain-64.png" className=' w-[32px] tablet:w-[64px] h-[32px] tablet:h-[64px] laptop:h-[72px] laptop:w-[72px] mr-[4px] tablet:mr-[13px]' alt="logo" />
            <div className='text-white font-inter text-[22px] tablet:text-[40px] laptop:text-[44px] font-semibold tracking-tightest'>BigHead</div>
        </Link>
        <div className="flex justify-between w-[157px] items-center">
            <img className="invert w-[20px] h-[20px]" src="../../Assets/share.svg" alt="share" />
            <img className="w-[23px] h-[23px]" src="../../Assets/icons8-search-50.png" alt="search" />
            <img className="w-[30px] h-[30px]" src="../../Assets/icons8-plus-50.png" alt="add" />
            <img className="invert w-[23px] h-[23px]" src="../../Assets/logout.svg" alt="logout" />
        </div>
    </div>
}


function HeaderMain({ sidebar, screenWidth }: { sidebar: boolean, screenWidth: number }) {
    return <div className="w-full sticky top-0 z-50 bg-blue2">
        {!sidebar ? <div className="flex justify-between items-center w-full ">
            <div className="flex items-center">
                <img className="w-[35px] h-[35px] mr-[7px]" src="../../Assets/icons8-brain-64.png" alt="logo" />
                <div className="text-[24px] tracking-tightest font-medium text-white">BigHead</div>
            </div>
            <div className="flex items-center justify-end flex-1 ml-8">
                <div className="flex justify-center items-center box-border w-[230px] mr-[10px] ml-[10px] h-[45px] bg-bgrey rounded-[5px]">
                    <img className="w-[22px] h-[22px] opacity-30 mr-[10px] ml-[10px]" src="../../Assets/icons8-search-50.png" alt="search" />
                    <input className="box-border w-full h-[45px] bg-transparent text-white" type="text" placeholder="Search" />
                </div>
                {screenWidth >= 1028 ? <div className="mr-[10px]"><MainPageButtons color="bgrey" icon="share" text="Share Head"></MainPageButtons></div> :
                    <div className=" flex justify-center items-center w-[63px] mr-[10px] h-[45px] bg-bgrey rounded-[5px] ">
                        <img className="invert w-[20px] h-[20px]" src="../../Assets/share.svg" alt="share" />
                    </div>
                }
                <MainPageButtons color="btn-color" icon="plus" text="Add Content"></MainPageButtons>
            </div>
        </div> : <div className="flex justify-end items-center sticky top-0 z-50 bg-blue2">
            <div className="flex items-center w-[418px] justify-between">
                <div className=" flex justify-center items-center box-border w-[230px] h-[45px] bg-bgrey rounded-[5px] ">
                    <img className="w-[22px] h-[22px] opacity-30 mr-[10px] ml-[10px]" src="../../Assets/icons8-search-50.png" alt="search" />
                    <input className="box-border w-[50px] h-[45px]  bg-transparent text-white" type="text" placeholder="Search" />
                </div>
                <div className=" flex justify-center items-center box-border w-[63px] mr-[10px] h-[45px] bg-bgrey rounded-[5px] ">
                    <img className="invert w-[20px] h-[20px]" src="../../Assets/share.svg" alt="logout" />
                </div>
                <MainPageButtons color="btn-color" icon="plus" text="Add Content"></MainPageButtons>
            </div>
        </div>

        }

    </div>
}

function MainPageButtons({ color, icon, text }: { color: string, icon: string, text: string }) {
    return <div className={`flex items-center justify-center rounded-[5px] w-[170px] h-[45px] text-ellipsis overflow-hidden box-border px-[8px] bg-${color}`}>
        {icon == "share" ? <img className="invert h-[22px] w-[22px] mr-[9px]" src="../../Assets/share.svg" /> :
            <img className={`h-[20px] w-[20px] mr-[9px]`} src={`../../Assets/icons8-${icon}-50.png`} />}
        <div className="text-[16px] text-white">{text}</div>
    </div>
}

function ScrollTags() {
    return <div className="mt-[60px] z-20 bg-blue3 h-[45px] fixed flex box-border left-0 right-0 pl-[16px] py-[7px] overflow-x-auto no-scrollbar">
        <div className="bg-btn-color rounded-[5px] px-[11px] py-[7px] text-[12px] flex mr-[6px] box-border">
            <div className="flex w-[35px] items-center">
                <img className="w-[20px] h-[20px] mr-[5px]" src="../../Assets/icons8-folder-50.png" alt="new folder" />
                <img className="w-[15px] h-[15px]" src="../../Assets/icons8-plus-50.png" />
            </div>
        </div>
        <Tag tag="Videos"></Tag>
        <Tag tag="Reels/Posts"></Tag>
        <Tag tag="Spotify"></Tag>
        <Tag tag="Tweets"></Tag>
        <Tag tag="Links"></Tag>
        <Tag tag="Documents"></Tag>
        <Tag tag="Notes"></Tag>
        <Tag tag="Tags"></Tag>
    </div>
}

function Tag({ tag }: { tag: string }) {
    return <div className="bg-bgrey rounded-[5px] px-[11px] py-[7px] text-[12px] text-white mr-[7px]">
        {tag}
    </div>
}

function Folders() {
    return <div className="grid grid-cols-3 gap-4 mb-[30px]">
        <FolderCardMobile name="Inspiration"></FolderCardMobile>
        <FolderCardMobile name="Inspiration"></FolderCardMobile>
        <FolderCardMobile name="Inspiration"></FolderCardMobile>
        <FolderCardMobile name="Inspiration"></FolderCardMobile>
        <FolderCardMobile name="Inspiration"></FolderCardMobile>
        <FolderCardMobile name="Inspiration"></FolderCardMobile>

    </div>
}

function FolderCardMobile({ name }: { name: string }) {
    return <div className="flex justify-center py-[10px] items-center bg-bgrey rounded-[5px]">
        <img className="h-[15px] w-[15px] mr-[5px]" src="../../Assets/icons8-folder-50.png" alt="folder" />
        <div className="text-[10px] text-white">{name}</div>
    </div>
}

function ContentCardMobile({ name }: { name: string }) {
    return <div className="flex flex-col items-center box-border w-[300px] h-[245px] bg-blue3 mb-[20px] rounded-[5px] px-[14px] py-[14px]">
        <div className="flex flex-row w-full justify-between mb-[11px]">
            <div className="flex items-center">
                <img className="w-[20px] h-[20px] mr-[9px]" src="../../Assets/icons8-youtube-50.png" />
                <div className="text-[12px] text-white font-semibold text-ellipsis h-[21px] overflow-hidden w-[200px]" >{name}</div>
            </div>
            <div className="flex items-center">
                <img className="invert w-[15px] h-[15px] mr-[16px]" src="../../Assets/share.svg" />
                <img className="w-[15px] h-[15px]" src="../../Assets/icons8-delete-50.png" />
            </div>
        </div>
        <div className="bg-white w-[260px] h-[147px] rounded-[5px] mb-[11px]"></div>
        <div className="flex w-full justify-between">
            <div className="grid grid-cols-3 gap-1">
                <TagOnCard text="tag1"></TagOnCard>
                <TagOnCard text="tag2"></TagOnCard>
                <TagOnCard text="tag3"></TagOnCard>
                <TagOnCard text="tag4"></TagOnCard>
            </div>
            <div className="text-[9px] text-grey">
                15-11-2024
            </div>
        </div>
    </div>

}

function TagOnCard({ text }: { text: string }) {
    return <div className="text-grey bg-blue1 text-[9px] px-[13px] py-[2px] rounded-[5px]">
        #{text}
    </div>
}

export default MainPage
