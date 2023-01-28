import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    background: #0F52BA;

    @media (max-width: 400px) {
        height: 75px;
    }

    @media (min-width: 400px) {
        height: 60px;
    }

    @media (min-width: 700px), (min-width: 1200px) {
        height: 100px;
    }
`;

export const HeaderTitle = styled.div`
    color: #FFF;
    padding: 50px;

    @media (max-width: 400px) {
        width: 230px;
        height: 90px;
        padding: 1px;
        margin-bottom: 25px;
        margin-left: 25px;
    }

    @media (min-width: 400px) {
        width: 190px;
        height: 50px;
        padding: 1px;
        margin-bottom: 40px;
        margin-left: 25px;
    }

    @media (min-width: 700px), (min-width: 1200px) {
        margin-left: 50px;
    }

    > p {
        font-size: 20px;
        font-weight: 300;        
    }

    > p span {
        font-size: 40px;
        font-weight: bold;
    }
`;

export const HeaderButton = styled.div`
    padding: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;

    > button {
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
        color: #000;
        border: none;

        @media (max-width: 400px) {
            width: 75px;
            height: 35px;
            margin-left: -35px;
        }

        @media (min-width: 400px) {
            width: 70px;
            height: 35px;
            margin-right: -15px;
        }

        @media (min-width: 700px), (min-width: 1200px) {
            width: 90px;
            height: 45px;
            margin-right: 5px;
        }
    }

    > button img {
        width: 19px;
        height: 18px;
        margin-right: 15px;
        margin-top: 5px;
    }
`;