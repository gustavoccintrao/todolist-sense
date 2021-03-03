import React from 'react';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { DataProvider } from './components/DataProvider';



function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>To Do - Sense</h1>

        <CreateTask />
        <TaskList />
        <Footer />

      </div>
    </DataProvider>
  );
}

export default App;
