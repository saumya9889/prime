import styled from 'styled-components';

export const SectionCStyled = styled.section`
    position:relative;
    padding-top:5vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow:hidden;
.bottom-container{
    flex-direction: column;
    overflow:hidden;
}
.title.reveal{
    opacity:0;
}
.title.reveal.active{
    opacity:1;
    animation: slide-in-top 1 2s linear;
}
.data-column {
    overflow:hidden;
    position:absolute;
    right:0px;
    min-height:120vh;
    color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
}
.data-letter{
    color: #C0C0C0;
    margin-left: 2vw;
    margin-right: 4vw;
    font-size: 3rem;
    cursor: pointer; 
    text-decoration: none;
    display: inline-block;
    border:none;
    height: 5vh;
    
}
.data-list{
    position:relative;
}
.data-panel{
    display: flex;
    flex-direction: row;
    margin-bottom: 7vh;
}
.data-list > .data-panel.reveal > .data-letter {
    opacity: 0;
}
.data-list > .data-panel.reveal.active > .data-letter {
    opacity:1;
    animation: slide-in-left 1 2s linear;
}
.data-list > .data-panel.reveal > .data-content {
    opacity: 0;
}
.data-list > .data-panel.reveal.active > .data-content {
    opacity:1;
    animation: fadein 1 2s linear;
}
.data-list > .data-panel.reveal.active > #P.data-content{
    opacity:1;
    animation: slide-in-right 1 2s linear;
}
.image-row{
    position:relative;
    padding-top: 30vh;
    margin-right:5vw;
    min-height:100vh;
    width:80vw;
    justify-content: center;
}
.image-front{
    position:absolute;
    margin-left:7vw;
    margin-top:5vh;
    height:50vh;
    width:40vw;
    z-index:2
}
.image-back{
    position:absolute;
    margin-left:10vw;
    height:60vh;
    width:30vw;
    z-index:1;
}
`