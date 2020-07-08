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

export class Formhandler {
	constructor() {

	}

	changeButtons() {
		$('#btnSubmit').hide();
		$('#btnLoading').show();
	}

	handleResult(response) {

		const $resultModule = $('#result');

		if(response.success){
			const html = $resultModule.html().replace('{{zipPath}}', response.zipPath);

			$('#configurationForm').hide();
			$resultModule.html(html).show();
		}

	}
}