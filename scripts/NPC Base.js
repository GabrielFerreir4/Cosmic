/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* NPC Base
	Map Name (Map ID)
	Extra NPC info.
 */

var status;
 
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
        //print("mode" + mode + "type " + type + " selection" + selection + "\n");
        
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && type > 0) {    // hope types 2 & 3 works as well, as 1 and 4 END CHAT
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;
    
                if(status == 0) {
                        cm.sendOk("Sample text.");
                        cm.dispose();
                }
        }
}

function generateSelectionMenu(array) {     // nice tool for generating a string for the sendSimple functionality
        var menu = "";
        for (var i = 0; i < array.length; i++) {
                menu += "#L" + i + "#" + array[i] + "l\r\n";
        }
        return menu;
}