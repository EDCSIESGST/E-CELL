import startupData from './MembersData.json';

const CommunityMembers = () => {
    return ( 
        <div>
            <h5>Current Community Members</h5>
            
            <div className="MembersGrid">
            {startupData.map((member, index) => (
                <div class="MemberProfile">
                    <img src={member.image} />
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default CommunityMembers;