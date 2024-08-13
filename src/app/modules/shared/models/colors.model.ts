export type Colors = 'sky' | 'yellow' | 'red' | 'violet' | 'gray' | 'green' |'success' | 'primary' | 'grayLight';

export type ObjColors = Record<string, Record<string, boolean>>;

export const COLORS: ObjColors = {
  success: {
    'bg-success-600': true,
    'hover:bg-success-700': true,
    'focus:bg-success-950': true,
    'text-white': true
  },
  primary: {
    'bg-primary-600': true,
    'hover:bg-primary-700': true,
    'focus:bg-primary-950': true,
    'text-white': true
  },
  grayLight: {
    'bg-gray-200': true,
    'hover:bg-gray-300': true,
    'focus:bg-gray-400': true,
    'text-gray-700': true
  },
  sky: {
    'bg-sky-700': true,
    'hover:bg-sky-800': true,
    'text-white': true
  },
  yellow: {
    'bg-yellow-700': true,
    'hover:bg-yellow-800': true,
    'text-white': true
  },
  red: {
    'bg-red-700': true,
    'hover:bg-red-800': true,
    'text-white': true
  },
  violet: {
    'bg-violet-700': true,
    'hover:bg-violet-800': true,
    'text-white': true
  },
  gray: {
    'bg-gray-700': true,
    'hover:bg-gray-800': true,
    'text-white': true
  },
  green: {
    'bg-green-700': true,
    'hover:bg-green-800': true,
    'text-white': true
  }
}
