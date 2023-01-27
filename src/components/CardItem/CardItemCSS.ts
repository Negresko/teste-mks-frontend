import styled from "styled-components";


export const ContainerCard = styled.div`
    display: flex;
    width: 215px;
    height: 285px;
    justify-content: center;
    border-radius: 8px;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    flex-direction: column;
    margin-bottom: 2em;
    margin: 1%;
`;

export const ItemImage = styled.div`
    width: 40%;
    height: 40%;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    object-fit: cover;
    margin-top: 15px;
    margin-bottom: -33px;


    img {
        width: 130px;
        height: 130px;
    }
`;

export const ItemTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    line-height: 19px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 54px;
    
    > h1 {
        font-size: 16px;
        font-weight: 400;
        text-align: left;

    }

    > span {
        color: #fff;;
        background: #373737;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 700;
        padding: 3px;
    }
`;  

export const DescriptionItem = styled.div`
    font-size: 10px;
    font-weight: 300;
    margin: 4%;
    text-align: left;
    margin: 5px;
    height: 53px;
`;

export const ButtonItem = styled.button`
        width: 215px;
        height: 31.91px;
        cursor: pointer;
        text-decoration: none;
        color: #FFF;
        border: none;
        border-radius: 0px 0px 8px 8px;
        background: #0F52BA;
        font-size: 14px;
        font-weight: 600;

    > img {
        width: 16px;
        height: 16px;
        margin-top: 8px;
        margin-right: 90px;
    }

    > p {
        width: 80px;
        margin-top: -19px;
        margin-left: 75px;
    }
`;