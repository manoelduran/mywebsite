/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-redeclare */
import {
  Card,
  CardText,
  Info,
  UserCardInfos,
  UserName,
  UserLastName
} from './styles';

export function InfoCardOne() {
  return (
    <Card>
      <CardText>// Minha apresentação</CardText>
      <Info>Infos</Info> {'\u007B'}
      <UserCardInfos>
        Nome: <UserName>Manoel Duran,</UserName>
      </UserCardInfos>
      <UserCardInfos>
        Sobrenome: <UserLastName>Duran</UserLastName>
      </UserCardInfos>
      {'\u007D'}
    </Card>
  );
}