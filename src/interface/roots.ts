/* eslint-disable @typescript-eslint/consistent-type-definitions */

export enum RootName {
  Dashboard = 'Dashboard',
  Login = 'Login',
  Cards = 'My Cards',
}

export type RootStackParamList = {
  [RootName.Dashboard]: undefined
  [RootName.Login]: undefined
  [RootName.Cards]: undefined
}
