import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const CommunityInfo = () => {
    return ( 
        <div className="CommunityInfo">

            <Tabs>

                    <div className="ComInfo">
                        <TabPanel>
                            <h2>Entrepreneurship 101</h2>
                            <p>Entrepreneurship cell is a non-profit student's organization dedicated to promoting the spirit of entrepreneurship among students throughout India. The basic aim of E-Cell is to encourage college-level students today to start their own enterprise. Hundreds of rural as well as urban colleges have established e-cells. 
                            <br /><br />
                            Moreover over 70,000 students participate in organizing e-cell activities in India. Some noteworthy examples are – IIT Bombay, IIT Kharagpur, Bits Pillani, VJTI, SPIT, etc.</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Resource Library</h2>
                            <p>Moreover over 70,000 students participate in organizing e-cell activities in India. Some noteworthy examples are – IIT Bombay, IIT Kharagpur, Bits Pillani, VJTI, SPIT, etc.</p>
                        </TabPanel>
                        <TabPanel>
                            <h2>Startup Bundle</h2>
                            <p>Entrepreneurship cell is a non-profit student's organization dedicated to promoting the spirit of entrepreneurship among students throughout India. The basic aim of E-Cell is to encourage college-level students today to start their own enterprise. Hundreds of rural as well as urban colleges have established e-cells. </p>
                        </TabPanel>
                    </div>
                    <div className="ComTabs">
                    <TabList>
                        <Tab>Entrepreneurship 101</Tab>
                        <Tab>Resource Library</Tab>
                        <Tab>Startup Bundle</Tab>
                    </TabList>
                    </div>


            </Tabs>

        </div>
     );
}
 
export default CommunityInfo;