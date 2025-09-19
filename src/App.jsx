import './App.css'

function EventForm() {
    return (
        <form className="event-form">
            <h2>Preencha para criar um evento:</h2>
            <fieldset>
                <label htmlFor="event_name">Nome do evento</label>
                <input type="text" name="event_name" placeholder="Nome do evento"/>
            </fieldset>
        </form>
    )
}

function App() {
  return (
    <main>
        <header>
            <img src="/logo.png" alt=""/>
        </header>
        <section>
            <img src="/banner.png" alt=""/>
        </section>
        <EventForm />
    </main>
  )
}

export default App
