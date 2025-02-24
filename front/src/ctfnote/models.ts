import { Role } from 'src/generated/graphql';
export { Role } from 'src/generated/graphql';
import { RouteLocationRaw } from 'vue-router';

/* Utils */

export type Id<T> = number & { __type: T };

export function makeId<T>(id: number): Id<T> {
  return id as Id<T>;
}

export type Maybe<T> = T | null;

/* CTFNote Types */

export type Profile = {
  id: Id<Profile>;
  username: string;
  role: Role;
  description: string;
  color: string;
  nodeId: string;
};

export type Me = {
  profile: Profile | null;
  jwt: string | null;

  isLogged: boolean;
  isGuest: boolean;
  isMember: boolean;
  isManager: boolean;
  isAdmin: boolean;
};

export type Task = {
  nodeId: string;

  ctfId: Id<Ctf>;
  id: Id<Task>;
  title: string;
  padUrl: string;
  slug: string;
  description: string;
  flag: string;
  solved: boolean;
  category: string;
  workOnTasks: Id<Profile>[];
};

export type CtfInvitation = {
  nodeId: string;

  ctfId: Id<Ctf>;
  profileId: Id<Profile>;
};

export type Ctf = {
  nodeId: string;

  id: Id<Ctf>;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  weight: number;
  slug: string;
  infoLink: RouteLocationRaw;
  tasksLink: RouteLocationRaw;
  guestsLink: RouteLocationRaw;
  granted: boolean;
  ctfUrl: string | null;
  ctftimeUrl: string | null;
  logoUrl: string | null;

  credentials: string | null;
  tasks: Task[];
  invitations: CtfInvitation[];
};

export const defaultColorsNames = [
  'primary',
  'secondary',
  'accent',
  'dark',
  'positive',
  'negative',
  'info',
  'warning',
] as const;

export type SettingsColor = typeof defaultColorsNames[number];
export type SettingsColorMap = Record<SettingsColor, string>;
export type Settings = {
  registrationAllowed: boolean;
  registrationPasswordAllowed: boolean;
  style: SettingsColorMap;
};

export type AdminSettings = Settings & {
  registrationPassword: string;
  registrationDefaultRole: Role;
};

export type User = {
  nodeId: string;

  id: Id<User>;
  login: string;
  role: Role;
  profile: Profile;
};
