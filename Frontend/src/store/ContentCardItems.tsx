import { atom } from 'recoil';

export const selectedContentState = atom({
    key: 'selectedContentState',
    default: null
});

export const contentTypeIconState = atom({
    key: 'contentTypeIconState',
    default: ''
}); 