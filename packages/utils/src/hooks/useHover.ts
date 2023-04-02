/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 21:56:35
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 21:56:35
 */
import { ref, onMounted, onUnmounted } from "vue";

export const useHover = (element: HTMLElement) => {
    const isHovering = ref(false);
    const mouseEnterHandler = () => {
        isHovering.value = true;
    };

    const mouseLeaveHandler = () => {
        isHovering.value = false;
    };
    onMounted(() => {


        element.addEventListener("mouseenter", mouseEnterHandler);
        element.addEventListener("mouseleave", mouseLeaveHandler);
    });

    onUnmounted(() => {
        element.removeEventListener("mouseenter", mouseEnterHandler);
        element.removeEventListener("mouseleave", mouseLeaveHandler);
    });

    return isHovering;
};