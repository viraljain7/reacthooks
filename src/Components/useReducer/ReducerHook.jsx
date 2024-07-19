import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import { useReducer } from "react";

const ReducerHook = () => {
    let initialValue = 0;

    const reducer = (state, action) => {

        switch (action.type) {
            case 'inc':
                return state + 1


            case 'dec':
                return state - 1

            case 'input':
                return action.payload

            default: { return state }
        }
    }
    const [count, dispatch] = useReducer(reducer, initialValue)



    return (
        <>


            <Wrapper>
                <div className="container">
                    <button onClick={() => dispatch({ type: "dec" })}>
                        <FaMinus className="icon minus_icon" />
                    </button>

                    <h3 className="text-3xl font-bold">Notification : {count}</h3>

                    <button onClick={() => dispatch({ type: "inc" })}>
                        <BiPlusMedical className="icon" />
                    </button>

                    <input type="number" value={count} onChange={(e) => {
                        dispatch({ type: "input", payload: Number(e.target.value) })
                    }} />
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

export default ReducerHook;