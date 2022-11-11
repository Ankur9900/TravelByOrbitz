import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useThrottle } from "use-throttle";

export default function SearchBar({ suggetsion, queryHandler }) {
  const [inputtext, setInput] = useState("");
  const [active, setActive] = useState(0);
  const scrollRef = useRef();

  const HandletextChange = (e) => {
    setInput(e.target.value);
  };

  const HandleActiveSuggestion = (e) => {

    switch (e.keyCode) {
      case 38:
        if (active === 1) {
          scrollRef.current.scrollTop = suggetsion.length * 38.667;
        } else if (active <= suggetsion.length - 3) {
          scrollRef.current.scrollTop -= 38.667;
        }
        if (active > 1) {
          setActive((prev) => prev - 1);
        }
        break;

      case 40:
        if (active === suggetsion.length) {
          scrollRef.current.scrollTop = 0;
          setActive(0);
        } else if (active >= 4) {
          scrollRef.current.scrollTop += 38.667;
        }
        setActive((prev) => prev + 1);
        break;
      default:
        return;
    }
  };

  const throttleText = useThrottle(inputtext, 1000);
  useEffect(() => {
    queryHandler(throttleText);
  }, [queryHandler, throttleText]);


  return (
    <Wrapper onKeyUp={HandleActiveSuggestion}>
      <SearchWrapper>
        <Input 
        placeholder="Going to......"
         value={inputtext} onChange={HandletextChange} />
      </SearchWrapper>
      <SuggetionBox len={5} active={active} ref={scrollRef}>
        {suggetsion.map((item, index) => {
          return (
            <div key={index} onMouseOver={() => setActive(index + 1)}>
              {item}
            </div>
          )
        })
        }
      </SuggetionBox>
    </Wrapper>
  );
}


const SuggetionBox = styled.div`
  border: 1px solid #616161;
  ${'' /* display: flex; */}
  flex-direction: column;
  ${'' /* max-height: ${({ len }) => `${len * 38.687}px `}; */}
  max-height:40px;
  margin: auto;
  overflow: hidden;
  fontSize:14px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  & * {
    flex: 1;
    text-align: left;
    padding: 10px;
    padding-left: 30px;
  }

  &:nth-child(${({ active }) => active}) {
    background: rgba(0, 0, 0, 0.09);
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  max-width: 200px;
  margin: auto;
`;

const SearchWrapper = styled.div`
  border: 1px solid #616161;;
  display: flex;
  padding: 5px 10px;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
  flex: 1;
  width:170px;
  height:40px;
  color:#616161;
`;
