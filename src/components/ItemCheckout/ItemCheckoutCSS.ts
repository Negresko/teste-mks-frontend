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

    @media (max-width: 400px) {
        width: 80%;
        height: 220px;
        margin-left: 15px;
    }

    @media (min-width: 400px) {
        width: 75%;
        height: 250px;
        margin-left: 15px;
    }

    @media (min-width: 700px) {
        width: 62%;
        height: 250px;
        margin-left: 50px;
        margin-top: 15px;
    }

    @media (min-width: 1200px) {
        width: 85%;
        height: 80px;
        margin-left: 25px;
    }
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
        @media (max-width: 400px) {
            width: 100px;
            height: 100px;
            margin-top: 5px;
            margin-left: 50px;
        }

        @media (min-width: 400px) {
            width: 120px;
            height: 120px;
            margin-top: 10px;
            margin-left: 65px;
        }

        @media (min-width: 700px) {
            width: 120px;
            height: 120px;
            margin-top: 10px;
            margin-left: 70px;
        }

        @media (min-width: 1200px) {
            width: 60px;
            height: 60px;
            margin-left: -5px;
            margin-top: -2px;

        }
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

        @media (max-width: 400px) {
            width: 1000px;
            height: 20px;
            white-space: nowrap;
            text-align: center;
            font-size: 14px;
            font-weight: 400;
            margin-top: 130px;
            margin-left: -65px;
        }

        @media (min-width: 400px) {
            width: 150px;
            height: 35px;
            text-align: center;
            margin-top: 140px;
            margin-left: -25px;
            font-size: 14px;
            font-weight: 400;   
            white-space: nowrap;
        }

        @media (min-width: 700px) {
            width: 150px;
            height: 60px;
            font-size: 14px;
            text-align: center;
            white-space: nowrap;
            font-weight: 400;
            margin-top: 140px;
            margin-left: -15px;
        }

        @media (min-width: 1200px) {
            width: 150px;
            height: 60px;
            text-align: left;
            font-size: 14px;
            white-space: normal;
            justify-content: flex-start;
            font-weight: 400;
            padding-top: 30px;
            margin-left: -10px;
            margin-top: -1px;
            display: flex;
        }
        
    }
`;

export const QtdItem = styled.div`
        > p {
        width: 15px;

        @media (min-width: 200px){
            font-size: 1px;
        }

        @media (min-width: 1200px){
            font-size: 6px;
            font-weight: 400;
            margin-left: 185px;
            margin-top: -60px;
            margin-bottom: -15px;
        }
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
    margin-bottom: 185px;
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media (max-width: 400px) {
        margin-top: 10px;
        width: 80px;
        height: 30px;
        align-items: center;
        margin-left: 10px;
        font-size: 20px;
        font-weight: 400;
    }

    @media (min-width: 400px) {
        margin-top: 10px;
        width: 80px;
        height: 30px;
        align-items: center;
        margin-left: 20px;
        font-size: 20px;
        font-weight: 400;
    }

    @media (min-width: 700px) {
        margin-top: -15px;
        width: 80px;
        height: 30px;
        align-items: center;
        margin-left: 15px;
        font-size: 20px;
        font-weight: 400;
    }

    @media (min-width: 1200px) {
        margin-top: 15px;
        width: 60px;
        height: 20px;
        align-items: center;
        margin-left: 100px;
        font-size: 20px;
        font-weight: 400;
        margin-left: 185px;
    }

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

        @media (max-width: 340px), (min-width: 400px), (min-width: 700px) {
            font-size: 15px;
            font-weight: 400;
        }

        @media (min-width: 1200px) {
            font-size: 12px;
            font-weight: 400;
            margin-bottom: 2px;
        }
    }
`;

export const PriceItem = styled.div`
    display: flex;
    align-items: center;
    color: #000;
    width: 3%;

    > p {
        width: 10;
        align-items: center;
        font-size: 14px;
        font-weight: 700;
        margin-top: -380px;
        margin-left: 280px;

        @media (max-width: 400px) {
            margin-left: 110px;
            margin-top: -390px;
            background: #373737;
            padding: 5px;
            border-radius: 8px;
            color: #FFF;
        }

        @media (min-width: 400px) {
            margin-left: 175px;
            margin-top: -390px;
            background: #373737;
            padding: 5px;
            border-radius: 8px;
            color: #FFF;
        }

        @media (min-width: 700px) {
            margin-left: 185px;
            margin-top: -390px;
            background: #373737;
            padding: 5px;
            border-radius: 8px;
            color: #FFF;
        }

        @media (min-width: 1200px) {
            margin-left: 300px;
            margin-top: -380px;
            background: #373737;
            padding: 5px;
            border-radius: 8px;
            color: #FFF;
            justify-content: right;
        }
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

        @media (max-width: 400px) {
            margin-left: -170px;
            margin-top: -380px;
            background: transparent;
            color: #000;
            font-size: 25px;
            font-weight: 500;
        }

        @media (min-width: 400px) {
            margin-left: -115px;
            margin-top: -400px;
            background: transparent;
            color: #000;
            font-size: 25px;
            font-weight: 500;
        }

        @media (min-width: 700px) {
            margin-left: -115px;
            margin-top: -400px;
            background: transparent;
            color: #000;
            font-size: 25px;
            font-weight: 500;
        }

        @media (min-width: 1200px) {
            margin-left: 20px;
            margin-top: 20px;
            background: #000;
            color: #fff;
            width: 20px;
            font-size: 15px;
            border-radius: 10px;
        }
    }
`;
