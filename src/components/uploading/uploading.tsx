import React, { useEffect, useState } from 'react';
import { ProgressContainer, SmallerText, HeadText, ProgressBar } from '../../components/common/styledComponents/styled';
import {
    SectionWrapper,
    ConvertText,
    ConvertTo,
    LogoText,
    ButtonContainer,
    UploadContainer,
    ConversionContainer,
} from '../onUpload/onUpload';
import Success from '../successful/success';
import SVG from '../../assets/svg'; //svg logo
import Converting from '../conversion/converting';
//file is utilized here by getting its name to display

const conversionButtons = [
    { key: 'step', label: 'STEP' },
    { key: 'stl', label: 'STL' },
    { key: 'iges', label: 'IGES' },
] as const;

const Uploading = (props: { upload: boolean; file: FileList | null }) => {
    const [convertTo, setConvertTo] = useState(false);
    const [conversionSelection, setConversionSelection] = useState('');
    const clickHandler = (name: string) => {
        setConversionSelection(name);
    };
    //after uploading, timeout function is used an it displays the button for file format choice
    useEffect(() => {
        if (props.upload) {
            setTimeout(() => {
                setConvertTo(true);
            }, 1000);
        }
    }, [props.upload]);

    return (
        <SectionWrapper>
            <UploadContainer>
                <LogoText>
                    <SVG />
                    {/*Display file name and extension*/}
                    <HeadText>{props.file && props.file[0]?.name}</HeadText>
                </LogoText>
                {convertTo ? (
                    !conversionSelection ? (
                        //displays button for choice of file conversion format
                        <ConversionContainer>
                            <ConvertText>Convert to</ConvertText>
                            <ButtonContainer>
                                {conversionButtons.map((btn) => {
                                    return (
                                        <ConvertTo
                                            key={btn.key}
                                            onClick={() => {
                                                clickHandler(btn.label);
                                            }}
                                        >
                                            {btn.label}
                                        </ConvertTo>
                                    );
                                })}
                            </ButtonContainer>
                        </ConversionContainer>
                    ) : (
                        //converting progress bar with file extension
                        <Converting selected={conversionSelection} />
                    )
                ) : props.upload ? (
                    <Success action="Uploading Successful" />
                ) : (
                    <ProgressContainer>
                        <SmallerText>Uploading...</SmallerText>
                        <ProgressBar />
                    </ProgressContainer>
                )}
            </UploadContainer>
        </SectionWrapper>
    );
};
export default Uploading;
