import styled from 'styled-components';

//Download Button component
export const Download = styled.button`
    cursor: pointer;
    font-size: 12px;
    line-height: 24px;
    color: #334e6c;
    background: transparent;
    border-radius: 8px;
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 2px solid #d6dee6;
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
`;

//container for file format selection component
export const UploadingSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;
