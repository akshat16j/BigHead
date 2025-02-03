import { Link } from "react-router-dom"
import { MoreVertical } from "lucide-react";
import { BASE_URL } from "../App";
import { useRecoilState } from 'recoil';
import { showMenuState, screenWidthState, activeMenuFolderState } from '../store/uiItems';
import { refreshState, currentFolderState, contentDialogBoxState, sidebarState, folderDialogBoxState, Folder } from '../store/MainPageItems';
import axios from 'axios';
import { useRef, useEffect } from 'react';
import { InstagramEmbed, MusicEmbed, TweetsEmbed, YoutubeEmbed } from "../components/Embeds";
import { useRecoilValue } from "recoil";


export function PrimaryButtonSmall({ text }: { text: string }) {
  return <div >
    <button className={`bg-btn-color text-[16px] tablet:text-[20px] text-white rounded-full px-5 tablet:px-[51px] tablet:py-[12px]`}>{text}</button>
  </div>
}

export function PrimaryButtonLarge({ text }: { text: string }) {
  return <div className='flex justify-center items-center' >
    <button className={`bg-btn-color text-[18px] tablet:text-[24px]  text-white rounded-full px-6 tablet:py-[18px] py-2 tablet:w-[220px] `}>{text}</button>
  </div>
}
export function HeaderMobile() {
  const [contentDialogBox, setContentDialogBox] = useRecoilState(contentDialogBoxState);
  const [, setCurrentFolder] = useRecoilState(currentFolderState);

  const handleLogoClick = () => {
    setCurrentFolder({ _id: "", name: "All Notes", userId: "", parentFolder: "" });
  };

  return (
    <div className='flex z-10 top-0 bg-blue3 justify-between fixed w-full items-center h-[70px] tablet:h-[151px] laptop:h-[141px] desktop:h-[154px] box-border p-[24px] tablet:p-[42px] laptop:px-[112px] desktop:px-[140px]'>
      <Link to="/dashboard">
        <div onClick={handleLogoClick} className="cursor-pointer flex items-center">
          <img src="../Assets/icons8-brain-64.png" className='w-[32px] tablet:w-[64px] h-[32px] tablet:h-[64px] laptop:h-[72px] laptop:w-[72px] mr-[4px] tablet:mr-[13px]' alt="logo" />
          <div className='text-white font-inter text-[22px] tablet:text-[40px] laptop:text-[44px] font-semibold tracking-tightest'>BigHead</div>
        </div>
      </Link>
      <div className="flex justify-between w-[157px] items-center">
        <img className="invert w-[20px] h-[20px]" src="../../Assets/share.svg" alt="share" />
        <img className="w-[23px] h-[23px]" src="../../Assets/icons8-search-50.png" alt="search" />
        <img onClick={() => setContentDialogBox(!contentDialogBox)} className="w-[30px] h-[30px]" src="../../Assets/icons8-plus-50.png" alt="add" />
        <img className="invert w-[23px] h-[23px]" src="../../Assets/logout.svg" alt="logout" />
      </div>
    </div>
  );
}


export function HeaderMain() {
  const [sidebar] = useRecoilState(sidebarState);
  const [contentDialogBox, setContentDialogBox] = useRecoilState(contentDialogBoxState);
  const [screenWidth] = useRecoilState(screenWidthState);
  const [, setCurrentFolder] = useRecoilState(currentFolderState);

  const handleLogoClick = () => {
    setCurrentFolder({ _id: "", name: "All Notes", userId: "", parentFolder: "" });
  };

  return <div className="w-full sticky top-0 z-20 bg-blue2">
    {!sidebar ? <div className="flex justify-between items-center w-full ">
      <Link to="/dashboard">
        <div onClick={handleLogoClick} className="cursor-pointer flex items-center">
          <img className="w-[35px] h-[35px] mr-[7px]" src="../../Assets/icons8-brain-64.png" alt="logo" />
          <div className="text-[24px] tracking-tightest font-medium text-white">BigHead</div>
        </div>
      </Link>
      <div className="flex items-center justify-end flex-1 ml-8">
        <div className="flex justify-center items-center box-border w-[230px] mr-[10px] ml-[10px] h-[45px] bg-bgrey rounded-[5px]">
          <img className="w-[22px] h-[22px] opacity-30 mr-[10px] ml-[10px]" src="../../Assets/icons8-search-50.png" alt="search" />
          <input className="box-border w-full h-[45px] bg-transparent text-white px-2 overflow-hidden text-ellipsis" type="text" placeholder="Search" />
        </div>
        {screenWidth >= 1028 ? <div className="mr-[10px]"><MainPageButtons color="bgrey" icon="share" text="Share Head"></MainPageButtons></div> :
          <div className=" flex justify-center items-center w-[63px] mr-[10px] h-[45px] bg-bgrey rounded-[5px] ">
            <img className="invert w-[20px] h-[20px]" src="../../Assets/share.svg" alt="share" />
          </div>
        }
        <div onClick={() => setContentDialogBox(!contentDialogBox)}><MainPageButtons color="btn-color" icon="plus" text="Add Content"></MainPageButtons></div>
      </div>
    </div> : <div className="flex justify-end items-center sticky top-0 z-20 bg-blue2">
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
        <div onClick={() => setContentDialogBox(!contentDialogBox)}><MainPageButtons color="btn-color" icon="plus" text="Add Content"></MainPageButtons></div>
      </div>
    </div>
    }
  </div>
}

export function MainPageButtons({ color, icon, text }: { color: string, icon: string, text: string }) {
  return <div className={`cursor-pointer flex items-center justify-center rounded-[5px] w-[170px] h-[45px] text-ellipsis overflow-hidden box-border px-[8px] bg-${color}`}>
    {icon == "share" ? <img className="invert h-[22px] w-[22px] mr-[9px]" src="../../Assets/share.svg" /> :

      <img className={`h-[20px] w-[20px] mr-[9px]`} src={`../../Assets/icons8-${icon}-50.png`} />}
    <div className="text-[16px] text-white">{text}</div>
  </div>
}
export function FolderButtons({ color, icon, text, id, deleteFolderHandler }: {
  color: string,
  icon: string,
  text: string,
  id: string,
  deleteFolderHandler: Function
}) {
  const [activeMenuFolder, setActiveMenuFolder] = useRecoilState(activeMenuFolderState);
  const [refresh, setRefresh] = useRecoilState(refreshState);
  const [currentFolder, setCurrentFolder] = useRecoilState(currentFolderState);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenuFolder('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function folderChangeHandler() {
    setCurrentFolder({ _id: id, name: text, userId: "", parentFolder: "" });
    setRefresh(!refresh);
  }

  return (
    <div className={`cursor-pointer flex items-center justify-center rounded-[5px] w-[170px] h-[45px] text-ellipsis overflow-hidden box-border px-[8px] bg-${color}`}>
      <img onClick={folderChangeHandler} className={`h-[20px] w-[20px] mr-[9px]`} src={`../../Assets/icons8-${icon}-50.png`} />
      <div onClick={folderChangeHandler} className="text-[16px] text-white">{text}</div>
      <button
        onClick={() => setActiveMenuFolder(activeMenuFolder === id ? '' : id)}
        className="ml-[8px] text-white p-1 rounded-full hover:bg-grey"
      >
        <MoreVertical size={20} />
      </button>
      {activeMenuFolder === id && (
        <div ref={menuRef} className="absolute mt-2 translate-y-[40px] bg-blue1 shadow-lg rounded-lg min-w-[150px] z-10">
          <ul className="py-2">
            <li onClick={() => {
              deleteFolderHandler(id);
              setActiveMenuFolder('');
            }} className="px-3 hover:bg-bgrey cursor-pointer text-red-500">Delete</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export function ScrollTags() {
  const [, setFolderDialogBox] = useRecoilState(folderDialogBoxState);

  return (
    <div className="mt-[60px] z-20 bg-blue3 h-[45px] fixed flex box-border left-0 right-0 pl-[16px] py-[7px] overflow-x-auto no-scrollbar">
      <div className="bg-btn-color rounded-[5px] px-[11px] py-[7px] text-[12px] flex mr-[6px] box-border">
        <div onClick={() => setFolderDialogBox(true)} className="flex w-[35px] items-center">
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
  );
}

export function Tag({ tag }: { tag: string }) {
  return <div className="bg-bgrey rounded-[5px] px-[11px] py-[7px] text-[12px] text-white mr-[7px]">
    {tag}
  </div>
}

export function Folders({ folders, deleteFolderHandler }: {
  folders: Folder[],
  deleteFolderHandler: Function
}) {


  return <div className="grid grid-cols-3 gap-4 mb-[30px]">
    {folders.map((folder) => (
      <FolderCardMobile
        id={folder._id}
        key={folder._id}
        name={folder.name}
        deleteFolderHandler={deleteFolderHandler}
      />
    ))}
  </div>
}

export function FolderCardMobile({ id, name, deleteFolderHandler }: {
  id: string,
  name: string,
  deleteFolderHandler: Function
}) {
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);
  const [refresh, setRefresh] = useRecoilState(refreshState);
  const [currentFolder, setCurrentFolder] = useRecoilState(currentFolderState);

  function folderChangeHandler() {
    setCurrentFolder({ _id: id, name: name, userId: "", parentFolder: "" });
    setRefresh(!refresh);
  }

  return <div className="flex justify-center py-[10px] items-center bg-bgrey rounded-[5px]">
    <img onClick={folderChangeHandler} className="h-[15px] w-[15px] mr-[5px]" src="../../Assets/icons8-folder-50.png" alt="folder" />
    <div onClick={folderChangeHandler} className="text-[10px] text-white">{name}</div>
    <button
      onClick={() => setShowMenu(!showMenu)}
      className="ml-[2px] text-white p-1 rounded-full hover:bg-grey"
    >
      <MoreVertical size={20} />
    </button>
    {showMenu && (
      <div className="absolute mt-2 translate-y-[70px] bg-blue1 shadow-lg rounded-lg min-w-[150px] z-10">
        <ul className="py-2">
          <li onClick={() => deleteFolderHandler(id)} className="px-4 py-2 hover:bg-bgrey cursor-pointer text-red-500">Delete</li>
        </ul>
      </div>
    )}
  </div>
}

export function ContentCardMobile({ name, tags, type, description, folder, id, deleteContentHandler, links }: {
  name: string,
  tags: string[],
  type: string,
  description: string,
  folder: string,
  id: string,
  deleteContentHandler: Function,
  links?: string,
}) {
  console.log('Content type:', type);
  console.log('Links:', links);

  let icon = ""
  if (type == "video") {

    icon = "icons8-youtube-50.png"
  } else if (type == "insta") {
    icon = "instagram.png"

  } else if (type == "music") {
    icon = "icons8-airpods-pro-max-50.png"
  } else if (type == "tweets") {

    icon = "twitter.png"
  } else if (type == "links") {
    icon = "icons8-link-50.png"
  } else if (type == "document") {
    icon = "icons8-document-50.png"
  } else if (type == "text") {
    icon = "icons8-text-50.png"
  }

  return <div className="flex flex-col items-center box-border w-[300px] h-[245px] bg-blue3 mb-[20px] rounded-[5px] px-[14px] py-[14px]">
    <div className="flex flex-row w-full justify-between mb-[11px]">


      <div className="flex items-center">

        <img className={`${type == "insta" || type == "tweets" ? "invert w-[18px] h-[18px]" : "w-[20px] h-[20px]"} mr-[9px]`} src={`../../Assets/${icon}`} />
        <div className="text-[12px] text-white font-semibold text-ellipsis h-[21px] overflow-hidden w-[200px]" >{name}</div>

      </div>
      <div className="flex items-center">

        <img className="invert w-[15px] h-[15px] mr-[16px]" src="../../Assets/share.svg" />
        <img onClick={() => deleteContentHandler(id)} className="cursor-pointer w-[15px] h-[15px]" src="../../Assets/icons8-delete-50.png" />
      </div>
    </div>

    <div className={`bg-blue1 text-gray-100 text-[12px] w-[260px] h-[147px] rounded-[5px] mb-[11px] box-border overflow-hidden text-ellipsis ${type == "text" || type == "links" || type == "document" ? "px-4 py-2" : "px-0 py-0 "}`}>
      {type == "text" ? description : ""}



      {type == "video" && links && <YoutubeEmbed inputUrl={links} />}

      {type == "insta" && links && <InstagramEmbed inputUrl={links} />}
      {type == "music" && links && <MusicEmbed inputUrl={links} />}
      {type == "tweets" && links && <TweetsEmbed inputUrl={links} />}
      {type == "links" ? <a href={links} target="_blank" rel="noopener noreferrer">{links}</a> : ""}
      {type == "document" ? <a href={links} target="_blank" rel="noopener noreferrer">{links}</a> : ""}
    </div>
    <div className="flex w-full justify-between">





      <div className="grid grid-cols-3 gap-1">
        {tags.map((tag) => (
          <TagOnCard key={tag} text={tag}></TagOnCard>
        ))}
      </div>

      <div className="text-[9px] text-grey">
        15-11-2024
      </div>
    </div>
  </div>
}

export function TagOnCard({ text }: { text: string }) {
  return <div className="text-grey bg-blue1 text-[9px] px-[13px] py-[2px] rounded-[5px]">
    #{text}
  </div>
}

export default { PrimaryButtonLarge, PrimaryButtonSmall, HeaderMobile, HeaderMain, MainPageButtons, FolderButtons, ScrollTags, Tag, Folders, FolderCardMobile, ContentCardMobile, TagOnCard }