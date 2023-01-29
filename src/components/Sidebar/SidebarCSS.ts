import styled from "styled-components";

export const ContanierSidebar = styled.div`
    background: #0F52BA;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    
    @media (max-width: 400px){
        width: 280px;
        height:100%;
    }

    @media (min-width: 400px) {
        width: 380px;
    }

    @media (min-width: 700px) {
        width: 468px;
    }

    @media (min-width: 1200px) {
        width: 468px;
    }


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
        margin-bottom: -60px;
        color: #FFF;
        background: #000;
        border-radius: 25px;
        text-align: center;
        padding: 2px;
        font-size: 28;
        font-weight: 400;
        cursor: pointer;

        @media (max-width: 400px) {
            margin-left: 235px;
            margin-top: -120px;
            font-size: 20px;
            font-weight: 400;
            padding: 1px;
            width: 25px;
            height: 25px;
        }

        @media (min-width: 400px) {
            margin-left: 300px;
            margin-top: -80px;
        }

        @media (min-width: 700px) {
            margin-left: 390px;
            margin-top: -80px;
        }
    }
`;

export const ProductCheckout = styled.div`
    height: 560px;
    margin-left: 10px;
    padding-top: 20px;  
    overflow-y: scroll;
    margin-bottom: 30px;
    padding-bottom: -100px;
    
    @media (max-width: 400px) {
        width: 100%;
        margin-left: 30px;
        margin-bottom: -2px;

    }

    @media (min-width: 400px) {
        width: 100%;
        margin-left: 70px;
        margin-bottom: -2px;
    }

    @media (min-width: 700px) {
        width: 100%;
        margin-bottom: 30px;
        margin-left: 80px;

        @media (min-height: 1024px) {
            height: 625px;
        }

        @media (min-height: 1180px) {
            height: 780px;
        }

        @media (min-height: 1300px){
            height: 970px;
        }
    }

    @media (min-width: 1200px) {
        width: 100%;
        margin-bottom: 30px;
        margin-left: 30px;
    }

    > p {
    color: #fff;
    font-size: 20px;
    font-weight: 700;

    @media (max-width: 400px) {
        margin-left: -15px;
    }

    @media (min-width: 400px) {
        margin-right: 50px;
    }

    @media (min-width: 700px) {
        margin-right: 80px;
    }

    @media (min-width: 1200px) {
        margin-right: 10px;
    }

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
         
        @media (max-width: 400px) {
            margin-left: 9px;
        }
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
