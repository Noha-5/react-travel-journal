import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(card => {
        return <Card
                    key={card.id}
                    {...card}
               />
    })
    return (
        <div>
            <Navbar />
            <main className="main">
                {cards}
            </main>
        </div>
    )
}