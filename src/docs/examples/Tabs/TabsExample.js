import React from 'react';
import {Tabs, TabList, Tab, TabPanel, TabPanels} from 'react-ultra-instinct/Tabs';

export default () => {
    return (
       
       <Tabs>
         <TabList>
           <Tab>Tacos</Tab>
           <Tab isDisabled>Burritos</Tab>
           <Tab>Coconut Korma</Tab>
         </TabList>

         <TabPanels>
           <TabPanel>
             <p>Tacos are delicious</p>
           </TabPanel>
           <TabPanel>
             <p>Sometimes a burrito is what you really need</p>
           </TabPanel>
           <TabPanel>
             <p>Might be your best option</p>
           </TabPanel>
         </TabPanels>
       </Tabs>
        

    )
}