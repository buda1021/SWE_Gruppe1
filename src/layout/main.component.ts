/*
 * Copyright (C) 2015 - 2016 Juergen Zimmermann, Hochschule Karlsruhe
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import {Component} from '@angular/core'

/**
 * Komponente f&uuml;r den Hauptteil einer Seite mit dem Tag &lt;hs-main&gt;.
 */
@Component({
    selector: 'hs-main',
    template: `
        <main>
            <div class="col col-12">
                <!-- Komponente fuer das Routing, d.h. Platzhalter fuer den -->
                <!-- Austausch der HTML-Templates (= Fragmente) -->
                <router-outlet></router-outlet>
            </div>
        </main>
    `,
    styleUrls: ['./main.scss'],
})
export default class MainComponent {
    constructor() {
        console.log('MainComponent.constructor()')
    }
}
