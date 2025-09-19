import './App.css'

function EventTitle(props) {
   return (
       <h2>
           {props.children}
       </h2>
   )
}

function EventForm() {
    return (
        <form className="event-form">
            <EventTitle>
                Preencha para criar um evento:
            </EventTitle>
            <fieldset>
                <label htmlFor="event_name">Nome do evento</label>
                <input type="text" name="event_name" placeholder="Summer dev hits"/>
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
