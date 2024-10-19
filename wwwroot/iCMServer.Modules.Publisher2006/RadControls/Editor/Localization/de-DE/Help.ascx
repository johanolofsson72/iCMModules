<%@ Control Inherits="Telerik.WebControls.EditorDialogControls.BaseDialogControl"%>
<table cellspacing="0" cellpadding="2" border="1" bordercolor="#000000" style="font:normal 10px Arial">
	<tr>
		<td colspan="3" align="middle"><strong>GENERAL KN�PFE</strong></td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Img/ButtonDesign.gif"></td>
		<td>Entwurfknopf - Schaltet r.a.d.editor in Entwurfmodus.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Img/ButtonHtml.gif"></td>
		<td>HTML Knopf - Schaltet r.a.d.editor in HTML Modus.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Img/ButtonPreview.gif"></td>
		<td>Vorschauknopf - Schaltet r.a.d.editor in Vorschaumodus.</td>
		<td>-</td>
	</tr>
	
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ConvertToUpper.gif"></td>
		<td>Das Werkzeug verwandelt den Text von der jetzigen Auswahl zu Gro�buchstaben. Es bewahrt die Elemente wie Bildnisse und Tische (Elemente, die keine Textelemente sind).</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ConvertToLower.gif"></td>
		<td>Das Werkzeug verwandelt den Text von der jetzigen Auswahl zu Kleinbuchstaben. Es bewahrt Elemente wie Bildnisse und Tische (Elemente, die keine Textelemente sind).</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ImageMapDialog.gif"></td>
		<td>Das Werkzeug erlaubt, dass die Verbraucher Bildnissekarten durch Schleppen �ber den Bildnissen schaffen, und schafft dann Gebiete mit verschiedenen Gestalten.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/FontSize.gif"></td>
		<td>Dropdown, der den Verbraucher erlaubt, Schriftartgr��e zur jetzigen Auswahl zu verwenden. Der Schriftartgr��e ist in Bildpunkten gemessen. Der Schriftartgr��e ist nicht gesetzt wie im FontSize Werkzeug (1 zu 7).</td>
		<td>-</td>
	</tr>
	
	
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ToggleScreenMode.gif"></td>
		<td>Umschaltschirmmodus - Schaltet r.a.d.editor in Vollbildmodus.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ToggleTableBorder.gif"></td>
		<td>Zeige/Verstecke Rahmen - Zeigen/Verstecken Sie Rahmen um Tische im Inhaltgebiet.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ModuleManager.gif"></td>
		<td>Modulmanager - Aktiviert /Deaktiviert Moduln von einem drop-down Liste verf�gbarer Moduln.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ToggleDocking.gif"></td>
		<td>Schalten Sie Docken um - Dockt alle schwebenden Werkzeugleisten zu ihren jeweiligen dockenden Gebieten.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/RepeatLastCommand.gif"></td>
		<td>Wiederholen Sie Letzten Befehl - Eine Abk�rzung, um die letzte Handlung zu wiederholen. </td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/FindAndReplace.gif"></td>
		<td>Suchen uns Ersetzen - findet und ersetzt Text im Editor.</td>
		<td>Ctrl+F</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Print.gif"></td>
		<td>Druck-Knopf - druckt den Inhalt des r.a.d.editors oder der gesamten 
			Internetseite.</td>
		<td>Ctrl+P</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Spellcheck.gif"></td>
		<td>Rechtschreibung - startet den Assistenten f�r die Rechtschreibung.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Cut.gif"></td>
		<td>Ausschneide-Knopf - schneidet den markierten Bereich aus und kopiert ihn in die 
			Zwischenablage.</td>
		<td>Ctrl+X</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Copy.gif"></td>
		<td>Kopier-Knopf - kopiert den markierten Bereich in die Zwischenablage.</td>
		<td>Ctrl+C</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Paste.gif"></td>
		<td>Einf�gen-Knopf - f�gt den Inhalt der Zwischenablage in den Editor ein.</td>
		<td>Ctrl+Y</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/PastePlaintext.gif"></td>
		<td>Fugen Sie Standardtext ein Knopf - Fugt Standardtext (keine Formatierung) in den r.a.d.editor.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/PasteFromWord.gif"></td>
		<td>Fugen Sie von Word ein Knopf  - Fugt Inhalt Ein, der von Wort  kopiert wurde und nimmt heraus das Gewebe unfreundliche. </td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/PasteAsHtml.gif"></td>
		<td>F�gen Sie als HTML Knopf - F�gt HTML Code im Inhaltgebiet ein und beh�lt alle HTML Tagen.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Undo.gif"></td>
		<td>R�ckg�ngig-Knopf - macht den letzten Arbeitsschritt r�ckg�ngig.</td>
		<td>Ctrl+Z</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Redo.gif"></td>
		<td>Wiederholen-Knop - wiederholt den letzten Schritt, der r�ckg�ngig gemacht 
			wurde.</td>
		<td>Ctrl+Y</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Sweeper.gif"></td>
		<td>Formatierungs-Knopf - entfernt alle Formatierungen (auch benutzerdefinierte) 
			aus dem Text.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Help.gif"></td>
		<td>Direkthilfe - der Bildschirm den Sie gerade betrachten.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/AboutDialog.gif"></td>
		<td>About Dialog - Zeigt die jetzige Version und die Bef�higungsunterlagen von r.a.d.editor.</td>
		<td>-</td>
	</tr>
	<tr>
		<td colspan="3" align="middle"><strong>Tabellen, Links, Sonderzeichen, Bilder und 
				Medien einf�gen und verwalten</strong></td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ImageManager.gif"></td>
		<td>Bild einf�gen - f�gt ein Bild aus einem vordefinierten Verzeichnis ein.</td>
		<td>Ctrl+G</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ImageMapDialog.gif"></td>
		<td>Bildniskarte - Erlaubt, dass Verbraucher anklickbare Gebiete innerhalb Bildnis definieren.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/AbsolutePosition.gif"></td>
		<td>Absolute Position - legt ie absolute Position eines Objektes fest (frei 
			beweglich).</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertTable.gif"></td>
		<td>Tabelle einf�gen - f�gt eine Tabelle in den r.a.d.editor ein.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ToggleBorders.gif"></td>
		<td>Toggle Table Borders - Toggles borders of all tables within the editor.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertSnippet.gif"></td>
		<td>Code Elemente einf�gen - f�gt vorgefertigte Code Elemente ein.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertFormElement.gif"></td>
		<td>Fugen Sie Formelement ein - Fugt ein Formelement von einem Droop Down Liste mit verfugbaren Elementen Ein.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertDate.gif"></td>
		<td>F�gen Sie Datum Knopf ein - F�gt jetziges Datum Ein. </td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertTime.gif"></td>
		<td>F�gen Sie Zeit der Knopf ein - F�gt jetzige Zeit Ein.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/FlashManager.gif"></td>
		<td>Flash einf�gen - f�gt eine Flash-Animation ein und l��t sie ihre Eigenschaften 
			ver�ndern.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/MediaManager.gif"></td>
		<td>Windows Media einf�gen - f�gt ein Windows Media Objekt (AVI, MPEG, WAV, etc.) 
			ein und l��t sie die Eigenschaften �ndern.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/DocumentManager.gif"></td>
		<td>Dokument einf�gen - f�gt ein Dokument in den Editor ein.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/LinkManager.gif"></td>
		<td>Link erstellen - Macht aus dem ausgew�hlten Text, Nummer oder Bild einen 
			Hyperlink.</td>
		<td>Ctrl+K</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Unlink.gif"></td>
		<td>Link entfernen - entfernt einen Link aus dem gew�hlten Text, Nummer oder Bild.</td>
		<td>Ctrl+Shift+K</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Symbols.gif"></td>
		<td>Sonderzeichen einf�gen - f�gt Sonderzeichen ein.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/LinkManager.gif"></td>
		<td>Benutzerdefinierten Link hinzuf�gen - f�gt einen internen oder externen Link 
			aus einer vorgefertigten Liste hinzu.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/TemplateManager.gif"></td>
		<td>W�hlen Sie HTML Modellrahmen - Verwendet einen HTML Modellrahmen von einer vordefinierten Liste der Modellrahmen.</td>
		<td>-</td>
	</tr>
	<tr>
		<td colspan="3" align="middle"><strong>ERSTELLEN, FORMATIEREN UND BEARBEITEN von 
				ZEICHEN UND LINIEN</strong></td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertParagraph.gif"></td>
		<td>Neues Zeichen einf�gen - f�gt ein neues Zeichen ein.</td>
		<td>
			Ctrl+M<br>
			Ctrl+Enter
		</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Paragraph.gif"></td>
		<td>Standard-Zeichen Auswahlfeld - f�gt Standard-Eigenschaften zu dem ausgw�hlten 
			Text zu.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Outdent.gif"></td>
		<td>Links Ausrichten - richtet Zeichen links aus. (Indent?)</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Indent.gif"></td>
		<td>Rechts ausrichten - richtet Zeichen recht aus.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertHorizontalRule.gif"></td>
		<td>Horizontale Linie (z.B. horizontale Regel?) - f�gt eine horizontale Linie bei 
			dem Cursor ein.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/JustifyLeft.gif"></td>
		<td>Links ausrichten - richtet die ausgew�hlten Zeichen links aus.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/JustifyCenter.gif"></td>
		<td>Mittig ausrichten - richtet die ausgew�hlten Zeichen in der Mitte aus.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/JustifyRight.gif"></td>
		<td>Rechts ausrichten - richtet die ausgew�hlten Zeichen rechts aus.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertOrderedList.gif"></td>
		<td>Numerierte Liste - erstellt aus der Markierung eine numerierte Liste.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/InsertUnorderedList.gif"></td>
		<td>Aufz�hlungszeichen - erstellt aus der Markierung eine Liste mit 
			Ausz�hlungszeichen.</td>
		<td>-</td>
	</tr>
	<tr>
		<td colspan="3" align="middle"><strong>ERSTELLEN, FORMATIEREN UND BEARBEITEN von TEXT, 
				SCHRIFTART und LISTEN</strong></td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Bold.gif"></td>
		<td>Fett - formatiert den markierten Text fett.</td>
		<td>Ctrl+B</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Italic.gif"></td>
		<td>Kursiv - formatiert den markierten Text kursiv.</td>
		<td>Ctrl+I</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Underline.gif"></td>
		<td>Unterstrichen - unterstreicht den markierten Text.</td>
		<td>Ctrl+U</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Superscript.gif"></td>
		<td>Hochgestellt - formatiert Text oder Nummern als hochgestellt.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Subscript.gif"></td>
		<td>Tiefgestellt - formatiert Text oder Nummern als tiefergestellt.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/FontName.gif"></td>
		<td>Schriftart - Schriftart w�hlen.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/FontSize.gif"></td>
		<td>Schriftgr��e - Schriftgr��e �ndern.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/ForeColor.gif"></td>
		<td>Textfarbe (Vordergrund) - �ndert die Vordergrundfarbe des ausgew�hlten Textes.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/BackColor.gif"></td>
		<td>Textfarbe (Hintergrundbild) - �ndert die Hintergrundbild des ausgew�hlten Textes.</td>
		<td>-</td>
	</tr>
	<tr>
		<td align="middle"><img src="<%= this.SkinPath %>Buttons/Class.gif"></td>
		<td>Benutzerdefinierte Formate - f�gt benutzerdefinierte, vordefinierte 
			Formatierungen zum ausgew�hlten Text hinzu.</td>
		<td>-</td>
	</tr>
	<tr>
		<td colspan="3" align="middle"><strong>ANDERE TASTENKOMBINATIONEN</strong></td>
	</tr>
	<tr>
		<td>-</td>
		<td>Markiert den gesamten Text, alle Bilder und Tabellen im Editor</td>
		<td>Ctrl+A</td>
	</tr>
	<tr>
		<td>-</td>
		<td>Findet Text oder Zahlen im aktuellen Dokument.</td>
		<td>Ctrl+F</td>
	</tr>
	<tr>
		<td>-</td>
		<td>Schlie�t das aktive Fenster.</td>
		<td>Ctrl+W</td>
	</tr>
	<tr>
		<td>-</td>
		<td>Schlie�t die aktive Anwendung.</td>
		<td>Ctrl+F4</td>
	</tr>
</table>