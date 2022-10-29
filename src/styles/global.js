import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue";
    }

    body {
        max-width: 1440px;
    }
    
    #root {
        max-width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
