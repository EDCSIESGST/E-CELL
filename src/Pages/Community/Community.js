import React from 'react'

import CommunityMembers from './CommunityMembers'
import CommunityInfo from './CommunityInfo'
import CommunityPerks from './CommunityPerks'
import CommunityBanner from './CommunityBanner'
import './community.css'
import JoinCommunity from './JoinCommunity'

const Community = () => {
  return (
    <div>
      
        <div className="container">
<CommunityBanner></CommunityBanner>
          <CommunityInfo></CommunityInfo>
          
          <CommunityPerks></CommunityPerks>
          <JoinCommunity></JoinCommunity>
        </div>

    </div>
  )
}

export default Community
