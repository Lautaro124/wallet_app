/* eslint-disable @typescript-eslint/consistent-type-definitions */

export enum RootName {
  Dashboard = 'Dashboard',
  Login = 'Login',
  Register = 'Register',
}

export type RootStackParamList = {
  [RootName.Dashboard]: undefined
  [RootName.Login]: undefined
  [RootName.Register]: undefined
}
