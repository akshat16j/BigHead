import { useRecoilState } from "recoil";
import axios from "axios";
import { BASE_URL } from "../App.tsx";
import { folderDialogBoxState, refreshState, currentFolderState } from "../store/MainPageItems";
import { folderNameState } from "../store/FolderItems";

export function AddFolder() {
    const [folderDialogBox, setFolderDialogBox] = useRecoilState(folderDialogBoxState);
    const [refresh, setRefresh] = useRecoilState(refreshState);
    const [currentFolder] = useRecoilState(currentFolderState);
    const [folderName, setFolderName] = useRecoilState(folderNameState);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${BASE_URL}/add-folder?folder=${folderName}`, {
                parentFolder: currentFolder._id
            }, {
                headers: {
                    authorization: `${sessionStorage.getItem('token')}`
                }
            });
            if (res.status == 200) {
                clearFolderName();
                setFolderDialogBox(!folderDialogBox);
                setRefresh(!refresh);
            }
        } catch (error) {
            alert(error);
        }
    };

    const clearFolderName = () => {
        setFolderName("");
        setFolderDialogBox(!folderDialogBox);
    };

    return <>
        <div>
            <form onSubmit={handleSubmit} className="relative z-20">
                <div className="flex flex-col w-[308px] tablet:w-[413px] h-[270px] tablet:h-[350px] bg-blue3 rounded-[10px] p-[20px] tablet:px-[40px] tablet:py-[50px] border-white border-[1px] ">
                    <h1 className="text-center text-[20px] tablet:text-[32px] font-bold text-white mb-[20px]">Add Folder</h1>
                    <label htmlFor="folderName" className="text-[16px] tablet:text-[20px] text-white mb-[10px]">Folder Name</label>
                    <input onChange={(e) => setFolderName(e.target.value)} onInput={(e) => setFolderName(e.currentTarget.value)} type="text" placeholder="eg. ProjectX" id="folderName" className="bg-bgrey rounded-[5px] mb-[25px] p-[10px] text-[10px] tablet:text-[16px] h-[35px] tablet:h-[50px] w-full text-white/30" />
                    <div className="flex w-full justify-between items-center">
                        <button onClick={clearFolderName} className="flex justify-center items-center bg-bgrey rounded-[5px] w-[120px] h-[40px] tablet:w-[160px] tablet:h-[55px] text-white text-center tablet:text-[20px]">Cancel</button>
                        <button type="submit" className="flex justify-center items-center bg-btn-color rounded-[5px] w-[120px] h-[40px] tablet:w-[160px] tablet:h-[55px] text-white tablet:text-[20px]">Add Folder</button>
                    </div>
                </div>
            </form>
        </div>
    </>
}
export default AddFolder;
