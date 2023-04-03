// @ts-ignore
import { onMounted, onUnmounted, Ref } from "vue";

type SwipeDirection = "left" | "right" | "none";

type SwipeCallback = (direction: SwipeDirection) => void;

export const useSwipe = (ref: Ref<HTMLDivElement | null>, callback: SwipeCallback) => {
    let startX = 0;
    let endX = 0;

    function handleTouchStart(e: TouchEvent) {
        startX = e.touches[0].clientX;
    }

    function handleTouchEnd(e: TouchEvent) {
        endX = e.changedTouches[0].clientX;
        const distance = endX - startX;
        let direction: SwipeDirection = "none";
        if (distance > 0) {
            direction = "right";
        } else if (distance < 0) {
            direction = "left";
        }
        callback(direction);
    }

    onMounted(() => {
        const element = ref.value;
        if (element) {
            element.addEventListener("touchstart", handleTouchStart);
            element.addEventListener("touchend", handleTouchEnd);
        }
    });

    onUnmounted(() => {
        const element = ref.value;
        if (element) {
            element.removeEventListener("touchstart", handleTouchStart);
            element.removeEventListener("touchend", handleTouchEnd);
        }
    });
}
