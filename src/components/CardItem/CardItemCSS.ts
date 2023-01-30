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
    margin-bottom: 20px;
    margin: 1%;

    @media (max-width: 400px) {
        margin-bottom: 20px;
        width: 215px;
        height: 285px;
    }

    @media (min-width: 400px), (min-width: 700px) {
        margin-bottom: 20px;
        width: 260px;
        height: 330px;
    }

    @media (min-width: 1200px) {
        width: 215px;
        height: 285px;
    }
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
        @media (min-width: 400px) {
            width: 160px;
            height: 160px;
            margin-top: -10px;
            margin-left: 10px;
        }

        @media (max-width: 400px), (min-width: 1200px) {
            width: 130px;
            height: 130px;
            margin-top: 2px;
            margin-left: 0.1em;
        }
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

    @media (min-width: 400px) {
        margin-top: 70px;
    }

    @media (max-width: 400px), (min-width: 1200px) {
        margin-top: 54px;
    }   
    
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
    height: 53px;

    @media (min-width: 400px) {
        margin: 10px;
    }
    
    @media (max-width: 400px), (min-width: 1200px) {
        margin: 5px;
        margin-left: 13px;
    }    

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

        @media (min-width: 400px) {
            width: 100%;
        }  

        @media (max-width: 400px), (min-width: 1200px) {
            width: 215px;
        }  

    > img {
        width: 16px;
        height: 16px;
        margin-top: 8px;
        margin-right: 90px;

        @media (min-width: 400px), (min-width: 700px) {
            margin-right: 80px;
        }

        @media (max-width: 400px), (min-width: 1200px) {
            margin-right: 90px;
        }
    }

    > p {
        width: 80px;
        margin-top: -19px;
        margin-left: 75px;

        @media (min-width: 400px), (min-width: 700px) {
            margin-left: 95px;
        }

        @media (max-width: 400px), (min-width: 1200px) {
            margin-left: 75px;
        }
    }
`;