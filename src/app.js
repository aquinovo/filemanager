import React, { Component } from 'react';
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';
import fileGridEditorCapability from './api/fileGridEditorCapability';


const apiOptions = {
  ...connectorNodeV1.apiOptions,
  //  apiRoot: `http://opuscapita-filemanager-demo.azurewebsites.net/api` // Or you local Server Node V1 installation.
  apiRoot: 'http://localhost:3020/api'
  //apiRoot: 'http://monitorfiles.herokuapp.com/api'
}

const customCapabilities =  function(apiOptions, ref){
    let caps = connectorNodeV1.capabilities(apiOptions, ref);
    caps.push((0,fileGridEditorCapability)(apiOptions, ref, connectorNodeV1.api));
    return caps;
}

class App extends Component {
	render() {
        return( 
        	 <div  style={{ height: '480px' }}>
		           <FileManager>
		             <FileNavigator
		               id="filemanager-1"
		               api={connectorNodeV1.api}
		               apiOptions={apiOptions}
		               capabilities={customCapabilities.bind(this)}
		               listViewLayout={connectorNodeV1.listViewLayout}
		               viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
		             />
		           </FileManager>
		 	</div>
        );
    }
}

export default App