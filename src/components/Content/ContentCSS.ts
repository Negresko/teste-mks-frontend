import styled from "styled-components";

export const ContainerContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 1;
`;

export const SpaceContent = styled.div`
    width: 1000px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 90px;
    flex-wrap: wrap;
    
    @media (max-width: 400px) {
        padding-top: 35px;
        width: 1px;
        padding-bottom: 45px;
    }

    @media (min-width: 400px) {
        padding-top: 20px;
        padding-bottom: 40px;

        @media (min-height: 900px) {
            padding: 1px;
            margin-top: 35px;
        }
    }

    @media (min-width: 1200px) {
        margin-top: 90px;
        height: 100px;
    }
`;