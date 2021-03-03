export const getViewportSize = () => ({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
});

export const unitToMillis = (unit) => {
  if (unit === "second") {
    return 1000;
  }

  if (unit === "minute") {
    return 60 * 1000;
  }

  if (unit === "hour") {
    return 60 * 60 * 1000;
  }

  return 0;
};

export const degreeToRadian = (degree) => (Math.PI / 180) * degree;

export const toggleFullscreen = function (e) {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};
