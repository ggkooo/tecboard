import './event-form.css'

import {EventTitle} from "../EventTitle";
import {EventFormField} from "../EventFormField";
import {EventFormFieldLabel} from "../EventFormFieldLabel";
import {EventFormFieldInput} from "../EventFormFieldInput";

export function EventForm() {
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