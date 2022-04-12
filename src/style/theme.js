const BREAK_POINT = {
    SMALL: "768px",
    MEDIUM: "979px",
    LARGE: "1200px",
};

const theme = {
    primary: "#e31936",
    containerWidth: "500px",
    wMedia: {
        sm: `(min-width: ${BREAK_POINT.SMALL})`,
        md: `(min-width: ${BREAK_POINT.MEDIUM})`,
        lg: `(min-width: ${BREAK_POINT.LARGE})`,
    },
    hMedia: {
        sm: `(max-height: ${BREAK_POINT.SMALL}) and (orientation: landscape)`,
        md: `(max-height: ${BREAK_POINT.MEDIUM}) and (orientation: landscape)`,
        lg: `(max-height: ${BREAK_POINT.LARGE}) and (orientation: landscape)`,
    },
};

export default theme;
