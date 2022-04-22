import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface MediaObject {
    sm: string;
    md: string;
    lg: string;
  }

  export interface DefaultTheme {
    primary: string;
    containerWidth: string;
    wMedia: MediaObject;
    hMedia: MediaObject;
  }
}
