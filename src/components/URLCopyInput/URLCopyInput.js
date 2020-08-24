import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './index.css';
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const URLCopyInput = ()=>{

    const [inputState, setInputState] = useState({
        value: `${window.location.href}`,
        copied: false,
      })

    return (
      <div>
        <input value={inputState.value}
          onChange={({target: {value}}) => setInputState({value, copied: false})} />

        <CopyToClipboard text={inputState.value}
          onCopy={() => setInputState({copied: true})}>
          <span></span>
        </CopyToClipboard>

        <CopyToClipboard text={inputState.value}
          onCopy={() => setInputState({copied: true})}>
          <button>
          <FontAwesomeIcon icon={faCopy} />
          </button>
        </CopyToClipboard>

        {inputState.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
      </div>
    );
    }  
  export default URLCopyInput;