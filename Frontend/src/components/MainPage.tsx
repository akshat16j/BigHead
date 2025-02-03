import { useEffect } from "react"
import { BASE_URL } from "../App"
import axios from "axios"
import { SideBar } from "./SideBar"
import { HeaderMobile, FolderButtons, HeaderMain, ScrollTags, Folders, ContentCardMobile } from "../ui_components/ui"
import { AddContent } from "./AddContent"
import { AddFolder } from "./AddFolder"
import { useRecoilState } from 'recoil';
import { 
    sidebarState, 
    contentsState, 
    foldersState, 
    currentFolderState,
    contentDialogBoxState,
    folderDialogBoxState,
    refreshState,
    Content
} from '../store/MainPageItems';
import { useRecoilValue } from "recoil"




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
    const sidebar = useRecoilValue(sidebarState);
    const [contents, setContents] = useRecoilState(contentsState);
    const [folders, setFolders] = useRecoilState(foldersState);
    const [currentFolder, setCurrentFolder] = useRecoilState(currentFolderState);


    const contentDialogBox = useRecoilValue(contentDialogBoxState);
    const folderDialogBox = useRecoilValue(folderDialogBoxState);
    const refresh = useRecoilValue(refreshState);



    useEffect(() => {
        async function fetchFolders() {
            try {
                const parentFolderQuery = currentFolder._id ? `?parentFolder=${currentFolder._id}` : '';
                const resFolders = await axios.get<FolderResponse>(
                    `${BASE_URL}/folders${parentFolderQuery}`,
                    {
                        headers: {
                            authorization: `${sessionStorage.getItem('token')}`
                        }
                    }
                );
                setFolders(resFolders.data.folders);
            } catch (error) {
                console.error('Error fetching folders:', error);
            }
        }
        fetchFolders();
    }, [currentFolder._id, refresh]);

    useEffect(() => {
        async function fetchContent() {

            try {
                const folderQuery = currentFolder._id ? `?folder=${currentFolder._id}` : '';
                const resContent = await axios.get<ContentResponse>(
                    `${BASE_URL}/content${folderQuery}`,
                    {
                        headers: {
                            authorization: `${sessionStorage.getItem('token')}`
                        }
                    }
                )
                setContents(resContent.data.content)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchContent()
    }, [currentFolder, refresh])

    const handleBackClick = async () => {
        if (currentFolder.parentFolder) {
            try {
                const res = await axios.get<FolderResponse>(
                    `${BASE_URL}/folders/${currentFolder.parentFolder}`,
                    {
                        headers: {
                            authorization: `${sessionStorage.getItem('token')}`
                        }
                    }
                );
                if (res.data.folders.length > 0) {
                    setCurrentFolder(res.data.folders[0]);
                } else {
                    setCurrentFolder({ _id: "", name: "All Notes", userId: "", parentFolder: "" });
                }
            } catch (error) {
                setCurrentFolder({ _id: "", name: "All Notes", userId: "", parentFolder: "" });
            }
        } else {
            setCurrentFolder({ _id: "", name: "All Notes", userId: "", parentFolder: "" });
        }
    };

    async function deleteFolderHandler(folderId: string) {
        const res = await axios.delete(`${BASE_URL}/delete-folder?folderId=${folderId}`,{
            headers: {
                authorization: `${sessionStorage.getItem('token')}`
            }
        })
        if (res.status == 200) {
            setFolders(folders.filter((f: Folder) => f._id !== folderId))
        }

    }

    async function deleteContentHandler(id: string) {
        const res = await axios.delete(`${BASE_URL}/delete-content?id=${id}`,{
            headers: {
                authorization: `${sessionStorage.getItem('token')}`
            }
        })
        if (res.status == 200) {
            
            setContents(contents.filter((c: Content) => c._id !== id))
        }
    }

    return <div>
        {screenWidth < 768 ? 
            <div className='bg-blue2 min-h-screen'>
                <HeaderMobile />
                <ScrollTags />
                <div className="box-border px-[16px]">
                    <div className="pt-[126px] relative mt-[10px] text-[20px] text-white font-semibold mb-[10px] flex items-center">
                        <span>{currentFolder.name}</span>
                        {currentFolder.name !== "All Notes" && (
                            <img 
                                onClick={handleBackClick}
                                className="ml-3 w-[20px] h-[20px] cursor-pointer transform rotate-180" 
                                src="../../Assets/icons8-arrow-50.png" 
                                alt="back"
                            />
                        )}
                    </div>
                    <Folders 
                        folders={folders} 
                        deleteFolderHandler={deleteFolderHandler}
                    />
                    <div className="flex flex-col items-center">
                        {contents.map((content: Content) => (
                            <ContentCardMobile 
                                deleteContentHandler={deleteContentHandler} 
                                key={content._id} 
                                name={content.title} 
                                tags={content.tags || []} 
                                type={content.contentType} 
                                description={content.description || ""} 
                                folder={content.folder || ""} 
                                id={content._id}
                                links={content.links}
                            />
                        ))}
                    </div>
                </div></div>
            :
            <div className="bg-blue2 min-h-screen w-full overflow-y-auto">
                <SideBar />
                <div className={`${!sidebar ? "ml-[15%] mid:ml-[10%]" : "ml-[30%] mid:ml-[20%]"} box-border relative h-screen overflow-y-auto`}>
                    <div className="sticky top-0 z-50 bg-blue2 pt-[35px] px-[24px] h-[90px]">
                        <HeaderMain />
                    </div>
                    <div className="px-[24px]">
                        <div className="mt-[33px] text-[24px] text-white font-semibold mb-[25px] flex items-center">
                            <span>{currentFolder.name}</span>
                            {currentFolder.name !== "All Notes" && (
                                <img 
                                    onClick={handleBackClick}
                                    className="ml-3 w-[15px] h-[15px] cursor-pointer " 
                                    src="../../Assets/icons8-arrow-50.png" 
                                    alt="back"
                                />



                            )}
                        </div>
                        <div className={`grid grid-cols-3 gap-5 ${!sidebar ? "tablet:grid-cols-3 mid:grid-cols-5 laptop:grid-cols-7" : "tablet:grid-cols-2 tablet:gap-6 mid:grid-cols-4 laptop:grid-cols-5"} tablet:gap-5 mb-[25px]`}>
                            {folders.map((folder: Folder) => (
                                <FolderButtons 
                                    key={folder._id} 
                                    color="bgrey" 
                                    icon="folder" 
                                    text={folder.name} 
                                    id={folder._id}
                                    deleteFolderHandler={deleteFolderHandler}
                                />
                            ))}
                        </div>
                        <div className={`grid grid-cols-2 gap-5  ${!sidebar ? "tablet:grid-cols-2 mid:grid-cols-3 laptop:grid-cols-4" : " tablet:grid-cols-1 tablet:gap-6 mid:grid-cols-2 laptop:grid-cols-3"} tablet:gap-8 `}>
                            {contents.map((content: Content) => (
                                <ContentCardMobile 
                                    deleteContentHandler={deleteContentHandler} 
                                    key={content._id} 
                                    name={content.title} 
                                    tags={content.tags || []} 
                                    type={content.contentType} 
                                    description={content.description || ""} 
                                    folder={content.folder || ""} 
                                    id={content._id}
                                    links={content.links}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        }
        {contentDialogBox && 
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-blue2/90">
                <AddContent folder={currentFolder._id} />
            </div>
        }
        {folderDialogBox &&
            <div className="fixed z-50 inset-0 flex items-center justify-center bg-blue2/90">
                <AddFolder />
            </div>
        }
    </div>
}


export default MainPage
