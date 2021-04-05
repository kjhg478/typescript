import React, {useState} from 'react';

// type Params = {
//     name: string;
//     description: string;
// }

type MyFormProps = {
    onSubmit: (form: { name: string; description: string; }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });
    // 비 구조화 할당
    const { name, description } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 기본적으로 페이지가 submit 했을 때, 새로고침 하는 것을 막아줌
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">
                등록
            </button>
        </form>
            )
}

export default MyForm;