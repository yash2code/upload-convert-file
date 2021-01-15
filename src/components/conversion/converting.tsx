import React, { useEffect, useState } from 'react';
import { Section, ProgressContainer, SmallerText, ProgressBar } from '../../components/common/styledComponents/styled';
import { Download, UploadingSection } from '../download/download';
import Success from '../successful/success';

const Converting = (props: { selected: string }) => {
    //interface for button names
    interface Button {
        name: string;
    }
    const downloadButton: Button = {
        name: 'Download',
    };
    //generics used so to display the button name
    function Button<T>(arg: T): T {
        return arg;
    }
    const [conversionComplete, setConversionComplete] = useState(false);
    const [download, setDownload] = useState(false);
    //timeout functions used to animate the progress bar and remove the success message after 1 second
    useEffect(() => {
        setTimeout(() => {
            setConversionComplete(true);
        }, 3000);
        if (conversionComplete) {
            setTimeout(() => {
                setDownload(true);
            }, 1000);
        }
    }, [conversionComplete]);

    return (
        <Section>
            <UploadingSection>
                {conversionComplete ? (
                    !download ? (
                        <Success action="Successful" />
                    ) : (
                        <Download>{Button(downloadButton.name)}</Download>
                    )
                ) : (
                    <ProgressContainer>
                        <SmallerText>Converting to {props.selected}</SmallerText>
                        <ProgressBar />
                    </ProgressContainer>
                )}
            </UploadingSection>
        </Section>
    );
};
export default Converting;
