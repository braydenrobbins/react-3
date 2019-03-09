import styled from 'styled-components';

function getBackgroundColor(props) {
    const { use } = props;

    if(use) {
        return props.theme[use];
    }
    return '#222';
}

const Button = styled.button`
    color: white;
    padding: 12px 8px;
    border: none;
    background-color: ${getBackgroundColor};
    border-radius: 3px;
`;

export default Button;