import styled from "styled-components";

export const CheckoutSidebar = styled.div`
    background: #FFF;
    width: 95%;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    height: 80px;
    margin-bottom: 20px;
    padding: 1px;
`;

export const ContainerCheckout = styled.div`
    width: 92%;
    padding: 10px;
    height: 55px;
    margin-top: 2px;
    margin-left: 3px;
    border-radius: 10px;
`;

export const ImageCheckout = styled.div`
    width: 8%;
    height: 8%;
    display: flex;
    object-fit: cover;
    margin-bottom: 50px;
    
    > img {
        width: 60px;
        height: 60px;
    }
`;

export const DescriptionCheckout = styled.div`
    display: flex;
    color: #000;
    width: 100px;
    margin-left: 75px;
    margin-top: -75px;


    > span {
        width: 150px;
        height: 60px;
        text-align: left;
        font-size: 14px;
        font-weight: 400;
        padding-top: 20px;
    }
`;

export const QtdItem = styled.div`
        > p {
        width: 15px;
        font-size: 6px;
        font-weight: 400;
        margin-left: 185px;
        margin-top: -50px;
    }
`;

export const AmountItem = styled.div`
    background: white;
    height: 20px;
    min-width: 60px;
    border-radius: 5px;
    justify-content: center;
    display: flex;
    border: 0.5px solid #BFBFBF;
    width: 10%;
    margin-top: -5px;
    margin-left: 185px;
    margin-bottom: 185px;

    > span {
        width: 100%;
        text-align: center;
        cursor: pointer;
    }

    > .numberItem {
        border-right: 1px solid rgba(0, 0, 0, 0.2);
        border-left: 1px solid rgba(0, 0, 0, 0.2);
        font-size: 12px;
        cursor: default;
        margin-top: 2px;
    }
`;

export const PriceItem = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    width: 3%;
    align-items: center;

    > p {
        width: 10;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        margin-top: -380px;
        margin-left: 280px;
    }
`;

export const ButtonClose = styled.div`
    margin-top: -260px;
    margin-left: 340px;
    > p {
        border-radius: 10px;
        width: 20px;
        background: #000;
        color: #FFF;
        cursor: pointer;
        padding: 1px;
    }
`;
