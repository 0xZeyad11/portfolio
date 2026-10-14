import { useState, useCallback } from "react";

export function useClipboard(timeout = 2000) {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = useCallback(
    (text: string) => {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          setHasCopied(true);
          setTimeout(() => setHasCopied(false), timeout);
        });
      }
    },
    [timeout]
  );

  return { hasCopied, copy };
}
