---
permalink: /checkout/
title: "Kaufen Sie ihre Lizenz jetzt!"
layout: single
---
<form action="#" method="post" novalidate>
  <p><small>Mit * markierte Felder sind Pflichtfelder.</small></p>

  <p>
    <label for="name">Name*<span class="visually-hidden"> (Pflichtfeld)</span></label><br>
    <input type="text" id="name" name="name" required autocomplete="name">
  </p>

  <p>
    <label for="adresse">Rechnungsadresse*<span class="visually-hidden"> (Pflichtfeld)</span></label><br>
    <textarea id="adresse" name="adresse" rows="3" required autocomplete="street-address"></textarea>
  </p>

  <p>
    <label for="email">E-Mail Adresse*<span class="visually-hidden"> (Pflichtfeld)</span></label><br>
    <input type="email" id="email" name="email" required autocomplete="email">
  </p>
  <p>
    <label for="telefonnummer">Telefonnummer*<span class="visually-hidden"> (Pflichtfeld)</span></label><br>
    <input type="tel" id="telefonnummer" name="telefonnummer" required autocomplete="tel">
  </p>

  <p>
    <label for="payment">Zahlungsdaten*<span class="visually-hidden"> (Pflichtfeld)</span></label><br>
    <textarea id="payment" name="payment" rows="2" required></textarea>
  </p>

  <p>
    <input type="checkbox" id="privacy" name="privacy" required aria-required="true">
    <label for="privacy">Ich habe die <a href="/privacy_policy/">Datenschutzerklärung</a> gelesen
      und stimme der Verarbeitung meiner Daten zu.
      </label>
  </p>

  <button type="reset" class="btn btn--primary" onclick="alert('Bestellung erfolgreich abgeschlossen! Vielen Dank')">Lizenz Kaufen</button>
</form>

<p><small>
  Bitte beachten: Dieser Checkout Prozess dient nur als Demonstration im Rahmen einer
  Lehrveranstaltung. Es werden keine Daten verarbeitet.
</small></p>