import './scss/app.scss'
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import PizzaBlock from './components/PizzaBlock/PizzaBlock'
import Sort from './components/Sort/Sort'

function App() {
    const pizzas = [
        {
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            name: 'Чизбургер-пицца',
            types: [0, 1],
            sizes: [26, 30, 40],
        },
        {
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            name: 'Чизбургер-пицца',
            types: [0, 1],
            sizes: [26, 30, 40],
        },
        {
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            name: 'Чизбургер-пицца',
            types: [0, 1],
            sizes: [26, 30, 40],
        },
        {
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            name: 'Чизбургер-пицца',
            types: [0, 1],
            sizes: [26, 30, 40],
        },
        {
            image: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg',
            name: 'Чизбургер-пицца',
            types: [0, 1],
            sizes: [26, 30, 40],
        },
    ]
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort></Sort>
                    </div>

                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {pizzas.map((pizza, index) => (
                            <PizzaBlock
                                key={index}
                                name={pizza.name}
                                image={pizza.image}
                                types={pizza.types}
                                sizes={pizza.sizes}
                            ></PizzaBlock>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
