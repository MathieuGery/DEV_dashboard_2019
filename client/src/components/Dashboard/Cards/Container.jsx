import React, {useCallback, useState} from 'react'
import Card from './Card'
import update from 'immutability-helper'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import ClockDashboard from "../services/ClockDashboard";
import WeatherDashboard from "../services/weather/weather";
import AddCardComponent from "./addCardComponent";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
const Container = () => {
    const classes = useStyles();
    {
        let id;
        const [cards, setCards] = useState([
                {
                    id: 1,
                    content: <ClockDashboard/>
                },
                {
                    id: 2,
                    content: <WeatherDashboard city={"lille"}/>,
                },
                {
                    id: 3,
                    content: 'Write README',
                },
                {
                    id: 4,
                    content: <AddCardComponent action={() => setCards(cards.concat({id: id, content: 'zizi'}), id++)}/>
                },
            ],
            id);


        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex];
                setCards(
                    update(cards, {
                        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                    }),
                )
            },
            [cards],
        );
        const renderCard = (card, index) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    content={card.content}
                    moveCard={moveCard}
                />
            )
        };
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {cards.map((card, i) => renderCard(card, i))}
                    {
                        /*<button onClick={() => setCards(cards.concat({id: 8, content: 'zizi'}))}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Connexion
                        </button>*/
                    }

                </Grid>

            </div>
        )
    }
};
export default Container;
