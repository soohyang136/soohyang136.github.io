import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist();

export const themeState = atom({
    key: "theme",
    default: "light",
    effects_UNSTABLE: [persistAtom]
});