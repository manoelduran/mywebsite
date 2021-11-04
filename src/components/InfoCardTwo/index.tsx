/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Card, Info, UserCardInfos, UserName, UserLastName } from './styles';

export function InfoCardTwo() {
  return (
    <Card>
      <Info>Job Info</Info> {'\u007B'}
      <UserCardInfos>
        Formação: <UserName>Engenheiro Civil,</UserName>
      </UserCardInfos>
      <UserCardInfos>
        Função: <UserLastName>Desenvolvedor Front-End</UserLastName>
      </UserCardInfos>
      {'\u007D'}
    </Card>
  );
}
