import styled from 'styled-components';
import { ProfileDto } from '@app/interfaces';

const ProfileWrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  height: 100%;
`;

const Img = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  font-family: monospace;
  font-size: 34px;
  display: flex;
  align-items: center;
  margin-left: 16px;
`;

export const Profile = ({ profile }: { profile: ProfileDto }) => {

  if (!profile) {
    return <>Loading</>;
  }

  return (
    <ProfileWrapper>
      <Img src={profile.avatarUrl} width={64} height={64} placeholder="blur" />
      <Info>
        {profile.firstname}
        {profile.lastname}
      </Info>
    </ProfileWrapper>
  );
};
