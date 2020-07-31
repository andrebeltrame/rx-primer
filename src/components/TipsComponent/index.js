import React, { Component } from 'react';
import axios from 'axios';
import { TrashIcon } from '@primer/octicons-react';
import TipsMainList from './style';
import { Button } from '../ui/Buttons';
const TipsAPI = 'https://raw.githubusercontent.com/andrebeltrame/recipe-json/master/dicas.json';



class TipsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dicas: [],
            isLoading: false,
            error: null,
        };
    }

    async componentDidMount() {
        this.state = {
            dicas: [],
            isLoading: false,
            error: null,
        };

        try {
            const result = await axios.get(TipsAPI);

            this.setState({
                dicas: result.data.dicas,
                isLoading: false
            });
        } catch (error) {
            this.setState({
                error,
                isLoading: false
            });
        }
    }

    render() {

        const { dicas, isLoading, error } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }


        console.log(dicas);

        return (
            <>
                <TipsMainList>
                    {dicas.map((dica, index) =>
                        <li key={index}>
                            <p>{dica.dica}</p>

                            <Button className="btn iconOnly">
                                <TrashIcon size={15} />
                            </Button>
                        </li>
                    )}
                </TipsMainList>

            </>)
    }

}

export default TipsList;
