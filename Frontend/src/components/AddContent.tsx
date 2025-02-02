import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../App.tsx";

export function AddContent({ setContentDialogBox, contentDialogBox,folder }: { setContentDialogBox: (value: boolean) => void, contentDialogBox: boolean,folder:string }) {
    const [contentData, setContentData] = useState({title:"",type:"",description:"",link:"",tags:"",folder:folder })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            await axios.post(`${BASE_URL}/add-content?folder=${folder}`,contentData)
            clearContentData()
            setContentDialogBox(!contentDialogBox)
        }catch(error){
            alert(error)
        }

    }
    const clearContentData = () => {
        setContentData({title:"",type:"",description:"",link:"",tags:"",folder:folder })
        setContentDialogBox(!contentDialogBox)
    }
    return <>
        <div>

            <form onSubmit={handleSubmit} className="relative z-20">
                <div className="flex flex-col w-[308px] tablet:w-[413px] min-h-[320px] max-h-[100vh] tablet:min-h-[450px] bg-blue3 rounded-[10px] p-[20px] tablet:px-[40px] tablet:py-[50px] border-white border-[1px] ">
                    <h1 className="text-center text-[20px] tablet:text-[32px] font-bold text-white">Add Content</h1>
                    <label htmlFor="title" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Title</label>
                    <input type="text" placeholder="eg. My first note" id="title" className="bg-bgrey rounded-[5px] mb-[25px] p-[10px] text-[10px] tablet:text-[16px] h-[35px] tablet:h-[50px] w-full text-white/30" />
                    <label htmlFor="type" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Type</label>
                    <select onChange={(e) => setContentData({...contentData,type:e.target.value})} id="type" className="bg-bgrey rounded-[5px] p-[10px]  text-[10px] tablet:text-[16px] h-[35px] tablet:h-[50px] w-full text-white/30 mb-[25px]">
                        <option value="Select Type" disabled selected>Select Type</option>
                        <option value="text">Text</option>
                        <option value="music">Music</option>
                        <option value="video">Video</option>
                        <option value="insta">Instagram</option>
                        <option value="twitter">Twitter</option>
                        <option value="link">Link</option>
                        <option value="document">Document</option>
                    </select>
                    {contentData.type == "text" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="textDescription" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Description</label>
                        <textarea onChange={(e) => setContentData({...contentData,description:e.target.value})} onInput={(e) => setContentData({...contentData,description:e.currentTarget.value})} placeholder="write your note here..." id="textDescription" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[60px] tablet:h-[80px] w-full text-white/30" />
                    </div> : null}

                    {contentData.type == "music" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="musicLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Music Link</label>
                        <input type="text" onChange={(e) => setContentData({...contentData,link:e.target.value})} onInput={(e) => setContentData({...contentData,link:e.currentTarget.value})} placeholder="Spotify/Apple Music/Youtube Music Link" id="musicLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}


                    {contentData.type == "video" ? <div className="flex flex-col mb-[25px] ">
                        <label htmlFor="videoLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Video Link</label>
                        <input type="text" onChange={(e) => setContentData({...contentData,link:e.target.value})} onInput={(e) => setContentData({...contentData,link:e.currentTarget.value})} placeholder="Youtube Video Link" id="videoLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}

                    {contentData.type == "insta" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="instaLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Instagram Link</label>
                        <input type="text" onChange={(e) => setContentData({...contentData,link:e.target.value})} onInput={(e) => setContentData({...contentData,link:e.currentTarget.value})} placeholder="Instagram Post/Reel Link" id="instaLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}

                    {contentData.type == "twitter" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="twitterLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Twitter Link</label>
                        <input type="text" onChange={(e) => setContentData({...contentData,link:e.target.value})} onInput={(e) => setContentData({...contentData,link:e.currentTarget.value})} placeholder="Twitter Link" id="twitterLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}

                    {contentData.type == "link" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="randomLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Link</label>
                        <input type="text" onChange={(e) => setContentData({...contentData,link:e.target.value})} onInput={(e) => setContentData({...contentData,link:e.currentTarget.value})} placeholder="Paste Link Here" id="randomLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}

                    {contentData.type == "document" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="documentLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Document</label>
                        <input type="text" onChange={(e) => setContentData({...contentData,link:e.target.value})} onInput={(e) => setContentData({...contentData,link:e.currentTarget.value})} placeholder="Paste Link Here" id="documentLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}

                    <label htmlFor="tags" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Tags</label>
                    <input type="text" onChange={(e) => setContentData({...contentData,tags:e.target.value})} onInput={(e) => setContentData({...contentData,tags:e.currentTarget.value})} placeholder="Enter Tags (separated by commas )" id="tags" className="bg-bgrey mb-[25px] rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />

                    <div className="flex w-full justify-between items-center">
                        <button onClick={clearContentData} className="flex justify-center items-center bg-bgrey rounded-[5px] w-[120px] h-[40px] tablet:w-[160px] tablet:h-[55px] text-white text-center tablet:text-[20px]">Cancel</button>
                        <button type="submit" className="flex justify-center items-center bg-btn-color rounded-[5px] w-[120px] h-[40px] tablet:w-[160px] tablet:h-[55px] text-white tablet:text-[20px]">Add Content</button>
                    </div>


                </div>
            </form>
        </div>




    </>
}

export default AddContent;
