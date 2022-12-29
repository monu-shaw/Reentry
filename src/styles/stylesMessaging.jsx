import styled from "styled-components";

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  max-height: 100% ;
  display: flex;
`;

const Messengers = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #e9e9e9;
  height: 85vh;
  margin-right: 20px;
  border-radius: 10px;
`;

const MessengersHeader = styled.div`
  display: flex;
  width: 87%;
  height: 10%;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
  border-radius: 10px;
`;

const ActorsList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  width: 87%;
  height: 90%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
`;

const Messages = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: #e9e9e9;
  height: 85vh;
  border-radius: 10px;
  
  
`;

const MessagesHeader = styled.div`
  display: flex;
  width: 96%;
  height: 10%;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  background-color: #88bbd6;
`;

const SelectedAct = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px ;
  margin-right: 20px;
  width: 96%;
  height: 65%;
  background-color: #cdcdcd;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
`;

const Reply = styled.div`
  margin-bottom: 20px;
  margin-left: 20px ;
  margin-right: 20px;
  width: 96%;
  height: 25%;
  background-color: #88bbd6;
  border-radius: 10px;
  display: flex;
`;

const ReplyText = styled.textarea`
  margin: 10px;
  width: 85%;
  height: 80%;
  background-color: #e9e9e9;
  border-radius: 10px;
`;

export {
  Container,
  Messengers,
  MessengersHeader,
  ActorsList,
  Messages,
  MessagesHeader,
  SelectedAct,
  Reply,
  ReplyText,
};