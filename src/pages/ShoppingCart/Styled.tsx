import styled from "styled-components";

const ItensContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Item = styled.div`
    padding: 1rem;
    background-color: #fff;
    display: flex;
`;

const Picture = styled.img`
    width: 200px;
`;

const Name = styled.h1`
    font-size: 1rem;
`;

const Price = styled.p`
    color: #6363ea;
    font-size: 1.1rem;
    transition: color 0.2s ease-in-out;
    font-weight: bold;
`;


const CartItem = {
    ItensContainer,
    Item,
    Picture,
    Name,
    Price
};

export default CartItem;