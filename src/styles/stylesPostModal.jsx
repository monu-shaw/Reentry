import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    color: #000000;
    background-color: rgba(0,0,0,0.8);
    animation: fadeIn  0.3s;
`;

const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: #fff;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
    background-color: #e9e9e9;
`;

const Header = styled.div`
    padding: 16px 28px;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    font-size: 16px;
    line-height: 1.5;
    color: rgba(0,0,0,0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fcf4a3 ;

    button {
        height: 48px;
        width: 40px;
        min-width: auto;
        color: rgba(0,0,0,0.15);

        img {
            pointer-events: none;
        }
    }
`;

const SharedContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    vertical-align: baseline;
    background: transparent;
    padding: 8px 12px;
    
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 24px;

    svg,img {
        width: 48px;
        height: 48px;
        background-clip: content-box;
        border: 2px solid transparent;
        border-radius: 50%;
        margin-right: 5px;
    }

    span {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.5;
    }
`;

const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

const AssetButton = styled.button`
    display: flex;
    align-items: center;
    height: 40px;
    min-width: auto;
    color: rgba(0,0,0,0.5);
    background-color: #fcf4a3;
`;

const AttachAssets = styled.div`
    align-items: center;
    display: flex;
    padding-right: 8px;

    ${AssetButton} {
        width: 40px;
    }
`;

const ShareComment = styled.div`
    padding-left: 8px;
    margin-right: auto;
    border-left: 1px solid rgba(0,0,0,0.15);

    ${AssetButton} {
        img {
            margin-right: 5px;
        }
    }
`;

const PostButton = styled.button`
    min-width: 60px;
    border-radius: 20px;
    padding-left: 16px;
    padding-right: 16px;
    background: ${props => props.disabled ? 'rgba(0,0,0,0.5)' : '#004182'};
    color: ${props => props.disabled ? 'rgba(1,1,1,0.2)' : '#fcf4a3;'};

    &:hover {
        background: ${props => props.disabled ? 'rgba(0,0,0,0.08)' : '#004182'};
        cursor: ${props => props.disabled ? 'none' : 'pointer'};
        outline: none !important;
    }
`;

const Editor = styled.div`
    padding: 12px 24px;

    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
        background-color: #FFFDD0;
    }

    input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

const UploadImage = styled.div`
    text-align: center;

    img {
        width: 100%;
    }
`;

export {
  Container,
  Content,
  Header,
  SharedContent,
  UserInfo,
  SharedCreation,
  AssetButton,
  AttachAssets,
  ShareComment,
  PostButton,
  Editor,
  UploadImage
};