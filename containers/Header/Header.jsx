import React,{useState} from 'react'
import Button from '../../components/Button/Button'
import {css,cx} from '@emotion/css';
import H1 from '../../components/H1/H1';
import WithLocation from '../../hoc/withLocation';
import useLocalStorage from '../../hooks/useLocalStorage';

function Header() {
    const [test,setTest] = useLocalStorage('test');

const handleOnClick = () => {
    console.log('signip has been clcikeds');

    setTest('')
}

const [load,useLoad] = useState(false);

console.log(variable, ';variable');

return (
    <div
    className={css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    `}>
        <H1>Header Next App</H1>
        <div>
            <Button>
                Login
            </Button>
            
            <Button onClick={()=> handleOnClick()}>
                SignUp
            </Button>
        </div>
    </div>
  )
}
export default Header;