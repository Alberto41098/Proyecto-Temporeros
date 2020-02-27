import { AbstractControl } from '@angular/forms';
import { TrabajadoresService } from '../servicios/trabajadores.service';
import axios from 'axios';
export function checkEmail(control: AbstractControl): { [key: string]: boolean } {
    axios.post('http://localhost:3300/trabajadores/email', {
        email: control.value
    }).then((response) => {
        if (response.data.length === 1) {
            console.log('encontrado');
            return { existe: false };
        }
    });
    console.log('final');
    return {existe: true};
}
