import styled from "styled-components";

export const ContainerContent = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 10px;
        margin-left: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background: transparent; 
        border-radius: 10px;
    }
`;

export const SpaceContent = styled.div`
    width: 1000px;
    height: 600px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap; 
`;