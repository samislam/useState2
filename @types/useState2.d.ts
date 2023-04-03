import React from 'react';
type ReturnType<T> = [T, React.Dispatch<React.SetStateAction<T>>, () => void];
export default function useState2<T>(initialState: T): ReturnType<T>;
export {};
//# sourceMappingURL=useState2.d.ts.map