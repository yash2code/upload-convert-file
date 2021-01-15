import styled from 'styled-components';
import { keyframes } from 'styled-components';
{
    /*Keyframes are used for some basic animations*/
}
// Head Text is the main text Drop your.. and file name and extension
export const HeadText = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #334e6c;
`;
//Smallertext is for the text inside progress bar, on success etc.
export const SmallerText = styled.p`
    font-size: 12px;
    margin: auto;
    text-align: center;
`;

//This section is used as a container for uploading component
export const Section = styled.div`
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

//progress bar animation
const Animated = keyframes`
0% {width: 0px}
25% {width: 25%}
50% {width: 50%}
75% {width: 75%}
100% {width: 100%}
`;
//progress bar container
export const ProgressContainer = styled.div`
    font-size: 12px;
    line-height: 24px;
    color: #334e6c;
    background: #f7fafd;
    border-radius: 8px;
    padding: 5px 5px 15px 10px;
    width: 100%;
`;
//progress bar ( uploading , converting )
export const ProgressBar = styled.div`
    background: #00a7ff;
    opacity: 0.68;
    border-radius: 24px;
    height: 2px;
    animation-name: ${Animated};
    animation-duration: 3s;
`;
