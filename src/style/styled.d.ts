// import original module declarations
import "styled-components";

// and extend them
declare module "styled-components" {
    // 타입 지정해주고 불러서 쓰기
    // 1. 인터페이스  지정
    // ThemeProvider theme 에 적용할 타입으로, theme의 속성과 동일하게 작성
    export interface DefaultTheme {
        fontSize: {
            ssm: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        device: {
            Mobile: string;
            Tablet: string;
            Desktop: string;
        };
        bgColor: string;
        fontColor: string;
    }
}
