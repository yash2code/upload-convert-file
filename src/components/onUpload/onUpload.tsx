import styled from 'styled-components';
export const SectionWrapper = styled.div`
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 464px;
    height: 314px;
    padding: 0 20px;
`;
//Different colored and font size text
export const ConvertText = styled.p`
    color: #334e6c;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
`;
//3 converto buttons ( file format selection )
export const ConvertTo = styled.button`
    cursor: pointer;
    border: 2px solid #d6dee6;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    color: #334e6c;
    background: transparent;
    padding: 14px 55px;
    border-radius: 8px;
    &:focus {
        background: #4fc2fe;
        color: white;
        outline: none;
        border-color: transparent;
    }
    &:hover {
        background: #4fc2fe;
        color: white;
        outline: none;
        border-color: transparent;
    }
    @media only screen and (max-width: 767px) {
        padding: 10px 40px;
        margin: 2px 0px;
        width: 100%;
    }
`;
//SVG logo and file name wrapper
export const LogoText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 62%;
    height: 148px;
`;
//selection buttons container
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 25px;
    }
`;
//upload wrapper
export const UploadContainer = styled.div`
    height: 314px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;
//conversion buttons container
export const ConversionContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;
