import styled from 'styled-components';
import { HeadText } from '../common/styledComponents/styled';
import { SvgContainer } from '../../assets/svg';
//ColoredText is the browse button colored text
export const ColoredText = styled.span`
    color: #148ec2;
`;
//LighterText is the bottom text of the first page
export const LighterText = styled.p`
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: rgba(51, 78, 108, 0.4);
`;
//borderwrapper is the main page bordered container
export const BorderedWrapper = styled.div`
    cursor: pointer;
    border-radius: 8px;
    border: 2px dashed #d6dee7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 255px;
    width: 87%;
    &:hover {
        width: 91%;
        height: 271px;
        transition: width 0.8s, height 0.8s;
    }
    //this triggers hover effect on text and svg logo on hover over the main container
    &:hover {
        ${HeadText} {
            transform: translateY(10px);
            transition: transform 0.8s ease-in-out;
        }
        ${LighterText} {
            transform: translateY(10px);
            transition: transform 0.8s ease-in-out;
        }
        ${SvgContainer} {
            transform: translateY(-10px);
            transition: transform 0.8s ease-in-out;
        }
    }
`;
// wrapper is the main container div it contains basic styling like centering other components
//border-radius and box shadow etc.
export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 30px 60px rgba(86, 117, 152, 0.2);
    border-radius: 32px;
    width: 520px;
    min-height: 314px;
    @media (max-width: 684px) {
        width: 80%;
    }
`;
