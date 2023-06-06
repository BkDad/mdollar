// @ts-ignore
import { ref, onMounted, onUnmounted } from "vue-demi";


export const useClipboard = () => {
    const copiedText = ref("");
    const copyError = ref<string | null>(null);
    /**
     * 
     * @param options text:需要复制的文本  success 复制成功回调函数  fail：复制失败回调函数
     */
    const copyText = async (options: { text: string, success?: () => void, fail?: () => void }) => {
        try {
            await navigator.clipboard.writeText(options.text);
            copiedText.value = options.text;
            copyError.value = null;
            options.success?.()
        } catch (error) {
            copiedText.value = "";
            copyError.value = (error as any).message;
            options.fail?.()
        }
    };

    const copyHandler = (e: ClipboardEvent) => {
        if (e.clipboardData) {
            copiedText.value = e.clipboardData.getData("text/plain");
        }
    };

    const errorHandler = (e: ErrorEvent) => {
        copyError.value = e.message;
    };

    onMounted(() => {
        document.addEventListener("copy", copyHandler);
        document.addEventListener("error", errorHandler);
    });

    onUnmounted(() => {
        document.removeEventListener("copy", copyHandler);
        document.removeEventListener("error", errorHandler);
    });

    return { copyText, copiedText, copyError };
};