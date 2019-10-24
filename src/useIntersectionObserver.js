import { useState, useEffect } from "react"

export const useIntersectionObserver = (
  ref,
  { threshold, root, rootMargin }
) => {
  const [state, setState] = useState({
    inView: false,
    triggered: false,
    entry: undefined,
  })

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      if (entries[0].intersectionRatio > 0) {
        setTimeout(() => {
          setState({
            inView: true,
            triggered: true,
            entry: observerInstance,
          })
        }, 500)
        observerInstance.unobserve(ref.current)
      }
      return
    },
    {
      threshold: threshold || 0,
      root: root || null,
      rootMargin: rootMargin || "0%",
    }
  )

  useEffect(() => {
    if (ref.current && !state.triggered) {
      observer.observe(ref.current)
    }
  })

  return [state.inView, state.entry]
}
