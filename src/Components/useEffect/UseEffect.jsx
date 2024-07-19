import { useState, useEffect } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { toast } from "react-toastify";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState("");



    useEffect(() => {
        document.title = count;
    });


    useEffect(() => {
        toast("Hello!!");
    }, []);


    useEffect(() => {

    }, [user]);






    return (
        <>

            <h2 className="text-center bg-slate-600 rounded-lg p-4">Count: {user} </h2>

            <Wrapper>
                <div className="container">
                    <button onClick={() => setCount(count - 1)}>
                        <FaMinus className="icon minus_icon" />
                    </button>
                    <h3 className="text-3xl font-bold">Notification : {count}</h3>
                    <button onClick={() => setCount(count + 1)}>
                        <BiPlusMedical className="icon" />
                    </button>

                </div>
                <div className="container">
                    <input type="text" value={user} onChange={(e) => setUser(e.target.value)} autoComplete="off" placeholder="Enter Name" className="" />

                </div>

            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
  height: 90vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  text-align: center; /* Ensures content is centered horizontally */

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4.8rem;
    padding: 2rem;
    border:2px solid #191919;
    margin:10px;
  }

  .icon {
    font-size: 2rem;
  }

  h1 ,h3{
    color: #2e86c1;
  }
  input,.btn {
    padding: 1rem 2rem;
    font-family: "Work Sans", sans-serif;
    outline: 0;
    border: none;
    font-size: 1.2rem;
  }

  .btn-primary:hover {
    border: inset 0.2rem solid #da5767;
    transition: 0.3s;
  }
`;

export default UseEffect;