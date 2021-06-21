
// const breakfastMenu = [{heading: 'Roast Chicken', 
//             price: '$20', 
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//         },
//         {heading: 'Roast Chicken', 
//         price: '$20', 
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {heading: 'Roast Chicken', 
//             price: '$20', 
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//         },
//         {heading: 'Roast Chicken', 
//         price: '$20', 
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {heading: 'Roast Chicken', 
//             price: '$20', 
//             description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//         },
//         {heading: 'Roast Chicken', 
//         price: '$20', 
//         description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     ]


const menuLunch = () => {
    const LunchMenu = [{head: 'Roast Chicken', 
    pri: '$20', 
    descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{head: 'Roast Chicken', 
pri: '$20', 
descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{head: 'Roast Chicken', 
    pri: '$20', 
    descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{head: 'Roast Chicken', 
pri: '$20', 
descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{head: 'Roast Chicken', 
    pri: '$20', 
    descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
{head: 'Roast Chicken', 
pri: '$20', 
descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
},
];
const menuSection = document.createElement('div');
menuSection.className = 'section-menu';


    LunchMenu.forEach((x) => {
    const cards = document.createElement('div')
    cards.className ='menu'
    const topy = document.createElement('div')
    topy.className ='menu-item'

    const heading = document.createElement('h5')
    heading.className ='menu-heading-item'
    heading.append(x.head);

    const price = document.createElement('p')
    price.className ='menu-price-item'
    price.append(x.pri);

topy.appendChild(heading)
topy.appendChild(price)

     const description = document.createElement('p');
     description.className = 'text';
     description.append(x.descript);
     
    cards.appendChild(topy);
    cards.appendChild(description);
    menuSection.appendChild(cards);
});


return menuSection;
    
    };

    const menuDinner = () => {
        const LunchMenu = [{head: 'Roast Chicken', 
        pri: '$20', 
        descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {head: 'Roast Chicken', 
    pri: '$20', 
    descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {head: 'Roast Chicken', 
        pri: '$20', 
        descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {head: 'Roast Chicken', 
    pri: '$20', 
    descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {head: 'Roast Chicken', 
        pri: '$20', 
        descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {head: 'Roast Chicken', 
    pri: '$20', 
    descript:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    ];
    const menuSection = document.createElement('div');
    menuSection.className = 'section-menu';
    
    
        LunchMenu.forEach((x) => {
        const cards = document.createElement('div')
        cards.className ='menu'
        const topy = document.createElement('div')
        topy.className ='menu-item'
    
        const heading = document.createElement('h5')
        heading.className ='menu-heading-item'
        heading.append(x.head);
    
        const price = document.createElement('p')
        price.className ='menu-price-item'
        price.append(x.pri);
    
    topy.appendChild(heading)
    topy.appendChild(price)
    
         const description = document.createElement('p');
         description.className = 'text';
         description.append(x.descript);
         
        cards.appendChild(topy);
        cards.appendChild(description);
        menuSection.appendChild(cards);
    });
    
    
    return menuSection;
        };

        const menus  = () => {
            const all = document.createElement('div')
            all.className ='menu-item-large'

            all.appendChild(menuLunch());
            all.appendChild(menuDinner());

            return all;
        };

    export default menus;