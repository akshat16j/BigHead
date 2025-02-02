import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BASE_URL } from "../App"
import axios from "axios"
import { SideBar } from "./SideBar"
import { HeaderMobile, FolderButtons, HeaderMain, ScrollTags, Folders, ContentCardMobile } from "../ui_components/ui"
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

interface Folder {
    _id: string;
    name: string;
    userId: string;
    parentFolder: string;
}


interface FolderResponse {
    folders: Folder[];
}


export function MainPage({ screenWidth }: { screenWidth: number }) {
    const [sidebar, setSideBar] = useState(false)

    const [contents, setContents] = useState<Content[]>([])
    const [folders, setFolders] = useState<Folder[]>([])
    const [folder, setFolder] = useState<Folder>({_id:"",name:"",userId:"",parentFolder:""})
    const [contentDialogBox, setContentDialogBox] = useState<boolean>(false)


    const [folderDialogBox, setFolderDialogBox] = useState<boolean>(false)

    useEffect(() => {
        async function fetchContent() {
            try {
                const resFolders = await axios.get<FolderResponse>(`${BASE_URL}/folders`, {
                    headers: {
                        authorization: `${sessionStorage.getItem('token')}`
                    }
                })
                setFolders(resFolders.data.folders)
                
                const resContent = await axios.get<ContentResponse>(`${BASE_URL}/content?folder=${folder}`, {
                    headers: {
                        authorization: `${sessionStorage.getItem('token')}`
                    }
                })

                setContents(resContent.data.content)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchContent()
    }, [folder])

    function toggleSidebar() {
        setSideBar(!sidebar)
    }
    function logoClickHandler() {
        setFolder({_id:"",name:"",userId:"",parentFolder:""})
        return <Link to={"/dashboard"}></Link>
    }

    async function deleteFolderHandler(folderId: string) {
        const res = await axios.delete(`${BASE_URL}/delete-folder?folderId=${folderId}`)
        if (res.status == 200) {
            alert("Folder deleted successfully")
            setFolders(folders.filter((f) => f._id !== folderId))
        }

    }

    async function deleteContentHandler(id: string) {
        const res = await axios.delete(`${BASE_URL}/delete-content?id=${id}`)
        if (res.status == 200) {
            alert("Content deleted successfully")
            setContents(contents.filter((c) => c._id !== id))
        }
    }

    return <div >

        {screenWidth < 768 ? <div className='bg-blue2 min-h-screen'>
            <HeaderMobile contentDialogBox={contentDialogBox} setContentDialogBox={setContentDialogBox} logoClickHandler={logoClickHandler}></HeaderMobile>
            <ScrollTags setFolderDialogBox={setFolderDialogBox}></ScrollTags>
            <div className="box-border px-[16px]">



                <div className="pt-[126px] relative mt-[10px] text-[20px] text-white font-semibold mb-[10px]">{folder.name ? folder.name : "All Notes"}</div>
                <Folders deleteFolderHandler={deleteFolderHandler} folders={folders} setFolder={setFolder}></Folders>
                <div className="flex flex-col items-center">



                    {contents.map((content) => (
                        <ContentCardMobile deleteContentHandler={deleteContentHandler} key={content._id} name={content.title} tags={content.tags || []} type={content.contentType} description={content.description || ""} folder={content.folder || ""} id={content._id} ></ContentCardMobile>
                    ))}
                </div>
            </div></div>


            :

            <div className="bg-blue2 min-h-screen w-full overflow-y-auto">
                <SideBar sidebar={sidebar} toggleSidebar={toggleSidebar} logoClickHandler={logoClickHandler} setFolderDialogBox={setFolderDialogBox}></SideBar>
                <div className={`${!sidebar ? "ml-[15%] mid:ml-[10%]" : "ml-[30%] mid:ml-[20%]"} box-border relative h-screen overflow-y-auto`}>
                    <div className="sticky top-0 z-50 bg-blue2 pt-[35px] px-[24px] h-[90px]">
                        <HeaderMain screenWidth={screenWidth} sidebar={sidebar} logoClickHandler={logoClickHandler} setContentDialogBox={setContentDialogBox} contentDialogBox={contentDialogBox}></HeaderMain>
                    </div>
                    <div className="px-[24px]">
                        <div className="mt-[33px] text-[24px] text-white font-semibold mb-[25px]">{folder.name ? folder.name : "All Notes"}</div>
                        <div className={`grid grid-cols-3 gap-5 ${!sidebar ? "tablet:grid-cols-3 mid:grid-cols-5 laptop:grid-cols-7" : "tablet:grid-cols-2 tablet:gap-6 mid:grid-cols-4 laptop:grid-cols-5"} tablet:gap-5 mb-[25px]`}>
                            {folders.map((folder) => (
                                <FolderButtons deleteFolderHandler={deleteFolderHandler} setFolder={setFolder} key={folder._id} color="bgrey" icon="folder" text={folder.name} id={folder._id}></FolderButtons>
                            ))}
                        </div>


                        <div className={`grid grid-cols-2 gap-5  ${!sidebar ? "tablet:grid-cols-2 mid:grid-cols-3 laptop:grid-cols-4" : " tablet:grid-cols-1 tablet:gap-6 mid:grid-cols-2 laptop:grid-cols-3"} tablet:gap-8 `}>
                            {contents.map((content) => (
                                <ContentCardMobile deleteContentHandler={deleteContentHandler} key={content._id} name={content.title} tags={content.tags || []} type={content.contentType} description={content.description || ""} folder={content.folder || ""} id={content._id} ></ContentCardMobile>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        }
        {contentDialogBox ? <div className="fixed z-50 inset-0 flex items-center justify-center bg-blue2/90  before:content-[''] before:pointer-events-none"> <AddContent contentDialogBox={contentDialogBox} setContentDialogBox={setContentDialogBox} folder={folder._id}></AddContent></div> : null}
        {folderDialogBox ? <div className="fixed z-50 inset-0 flex items-center justify-center bg-blue2/90  before:content-[''] before:pointer-events-none"> <AddFolder setFolderDialogBox={setFolderDialogBox} folderDialogBox={folderDialogBox}></AddFolder></div> : null}



    </div>
}


export default MainPage
