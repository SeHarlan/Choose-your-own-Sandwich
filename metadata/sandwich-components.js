export default {
    breads: {
        name: 'Bread',
        choices: {
            white: {
                id: 'white',
                name: 'White Bread',
                dialog: 'If I must have bread I want it to be made of sugar.',
                result: 'carn'
            },
            potato: {
                id: 'potato',
                name: 'Potato Bread',
                dialog: 'I will take the sweat (and healthy?) bread.',
                result: 'omni'
            },
            rye: {
                id: 'rye',
                name: 'Rye Bread',
                dialog: 'I want Rye for some reason.',
                result: 'omni'
            },
            'lettuce-wrap': {
                id: 'lettuce-wrap',
                name: 'Lettuce Wrap',
                dialog: 'My body is a temple, undefiled by gluten!',
                result: 'veg',
            }
        }
    },
    greens: {
        name: 'Greens',
        choices: {
            spinach: {
                id: 'spinach',
                name: 'Spinach',
                dialog: 'Slap some spinach on that sad sack!',
                result: 'veg'
    
            },
            lettuce: {
                id: 'lettuce',
                name: 'Lettuce',
                dialog: 'Let me lick some lettuce?',
                result: 'omni'
            },
            tomato: {
                id: 'tomato',
                name: 'Tomato',
                dialog: 'Totally a type of green...kinda.',
                result: 'omni'
            },
            'double-meat': {
                id: 'double-meat',
                name: 'Double Meat',
                dialog: 'Me want lots more meat!!!',
                result: 'carn'
            }
        }
    },
    meats: {
        name: 'Meat',
        choices: {
            turkey: {
                id: 'turkey',
                name: 'Turkey',
                dialog: 'Take me to turkey town.',
                result: 'omni'
            },
            ham: {
                id: 'ham',
                name: 'Ham',
                dialog: 'Hand me the ham!',
                result: 'omni'
            },
            bacon: {
                id: 'bacon',
                name: 'Bacon',
                dialog: 'Better be Bacon, as they say...',
                result: 'carn'
            },
            'more-green': {
                id: 'more-green',
                name: 'More Greens',
                dialog: 'I shan\'t taint my stomach, give me the greens.',
                result: 'veg'
            }
        }
    },
};