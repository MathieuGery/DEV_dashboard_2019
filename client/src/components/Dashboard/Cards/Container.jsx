import React, {useCallback, useState} from 'react'
import Card from './Card'
import update from 'immutability-helper'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const style = {
    width: 400,
};
const Container = () => {
    const classes = useStyles();
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'biiiite',
            },
            {
                id: 2,
                text: 'Make it generic enough',
            },
            {
                id: 3,
                text: 'Write README',
            },
            {
                id: 4,
                text: 'Create some examples',
            },
            {
                id: 5,
                text:
                    'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
                id: 6,
                text: '???',
            },
            {
                id: 7,
                text: 'PROFIT',
            },
        ]);
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
                    text={card.text}
                    moveCard={moveCard}
                />
            )
        };
        return (
                <div className={classes.root}   container
                     direction="row"
                     justify="center"
                     alignItems="center">
                        <Grid item xs={12}>
                            {cards.map((card, i) => renderCard(card, i))}
                    </Grid>
                </div>
        )
    }
};
export default Container;
