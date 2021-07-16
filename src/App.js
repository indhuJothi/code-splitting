
import './App.css';
import React, { Suspense, lazy } from 'react';  
const Example = React.lazy(() => import('./Example'));  
  
  
function MyComponent() {  
  return (  
    <div>  
      <Suspense fallback={<div>Loading...</div>}>  
        <section>  
          <Example/>  
        </section>  
      </Suspense>  
    </div>  
  );  
} 

export default MyComponent;
