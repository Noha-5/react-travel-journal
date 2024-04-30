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
    const secret = import.meta.env.VITE_SOME_SECRET
    return (
        <div>
            <Navbar />
            <main className="main">
                {cards}
            </main>
        </div>
    )
}
