import { useRecoilState } from "recoil";
import axios from "axios";
import { BASE_URL } from "../App.tsx";
import { contentDialogBoxState, refreshState } from "../store/MainPageItems";
import { contentDataState } from "../store/ContentItems";
import { checkLink } from "./Embeds";

interface AddContentProps {
    folder: string;
}

interface ContentData {
    title: string;
    contentType: string;
    description?: string;
    links?: string;
    tags: string[];
    folder: string | null;
}

export function AddContent({ folder }: AddContentProps) {
    const [contentDialogBox, setContentDialogBox] = useRecoilState(contentDialogBoxState);
    const [refresh, setRefresh] = useRecoilState(refreshState);
    const [contentData, setContentData] = useRecoilState(contentDataState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const submitData: ContentData = {
            title: contentData.title,
            contentType: contentData.contentType,
            description: contentData.description || '',
            links: contentData.links || '',
            tags: Array.isArray(contentData.tags) ? contentData.tags : contentData.tags.split(',').map((tag: string) => tag.trim()),
            folder: folder || null  // Make sure folder is handled properly

        };

        const link = checkLink(submitData.links, submitData.contentType);
        if (link == "1") {
            alert(`Invalid ${submitData.contentType} Link!`);
            clearContentData();
            setContentDialogBox(!contentDialogBox);
            return;
        } else {
            submitData.links = link;
        }



        console.log('Submitting:', submitData);

        try {
            const res = await axios.post(
                `${BASE_URL}/add-content${folder ? `?folder=${folder}` : ''}`,  // Only add folder query if it exists
                submitData,
                {
                    headers: {
                        authorization: `${sessionStorage.getItem('token')}`
                    }
                }
            );
            if (res.status === 200) {
                clearContentData();
                setContentDialogBox(!contentDialogBox);
                setRefresh(!refresh);
            }
        } catch (error: any) {
            console.error('Full error:', error.response?.data);  // Log full error response
            console.error('Status:', error.response?.status);
            console.error('Data being sent:', submitData);  // Log what we're trying to send
            alert(error.response?.data?.message || 'Error adding content');
        }
    };

    const handleInputChange = (field: string, value: string) => {
        setContentData((prev: typeof contentData) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleTagsChange = (value: string) => {
        const tagsArray = value.split(',').map((tag: string) => tag.trim());
        setContentData((prev: typeof contentData) => ({
            ...prev,
            tags: tagsArray
        }));
    };

    const clearContentData = () => {
        setContentData({ title: "", contentType: "", description: "", links: "", tags: [], folder: folder });
        setContentDialogBox(!contentDialogBox);
    };

    return <>
        <div>

            <form onSubmit={handleSubmit} className="relative z-20">
                <div className="flex flex-col w-[308px] tablet:w-[413px] min-h-[320px] max-h-[100vh] tablet:min-h-[450px] bg-blue3 rounded-[10px] p-[20px] tablet:px-[40px] tablet:py-[50px] border-white border-[1px] ">
                    <h1 className="text-center text-[20px] tablet:text-[32px] font-bold text-white">Add Content</h1>
                    <label htmlFor="title" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Title</label>
                    <input onChange={(e) => handleInputChange('title', e.target.value)} onInput={(e) => handleInputChange('title', e.currentTarget.value)} type="text" placeholder="eg. My first note" id="title" className="bg-bgrey rounded-[5px] mb-[25px] p-[10px] text-[10px] tablet:text-[16px] h-[35px] tablet:h-[50px] w-full text-white/30" />
                    <label htmlFor="type" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Type</label>
                    <select
                        onChange={(e) => handleInputChange('contentType', e.target.value)}
                        id="type"
                        className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[35px] tablet:h-[50px] w-full text-white/30 mb-[25px]"
                        required
                    >
                        <option value="text" disabled selected>Select Type</option>
                        <option value="video">Video</option>
                        <option value="insta">Instagram</option>
                        <option value="music">Music</option>
                        <option value="links">Links</option>
                        <option value="document">Document</option>
                        <option value="text">Text</option>

                        <option value="tweets">Tweets</option>

                    </select>
                    {contentData.contentType == "text" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="textDescription" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Description</label>
                        <textarea onChange={(e) => handleInputChange('description', e.target.value)} onInput={(e) => handleInputChange('description', e.currentTarget.value)} placeholder="write your note here..." id="textDescription" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[60px] tablet:h-[80px] w-full text-white/30" />
                    </div> : null}

                    {contentData.contentType == "music" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="musicLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Music Link</label>
                        <input type="text" onChange={(e) => handleInputChange('links', e.target.value)} onPaste={(e) => {
                            const pastedText = e.clipboardData.getData("text");
                            setTimeout(() => handleInputChange('links', pastedText), 0);
                        }}

                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleInputChange('links', e.currentTarget.value);
                                }

                            }} placeholder="Spotify/Apple Music/Youtube Music Link" id="musicLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}


                    {contentData.contentType == "video" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="videoLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Video Link</label>
                        <input
                            type="text"
                            onChange={(e) => handleInputChange('links', e.target.value)}
                            onPaste={(e) => {
                                const pastedText = e.clipboardData.getData("text");
                                setTimeout(() => handleInputChange('links', pastedText), 0);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleInputChange('links', e.currentTarget.value);
                                }
                            }}
                            placeholder="Youtube Video Link"
                            id="videoLink"
                            className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30"
                        />
                    </div> : null}

                    {contentData.contentType == "insta" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="instaLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Instagram Link</label>
                        <input type="text" onChange={(e) => handleInputChange('links', e.target.value)} onPaste={(e) => {
                            const pastedText = e.clipboardData.getData("text");
                            setTimeout(() => handleInputChange('links', pastedText), 0);
                        }}

                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleInputChange('links', e.currentTarget.value);
                                }
                            }} placeholder="Instagram Post/Reel Link" id="instaLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}

                    {contentData.contentType == "tweets" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="twitterLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Twitter Link</label>
                        <input type="text" onChange={(e) => handleInputChange('links', e.target.value)} onPaste={(e) => {
                            const pastedText = e.clipboardData.getData("text");
                            setTimeout(() => handleInputChange('links', pastedText), 0);
                        }}

                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleInputChange('links', e.currentTarget.value);
                                }

                            }} placeholder="Twitter Link" id="twitterLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}

                    {contentData.contentType == "links" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="randomLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Link</label>

                        <input type="text" onChange={(e) => handleInputChange('links', e.target.value)} onPaste={(e) => {
                            const pastedText = e.clipboardData.getData("text");
                            setTimeout(() => handleInputChange('links', pastedText), 0);
                        }}

                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleInputChange('links', e.currentTarget.value);
                                }
                            }} placeholder="Paste Link Here" id="randomLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />
                    </div> : null}


                    {contentData.contentType == "document" ? <div className="flex flex-col mb-[25px]">
                        <label htmlFor="documentLink" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Document</label>
                        <input type="text" onChange={(e) => handleInputChange('links', e.target.value)} onPaste={(e) => {
                            const pastedText = e.clipboardData.getData("text");
                            setTimeout(() => handleInputChange('links', pastedText), 0);
                        }}

                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    handleInputChange('links', e.currentTarget.value);
                                }
                            }} placeholder="Paste Link Here" id="documentLink" className="bg-bgrey rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />

                    </div> : null}

                    <label htmlFor="tags" className="text-[16px] tablet:text-[20px] text-white mb-[5px]">Tags</label>
                    <input type="text" value={contentData.tags.join(',')} onChange={(e) => handleTagsChange(e.target.value)} placeholder="Enter Tags (separated by commas )" id="tags" className="bg-bgrey mb-[25px] rounded-[5px] p-[10px] text-[10px] tablet:text-[16px] h-[30px] tablet:h-[50px] w-full text-white/30" />

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
