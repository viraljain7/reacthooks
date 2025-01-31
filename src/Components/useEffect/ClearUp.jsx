import { useState, useEffect } from "react";
import styled from "styled-components";

const ClearUp = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const currentScreenWidth = () => {
        setWidthCount(() => window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", currentScreenWidth);
        return () => {
            window.removeEventListener("resize", currentScreenWidth);
        };
    }, [widthCount]);
    return (
        <Wrapper>
            <div className="container">
                <h2>
                    The size of the window is <span> {widthCount} </span>
                </h2>
            </div>
        </Wrapper>
    );
};
ClearUp;
const Wrapper = styled.section`
  height: 90vh;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  text-align: center; 
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    line-height: 5.2rem;
    font-size: 4.2rem;
  }
  span {
    color: #2e86c1;
  }
`;

export default ClearUp;