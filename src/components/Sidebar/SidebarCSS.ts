import styled from "styled-components";

export const ContanierSidebar = styled.div`
    background: #0F52BA;
    width: 468px;
    height: 100vh;
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    transition: width 2s;
`;

export const ContentCheckout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconSidebar = styled.div`   
    height: 100px;
    color: #FFF;
    width: 100%;
    margin-bottom: 50px;
    
    > p {
        font-weight: bold;
        font-size: 27px;
        width: 164px;
        text-align: justify;
        margin-top: 40px;
        margin-left: 60px;
    }

    > .close {
        width: 34px;
        height: 34px;
        margin-left: 410px;
        margin-top: -100px;
        margin-bottom: -60px;
        color: #FFF;
        background: #000;
        border-radius: 25px;
        text-align: center;
        padding: 2px;
        font-size: 28;
        font-weight: 400;
        cursor: pointer;
    }
`;

export const ProductCheckout = styled.div`
    width: 85%;
    height: 560px;
    margin-left: 10px;
    padding-top: 20px;  
    overflow-y: scroll;
    margin-bottom: 30px;
    padding-bottom: -100px;
    
    > p {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    }

    ::-webkit-scrollbar {
        width: 10px;
        margin-left: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: transparent; 
        border-radius: 10px;
    }
`;

export const FinalPrice = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    font-size: 28px;
    font-weight: 700;
    margin-top: 80%;
    color: #FFF;
    margin-top: 1px;
    
    > p {
        margin: 50px;
        margin-bottom: 20px;
    }
    `;

export const EndSidebar = styled.div`
    width: 100%;
    color: #FFF;
        
    > button {
        width: 100%;
        height: 97px;
        cursor: pointer;
        font-size: 28px;
        font-weight: 700;
        background: #000;
        color: #FFF;
    }

    > button:disabled {
        background-color: #cccccc;
        color: #000;
        font-size: 28px;
        font-weight: 700;
        cursor: not-allowed;
    }
`;
