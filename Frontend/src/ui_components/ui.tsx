import React from "react"
import { Link } from "react-router-dom"


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


export function HeaderMain({ sidebar, screenWidth, logoClickHandler }: { sidebar: boolean, screenWidth: number, logoClickHandler: () => void }) {
  return <div className="w-full sticky top-0 z-50 bg-blue2">
    {!sidebar ? <div className="flex justify-between items-center w-full ">
      <Link to={"/dashboard"}>
        <div onClick={logoClickHandler} className="cursor-pointer flex items-center">

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
        <MainPageButtons color="btn-color" icon="plus" text="Add Content"></MainPageButtons>
      </div>
    </div> : <div className="flex justify-end items-center sticky top-0 z-50 bg-blue2">
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
export function FolderButtons({ color, icon, text, setFolder }: { color: string, icon: string, text: string, setFolder: Function }) {
  function folderChangeHandler() {
    setFolder(text)
  }
  return <div onClick={folderChangeHandler} className={`cursor-pointer flex items-center justify-center rounded-[5px] w-[170px] h-[45px] text-ellipsis overflow-hidden box-border px-[8px] bg-${color}`}>
    {icon == "share" ? <img className="invert h-[22px] w-[22px] mr-[9px]" src="../../Assets/share.svg" /> :

      <img className={`h-[20px] w-[20px] mr-[9px]`} src={`../../Assets/icons8-${icon}-50.png`} />}
    <div className="text-[16px] text-white">{text}</div>
  </div>
}
export function ScrollTags() {
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

export function Tag({ tag }: { tag: string }) {
  return <div className="bg-bgrey rounded-[5px] px-[11px] py-[7px] text-[12px] text-white mr-[7px]">
    {tag}
  </div>
}

export function Folders({ folders }: { folders: string[] }) {
  return <div className="grid grid-cols-3 gap-4 mb-[30px]">
    {folders.map((folder) => (
      <FolderCardMobile key={folder} name={folder}></FolderCardMobile>
    ))}
  </div>
}


export function FolderCardMobile({ name }: { name: string }) {
  return <div className="flex justify-center py-[10px] items-center bg-bgrey rounded-[5px]">
    <img className="h-[15px] w-[15px] mr-[5px]" src="../../Assets/icons8-folder-50.png" alt="folder" />
    <div className="text-[10px] text-white">{name}</div>
  </div>
}

export function ContentCardMobile({ name, tags, type, description,folder }: { name: string, tags: string[], type: string, description: string,folder:string }) {
  let icon = ""
  if (type == "youtube") {
    icon = "icons8-youtube-50.png"
  } else if (type == "instagram") {
    icon = "instagram.png"
  } else if (type == "music") {
    icon = "icons8-airpods-pro-max-50.png"
  } else if (type == "tweet") {
    icon = "twitter.png"
  } else if (type == "link") {
    icon = "icons8-link-50.png"
  } else if (type == "document") {
    icon = "icons8-document-50.png"
  } else if (type == "text") {
    icon = "icons8-document-50.png"
  }
  return <div className="flex flex-col items-center box-border w-[300px] h-[245px] bg-blue3 mb-[20px] rounded-[5px] px-[14px] py-[14px]">
    <div className="flex flex-row w-full justify-between mb-[11px]">

      <div className="flex items-center">
        <img className="w-[20px] h-[20px] mr-[9px]" src={`../../Assets/${icon}`} />
        <div className="text-[12px] text-white font-semibold text-ellipsis h-[21px] overflow-hidden w-[200px]" >{name}</div>
      </div>
      <div className="flex items-center">

        <img className="invert w-[15px] h-[15px] mr-[16px]" src="../../Assets/share.svg" />
        <img className="w-[15px] h-[15px]" src="../../Assets/icons8-delete-50.png" />
      </div>
    </div>
    <div className="bg-blue1 text-gray-100 text-[12px] w-[260px] h-[147px] rounded-[5px] mb-[11px] box-border px-4 py-2 overflow-hidden text-ellipsis">
      {type == "text" ? description : ""}
      {type == "youtube" ? <img src={`../../Assets/screenshot.png`} alt="youtube" /> : ""}
      {type == "instagram" ? <img src={`../../Assets/screenshot.png`} alt="instagram" /> : ""}
      {type == "music" ? <img src={`../../Assets/screenshot.png`} alt="music" /> : ""}
      {type == "tweet" ? <img src={`../../Assets/screenshot.png`} alt="tweet" /> : ""}
      {type == "link" ? <img src={`../../Assets/screenshot.png`} alt="link" /> : ""}
      {type == "document" ? <img src={`../../Assets/screenshot.png`} alt="document" /> : ""}
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