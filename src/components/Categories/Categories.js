import { useState } from 'react'

function Categories() {
    const [activeCategory, setActiveCategory] = useState(0)
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]
    return (
        <div className="categories">
            <ul>
                {/* <li className="active">Все</li>
                <li>Мясные</li>
                <li>Вегетарианская</li>
                <li>Гриль</li>
                <li>Острые</li>
                <li>Закрытые</li> */}
                {categories.map((category, index) => (
                    <li
                        onClick={() => setActiveCategory(index)}
                        className={activeCategory === index ? 'active' : ''}
                        key={index}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
