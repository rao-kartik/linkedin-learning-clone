import React, { useState } from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterInput } from './RegisterInput';
import { Footer } from '../../Routes/Footer';
import { NameInput } from './NameInput';
import { registerUser } from '../../store/user/action';
import PaymentPage from '../StripesPayment/PaymentPage';
import { State } from '../../store/tsTypes';
import { Link, useHistory } from 'react-router-dom';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    height: 100vh;
    z-index: 9999;
    background: #f3f2ef;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Logo = styled.h2`
    color: #0a66c2;
    font-size: 40px;
    text-align: center;
    margin-top: 1rem;
    font-weight: 600;
`;


const useStyles = makeStyles(theme=>({
    cont: {
        paddingTop: 50
    },
    logo: {
        fontSize: '2.7rem',
        position: 'relative',
        top: -4
    },
    text: {
        fontSize: '2rem',
        textAlign: 'center'
    }
}));

export interface IRegister {
    firstName: string;
    lastName: string;
    emailId: string;
    password: string;
}

const initData: IRegister = {
    firstName: '',
    lastName: '',
    emailId: '',
    password: ''
}

export default function Register () {

    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch();
    const isAuth = useSelector((state: State)=> state.user.isAuth);

    //  const isAuth = useSelector((state) => state.user.isAuth) 
    const [ user, setUser ] = useState<IRegister>(initData)
    const [ showName, setShowName ] = useState<boolean>(false);

    const handleShowName: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        setShowName(true);
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e)=> {
        const { name, value } = e.target;
        const payload: IRegister = {
            ...user,
            [name]: value
        };
        setUser(payload);
    };

    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = ()=>{
        console.log(user)
        history.push("/payment-page");
        dispatch(registerUser(user));
    }

    // if(isAuth){
    //     history.push('/')
    // }
    
    return (
        <Container>
            <Box className={classes.cont}>
                <Link to='/' style={{textDecoration:'none', color:'#0a66c2'}}>
                    <Logo>
                        Linked
                        <LinkedInIcon className={classes.logo} />
                    </Logo>
                </Link>
                <Typography className={classes.text}>Make the most of your professional life</Typography>
                {
                    !showName?
                    <RegisterInput handleShowName={handleShowName} handleChange={handleChange} />
                    :
                    <NameInput handleSubmit={handleSubmit} handleChange={handleChange} />
                }
            </Box>
            <Footer />
        </Container>
    )
}
