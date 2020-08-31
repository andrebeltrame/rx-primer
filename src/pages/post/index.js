import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const [produto, setProduto] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        async function fetchProduto(url) {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setProduto(json);
            } catch (erro) {
                setError('Um erro ocorreu');
            } finally {
                setLoading(false);
            }
        }
        fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    }, [id]);

    if (loading) return <div className="loading"></div>;
    if (error) return <p>{error}</p>;
    if (produto === null) return null;
    return (
        <section>
            <div>
                <h1>{produto.nome}</h1>
                <span>R$ {produto.preco}</span>
                <p>{produto.descricao}</p>
            </div>
        </section>
    );
};

export default Post;
