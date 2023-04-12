import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-28'>
            <div className='border p-3 my-2'>
                <h2>Question: When  is the context api used?</h2>
                <h2>Ans: The React Context API can be used to provide state to multiple components far away in the component tree.</h2>
            </div>
            <div className='border p-3 my-2'>
                <h2>Question: What is the custom hook?</h2>
                <h2>Ans: Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app.</h2>
            </div>
            <div className='border p-3 my-2'>
                <h2>Question: What is useref and what does it do?</h2>
                <h2>Ans: useRef hook is aiming on storing some data between renders and changing that data does not trigger re-rendering</h2>
            </div>
            <div className='border p-3 my-2'>
                <h2>Question: what is usememo and what does it do?</h2>
                <h2>Ans: useMemo is a hook that is used in the functional component of React that returns a memoized value</h2>
            </div>
        </div>
    );
};

export default Blogs;