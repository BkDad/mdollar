/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 21:52:43
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 21:55:09
 */
import { ref, onMounted, onUnmounted } from "vue";

export const useOnlineStatus = () => {
    const isOnline = ref(navigator.onLine);
    const onlineHandler = () => {
        isOnline.value = true;
    };

    const offlineHandler = () => {
        isOnline.value = false;
    };
    onMounted(() => {


        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);
    });

    onUnmounted(() => {
        window.removeEventListener("online", onlineHandler);
        window.removeEventListener("offline", offlineHandler);
    });

    return isOnline;
};