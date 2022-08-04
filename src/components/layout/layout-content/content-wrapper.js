import styled from "styled-components";

const ContentWrapper=styled.div`
width:85%;
position:relative;
margin-top:30px;
display: flex;
justify-content: space-between; 
`
export const ContentWarapperLeft=styled.div`
width:20%;
background-color: #5e9eff;
border-radius: 20px;
.badge{
    width:100%;
    height:100px;
    .circle-badge{
        width:100px;
        height:100px;
        border-radius:50px;
        background-color:white;
        margin-top:20px;
    }
}

.divider{
    margin-top:40px;
    background-color:white;
    height:25px;
}
.show-options{
height:100px;
line-height:100px;
text-align:center;
font-size:20px;
color:#e7e7e8;
}
.show-options:hover{ background: #0085f2; }
`
export const ContentWarapperRight=styled.div`
width:70%;
`
export default ContentWrapper;