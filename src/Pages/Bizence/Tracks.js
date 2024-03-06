import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
const Tracks = () => {
    return ( 
        <div className="CommunityInfo">
 <h1 style={{ textAlign: "center" }}>Tracks</h1>
            <Tabs>

                    <div className="ComInfo">
                        <TabPanel>
                            <h2>BMC READY</h2>
                            <p>Discover the foundational insights of entrepreneurship through our Entrepreneurship 101 course. This course is designed to eliminate ambiguities and guide you in mastering the art of business creation and management, armed with a comprehensive dictionary and much more.
 
                        </p>
                    
                        </TabPanel>
                       
                        <TabPanel>
                            <h2>IDEATION STAGE</h2>
                            <p>Engage in our exclusive Build With Us program, where you get to test, validate and refine your ideas through various tasks. From ideation to evaluation, immerse yourself in a research-driven environment and pave your way into our Startup Cohort </p>
                           
                        </TabPanel>
                    </div>
                    <div className="ComTabs">
                    <TabList>
                        <Tab>Ideation</Tab>
                   
                        <Tab>BMC</Tab>
                       
                    </TabList>
                    </div>


            </Tabs>

        </div>
     );
}
 
export default Tracks;