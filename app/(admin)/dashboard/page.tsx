
'use client'
import React from 'react'
import styles from './Dashboard.module.css'
import MenuContainer from '@/components/Dashboard/MenuContainer/MenuContainer'
import HeaderContainer from '@/components/Dashboard/HeaderContainer/HeaderContainer'
import TeamContainer from '@/components/Dashboard/TeamContainer/TeamContainer'
import PostSum from '@/components/Dashboard/PostsSum/PostSum'
import ChatNoti from '@/components/Dashboard/ChatNoti/ChatNoti'

import { useSession } from "next-auth/react";


const Dashboard = () => {
  const session = useSession();
  console.log(session)
  return (
    <div className={styles.dashboard}>
        <div className={styles.dashboardWrapper}>
            <MenuContainer/>
            <HeaderContainer/>
            <PostSum/>
            <TeamContainer/>
            <ChatNoti/>
        </div>
    </div>
  )
}

export default Dashboard