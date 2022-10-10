import { useRoutes } from 'react-router-dom';
import { routes } from './Roots';


function App() {


  let contenu = useRoutes(routes)

  return (
    <>
      {contenu}
    </>
  );
}

export default App;
