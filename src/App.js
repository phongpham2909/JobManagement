import React, { Component } from 'react';
/*import AppRouter from './AppRouter';*/
import JobManagement from './admin/JobManagement';

class App extends Component {
  render() {
    return (
      <div>
        {/*<AppRouter/>*/}
        <JobManagement/>
      </div>
    );
  }
}

export default App;
