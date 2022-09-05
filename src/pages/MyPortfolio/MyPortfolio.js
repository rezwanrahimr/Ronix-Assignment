import React from 'react';
import { Link } from 'react-router-dom';

const MyPortfolio = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold'>Name: Rezwan rahim</h1>
                <h1>Email: rezwanrahim69@gmail.com</h1>
                <h1 className='mt-3 font-bold'>Education: </h1>
                <h1>Dhaka International University</h1>
                <h1>"5th" semester,current student</h1>
                <h1>Bachelor of Science in Computer Science and Engineering.</h1>
                <h1 className='mt-3 font-bold'>Programming Skill:</h1>
                <h1>Expertise: JavaScript,Es6,ReactJS,HTML5,CSS3,React-Bootstrap,Bootstrap,tailwindcss</h1>
                <h1>Comfortable: ReactJS,NodeJS,Express JS,MongoDB,React Router,JSON.</h1>
                <h1>Tools: Git,Chrome Dev Tool,VS Code,Create React App,NPM,Firebase
                    Netlify,Heroku.
                </h1>
                <h1 className='font-bold mt-3'>projects</h1>
                <h1 className='text-1xl'>1. warehouse Management :

                    <button class="btn btn-link"><a href="https://oracle-inventory.web.app/" target="_blank">live website link</a></button>

                </h1>
                <h1 className='text-1xl'>2. Independent Service Provider :

                    <button class="btn btn-link"><a href="https://assignment-10-1dfbf.web.app/" target="_blank">live website link</a></button>

                </h1>
                <h1 className='text-1xl'>3. SAFE DRINKING WATER :

                    <button class="btn btn-link"><a href="https://voluble-moonbeam-1c927a.netlify.app/home" target="_blank">live website link</a></button>

                </h1>
            </div>
        </div>
    );
};

export default MyPortfolio;