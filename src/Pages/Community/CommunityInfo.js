import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
const CommunityInfo = () => {
    return ( 
        <div className="CommunityInfo">

            <Tabs>

                    <div className="ComInfo">
                        <TabPanel>
                            <h2>Entrepreneurship 101</h2>
                            <p>Discover the foundational insights of entrepreneurship through our Entrepreneurship 101 course. This course is designed to eliminate ambiguities and guide you in mastering the art of business creation and management, armed with a comprehensive dictionary and much more.
 
                        </p>
                     <Link to="https://violet-eye-647.notion.site/Entrepreneurship-101-baac12054f364819b77a8e7d3807e44b?pvs=4" target='_blank'>
      <button>Learn more</button></Link>
                        </TabPanel>
                        <TabPanel>
                            <h2>Resource Library</h2>
                            <p>Dive into our meticulously curated Resource Library which houses a diverse range of books, free courses, websites, podcasts, and blogs. Brought to you by the dedicated team at E-CELL SIESGST, this ever-evolving library is here to assist you on your entrepreneurial journey.</p>
                            <Link to="https://violet-eye-647.notion.site/Resource-Library-9732a259b7dc4417bcb28ae343847e7d?pvs=4
" target='_blank'> <button>Explore more</button></Link>
                        </TabPanel>
                        <TabPanel>
                            <h2>Build with us</h2>
                            <p>Engage in our exclusive Build With Us program, where you get to test, validate and refine your ideas through various tasks. From ideation to evaluation, immerse yourself in a research-driven environment and pave your way into our Startup Cohort </p>
                            <Link to="https://violet-eye-647.notion.site/Build-with-us-c6429eed788d4225a4ed841d2e3ae8bb
" target='_blank'>      <button>Learn more</button></Link>
                        </TabPanel>
                    </div>
                    <div className="ComTabs">
                    <TabList>
                        <Tab>Entrepreneurship 101</Tab>
                        <Tab>Resource Library</Tab>
                        <Tab>Build with us</Tab>
                       
                    </TabList>
                    </div>


            </Tabs>

        </div>
     );
}
 
export default CommunityInfo;