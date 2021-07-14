import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { postTodoUser } from '../../App/TodoReducer/todoReducer';



function ChatInput() {
const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
 const valueForm = data.value
                    dispatch(postTodoUser(valueForm))
                 reset({})
                }

    return (

        <Container>
            <Input>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("value", { required: true })}
                        type="text" placeholder="Message here..." name="value" />
                    <SentButton> <Sent /></SentButton>
                </form>
            </Input>

        </Container>
    )
}

export default ChatInput


const Container = styled.div`
 padding-left: 28px;
padding-bottom: 28px;
padding-right:40px;
padding-top:10px;
`
const Input = styled.div`   
    border-radius: 5px;
    border:1px solid #8D8D8E;
 
        form {
        align-items: center;
          display: flex;
          padding-left: 20px;

           input{
                        border:none;
                        flex:1;
                        padding:20px 0;
                                &:focus {
                                    outline:none;
                                }
                    }
                }
`
const SentButton = styled.button`
margin-right: 10px;
width: 38px;
height: 38px;
background-color:green;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;
cursor: pointer;
`
const Sent = styled(SendIcon)`
color:white;
`