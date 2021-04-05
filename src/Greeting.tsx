import React from 'react';

type GreetingsProps = {
    name: string;
    // mark?: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void;
    children?: React.ReactNode;
};
// FC라는 것을 이용해서 얻을 수 있는 장점 2가지
// 1. children 이라는 props가 기본적으로 탑재되어 있음
// children은 react.node로 되어있어서 별도로 값을 안넣어줘도 됨
// 2. 자동완성의 기능

// 단점
// defaultProps가 제대로 작동하지 않음

// const Greetings: React.FC<GreetingsProps> = ({ name, mark = '!' }) => {
//     return <div>
//         Hello, {name} { mark }!
//     </div>;
// }
function Greetings({ name, mark, optional, onClick, children }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
    <div>
            Hello, {name} { mark}!
            {optional && <p>{optional}</p>}
            <div>
            <button onClick={handleClick}>
                Click me
            </button>
                </div>
    </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
}

// Greetings.defaultProps = {
//     mark: '!'
// };

export default Greetings;