import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../App"
import axios from "axios"
import { SideBar } from "./SideBar"
import { HeaderMobile, FolderButtons, HeaderMain, ScrollTags, Tag, Folders, FolderCardMobile, ContentCardMobile, TagOnCard } from "../ui_components/ui"
import { AddContent } from "./AddContent"
import { AddFolder } from "./AddFolder"


interface Content {
    _id: string;
    title: string;
    contentType: string;
    link?: string;
    description?: string;
    tags?: string[];
    createdAt: string;
    updatedAt: string;
    userId: string;
    folder: string;
}

interface ContentResponse {
    content: Content[];
}

export function MainPage({ screenWidth }: { screenWidth: number }) {
    const [sidebar, setSideBar] = useState(false)
    const [contents, setContents] = useState<Content[]>([])
    const [folder, setFolder] = useState<string>("")
    const [contentDialogBox, setContentDialogBox] = useState<boolean>(false)
    const [folderDialogBox, setFolderDialogBox] = useState<boolean>(false)

    useEffect(() => {
        async function fetchContent() {
            const res = await axios.get<ContentResponse>(`${BASE_URL}/content`, {
                headers: {
                    authorization: `${sessionStorage.getItem('token')}`
                }
            })
            setContents(res.data.content)
            console.log(res.data.content)
        }
        fetchContent()
    }, [])

    function toggleSidebar() {
        setSideBar(!sidebar)
    }
    function logoClickHandler() {
        setFolder("")
        return <Link to={"/dashboard"}></Link>
    }
    function createFolder(){
        setFolderDialogBox(!folderDialogBox)
    }

    return <div >



        {screenWidth < 768 ? <div className='bg-blue2 min-h-screen'>
            <HeaderMobile contentDialogBox={contentDialogBox} setContentDialogBox={setContentDialogBox}></HeaderMobile>
            <ScrollTags></ScrollTags>
            <div className="box-border px-[16px]">


                <div className="pt-[126px] relative mt-[10px] text-[20px] text-white font-semibold mb-[10px]">{folder ? folder : "All Notes"}</div>
                {contents.map((content) => (
                    <FolderCardMobile key={content._id} name={content.folder}></FolderCardMobile>
                ))}
                <div className="flex flex-col items-center">
                    {contents.map((content) => (
                        <ContentCardMobile key={content._id} name={content.title} tags={content.tags || []} type={content.contentType} description={content.description || ""} folder={content.folder || ""} ></ContentCardMobile>
                    ))}
                </div>


            </div></div>

            :

            <div className="bg-blue2 min-h-screen w-full overflow-y-auto">
                <SideBar sidebar={sidebar} toggleSidebar={toggleSidebar} logoClickHandler={logoClickHandler} createFolder={createFolder}></SideBar>

                <div className={`${!sidebar ? "ml-[15%] mid:ml-[10%]" : "ml-[30%] mid:ml-[20%]"} box-border relative h-screen overflow-y-auto`}>
                    <div className="sticky top-0 z-50 bg-blue2 pt-[35px] px-[24px] h-[90px]">
                        <HeaderMain screenWidth={screenWidth} sidebar={sidebar} logoClickHandler={logoClickHandler} setContentDialogBox={setContentDialogBox} contentDialogBox={contentDialogBox}></HeaderMain>
                    </div>
                    <div className="px-[24px]">
                        <div className="mt-[33px] text-[24px] text-white font-semibold mb-[25px]">{folder ? folder : "All Notes"}</div>
                        <div className={`grid grid-cols-3 gap-5 ${!sidebar ? "tablet:grid-cols-3 mid:grid-cols-5 laptop:grid-cols-7" : "tablet:grid-cols-2 tablet:gap-6 mid:grid-cols-4 laptop:grid-cols-5"} tablet:gap-5 mb-[25px]`}>
                            {contents.map((content) => (
                                <FolderButtons key={content._id} text={content.folder} setFolder={setFolder} color="bgrey" icon="folder" ></FolderButtons>
                            ))}
                        </div>

                        <div className={`grid grid-cols-2 gap-5  ${!sidebar ? "tablet:grid-cols-2 mid:grid-cols-3 laptop:grid-cols-4" : " tablet:grid-cols-1 tablet:gap-6 mid:grid-cols-2 laptop:grid-cols-3"} tablet:gap-8 `}>
                            {contents.map((content) => (
                                <ContentCardMobile key={content._id} name={content.title} tags={content.tags || []} type={content.contentType} description={content.description || ""} folder={content.folder || ""} ></ContentCardMobile>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        }
        {contentDialogBox ? <div className="fixed z-50 inset-0 flex items-center justify-center bg-blue2/90  before:content-[''] before:pointer-events-none"> <AddContent folder={folder} contentDialogBox={contentDialogBox} setContentDialogBox={setContentDialogBox}></AddContent></div> : null}
        {folderDialogBox ? <div className="fixed z-50 inset-0 flex items-center justify-center bg-blue2/90  before:content-[''] before:pointer-events-none"> <AddFolder folderDialogBox={folderDialogBox} setFolderDialogBox={setFolderDialogBox}></AddFolder></div> : null}




    </div>
}


export default MainPage
