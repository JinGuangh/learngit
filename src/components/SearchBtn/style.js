import styled from 'styled-components';


export const SearchBtnContainer = styled.div`
width: 8rem;
    height: 1.2267rem;
    border: .0267rem solid ${props=>props.borderColor};
    margin: .4rem auto;
    border-radius: 5px;
    box-shadow: .0267rem .0267rem .1333rem #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  
    img {
      width: .5333rem;
      height: .5333rem
    }
  
    span {
      color: #555;
      margin-left: .2667rem
    }

`