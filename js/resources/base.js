/*******************************************************************************

    Twitch uBlock - a comprehensive, efficient content blocker
    Copyright (C) 2019-present Gradela

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

export const registeredScriptlets = [];

export const registerScriptlet = (fn, details) => {
    if ( typeof details !== 'object' ) {
        throw new ReferenceError('Missing scriptlet details');
    }
    details.fn = fn;
    fn.details = details;
    if ( Array.isArray(details.dependencies) ) {
        details.dependencies.forEach((fn, i, array) => {
            if ( typeof fn !== 'function' ) { return; }
            array[i] = fn.details.name;
        });
    }
    registeredScriptlets.push(details);
};
