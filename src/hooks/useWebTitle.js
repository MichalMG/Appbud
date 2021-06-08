import { useEffect } from "react";

export default function useWebTitle(title) {

  const setTitle = newTitle => {
    document.title = newTitle;
  }

  useEffect(() => {
    if (title) {
      setTitle(title);
    }
  }, [title])

  return setTitle;

}