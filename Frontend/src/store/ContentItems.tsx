import { atom } from 'recoil';

export const contentDataState = atom({
    key: 'contentDataState',
    default: {
        title: "",
        contentType: "",
        description: "",
        links: "",
        tags: [] as string[],
        folder: ""

    }
}); 