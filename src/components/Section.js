import React from 'react';
import styled from 'styled-components';


function Section({title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>

        <Buttons>
        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>


            {rightBtnText && 

                <RightButton>
                {rightBtnText}
                </RightButton>
                
            }
            

        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    ${'' /* flex-direction: column; */}
    column-gap: 1em;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    border-radius: 50px;
    padding: 20px;
    margin-bottom: 8px;
    cursor: pointer;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;

`

const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: 0.65;
    color: rgba(23, 26, 32, 0.8);
`

const DownArrow = styled.img`
    height: 40px;
    cursor: pointer;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`

`