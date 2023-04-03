import React, { useState } from 'react'

type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>, () => void]

export default function useState2<T>(initialState: T): ReturnType<T> {
  const [state, setState] = useState(initialState)
  const resetter = () => setState(initialState)
  return [state, setState, resetter]
}
