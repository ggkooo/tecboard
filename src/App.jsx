import './App.css'

function EventTitle(props) {
   return (
       <h2>
           {props.children}
       </h2>
   )
}

function EventFormField({children}) {
    return (
        <fieldset>
            {children}
        </fieldset>
    )
}

function EventFormFieldLabel({children, htmlFor}) {
    return (
        <label htmlFor={htmlFor}>
            {children}
        </label>
    )
}

function EventFormFieldInput(props) {
    return (
        <input {...props} />
    )
}

function EventForm() {
    return (
        <form className="event-form">
            <EventTitle>
                Preencha para criar um evento:
            </EventTitle>
            <EventFormField>
                <EventFormFieldLabel htmlFor="event_name">Qual o nome do evento?</EventFormFieldLabel>
                <EventFormFieldInput type="text" name="event_name" placeholder="Summer dev hits"/>
            </EventFormField>
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
