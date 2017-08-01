import { Component, Input } from '@angular/core';
import { email} from 'emailjs/email.js';

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    fname: '';
    lname: '';
    email: '';
    msg: '';

    ValidateForm(): boolean {
        if (this.fname == undefined || this.lname == undefined || this.msg == undefined) {
            return false;
        }

        if (this.IsMailInvalid()) {
            return false;
        }
        return true;
    }

    IsMailInvalid(): boolean {
        if (this.email == '') {
            return true;
        }
        else {
            return false;
        }
    }

    sendMail(): void {

        if (this.ValidateForm()) {
            console.log(email);
            var server = email.server.connect({
                user: "si107.podrska",
                password: "veleprodaja107",
                host: "smtp.gmail.com",
                ssl: true
            });

            // send the message and get a callback with an error or details of the message that was sent
            server.send({
                text: "i hope this works",
                from: "si107.podrska@gmail.com",
                to: "si107.podrska@gmail.com",
                cc: "",
                subject: "testing emailjs"
            }, function (err, message) { alert(err || message); });

        } else {
            return;
        }


    }

}
