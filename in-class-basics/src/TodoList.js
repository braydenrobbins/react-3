import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Input, list } from 'antd';

// const marginReset = css`
//     margin: o;
//     padding: 0;
// `;


// const Heading = styled.h1`
//     font-size:1.5em;
//     color: $((props) => props.theme.headerBlack);
//     ${marginReset}
//     padding-bottom: .5em;
// `;

// const TodoInput = styled.input`
//     padding: 6px;
//     border: 1px solid $((props) => props.theme.bodyBlack);
//     border-radius: 3px;
//     color: $((props) => props.theme.headerBlack);
//     &:focus {
//         outline: none;
//         border-color: cornflowerblue;
//     }
// `;

// const TodosList = styled.ul`
//     ${marginReset}
//     list-style: none;
// `;

// const TodosListItem = styled.li`
//     ${marginReset}
//     padding: 6px 6px 12px;
//     border-bottom: 1px solid $((props) => props.theme.bodyBlack);
//     color: $((props) => props.theme.headerBlack);
//`;

function TodoList() {

    const state = useStateContext();

    console.log(state);


    return(
        <>
            <h1>To Dos</h1>
            <form>
                <input type='text'/>
            </form>
            <List>
                dataSource={data}
                renderItem={item => <List.Item></List.Item>}
            />
        </>
    )
}

export default TodoList