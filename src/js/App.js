const generatePassword = require('password-generator');
import { Formhandler } from "./Formhandler";


const url = 'http://localhost:3000/generate';

const formHandler = new Formhandler();


/**
 * This file is part of Project Cirus
 *
 * Project Cirus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Project Cirus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Project Cirus. If not, see <http://www.gnu.org/licenses/>.
 */

export class App {

	constructor(){

		// Initiate the password fields
		$('.password').each((i, element) => this.generatePassword(element));

		// Initiate the optional fields
		const togglers = {
			enableMail: 'emailSettings'
		}
		Object.keys(togglers).forEach(key => this.initToggler(key, togglers[key]));

		
		$('#configurationForm').submit(this.handleSubmit);
	}

	generatePassword(element) {
		const length = $(element).data('length') || 20;
		const alphanumeric = $(element).data('alphanumeric') || false;

		let pattern = /[\d\W\w\p]/;

		if(alphanumeric){
			pattern = /[\d\w]/;
		}

		const password = generatePassword(length, false, pattern)
		element.value = password;
	}

	initToggler(handle, content) {
		$(`#${handle}`).change(() => {
			$(`#${content}`).slideToggle();
		});
	}

	handleSubmit(event) {

		formHandler.changeButtons();

		event.preventDefault();

		const data = $(this).serializeArray();

		$.ajax({
			url: url,
			method: 'POST',
			data: data,
		}).done(formHandler.handleResult);
	}

}