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
    <Card data-aos="zoom-in">
      <CardText>// About Me</CardText>
      <Info>User</Info> {'\u007B'}
      <UserCardInfos>
        First Name: <UserName>Manoel,</UserName>
      </UserCardInfos>
      <UserCardInfos>
        Last Name: <UserLastName>Cendon Duran</UserLastName>
      </UserCardInfos>
      {'\u007D'}
    </Card>
  );
}
