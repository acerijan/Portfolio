import { createContext, useContext } from 'react'

export type Mode = 'night' | 'day'

interface ModeContextType {
  mode: Mode
  isDay: boolean
  isNight: boolean
}

const ModeContext = createContext<ModeContextType>({
  mode: 'night',
  isDay: false,
  isNight: true,
})

export const ModeProvider = ModeContext.Provider

export function useMode() {
  return useContext(ModeContext)
}
