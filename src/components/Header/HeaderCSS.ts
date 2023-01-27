import styled from 'styled-components';

export const ContainerHeader = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    background: #0F52BA;
`;

export const HeaderTitle = styled.div`
    color: #FFF;
    padding: 50px;

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
        width: 90px;
        height: 45px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 700;
        color: #000;
        border: none;
    }

    > button img {
        width: 19px;
        height: 18px;
        margin-right: 15px;
        margin-top: 5px;
    }
`;