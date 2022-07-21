import styled from 'styled-components';

type ContainerProps ={
   done: boolean;
}


export const Container = styled.div(({ done }: ContainerProps)=>(
`
 display: flex;
 background-color #21212c;
 padding: 10px;
 border-radius: 10px;
 margin-bottom: 10px;
 aling-item: center;

 
 
 input {
    width: 25px;
    heigth: 25px;
    margin-right: 5px;
 }
 
 label{
    color: green;
    text-decoration: ${done ? 'line-through' : 'initial' };
 }
 `
));