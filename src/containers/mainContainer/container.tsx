//changeEvent is as a type for onChange Event
import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone'; //DropZone for browsing and dragging and dropping files for upload
import { HeadText } from '../../components/common/styledComponents/styled';
import { BorderedWrapper, ColoredText, LighterText, Wrapper } from '../../components/inputFile/inputFile';
import SVG from '../../assets/svg'; //svg logo
import Uploading from '../../components/uploading/uploading'; //uploading component

const Container = () => {
    const [uploading, setUploading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState<FileList | null>(null); //to hold our uploaded file

    //useEffect is used to create a timeout function to mockup the process of uploading a file
    useEffect(() => {
        if (uploading) {
            setTimeout(() => {
                setSuccess(true);
            }, 3000);
        }
    }, [uploading]);
    //After file is chosen this event is fired
    const handleFile = (file: FileList | null) => {
        if (file) {
            setUploading(!uploading);
            setFile(file);
        }
    };
    // callback function to store the dropped files into a state
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length) handleFile(acceptedFiles);
        else alert('Only Accepts  .stl, .iges, .txt files');
    }, []);
    //drop zone configuration
    const { getRootProps, getInputProps } = useDropzone({
        accept: '.stl, .iges, .txt',
        noKeyboard: true,
        onDrop,
    });

    return (
        <Wrapper>
            {/*If file is not chosen, uploading will be false
            On choosing a file, the state changes and a progress bar shows up
            */}
            {uploading ? ( //onSuccessful upload, the whole file is sent to next component
                <Uploading upload={success} file={file}></Uploading>
            ) : (
                <BorderedWrapper {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} onChange={(e) => handleFile(e.target.files)} />
                    <div>
                        <SVG />
                        <div>
                            <HeadText>
                                Drop your file here, or
                                <ColoredText> browse</ColoredText>
                            </HeadText>
                            <LighterText>Supports: .TXT, .STL and .IGES</LighterText>
                        </div>
                    </div>
                </BorderedWrapper>
            )}
        </Wrapper>
    );
};
export default Container;
