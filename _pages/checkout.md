---
permalink: /checkout/
title: "Lizenz Kaufen"
layout: single
---
<form action="#" method="post" novalidate>
  <h3>Kaufen Sie ihre Lizenz jetzt!</h3>
  <p><small>Mit <span aria-hidden="true">*</span> markierte Felder sind Pflichtfelder.</small></p>

  <p>
    <label for="name">Name <span aria-hidden="true">*</span><span class="visually-hidden">(Pflichtfeld)</span></label><br>
    <input type="text" id="name" name="name" required autocomplete="name" aria-required="true">
  </p>

  <p>
    <label for="email">E-Mail Adresse <span aria-hidden="true">*</span><span class="visually-hidden">(Pflichtfeld)</span></label><br>
    <input type="email" id="email" name="email" required autocomplete="email" aria-required="true" aria-describedby="email-hint">
  </p>
  <p>
    <label for="phone-number">Telefonnummer <span aria-hidden="true">*</span><span class="visually-hidden">(Pflichtfeld)</span></label><br>
    <input type="tel" id="phone-number" name="phone-number" required autocomplete="tel" aria-required="true" aria-describedby="tel-hint">
  </p>

  <p>
    <label for="payment">Zahlungsdaten<span aria-hidden="true">*</span><span class="visually-hidden">(Pflichtfeld)</span></label><br>
    <textarea id="payment" name="payment" rows="1" required aria-required="true"></textarea>
  </p>

  <p>
    <input type="checkbox" id="privacy" name="privacy" required aria-required="true">
    <label for="privacy">Ich habe die <a href="/privacy_policy/">Datenschutzerklärung</a> gelesen
      und stimme der Verarbeitung meiner Daten zu.
      </label>
  </p>

  <button type="reset" class="btn btn--primary" onclick="alert('Lizenz erfolgreich gekauft! Das Produkt befindet sich in ihrer E-Mail Inbox')">Nachricht senden</button>
</form>