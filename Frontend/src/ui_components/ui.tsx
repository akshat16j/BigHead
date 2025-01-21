import React from "react"

export function PrimaryButtonSmall({ text }: { text: string}){
  return <div >
    <button className={`bg-btn-color text-[16px] tablet:text-[20px] text-white rounded-full px-5 tablet:px-[51px] tablet:py-[12px]`}>{text}</button>
  </div>
}
  
export function PrimaryButtonLarge({text}:{text:string}){
  return <div className='flex justify-center items-center' >
  <button className={`bg-btn-color text-[18px] tablet:text-[24px]  text-white rounded-full px-6 tablet:py-[18px] py-2 tablet:w-[220px] `}>{text}</button>
  </div>
}

export default {PrimaryButtonLarge, PrimaryButtonSmall}