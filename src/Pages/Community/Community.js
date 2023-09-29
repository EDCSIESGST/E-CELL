import React from 'react'

import CommunityMembers from './CommunityMembers'
import CommunityInfo from './CommunityInfo'
import CommunityPerks from './CommunityPerks'

import './community.css'
import JoinCommunity from './JoinCommunity'

const Community = () => {
  return (
    <div>
      
        <div className="container">

          <CommunityInfo></CommunityInfo>
          
          <CommunityPerks></CommunityPerks>
          <JoinCommunity></JoinCommunity>
        </div>

    </div>
  )
}

export default Community
