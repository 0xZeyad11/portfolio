import { useState, useCallback } from "react";

function fallbackCopy(text: string, cb: () => void) {
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    if (successful) cb();
  } catch (err) {
    console.error("Fallback copy failed: ", err);
  }
}

export function useClipboard(timeout = 2000) {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = useCallback(
    (text: string) => {
      const onSuccess = () => {
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), timeout);
      };

      if (typeof navigator !== "undefined" && navigator.clipboard && window.isSecureContext) {
        navigator.clipboard
          .writeText(text)
          .then(onSuccess)
          .catch(() => fallbackCopy(text, onSuccess));
      } else {
        fallbackCopy(text, onSuccess);
      }
    },
    [timeout]
  );

  return { hasCopied, copy };
}
