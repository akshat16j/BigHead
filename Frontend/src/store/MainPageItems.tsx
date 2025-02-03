import { atom } from 'recoil';

export interface Content {
    _id: string;
    title: string;
    contentType: string;
    links?: string;
    description?: string;
    tags?: string[];
    createdAt: string;
    updatedAt: string;
    userId: string;
    folder: string;
}

export interface Folder {
    _id: string;
    name: string;
    userId: string;
    parentFolder: string;
}

export const sidebarState = atom({
    key: 'sidebarState',
    default: false
});

export const contentsState = atom({
    key: 'contentsState',
    default: []
});

export const foldersState = atom({
    key: 'foldersState',
    default: []
});

export const currentFolderState = atom({
    key: 'currentFolderState',
    default: { _id: "", name: "All Notes", userId: "", parentFolder: "" }
});


export const contentDialogBoxState = atom({
    key: 'contentDialogBoxState',
    default: false
});

export const folderDialogBoxState = atom({
    key: 'folderDialogBoxState',
    default: false
});

export const refreshState = atom({
    key: 'refreshState',
    default: false
});
