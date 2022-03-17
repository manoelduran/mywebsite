/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Card, Info, UserCardInfos, UserName, UserLastName } from './styles';

export function InfoCardTwo() {
  return (
    <Card data-aos="zoom-in">
      <Info>Degree</Info> {'\u007B'}
      <UserCardInfos>
        Background: <UserName>Civil Engineer ,</UserName>
      </UserCardInfos>
      <UserCardInfos>
        Function: <UserLastName>Front-End Developer</UserLastName>
      </UserCardInfos>
      {'\u007D'}
    </Card>
  );
}
