import {
  ProfileFragment,
  Role,
  useGetTeamQuery,
  useSubscribeToProfileCreatedSubscription,
  useSubscribeToProfileDeletedSubscription,
  useSubscribeToProfileSubscription
} from 'src/generated/graphql';
import { makeId, Profile } from '.';
import { colorHash, wrapQuery } from './utils';

/* Builders */

export function buildProfile(p: ProfileFragment): Profile {
  return {
    ...p,
    color: p.color ?? colorHash(p.username),
    id: makeId(p.id),
    role: p.role as Role,
  };
}

/* Queries */

export function getTeam() {
  const query = useGetTeamQuery();
  const wrappedQuery = wrapQuery(
    query,
    [],
    (data) => data.profiles?.nodes.map(buildProfile) ?? []
  );
  return wrappedQuery;
}

/* Subcriptions  */

export function watchProfileList(refetch: () => void) {
  const { onResult: profileCreated } =
    useSubscribeToProfileCreatedSubscription();
  const { onResult: profileDeleted } =
    useSubscribeToProfileDeletedSubscription();
  profileCreated(() => refetch());
  profileDeleted(() => refetch());
}

export function watchProfiles() {
  useSubscribeToProfileSubscription();
}
