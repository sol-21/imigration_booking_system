import { create } from "zustand";

//notification listen
// nottification store
export const UseNotificationStore = create((set) => ({
    notificationData: [],
    isSeen: false,
    changeSeen: () => set((state) => ({ isSeen: !state.isSeen })),
    setData: (data) => set(() => ({ notificationData: data })),
}));
