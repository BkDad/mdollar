/*
 * @Description: 
 * @Autor: 万洲
 * @Date: 2023-04-02 21:55:42
 * @LastEditors: 万洲
 * @LastEditTime: 2023-04-02 21:55:42
 */
import { ref, onMounted, onUnmounted } from "vue";

export const useIntersectionObserver = (
    element: HTMLElement,
    options: IntersectionObserverInit
) => {
    const isIntersecting = ref(false);
    const observer = new IntersectionObserver((entries) => {
        isIntersecting.value = entries[0].isIntersecting;
    }, options);
    
    onMounted(() => {
        observer.observe(element);
    });

    onUnmounted(() => {
        observer.unobserve(element);
    });

    return isIntersecting;
};
