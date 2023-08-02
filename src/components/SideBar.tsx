import { styled } from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'

const SideBar = ({ active }) => {
  return (
    <>
      <SideBarArea>
        <ProfileArea>
          <ProfileImg src="/imgs/profile-example.png" />
          <Profile>
            <ProfileName>신예은</ProfileName>
            <ProfileStatus>관리자</ProfileStatus>
          </Profile>
        </ProfileArea>
        <MenuArea>
          {active ? (
            <>
              <CustomLink href="/Annual_Duty">
                <ActiveBtn>
                  <Icon1 src="/imgs/plus.png" />
                  연차/당직 관리
                </ActiveBtn>
              </CustomLink>
              <CustomLink href="/Employee">
                <UnActiveBtn>
                  <Icon2 src="/imgs/group.png" />
                  사원 관리
                </UnActiveBtn>
              </CustomLink>
            </>
          ) : (
            <>
              <CustomLink href="/Annual_Duty">
                <UnActiveBtn>
                  <Icon1 src="/imgs/plus.png" />
                  연차/당직 관리
                </UnActiveBtn>
              </CustomLink>
              <CustomLink href="/Employee">
                <ActiveBtn>
                  <Icon2 src="/imgs/group.png" />
                  사원 관리
                </ActiveBtn>
              </CustomLink>
            </>
          )}

          <Link href="/Login">
            <UnActiveBtn>
              <Icon3 src="/imgs/logout.png" />
              로그아웃
            </UnActiveBtn>
          </Link>
        </MenuArea>
      </SideBarArea>
    </>
  )
}
const CustomLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`
const SideBarArea = styled.div`
  background-color: #000000;
  width: 350px;
  height: 100%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`
const ProfileArea = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const ProfileName = styled.div`
  color: #ffffff;
  font-size: 18px;
`
const ProfileStatus = styled.div`
  width: 55px;
  height: 26px;
  background-color: #ff5252;
  border-radius: 30px;
  font-size: 12px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MenuArea = styled.div`
  width: 100%;
  height: 80%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`
const ActiveBtn = styled.div`
  color: #ffffff;
  display: flex;
  gap: 10px;
  font-size: 16px;
  align-items: center;
  width: 280px;
  height: 40px;
  background-color: #0474e4;
  border-radius: 20px;
  padding: 0 20px;
  cursor: pointer;
  text-decoration: none;
`
const UnActiveBtn = styled.div`
  color: #ffffff;
  display: flex;
  gap: 10px;
  font-size: 16px;
  align-items: center;
  padding: 0 20px;
  width: 280px;
  height: 40px;
  cursor: pointer;
`
const Icon1 = styled.img`
  width: 24px;
  height: 24px;
`
const Icon2 = styled.img`
  width: 24px;
  height: 24px;
`
const Icon3 = styled.img`
  width: 24px;
  height: 24px;
`

export default SideBar
