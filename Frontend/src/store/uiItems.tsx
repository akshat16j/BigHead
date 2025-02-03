import { atom } from 'recoil';

export const showMenuState = atom({
    key: 'showMenuState',
    default: false
});

export const menuRefState = atom({
    key: 'menuRefState',
    default: null
});

export const screenWidthState = atom({
    key: 'screenWidthState',
    default: window.innerWidth
});

export const activeMenuFolderState = atom({
    key: 'activeMenuFolderState',
    default: ''
}); 