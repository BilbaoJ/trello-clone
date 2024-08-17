export type Colors = 'sky' | 'yellow' | 'red' | 'violet' | 'gray' | 'green' |'success' | 'primary' | 'grayLight' | 'white' | 'neutral';

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
    'bg-sky-500': true,
    'hover:bg-sky-400': true,
    'text-white': true
  },
  yellow: {
    'bg-yellow-500': true,
    'hover:bg-yellow-400': true,
    'text-white': true
  },
  red: {
    'bg-red-600': true,
    'hover:bg-red-500': true,
    'text-white': true
  },
  violet: {
    'bg-violet-300': true,
    'hover:bg-violet-200': true,
    'text-white': true
  },
  gray: {
    'bg-gray-400': true,
    'hover:bg-gray-300': true,
    'text-white': true
  },
  green: {
    'bg-green-600': true,
    'hover:bg-green-400': true,
    'text-white': true
  },
  white: {
    'bg-primary-600': true,
    'hover:bg-primary-700': true,
    'focus:bg-primary-950': true,
    'text-white': true
  }
}

export const BACKGROUNDS: ObjColors = {
  sky: {
    'bg-sky-600': true,
  },
  yellow: {
    'bg-yellow-600': true,
  },
  red: {
    'bg-red-700': true,
  },
  violet: {
    'bg-violet-400': true,
  },
  gray: {
    'bg-gray-500': true,
  },
  green: {
    'bg-green-500': true,
  },
  white: {
    'bg-white': true,
  }
}

export const BACKGROUNDS_HEAD: ObjColors = {
  sky: {
    'bg-sky-700': true,
  },
  yellow: {
    'bg-yellow-700': true,
  },
  red: {
    'bg-red-800': true,
  },
  violet: {
    'bg-violet-600': true,
  },
  gray: {
    'bg-gray-600': true,
  },
  green: {
    'bg-green-700': true,
  }
}

export const NAVBAR_COLORS: ObjColors = {
  sky: {
    'bg-sky-600': true,
    'text-white': true
  },
  yellow: {
    'bg-yellow-600': true,
    'text-white': true
  },
  red: {
    'bg-red-700': true,
    'text-white': true
  },
  violet: {
    'bg-violet-400': true,
    'text-white': true
  },
  gray: {
    'bg-gray-500': true,
    'text-white': true
  },
  green: {
    'bg-green-500': true,
    'text-white': true
  },
  white: {
    'bg-white': true,
    'border-b-2 border-gray-200': true,
    'text-gray-600': true,
  }

}

export const BTN_NAV_COLORS: ObjColors = {
  sky: {
    'hover:bg-sky-400': true,
  },
  yellow: {
    'hover:bg-yellow-400': true,
  },
  red: {
    'hover:bg-red-500': true,
  },
  violet: {
    'hover:bg-violet-200': true,
  },
  gray: {
    'hover:bg-gray-300': true,
  },
  green: {
    'hover:bg-green-400': true,
  },
  white: {
    'hover:bg-gray-300': true,
  }
}
