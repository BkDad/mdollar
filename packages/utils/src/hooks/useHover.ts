/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 21:56:35
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 21:56:35
 */
// @ts-ignore
import { ref, onMounted, onUnmounted, Ref, watch } from "vue";

/**
 * 监听元素hover状态
 * @param element 
 * @returns 
 */
export const useHover = (element: Ref<HTMLElement>) => {
    const isHovering = ref(false);
    const mouseEnterHandler = () => {
        isHovering.value = true;
    };
    const mouseLeaveHandler = () => {
        isHovering.value = false;
    };
    const onHoverChange = (callback: (value: boolean) => void) => {
        // 使用watchEffect或watch来监听isHovering的变化
        watch(isHovering,() => {
            // 调用回调函数，并传入当前的isHovering值
            callback(isHovering.value);
        });
    };
    onMounted(() => {
        element.value.addEventListener("mouseenter", mouseEnterHandler);
        element.value.addEventListener("mouseleave", mouseLeaveHandler);
    });

    onUnmounted(() => {
        element.value.removeEventListener("mouseenter", mouseEnterHandler);
        element.value.removeEventListener("mouseleave", mouseLeaveHandler);
    });

    return { isHovering, onHoverChange };
};