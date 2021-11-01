/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Card, Info, UserCardInfos, UserName, UserLastName } from './styles';

export function InfoCardTwo() {
  return (
    <Card>
      <Info>Cargo</Info> {'\u007B'}
      <UserCardInfos>
        Função: <UserName>Desenvolvedor Front-End,</UserName>
      </UserCardInfos>
      <UserCardInfos>
        Empresa: <UserLastName>-</UserLastName>
      </UserCardInfos>
      {'\u007D'}
    </Card>
  );
}
