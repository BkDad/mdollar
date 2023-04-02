import { ref, onMounted, onUnmounted } from "vue";

export const useClipboard = () => {
    const copiedText = ref("");
    const copyError = ref<string | null>(null);

    const copyText = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            copiedText.value = text;
            copyError.value = null;
        } catch (error: any) {
            copiedText.value = "";
            copyError.value = error.message;
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