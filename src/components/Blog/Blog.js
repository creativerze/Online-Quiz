import React from 'react';

const Blog = () => {
  return (
    <div>

      <div className="container border border-2 mt-5 rounded">
        <h2 className='bg-info p-2 rounded'>What is the purpose of react router?</h2>
        <p className='p-2'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
      </div>

      <div className="container border border-2 mt-5 rounded">
        <h2 className='bg-info p-2 rounded'>How does context api works?</h2>
        <p className='p-2'>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state</p>
      </div>

      <div className="container border border-2 my-5 rounded">
        <h2 className='bg-info p-2 rounded'>How to work useRef?</h2>
        <p className='p-2'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
      </div>

    </div>
  );
};

export default Blog;