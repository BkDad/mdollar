// @ts-ignore
import { ref, onMounted, onUnmounted, watch } from "vue-demi";

/**
 * 监听用户在线状态
 * @returns 
 */
export const useOnlineStatus = () => {
    const isOnline = ref(typeof window !== 'undefined' ? navigator.onLine : true);
    const onlineHandler = () => {
        isOnline.value = true;
    };

    const offlineHandler = () => {
        isOnline.value = false;
    };
    const onOnlineChange = (callback: (value: boolean) => void) => {
        watch(isOnline, () => {
            callback(isOnline.value);
        });
    };
    onMounted(() => {
        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);
    });

    onUnmounted(() => {
        window.removeEventListener("online", onlineHandler);
        window.removeEventListener("offline", offlineHandler);
    });

    return { isOnline, onOnlineChange };
};