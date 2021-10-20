import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DataTable from './components/DataTable';
import APIProvider from './store/apiContext';

function App() {
  return (
    <APIProvider>
      <DataTable />
    </APIProvider>
  );
}

export default App;
