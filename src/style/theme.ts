interface MediaObject {
  sm: string;
  md: string;
  lg: string;
}

interface DefaultTheme {
  primary: string;
  containerWidth: string;
  wMedia: MediaObject;
  hMedia: MediaObject;
}

const BREAK_POINT: MediaObject = {
  sm: '768px',
  md: '979px',
  lg: '1200px',
};

const theme: DefaultTheme = {
  primary: '#e31936',
  containerWidth: '500px',
  wMedia: {
    sm: `(min-width: ${BREAK_POINT.sm})`,
    md: `(min-width: ${BREAK_POINT.md})`,
    lg: `(min-width: ${BREAK_POINT.lg})`,
  },
  hMedia: {
    sm: `(max-height: ${BREAK_POINT.sm}) and (orientation: landscape)`,
    md: `(max-height: ${BREAK_POINT.md}) and (orientation: landscape)`,
    lg: `(max-height: ${BREAK_POINT.lg}) and (orientation: landscape)`,
  },
};

export default theme;
