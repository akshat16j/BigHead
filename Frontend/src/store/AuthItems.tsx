import { atom } from 'recoil';

export const usernameState = atom({
    key: 'usernameState',
    default: ''
});

export const passwordState = atom({
    key: 'passwordState',
    default: ''
});

export const errorMessageState = atom({
    key: 'errorMessageState',
    default: ''
});

export const successMessageState = atom({
    key: 'successMessageState',
    default: ''
}); 